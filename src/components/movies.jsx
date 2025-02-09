import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./common/like";

class Movies extends Component {
    state = {
        movies: getMovies()
      } 

    deleteMovie = (movie) => {
        const  movies = this.state.movies.filter( m => m._id !== movie._id );
        this.setState({movies})
    }

    handleLike = (movie) => {
       const movies = [...this.state.movies];
       const index = movies.indexOf(movie);
       movies[index] = {...movies[index]};
       movies[index].liked = !movies[index].liked;
       this.setState({movies});
    }

    render() {
        const { length : count } = this.state.movies;

        if (count === 0)
            return <p>There are no movies in the database.</p>

        return (
            <div className = "p-5">
                <p>Showing {count} movies in the database.</p>
                <table className= "table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Stock</th>
                            <th>Rate</th>
                            <th> </th>
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.movies.map(movie => 
                        <tr key={movie._id}>
                            <td>{movie.title}</td>
                            <td>{movie.genre.name}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <td><Like liked={movie.liked} onClick={()=>this.handleLike(movie)}/></td>
                            <td className="d-flex justify-content-center" onClick={() => this.deleteMovie(movie)}><button className="btn btn-danger center">Delete</button></td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        );
    }
}
 
export default Movies;



