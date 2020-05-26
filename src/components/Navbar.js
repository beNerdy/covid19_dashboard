import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';

class NavbarComponent extends Component {
    render(){
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="https://raw.githubusercontent.com/beNerdy/covid19_dashboard/master/src/coronavirus.svg"
                        width="50"
                        height="30"
                        className="d-inline-block align-top"
                    />{'CoronaVirus Pandemic Live Feed '}
                    </Navbar.Brand>
                </Navbar>
            </div>
        )
    }
}


export default NavbarComponent;