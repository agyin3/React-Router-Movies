import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getMovies } from './actions';

class Movies extends Component {
  constructor(props) {
    super(props);
    this.props.getMovies();
  }
  render() {
    return(
      <div className="movies">
        <ul>
          {Object.keys(this.props.movies).forEach((key, i) => {
            return(
              <li>
                <Link to={`/movies/${this.props.movies[key].title}`}> {this.props.movies[key].title} </Link>  
              </li>
              );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  };
};

export default connect(mapStateToProps, { getMovies })(Movies);