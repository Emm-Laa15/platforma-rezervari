import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CSVUploader = ({ fetchReservations }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const uploadFile = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    console.log(file);
    try {
      const response = await axios.post('/api/reservations/upload', formData);
      console.log(response.data);
      toast.success('File uploaded successfully!'); 
      fetchReservations(); 
    } catch (error) {
      console.error(error);
      toast.error('Failed to upload file.'); 
    }
  };

  return (
    <div>
      <ToastContainer />
      <form onSubmit={uploadFile}>
        <input type="file" accept=".csv" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default CSVUploader;
