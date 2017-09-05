import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import DrawerSimpleExample from './drawer.js';

import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import logo from './logo.svg';
import './App.css';

import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

const accessToken = "pk.eyJ1IjoiZG9taWZ1bCIsImEiOiJjajZ3YWxwMnExYWtrMzhvM29tN2F6Mnl2In0.URW4KAAH60FcmQLe-0UWQg";

const Map = ReactMapboxGl({
  accessToken
});



function handleTouchTap() {
  alert('onClick triggered on the title component');
}

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>

      <div className="App">
        <div className="App-header">    
          <AppBar
            title={<span >CalPIVS</span>}
            style={{ cursor: 'pointer', backgroundColor: '#303841' }}
            onTitleTouchTap={handleTouchTap}
            iconElementLeft={<IconButton><NavigationClose /></IconButton>}
            iconElementRight={<DrawerSimpleExample />}
          />
        </div>
 
        <Paper style={{height: "90vh",
              width: "90vw"}} zDepth={1} rounded={false}>
          <Map
            style="mapbox://styles/domiful/cj6wampja8ygb2rqfrfsl8uwo"
            containerStyle={{
              height: "88vh",
              width: "88vw"
            }}>
              <Layer
                type="symbol"
                id="marker"
                layout={{ "icon-image": "marker-15" }}>
                <Feature coordinates={[-0.481747846041145, 51.3233379650232]}/>
              </Layer>
          </Map>  
        </Paper>    
      </div>

      </MuiThemeProvider>

    );
  }
}

export default App;
