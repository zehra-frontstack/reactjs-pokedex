import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import { getAllPokemons } from '../../actions/pokemonActions';
import CircularProgress from '@material-ui/core/CircularProgress';
import deepOrange from '@material-ui/core/colors/deepOrange';
import deepPurple from '@material-ui/core/colors/deepPurple';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';

const styles = theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    progress: {
        margin: theme.spacing.unit * 2,
    },
    avatar: {
        margin: 10,
      },
      orangeAvatar: {
        margin: 10,
        color: '#fff',
        backgroundColor: deepOrange[500],
      },
      purpleAvatar: {
        margin: 10,
        color: '#fff',
        backgroundColor: deepPurple[500],
      },
});

class Pokemons extends Component {

  componentDidMount() {
    this.props.getAllPokemons();
  }

  render() {
    const { classes } = this.props;
    const { pokemons, loading } = this.props.pokemon;
    let pokemonItems;

    if (pokemons === null || loading || pokemons.count <= 0) {
        pokemonItems = <ListItem>
        <CircularProgress className={classes.progress} size={50} />
        </ListItem>;
    } else {

      if (pokemons.count > 0) {
        let arr = pokemons.results;  
        pokemonItems = arr.map(pokemon => (

            <ListItem key={pokemon.name}>
                <Avatar className={classes.purpleAvatar}>PO</Avatar>
                <ListItemText >
                    <Button component={Link} to={`/pokemon/${pokemon.name}`}>
                     {pokemon.name}
                    </Button>
                </ListItemText>
            </ListItem>
        ));
      } else {
        pokemonItems = <h4>No pokemons found...</h4>;
      }
    }

    return (
        <div className={classes.root}>
            <List>
            {pokemonItems}
            </List>
        </div>
    );
  }
}

Pokemons.propTypes = {
    getAllPokemons: PropTypes.func.isRequired,
    pokemon: PropTypes.object,
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    pokemon: state.pokemon
  });
  
export default connect(mapStateToProps, { getAllPokemons })(withStyles(styles)(Pokemons));

