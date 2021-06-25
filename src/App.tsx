import React from 'react';
import './App.css';
import { FormControlLabel, Checkbox } from '@material-ui/core';
import MyCheckbox from './Components/MyCheckbox';
import MyTitle from './Components/MyTitle';
import MyButton from './Components/MyButton'

function App() {
  return (
    <div className="App">
       <MyTitle value={"Plan"} />
       <hr></hr>
       <MyCheckbox value={'test'} checked={false}/>
       <MyButton value={"xxx"}></MyButton>
    </div>
  );
}

export default App;
