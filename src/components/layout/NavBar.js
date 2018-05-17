import React, { Component } from 'react'
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import { Link } from 'react-router-dom';

class NavBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 1,
    };
  }

  handleChange = (event, index, value) => this.setState({value});
  
  render() {
    return (

      <Toolbar>
        <ToolbarGroup firstChild={true}>
          <DropDownMenu value={this.state.value} onChange={this.handleChange}>
            <MenuItem value={1}>
              <Link to="/">Home</Link>
            </MenuItem>
            <MenuItem value={2}>
              <Link to="/pokemons">My Pokemons</Link>
            </MenuItem>
          </DropDownMenu>
        </ToolbarGroup>
      </Toolbar>

    );
  }
}

export default NavBar;
