import React, {Component} from 'react';
import './App.css';
import Movie from './Movie'

class App extends Component {

  state = {
    greeting: "Hello",
    movies: [
      {
        title: "Matrix",
        poster: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/The_Matrix_Poster.jpg/220px-The_Matrix_Poster.jpg"
      },
      {
        title: "FUll Metal Jacket",
        poster: "https://upload.wikimedia.org/wikipedia/en/9/99/Full_Metal_Jacket_poster.jpg"
      },
      {
        title: "Oldboy",
        poster: "https://upload.wikimedia.org/wikipedia/en/b/bb/Oldboy_2013_film_poster.jpg"
      },
      {
        title: "Star Wars",
        poster: "https://lumiere-a.akamaihd.net/v1/images/star-wars-the-rise-of-skywalker-theatrical-poster-1000_ebc74357.jpeg?region=0%2C0%2C891%2C1372"
      }
    ]
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        movies: [
          ...this.state.movies,
          {
            title: "Trainspotting",
            poster: "https://i.pinimg.com/originals/ef/ac/43/efac437d6a42a6a2552048d81192c21a.jpg"
          }
        ]

      })
    }, 1000)
  }

  render() {
    return (
      <div className = "App">
        {this.state.movies.map((movie, index) => {
          return <Movie title = {movie.title} poster = {movie.poster} key={index} />
        })}
      </div>
    )
  }
}

export default App;
