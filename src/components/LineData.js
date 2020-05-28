import React,{Component }from 'react';
import Card from 'react-bootstrap/Card';
import {Line} from 'react-chartjs-2';
import axios from 'axios';


class LineData extends Component{
    constructor(props){
        super(props);
        this.state={
            data:[],
            labels:[],
            nationLabel:"",
            payload:[],
            confirmed:[],
            recovered:[],
            death:[]
        }
       
    }
    componentDidMount(){
        axios.get('https://2019ncov-api.now.sh/api/cases').then(Response=>{
            this.setState({
                payload:Response
            })
            var date = new Date();
            var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
            var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
            firstDay = Date.parse(firstDay)/1000;
            
            
            this.state.payload.data.data.map((d,i)=>{
                var str = "Province/State";
                if(d[str]=="India"){
                    d.dates.map((r,j)=>{
                        if((Date.parse(r.date)/1000)>=firstDay){
                            if(r.death>0){
                                this.state.labels.push(r.date);
                                this.state.confirmed.push(r.confirmed);
                                this.state.recovered.push(r.recovered);
                                this.state.death.push(r.death);
                                
                            }
                        }
                    })
                    this.setState({
                        nationLabel:d[str]
                    });
                }
            })
            this.setState({
                data:{
                    labels:this.state.labels,
                    datasets:[
                        {
                            label:"Confirmed Case",
                            backgroundColor:"rgb(238, 97, 97)",
                            borderColor:"black",
                            data:this.state.confirmed
                        },
                        {
                            label:"Recovered",
                            backgroundColor:"rgb(37, 124, 40)",
                            borderColor:"black",
                            data:this.state.recovered
                        },
                        {
                            label:"death",
                            backgroundColor:"rgb(125, 125, 125)",
                            borderColor:"black",
                            data:this.state.death
                        }
                    ]
                }
            }); 
            

        });
    }

    render(){
        const styleBg = {backgroundColor:'rgb(14, 28, 47)'}
        return(
            <Card style={styleBg} text="white">
            <Card.Body>
        <Card.Title >Overall Active cases Vs Recovered Vs Deaths in {this.state.nationLabel}</Card.Title>
            <Line variant="top"
                options={{
                    responsive:true
                }}
                data={this.state.data}
                height="160"
            />

            </Card.Body>
            <Card.Footer className="" text="white">Change from today: 7,232</Card.Footer>
            </Card>
        )
    }

}
export default LineData;

