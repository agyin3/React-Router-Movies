import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchData } from './actions';
import { bindActionCreators } from 'redux';
class Movies extends Component {
  constructor(props) {
    super(props);
    this.props.fetchData();
  }
  render() {
    return(
      <div className="movies">
        <ul>
          {Object.keys(this.props.film).forEach((key, i) => {
            return(
              <li>
                <Link to={`/movies/${this.props.film[key].title}`}> {this.props.film[key].title} </Link>  
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
    film: state.movies,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchFilm: getMovies}, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Movies);
