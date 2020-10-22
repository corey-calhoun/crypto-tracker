import { FormControl, Select } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import './App.css';

// components 

function App() {
  return (
    <div className="app">
      <div className="app__left">
        <div classNane="app__header">
          <h1>Tracker App</h1>
          <FormControl className="app__dropdown"/>
            <Select 
              variant="outlined"
              value="{}"
              onChange="{}"
            />
        </div>
      </div>

      {/* InfoBox */}
      {/* InfoBox */}
      {/* InfoBox */}

      {/* Table */}
      {/* Graph */}


      {/*Map */}
    </div>
  );
}

export default App;
