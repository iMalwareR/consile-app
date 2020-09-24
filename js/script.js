const numberOffilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMoviesDB = {
    count: numberOffilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const a = prompt('Один из последних посмотренных фильмов', '');
const b = prompt('На сколько вы его оцениваете', '');
const c = prompt('Один из последних посмотренных фильмов', '');
const d = prompt('На сколько вы его оцениваете', '');

personalMoviesDB.movies[a] = b;
personalMoviesDB.movies[c] = d;

console.log(personalMoviesDB);