//import React from 'react'

/* const AGGrid = () => {
  return (
    <div>AgGrid</div>
  )
}

export default AGGrid; */



import React, { useState } from 'react';
import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react';
import { Header } from '../components';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const AGGrid = () => {
   const [rowData] = useState([
       {make: "Toyota", model: "Celica", price: 35000},
       {make: "Ford", model: "Mondeo", price: 32000},
       {make: "Porsche", model: "Boxster", price: 72000}
   ]);
   
   const [columnDefs] = useState([
       { field: 'make' },
       { field: 'model' },
       { field: 'price' },
       { field: 'name' },
       { field: 'overprice' }
   ])

   return (

       <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
           <Header category="Page" title="Customers" />
           <div className="ag-theme-alpine" style={{ height: 400 }}>
               <AgGridReact
                   rowData={rowData}
                   columnDefs={columnDefs}>
               </AgGridReact>
           </div>
       </div>
   );
};
export default AGGrid;