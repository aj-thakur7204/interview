import React, { useState } from 'react'
import './imgupload.css';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

export default function ImgUpload(props){

    const [fileView, setFileView] = useState("https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg");
    const [btntext, setBtntext] = useState("Edit");
    const [btntype, setBtntype] = useState("file");
    const [btnMode, setBtnMode] = useState("edit");
    const uploadFun = (events) => {
        const reader = new FileReader();
        reader.onload = function(event) {
            setFileView(event.target.result);
        }
        reader.readAsDataURL(events.target.files[0])
        setBtntext("Publish");
        setBtntype("submit");
        setBtnMode("publish")
    }
    const [crop, setCrop] = useState({ aspect: 16 / 6 });

    return(
        <div className={`uno_upload_file `}>
            <div className={`uno_upload_file_img upload_file_${props.uploadFile}`}>
                <ReactCrop src={fileView}  crop={crop} onChange={setCrop} />
            </div>
            <div className={`uno_upload_btn uno_upload_file_${btnMode}`}>
                <input className='uno_upload_input' onChange={uploadFun} type={btntype}  />
                <div id='uno_upload_file_btn_view' className='uno_upload_file_btn_view'>{btntext}</div>
            </div> 
        </div> 
    )
}




