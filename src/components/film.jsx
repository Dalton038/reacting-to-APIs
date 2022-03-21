import React, { Component } from "react";
import FilmCard from "./filmCard";
import People from "./people";


class Film extends Component {
  constructor(props) {
    super(props);
    this.state = { film: [], loaded: true };
  }

  
  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then(resp => resp.json())
      .then(film => {
        this.setState({ film });
      });
  }
  
  handleClick = () => {
    this.setState({ loaded: !this.state.loaded });
  };

  render() {
   
      if (this.state.loaded === true) {
      return (
        <div className='d-flex flex-column'>
        <img
          src="https://ghibliapi.herokuapp.com/images/logo.svg"
          alt="Created by"
        />
        <button className='w-25' value={this.state.loaded} onClick={this.handleClick}>
          Load People
        </button>
            {this.state.film.map(film => <FilmCard key={film.id} value={film} />)}
          </div>
       
      );
    } else {
      return (
      <div>
      <People />
    </div>
      );
    }
    } 
  };


export default Film;