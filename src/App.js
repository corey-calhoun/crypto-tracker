import { FormControl, Select } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import './App.css';

// components 

function App() {

  const [country, setInputCountry] = useState("worldwide");
  const [stockInfo, setStockInfo] = useState({});
  const [stocks, setStocks] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [casesType, setCasesType] = useState("cases");
  const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
  const [mapZoom, setMapZoom] = useState(3);



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
