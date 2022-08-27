import { Dispatch } from "redux";
import AWS from 'aws-sdk';
import { UPLOAD_IMAGE_LOADING, UPLOAD_IMAGE_SUCCESS, UPLOAD_IMAGE_ERRROR } from "../type";

interface setConfig{
  digitalOceanSpaces : string |undefined,
  bucketName : string | undefined
}
interface setBlob{
  name  : string,
  size  : number,
  type  : string
}

const handleUpload = (value : setBlob[] | any[] | null | FileList) => async (dispatch : Dispatch) =>{ 
  try {
    dispatch(uploadImageLoading())
    const Config : setConfig ={
      digitalOceanSpaces: process.env.REACT_APP_S3_API_URL,
      bucketName: process.env.REACT_APP_S3_BUCKET_NAME
    }
    const spacesEndpoint = new AWS.Endpoint(process.env.REACT_APP_S3_BUCKET_ENDPOINT);
    const s3 = new AWS.S3({
    endpoint: spacesEndpoint,
    accessKeyId: process.env.REACT_APP_S3_BUCKET_KEY,
    secretAccessKey: process.env.REACT_APP_S3_BUCKET_SECRET
    });
    let blob : setBlob | any = value
    for(let i=0; i<= blob.length; i++){
      const params = {
         Body: blob[i], 
         Bucket: `${Config.bucketName}`, 
         Key: blob[i].name
      };
     // Sending the file to the Spaces
      await s3.putObject(params)
       .on('build', (request : any) => {
         request.httpRequest.headers.Host = `${Config.digitalOceanSpaces}`;
         request.httpRequest.headers['Content-Length'] = blob[i].size;
         request.httpRequest.headers['Content-Type'] = blob[i].type;
         request.httpRequest.headers['x-amz-acl'] = 'public-read';
      })
      .send((err : any) => {
        if (err) return console.log(err);
        else {
          const imageUrl = `${Config.digitalOceanSpaces}` + blob[i].name
          dispatch(uploadImageSuccess(imageUrl))
        }
      });
    }
  }
  catch (error) {
      // dispatch(uploadImageError(error))
  }
}

const uploadImageLoading = () =>{
  return{
    type : UPLOAD_IMAGE_LOADING,
  }
}

const uploadImageSuccess = (data:string) =>{
  return{
    type : UPLOAD_IMAGE_SUCCESS,
    payload : data,
    status : 'success'
  }
}

const uploadImageError = (err:any) =>{
  return{
    type : UPLOAD_IMAGE_ERRROR,
    payload : err,
    status : 'error'
  }
}

export default handleUpload