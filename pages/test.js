import React, { useState } from 'react';
import Compressor from 'compressorjs';

export default function Upload() {
  const handleFile = (e) => {
    const content = e.target.result;
    setCompressedFile(content);
    // console.log('file content', content);
    // You can set content in state and show it in render.
  };

  const handleChangeFile = (file) => {
    let fileData = new FileReader();
    fileData.onloadend = handleFile;
    fileData.readAsDataURL(file);
  };

  const [fileName, setFileName] = useState(null);
  const [compressedFile, setCompressedFile] = useState(null);

  const handleCompressedUpload = (e) => {
    const image = e.target.files[0];
    // handleChangeFile(image);
    setFileName(image.name);
    new Compressor(image, {
      quality: 0.6, // 0.6 can also be used, but its not recommended to go below.
      success: (compressedResult) => {
        // compressedResult has the compressed file.
        // Use the compressed file to upload the images to your server.
        setCompressedFile(compressedResult);
        handleChangeFile(compressedResult);
      },
    });
  };

  return (
    <>
      {' '}
      <input
        accept='image/*'
        // accept='image/*,capture=camera'
        // capture='”camera'
        type='file'
        onChange={(event) => handleCompressedUpload(event)}
      />
      <img src={compressedFile} style={{ width: '200px', height: 'auto' }} />
      <a download={fileName} href={compressedFile}>
        Download
      </a>
    </>
  );
}
