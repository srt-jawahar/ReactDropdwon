import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import dropdownapi from './api/dropdownapi';
import Async, { useAsync } from 'react-select/async';
import AsyncSelect from 'react-select/async';


function App() {
  const [items, setItems] = useState([]);
  const [inputValue, setValue] = useState('');
  const [selectedValue,setSelectedValue] = useState(null);

  const handleInputChange = value => {
    setValue(value);
  };

  const handleChange = value => {
    setSelectedValue(value);
  }

  const fetchData = () => 
  {
    return dropdownapi.get('api/users?page=2').then(result => 
      {
        const res = result.data.data;
        console.log(res);
        return res;
      });
  }

  return (
    <div className='container'>
      <div
      className='row'>
        <div className='col-md-4'>
          <AsyncSelect cacheOptions defaultOptions
              value={selectedValue}
              getOptionLabel={e => e.first_name}
              getOptionValue={e => e.first_name}
              loadOptions={fetchData}
              onInputChange={handleInputChange}
              onChange={handleChange}/>
        </div>
        <div className='col-md-4'></div>
      </div>
    </div>
  );

}


export default App;
