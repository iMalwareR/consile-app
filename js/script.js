"use strict";

const personalMoviesDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMoviesDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (
      personalMoviesDB.count == "" ||
      personalMoviesDB.count == null ||
      isNaN(personalMoviesDB.count)
    ) {
      personalMoviesDB.count = +prompt(
        "Сколько фильмов вы уже посмотрели?",
        ""
      );
    }
  },
  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      const a = prompt("Один из последних посмотренных фильмов", "");
      const b = prompt("На сколько вы его оцениваете", "");
      if (a !== "" && b !== "" && a !== null && b !== null && a.length <= 50) {
        personalMoviesDB.movies[a] = b;
        console.log("done");
      } else {
        console.log("error");
        i--;
      }
    }
  },
  detectPersonalLevel: function () {
    if (personalMoviesDB.count < 10) {
      console.log("Посмотренно довольно мало фильмов");
    } else if (personalMoviesDB.count >= 10 && personalMoviesDB.count < 30) {
      console.log("Вы классический зритель");
    } else if (personalMoviesDB.count >= 30) {
      console.log("Вы киноман");
    } else {
      console.log("Произошла ошибка");
    }
  },
  sHowMyDB: function () {
    if (personalMoviesDB.privat === false) {
      console.log(personalMoviesDB);
    } else {
      console.log("this privat");
    }
  },
  writeYourGeners: function () {
    for (let i = 1; i <= 3; i++) {
      let ganer = prompt(`Ваш любимый жанр номер ${i}`);

      if (ganer === "" || ganer === null) {
        console.log("Вы ввели некоректные данные");
        i--;
      } else {
        personalMoviesDB.genres[i - 1] = ganer;
      }
    }

    personalMoviesDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр ${i + 1} - это ${item}`);
    });
  },
  toggleVisibleMyDB: function () {
    if (personalMoviesDB.privat === false) {
      personalMoviesDB.privat = true;
    } else {
      personalMoviesDB.privat = false;
    }
  },
};
