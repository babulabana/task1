

import React, { useState } from 'react';

export default function Task3() {
  const [formData, setFormData] = useState({
    spa: '',
    city: '',
    area: '',
    price: '',
    time: '',
    files: [],
  });

  const [allSubmissions, setAllSubmissions] = useState([]);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === 'file') {
      setFormData({ ...formData, files: Array.from(files) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAllSubmissions([...allSubmissions, formData]);

    setFormData({
      spa: '',
      city: '',
      area: '',
      price: '',
      time: '',
      files: [],
    });

    e.target.reset();
  };

  return (
    <div className='flex lg:flex-row flex-col items-center m-20 gap-20'>
      <div className='lg:w-1/2'>
        <form onSubmit={handleSubmit} className='flex flex-col  border-2 p-10 text-xl'>
          <label>Spa name:</label>
          <input type="text" name="spa" placeholder='Enter the Spa name' className='border-2 p-1 mb-5' value={formData.spa} onChange={handleChange} />

          <label>City name:</label>
          <input type="text" name="city" placeholder='Enter the city name' className='border-2 p-1 mb-5'  value={formData.city} onChange={handleChange}/>

          <label>Area name:</label>
          <input type="text" name="area" placeholder='Enter the area name' className='border-2 p-1 mb-5' value={formData.area} onChange={handleChange} />

          <label>Price:</label>
          <input type="number" name="price" placeholder='Enter the price' className='border-2 p-1 mb-5' value={formData.price} onChange={handleChange}  />

          <label>Time:</label>
          <input type="time" name="time" className='border-2 p-1 mb-5'  value={formData.time}  onChange={handleChange}   />

          <label>Upload images:</label>
          <input  type="file" name="file" multiple accept="image/*"  className='border-2 p-1 mb-5' onChange={handleChange} />

          <input type="submit" className='border-2 p-1 w-fit px-5 mx-auto mb-5 cursor-pointer' />
        </form>
      </div>

      <div className='lg:w-1/2 mt-10'>
        <h2 className='text-2xl font-bold mb-5'>All Submissions:</h2>
        {allSubmissions.map((data, index) => (
          <div key={index} className='border-2 p-5 mb-10 rounded'>
           <div className='grid grid-cols-5'> 
              <p><span>Spa Name:</span> {data.spa}</p>
              <p><span>City:</span> {data.city}</p>
              <p><span>Area:</span> {data.area}</p>
              <p><span>Price:</span> {data.price}</p>
              <p><span>Time:</span> {data.time}</p>
            </div>
            <div className='grid grid-cols-5 gap-4 mt-3'>
              {data.files.map((file, i) => (
                <img
                  key={i}
                  src={URL.createObjectURL(file)}
                  alt={`Uploaded ${i}`}
                  className='w-full h-40 object-cover border'
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
