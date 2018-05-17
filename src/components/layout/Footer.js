import React, { Component }  from 'react'
import Paper from 'material-ui/Paper';

const style = {
  height: 50,
  width: "100%",
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

class Footer extends Component {
  render() {
    return (
      <Paper style={style} zDepth={3}>
        Copyright &copy; {new Date().getFullYear()} PokeDex My CustomApp
      </Paper>

    )
  }
}

export default Footer;