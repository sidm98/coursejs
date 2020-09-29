"use strict";

let numberOfFilms;
let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function start() {
    numberOfFilms = +prompt('Skolko filmov?', '');

    while (isNaN(numberOfFilms) || numberOfFilms < 1 || numberOfFilms % 1 != 0) {
        numberOfFilms = +prompt('Skolko filmov?', '');
    }
    personalMovieDB.count = numberOfFilms;
}



function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('odin iz filmov', ''),
            b = prompt('oceni ego', '');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error try again');
            i--;
        }

    }
}

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('malo');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('norm');
    } else if (personalMovieDB.count >= 30) {
        console.log('mnogo');
    } else {
        console.log('error');
    }
}



function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`vash zhanr pod nomerom ${i}`, '');
    }
}

start();
rememberMyFilms();
detectPersonalLevel();
writeYourGenres();
showMyDB(personalMovieDB.privat);