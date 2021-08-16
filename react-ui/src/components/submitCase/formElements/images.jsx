import { useState } from "react";

const Images = ({ handleChange }) => {

    const [image, setImage] = useState('');

    //posting user uploaded image to Cases table
    const uploadImage = (e) => {
        e.preventDefault()
        const data = new FormData()
        data.append("file", image)
        data.append("upload_preset", "gyb89xkz")
        data.append("cloud_name", "dok0bdrkl")
        fetch("	https://api.cloudinary.com/v1_1/dok0bdrkl/image/upload", {
            method: 'post',
            body: data
        })
        .then(res => res.json())
        .then(data => {
            handleChange(data.url);
            console.log(data.url);
        })
        // .then(setImage(e.target.files[0]))
        .catch(err => console.log(err)) 
    }

    // once user uploads, handleImagesChange sets the image url to image
    const handleImagesChange = e => {
        setImage(e.target.files[0]);
    }
    
    return (
        <div className="form-agencies case-form">
            <label>Image URL</label>
            <input 
                placeholder="Images" 
                htmlFor="images" 
                id="images"
                type="file"
                onChange={handleImagesChange}
            />
            <button
                onClick={uploadImage}
            >
                Upload Image
            </button>
        </div>
    )
}

export default Images;