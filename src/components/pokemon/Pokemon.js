import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getPokemonById } from '../../actions/pokemonActions';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from 'material-ui/Paper';

const style = {
    height: 50,
    width: "100%",
    margin: 20,
    textAlign: 'center',
    display: 'inline-table',
  };
  
const styles = theme => ({
    card: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    pos: {
        marginBottom: 12,
      },
});

class Pokemon extends Component {

    componentDidMount() {
        if (this.props.match.params.id) {
          this.props.getPokemonById(this.props.match.params.id);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.pokemon.pokemon === null && this.props.pokemon.loading) {
          this.props.history.push('/not-found');
        }
    }
    

    render() {
        const { pokemon, loading } = this.props.pokemon;
        const { classes } = this.props;
        if (pokemon == null || loading) {
            return (<CircularProgress className={classes.progress} size={50} />);
        }
        return (
            <Paper style={style} >
            <Card className={classes.card}>
                <CardMedia
                className={classes.media}
                image={`${pokemon.sprites.front_shiny}`}
                title="Contemplative Reptile"
                />
                <CardContent>
                <Typography gutterBottom variant="headline" component="h2">
                    {pokemon.name}
                </Typography>
                <Typography component="p">
                    Height: {pokemon.height}
                </Typography>
                <Typography component="p">
                    Weight: {pokemon.weight}
                </Typography>
                </CardContent>
                <CardActions>
                <Button size="small" color="primary" component={Link} to={`/pokemons`}>
                     Back
                </Button>
                </CardActions>
            </Card>
            </Paper>
        );
    }
}

Pokemon.propTypes = {
    getPokemonById: PropTypes.func.isRequired,
    pokemon: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
};
  
const mapStateToProps = state => ({
    pokemon: state.pokemon
});

export default connect(mapStateToProps, { getPokemonById })(withStyles(styles)(Pokemon));