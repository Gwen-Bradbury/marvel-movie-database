import React, {ReactElement, ReactNode} from 'react';
import movies from "./../../movies.json";

interface Props {
    selectedCategory: string;
    search: string;
}

interface Movie {
    img: string;
    title: string;
    category: string;
    movieInfo: string;
    starring: string;
}

const MovieCategories = (props: Props, movie: Movie): ReactElement => {
    const getFilters = (): boolean => {
        return (props.selectedCategory === "all" || movie.category === props.selectedCategory) &&
                (props.search === "" || movie.title.toLowerCase().includes(props.search.toLowerCase()));
    }

    const renderMovie = (movie: Movie, index: number): ReactNode => {

        return (
            <div className="movies" key={index}>
                <a><img
                    src={movie.img}
                    alt={movie.title + "'s poster"}
                    className="movie-image"/>
                </a>
                <p>{movie.title}</p>
            </div>
        )
    }

    return (
        <div className="container">
            <header className="App">
                <h3>Movies</h3>
            </header>
            <div className="movie-scroll">
                { movies.filter(getFilters).map(renderMovie) }
            </div>
        </div>
    );
}
export default MovieCategories;