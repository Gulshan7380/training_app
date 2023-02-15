import React from 'react';

import { Outlet } from 'react-router-dom';
import { Container } from "@mui/material";

const App = () =>{
  return (
    <div>
      <Container className="container" >
        <Outlet/>
      </Container>
      
    </div>
  )
}
 
export default App;