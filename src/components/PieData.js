import React,{Component }from 'react';
import Card from 'react-bootstrap/Card';
import {Pie} from 'react-chartjs-2';


class PieData extends Component{
    constructor(props){
        super(props);
       
    }
    render(){
        const styleBg = {backgroundColor:'rgb(14, 28, 47)'}
        return( 
            <Card style={styleBg} text="white">
            <Card.Body>
            <Card.Title >Overall Active cases Vs Recovered Vs Deaths </Card.Title>
            <Pie variant="top"
                options={{
                    responsive:true
                }}
                data={
                    {
                        labels:["Confirmed Active Case","Recovered Cases","Deaths"],
                        datasets:[
                            {
                                label:"xxx",
                                backgroundColor: ["rgb(238, 97, 97)","rgb(37, 124, 40)","rgb(125, 125, 125)"],
                                borderColor:"black",
                                data:[this.props.data.total_confirmed,this.props.data.total_recovered,this.props.data.total_death]
                            }
                        ]
                    }
                }
                height='115'
                width='100'
            />

            </Card.Body>
            <Card.Footer className="" text="white">Change from today: 7,232</Card.Footer>
            </Card>
        )
    }

}
export default PieData;

