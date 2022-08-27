import React from "react";
import NavbarComponent from "../components/NavbarComponent";
import UploadComponent from "../components/UploadComponent"
import DisplayComponent from "../components/DisplayComponent";

const Main = () =>{
    return(
        <div>
            <NavbarComponent/>
            <UploadComponent/>
            <DisplayComponent/>
        </div>
    )
}

export default Main