import React, { useState } from "react";
import AWS from "aws-sdk";
import "./UploadDocument.css";

const UploadDocument = () => {
  const [file, setFile] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (selectedFile) {
      console.log("Selected file:", selectedFile);
    }
    // Configure AWS with your credentials
    AWS.config.update({
      accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.REACT_APP_AWS_ACCESS_KEY_SECRET,
      region: process.env.REACT_APP_AWS_REGION,
    });

    const s3 = new AWS.S3();

    // Define params for uploading file to S3
    const params = {
      Bucket: process.env.REACT_APP_AWS_S3_BUCKET,
      Key: file.name,
      Body: file,
    };

    // Upload file to S3 bucket
    try {
      const data = await s3.upload(params).promise();
      console.log("File uploaded successfully:", data.Location);
      // Additional logic: Send the file URL or key to your backend for storage
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div className="upload-container">
      <h2>Upload Documents</h2>
      <label htmlFor="upload-file" className="custom-file-upload">
        Choose File
      </label>
      <input
        type="file"
        id="upload-file"
        onChange={handleFileChange}
        className="upload-input"
      />
      {/* <label htmlFor="upload-file">
        <button className="upload-button">Choose File</button>
      </label> */}
      <button
        className="upload-button upload-submit"
        onClick={handleUpload}
        disabled={!selectedFile}
      >
        Upload
      </button>
    </div>
  );
};

export default UploadDocument;
