import React,{Component }from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import {Line} from 'react-chartjs-2';
import {BsArrowUp} from 'react-icons/bs';
import {BsArrowDown} from 'react-icons/bs';
import PieData from './PieData';
import LineData from './LineData';
import TableData from './TableData';
class MainCards extends Component{
    constructor(props){
        super(props);
        this.state={
            covidData:[],
            chartData:[],
            confirmedCase:0,
            confirmedCaseBy:0,
            activeCase:0,
            deaths:0,
            criticalCase:0,
            recovered:0,
            deathRate:0,
            recoveryRate:0,
            highestConfirmedCaseByCountryName:0,
            highestConfirmedCaseByCountryFigure:0,
            highestRecoveredCaseByCountryName:0,
            highestRecoveredCaseByCountryFigure:0,
            highestCriticalCaseByCountryName:0,
            highestCriticalCaseByCountryFigure:0,
            highestDeathCaseByCountryName:0,
            highestDeathCaseByCountryFigure:0
        }
    }
 
    
    componentDidMount(){
        axios.get('https://2019ncov-api.now.sh/api/cases').then(Response=>{
            var key = "Country/Region";
            var count1 = 0;
            var count2 = 0;
            var count3 = 0;
            var count4 = 0;
            Response.data.data.map((dt,i)=>{
                dt.dates.map((res,j)=>{
                    if(res.confirmed>=count1){
                        this.setState({
                            highestConfirmedCaseByCountryName:dt[key],
                            highestConfirmedCaseByCountryFigure:res.confirmed});
                        count1=res.confirmed;
                    }
                    if(res.death>=count2){
                        this.setState({
                            highestDeathCaseByCountryName:dt[key],
                            highestDeathCaseByCountryFigure:res.death});
                        count2=res.death;
                    }
                    if(res.recovered>=count3){
                        this.setState({
                            highestRecoveredCaseByCountryName:dt[key],
                            highestRecoveredCaseByCountryFigure:res.recovered});
                        count3=res.recovered;
                    }
                    if((res.confirmed-res.recovered)>=count4){
                        this.setState({
                            highestCriticalCaseByCountryName:dt[key],
                            highestCriticalCaseByCountryFigure:res.confirmed-res.recovered});
                        count4=(res.confirmed-res.recovered);
                    }
                })
               
            })
            this.setState({
                covidData:Response.data,
                activeCase:(Response.data.total_confirmed-(Response.data.total_recovered+Response.data.total_death)).toLocaleString(),
                totalConfirmedCases:Response.data.total_confirmed.toLocaleString(),
                criticalCase:(Response.data.total_confirmed-Response.data.total_recovered).toLocaleString(),
                totalDeath:Response.data.total_death.toLocaleString(),
                deathRate:((Response.data.total_death/Response.data.total_confirmed)*100).toFixed(2)+"%",
                recoveryRate:((Response.data.total_recovered/Response.data.total_confirmed)*100).toFixed(2)+"%",
                totalRecovered:Response.data.total_recovered.toLocaleString()
            });
        })
}
    render(){
       const {covidData} = this.state;
       const styleRed = {color:'#EE6161'}
       const styleGreen = {color:'#228B22'}
       const styleBg = {backgroundColor:'rgb(14, 28, 47)'}
        return(
            <div>
               <br></br>
               <Container fluid>
                <Row>
                    <Col>
                    <Card style={styleBg} text="white">
                            <Card.Body>
                            <Card.Title >Confirmed Cases</Card.Title>
                            <Card.Text as="h2">
                            <BsArrowUp  style={styleRed}></BsArrowUp>
                            {this.state.totalConfirmedCases}
                            </Card.Text>
                            </Card.Body>
                        <Card.Footer className="" text="white">Change from Yesterday : {this.state.confirmedCaseBy}</Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                    <Card style={styleBg} text="white">
                            <Card.Body>
                            <Card.Title >Active Cases</Card.Title>
                            <Card.Text as="h2">
                            <BsArrowUp  style={styleRed}></BsArrowUp>
                            {this.state.activeCase}
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer className="" text="white">Change from today: 7,232</Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                    <Card style={styleBg} text="white">
                            <Card.Body>
                            <Card.Title >Death</Card.Title>
                            <Card.Text as="h2">
                            <BsArrowUp  style={styleRed}></BsArrowUp>
                            {this.state.totalDeath}
                            </Card.Text>
                            </Card.Body>
                        <Card.Footer className="" text="white">Change from Yesterday : {this.state.confirmedCaseBy}</Card.Footer>
                        </Card>
                    </Col>
                    
                    <Col>
                    <Card style={styleBg} text="white">
                            <Card.Body>
                            <Card.Title >Critical Cases</Card.Title>
                            <Card.Text as="h2">
                            <BsArrowDown  style={styleGreen}></BsArrowDown>
                            {this.state.criticalCase}
                            </Card.Text>
                            </Card.Body>
                        <Card.Footer className="" text="white">Change from Yesterday : {this.state.confirmedCaseBy}</Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                    <Card style={styleBg} text="white">
                            <Card.Body>
                            <Card.Title >Recovered</Card.Title>
                            <Card.Text as="h2">
                            <BsArrowUp  style={styleGreen}></BsArrowUp>
                            {this.state.totalRecovered}
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer className="" text="white">Change from today: 7,232</Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                    <Card style={styleBg} text="white">
                            <Card.Body>
                            <Card.Title >Death Rate</Card.Title>
                            <Card.Text as="h2">
                            <BsArrowDown  style={styleGreen}></BsArrowDown>
                            {this.state.deathRate}
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer className="" text="white">Change from today: 7,232</Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                    <Card style={styleBg} text="white">
                            <Card.Body>
                            <Card.Title >Recovery Rate</Card.Title>
                            <Card.Text as="h2">
                            <BsArrowUp  style={styleGreen}></BsArrowUp>
                            {this.state.recoveryRate}
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer className="" text="white">Change from today: 7,232</Card.Footer>
                        </Card>
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col>
                    <Card style={styleBg} text="white">
                            <Card.Body>
                            <Card.Title >Country with Higest Confirmed Cases</Card.Title>
                            <h2 as="h3" style={styleRed}>{this.state.highestConfirmedCaseByCountryName}</h2>
                            <h4>{this.state.highestConfirmedCaseByCountryFigure.toLocaleString()}</h4>
                            </Card.Body>
                        </Card>
                        <br></br>
                        <Card style={styleBg} text="white">
                            <Card.Body>
                            <Card.Title >Country with Higest Deaths</Card.Title>
                                <h2 as="h3">{this.state.highestDeathCaseByCountryName}</h2>
                                <h4>{this.state.highestDeathCaseByCountryFigure.toLocaleString()}</h4>
                            </Card.Body>
                        </Card>
                        <br></br>
                        <Card style={styleBg} text="white">
                            <Card.Body>
                            <Card.Title >Country with Higest Recovered Cases</Card.Title>
                                <h2 as="h3" style={styleGreen}>{this.state.highestRecoveredCaseByCountryName}</h2>
                                <h4>{this.state.highestRecoveredCaseByCountryFigure.toLocaleString()}</h4>
                            </Card.Body>
                        </Card>
                        <br></br>
                        <Card style={styleBg} text="white">
                            <Card.Body>
                            <Card.Title >Country with Higest Critical Cases</Card.Title>
                           
                                <h2 as="h3">{this.state.highestCriticalCaseByCountryName}</h2>
                                <h4>{this.state.highestCriticalCaseByCountryFigure.toLocaleString()}</h4>
                                
                            </Card.Body>
                        </Card>
                        

                    </Col>
                    <Col>
                    <PieData data={this.state.covidData}></PieData>
                    </Col>
                    <Col xs={6}>  
                       
                            <LineData data={this.state.covidData}></LineData>
                           </Col>
                </Row>
                <TableData></TableData>
                </Container>
            </div>
        )
    }
}

export default MainCards;