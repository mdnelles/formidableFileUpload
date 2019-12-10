import React, { useState, useEffect } from "react";
import { upload } from './functions/incl'

import './App.css';

const App = () => {

  const onClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    upload().then(res => {
      console.log('upload complete')
      console.log(res)
    })
  }

  return (
    <div className="App">

      <form  encType="multipart/form-data" method="post">
        <input type="text" name="title" /><br />
        <input type="file" id="file" multiple="multiple" /><br />
        <input type="submit" value="Upload" onClick={onClick}/>
      </form>

    </div>
  );
}

export default App;
