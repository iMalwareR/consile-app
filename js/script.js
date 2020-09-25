"use strict";

const numberOffilms = prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMoviesDB = {
    count: numberOffilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних посмотренных фильмов', '');
    const b = prompt('На сколько вы его оцениваете', '');

    if (a !== '' && b !== '' && a !== null && b !== null && a.length <= 50) {
        personalMoviesDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

if (personalMoviesDB.count < 10) {
    console.log('Посмотренно довольно мало фильмов');
} else if (personalMoviesDB.count >= 10 && personalMoviesDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalMoviesDB.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}

console.log(personalMoviesDB);