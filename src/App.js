import Navbar from './components/Navbar';
import React, {useState, useEffect} from "react";
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Customize from './components/Customize';
import Order from './components/Order';
import Dropdown from './components/Dropdown';
import StripContainer from './components/StripContainer';





function App() {
  const [isOpen, setIsOpen]= useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  };

  useEffect(() =>{
    const hideMenu =()=>{
      if(window.innerWidth > 768 && isOpen){
        setIsOpen(false)
      }
    }
    window.addEventListener('resize', hideMenu);

    return() => {
      window.removeEventListener('resize', hideMenu)
    };

  });

  return (
    <>
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/customize' component={Customize} />
        <Route path='/order' component={Order} />
        <Route path='/payment' component={StripContainer} />
      </Switch>
    </>
  );
}

export default App;
