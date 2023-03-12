// import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
// import { Button } from "@material-ui/core";
import Navbar from './components/navbar';
import MyCard from './components/myCard';
import { getMatches } from './api/api';
// import { useEffect } from 'react';

function App() {
     
  const[matches,setMatches]=useState([]);
  useEffect(()=>{
    getMatches()
      .then((data)=> setMatches(data.matches))
      .catch((error)=>alert("could not load data"));
      // console.log(data.matches);
  },[]);

  return (
    <div className="App">
      <Navbar/>
      <h1>welcome to my live score app</h1>
      {matches.map((match)=>(
 <MyCard match="match" />
      ))}
    </div>
  );
}

export default App;
