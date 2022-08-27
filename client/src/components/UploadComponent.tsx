import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import { useDispatch } from "react-redux";
import handleUpload from "../redux/action/uploadAction";


const UploadComponent = () =>{
    let [images, setImage] = useState< any | File>([])
    const dispatch : any = useDispatch()
    
    const uploadImage = () =>{
        return dispatch( handleUpload(images))
    }

    return(
        <Form.Group className="mb-3 w-50 m-auto mt-5">
            <Form.Label htmlFor="fileUpload" className="fw-bolder fs-5 mb-4">Multiple files input</Form.Label>
            <input className="form-control" type='file' id="fileUpload" onChange={e =>setImage([...images,e.target.files?.[0]])} multiple/>
            <ul className="mt-4">
                {images?images.map((e:any | string,i:number) =>
                    <li key={i} style={{listStyle:'none'}}>{e.name} <hr/></li>
                ):null}
            </ul>
            <button className="btn btn-info w-50 mt-5 fw-bold text-light" onClick={()=>uploadImage()}>Upload</button>
        </Form.Group>
    )
}

export default UploadComponent