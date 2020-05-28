import React, { Component } from 'react';
import NavbarComponent from './Navbar';
import MainCards from './MainCards';



class Dashboard extends Component{
    render(){
        return (
         <div>
             <NavbarComponent></NavbarComponent>
             <MainCards></MainCards>
         </div>
       
           
        )
    }
}



export  default Dashboard;