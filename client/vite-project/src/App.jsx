
import './App.css'
import { useState, useEffect } from 'react';
import axios from 'axios';


function App() {

    //Hämta data
    const [data, setData] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:8800/persons/')
        .then(response => {
          setData(response.data);
        })
        .catch(() => {
          // handle error
        });
    }, []);






    //Posta data
    const [formData, setFormData] = useState({
        FirstName: '',
        LastName: '',
        Address: '',
        City: ''
      });

      const handleChange = (event) => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value
        });
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8800/persons/submit-form', formData)
          .then(() => {
            // handle success
          })
          .catch(() => {
            // handle error
          });
      };


  return (
    <>
      <div>
      <form onSubmit={handleSubmit}>
      <label>
        FirstName:
        <input type="text" name="FirstName" onChange={handleChange} />
      </label>
      <br />
      <label>
        LastName:
        <input type="text" name="LastName" onChange={handleChange} />
      </label>
      <br />
      <label>
        Adress:
        <input type="text" name="Address" onChange={handleChange} />
      </label>
      <br />
      <label>
        City:
        <input type="text" name="City" onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>

        {data.map(item => (
          <div key={item.id}>
            <p>{item.lastname} {item.firstname}</p>
            </div>
        ))}

    </div>
    </>
  )
  }

export default App
