"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function () {
        personalMovieDB.count = +prompt('Skolko filmov?', '');

        while (isNaN(personalMovieDB.count) || personalMovieDB.count < 1 || personalMovieDB.count % 1 != 0) {
            personalMovieDB.count = +prompt('Skolko filmov?', '');
        }
        personalMovieDB.count = personalMovieDB.count;
    },

    rememberMyFilms: function () {
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
    },

    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log('malo');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('norm');
        } else if (personalMovieDB.count >= 30) {
            console.log('mnogo');
        } else {
            console.log('error');
        }
    },

    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },

    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },

    writeYourGenres: function () {
        for (let i = 0; i < 1; i++) {
            let genres = prompt(`Vvedite zhanri cherez zapyatuyu`);
            if (genres === '' || genres == null) {
                console.log('nekorr. dannye');
                i--;
            } else {
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`lubimiy zhanr ${i+1} - eto ${item}`);
        });
    }
};




personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB(personalMovieDB.privat);