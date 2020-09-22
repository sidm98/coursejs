"use strict";

const numberOfFilms = prompt('Skolko filmov?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('odin iz filmov', ''),
    b = prompt('oceni ego', ''),
    c = prompt('odin iz filmov', ''),
    d = prompt('oceni ego', '');

personalMovieDB.movies[a]=b;
personalMovieDB.movies[c]=d;

console.log(personalMovieDB);