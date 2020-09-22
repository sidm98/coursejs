"use strict";

const numberOfFilms = prompt('Skolko filmov?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

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

if (personalMovieDB.count < 10) {
    console.log('malo');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('norm');
} else if (personalMovieDB.count >= 30) {
    console.log('mnogo');
} else console.log('error');
console.log(personalMovieDB);