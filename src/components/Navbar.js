import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
const options = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];

class NavbarComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedOption: options[0] // default selected value
        };
      }
    
      handleSelect(eventKey, event) {
        this.setState({ selectedOption: options[eventKey] });
      }
    render(){
        const styleBg = {backgroundColor:'rgb(14, 28, 47)'}
        return (
            <div>
                <Navbar style={styleBg} variant="dark">
                    <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="https://raw.githubusercontent.com/beNerdy/covid19_dashboard/master/src/coronavirus.svg"
                        width="50"
                        height="30"
                        className="d-inline-block align-top"
                    />{'CoronaVirus Pandemic Live Feed '}
                    </Navbar.Brand>
                    <DropdownButton
                        title={this.state.selectedOption}
                        id="document-type"
                        onSelect={this.handleSelect.bind(this)}
                    >
                        {options.map((opt, i) => (
                        <Dropdown.Item key={i} eventKey={i}>
                            {opt}
                        </Dropdown.Item>
                        ))}
                    </DropdownButton>
                    
                </Navbar>
                
            </div>
        )
    }
}


export default NavbarComponent;