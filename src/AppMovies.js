import React from "react";
import './MovieCard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home";
import { Switch, Route } from "react-router-dom";
import MovieTrailer from './MovieTrailer';



const AppMovies = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Trailer/:id" component={MovieTrailer} />
        </Switch>
    );
};

export default AppMovies;
