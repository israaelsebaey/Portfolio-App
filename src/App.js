import React, { useState } from "react";
import ParticlesBackground from './components/particlesBackground';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import { dataList } from './components/Data/Data'
import { useEffect } from "react";
import Connect from "./components/Connect/Contact";
import Subscribe from "./components/Subscribe/Subscribe";
import Footer from "./components/Footer/Footer";

function App() {
  const [data,setData]=useState([]);
   useEffect(()=>{
      setData(dataList)
   },[])
  const filterData=(category)=>{
    if(category==='all'){
      setData(dataList)
    }
    else{
      const newArr=dataList.filter(item=>item.category===category);
      setData(newArr);
    }
  }
  return (
    <div>
      <ParticlesBackground/>
      <Header/>
      <Home/>
      <Skills/>
      <Projects data={data} filterData={filterData}/>
      <Connect/>
      <Subscribe/>
      <Footer/>
    </div>
  );
}
export default App;
