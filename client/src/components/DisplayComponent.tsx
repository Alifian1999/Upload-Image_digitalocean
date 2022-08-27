import React, {useState,useEffect} from "react";
import { useAppSelector } from "../redux/hooksConfig";

const DisplayComponent = () =>{
    const selector = useAppSelector(state => state.uploadReducer)
    let [tes,setTes] = useState<string[]>([])
    let images = selector.payload

    useEffect(()=>{
    if(images !== undefined ){
    setTes([...tes,images])
    }
    
    },[images])

    
    return(
        <div className="d-flex justify-content-center mb-5">
            {tes?tes.map((e,i) =>
                <div key={i} style={{boxShadow:'0 0 4px 0px black', height:'100%', width:'300px'}} className="m-3 p-3 d-flex flex-column rounded">
                    <img style={{width:'120px'}} src={e} alt="" className="m-auto mb-4"/>
                    <span style={{fontSize:'10px', minWidth:'50%'}}>{e}</span>
                </div>
            ):null}
        </div>
    )
}

export default DisplayComponent