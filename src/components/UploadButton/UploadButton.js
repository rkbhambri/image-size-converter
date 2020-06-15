import React from 'react';

const UploadButton = (props) => {
    return (
        <div>
            <h2>Click on the button below to upload image</h2>
            <label htmlFor="file-input">
                <span className="upload-button">Upload Image</span>
            </label>
            <input
                id="file-input"
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={(event) => props.compress(event)} /><br />
        </div>
    );
};

export default UploadButton;
