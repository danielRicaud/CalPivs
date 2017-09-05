import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';



export default class DrawerSimpleExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

 

  render() {
    return (
      <div>
        <RaisedButton
          label="Schedule Visitation"
          onClick={this.handleToggle}
        />
        <Drawer open={this.state.open} containerStyle={{ backgroundColor: '#303841' }} >
          <MenuItem style={{  }}>Friend/Family Search Info</MenuItem>

          <MenuItem>
            <TextField
              hintText="Search by First Name"
              floatingLabelText="First Name"
              floatingLabelStyle={{ color: 'white' }}
            />
          </MenuItem>
          <MenuItem>
            <TextField
              hintText="Search by Last Name"
              floatingLabelText="Last Name"
              floatingLabelStyle={{ color: 'white' }}
            />
          </MenuItem>
          <MenuItem>
            <TextField
              hintText="Search by Facility Name"
              floatingLabelText="Facility Name"
              floatingLabelStyle={{ color: 'white' }}
            />
          </MenuItem>

          <MenuItem>
            <RaisedButton label="Search Inmate" primary={true} style={{  }}  />
          </MenuItem>

          <Divider />

          <MenuItem>
            Search Results
          </MenuItem>

          <MenuItem>
            <div>
              <ul>
                <li><h1>Hello</h1></li>
              </ul>
            </div>
          </MenuItem>

        </Drawer>
      </div>
    );
  }
}