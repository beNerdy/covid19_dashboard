import React, { Component } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button'
import NavbarComponent from './Navbar';



class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state = {
            name : "dummy",
            subscribers : 100,
            covidData:[]
        };
    }


    componentDidMount(){
            axios.get('https://2019ncov-api.now.sh/api/cases').then(Response=>{
                this.state.data = Response;
                console.log(this.state.data)
            })
    }

    subscribe(){
        this.setState((state,props)=>({
            name:props.name + " has been subscribed",
            subscribers:state.subscribers+1
        }),
        ()=>{
            console.log("Name and Total subscribers :", this.state.subscribers,this.state.name)
        });
    }
    render(){
        const {name} = this.props
        return (
         <div>
             <NavbarComponent></NavbarComponent>
              <h2> {name}</h2>
        <Button variant="primary" onClick={()=>this.subscribe()}>Subscribe {this.state.subscribers}</Button>
         </div>
       
           
        )
    }
}



export  default Dashboard;