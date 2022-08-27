import { UPLOAD_IMAGE_LOADING, UPLOAD_IMAGE_SUCCESS, UPLOAD_IMAGE_ERRROR } from "../type";

interface setInitialState{
    value : string,
    status : boolean,
}

interface setActionUploadImage{
    status : string,
    payload : string,
    type : string
}

const initialState : setInitialState ={
    value : '',
    status : true,
}

const uploadReducer = (state = initialState, action:setActionUploadImage) =>{
    switch (action.type) {
        case UPLOAD_IMAGE_LOADING :
            return{
                status : action.status,
            }
        case UPLOAD_IMAGE_SUCCESS :
            return{
                status : action.status,
                payload : action.payload
            }
        case UPLOAD_IMAGE_ERRROR :
            return{
                status : action.status,
                payload : action.payload
            }
            
        default:
            return state
    }
}

export default uploadReducer