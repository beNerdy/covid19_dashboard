import React, {Component} from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';


class TableData extends Component{
    constructor(props){
        super(props);
        this.state={
            payload:[]
        }
       
    }
    componentDidMount(){
        axios.get('https://2019ncov-api.now.sh/api/cases').then(Response=>{
            this.setState({
                payload:Response.data.data
            })
            var date = new Date();
            var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
            var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
            firstDay = Date.parse(firstDay)/1000;
            
        })
    }
    compareDates(date){
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0')-1;
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = mm  + dd  + yyyy;

        var a = new Date(date);
        var b = String(a.getDate()).padStart(2, '0');
        var c = String(a.getMonth() + 1).padStart(2, '0'); //January is 0!
        var d = a.getFullYear();
        a = c  + b  + d;
        var flag = false;
        if(mm==c&&yyyy==d){
            flag = true;
        }else{
            flag=false;
        }

        if(b==dd){
            flag=true;
        }else{
            flag=false;
        }
        if(flag==true){
            return(true);
        }
        else{
            return (false);
        }


        
    }
    deathCount(data){
        var death = 0;
        var len = data.length-1;
        data.map((item,i)=>{
            if(len==i){
                death=item["death"]
            }else{
                death=0;
            }
            
          })
          return (death)
    }
    recoveryCount(data){
        var recovery = 0;
        var len = data.length-1;
        data.map((item,i)=>{
            if(len==i){
                recovery=item["recovered"]
            }else{
                recovery=0;
            }
            
          })
          return (recovery)
    }
    confirmCount(data){
        var confirm = 0;
        var len = data.length-1;
        data.map((item,i)=>{
            if(len==i){
            confirm=item["confirmed"]
            }
            else{
                confirm=0;
            }
          })
          return (confirm)
    }
    render(){
        const styleBg = {backgroundColor:'rgb(14, 28, 47)'}
        const data = this.state.payload
        const display = data.map((item, i) => {
                return(
                    <tbody>
                        <tr>
                        <td>{item["Country/Region"]}</td>
                        <td>{item["Lat"]}</td>
                        <td>{item["Long"]}</td>
                        <td>{this.confirmCount(item["dates"])}</td>
                        <td>{this.recoveryCount(item["dates"])}</td>
                        <td>{this.deathCount(item["dates"])}</td>
                    
                        </tr>
                    </tbody>
                )
           })
                
        
        
        return(
         <div>
             <br></br>
             <Table striped bordered hover variant="dark" style={styleBg}>
                <thead>
                    <tr>
                    <th>Country</th>
                    <th>Latitude</th>
                    <th>Longitude</th>
                    <th>Confirm Cases</th>
                    <th>Recovered Cases</th>
                    <th>Death Cases</th>
                    </tr>
                </thead>
                {
                    display
                  
                }
            </Table>
         </div>
        )
    }

}
export default TableData;
