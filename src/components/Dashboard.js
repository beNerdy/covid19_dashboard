import React, { Component } from 'react';
import NavbarComponent from './Navbar';
import MainCards from './MainCards';
import Spinner from 'react-bootstrap/Spinner';


class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state={
            spinner:"block",
            data:"none"
        }
    }
    setProgress(parm){
        if(parm==true){
            this.setState({
                spinner:"none",
                data:"block"
            });
        }else{
            this.setState({
                spinner:"block",
                data:"none"
            });
        }

    }
    render(){
        const style = {height:'5px'}
        const visibility = {display:this.state.spinner}
        const hidden = {display:this.state.data}
        return (
         <div>
            <NavbarComponent ></NavbarComponent>
            <div style={visibility}>
                <Spinner animation="border" role="status" variant="danger">
                    <span className="sr-only">Loading...</span>
                </Spinner>
             </div>
             <div style={hidden}>
                <MainCards progress={this.setProgress.bind(this)} ></MainCards>
             </div>
             
         </div>    
        )
    }
}



export  default Dashboard;