"use strict";

let numberOffilms;

function start() {
  numberOffilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

  while (numberOffilms == "" || numberOffilms == null || isNaN(numberOffilms)) {
    numberOffilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}

start();

const personalMoviesDB = {
  count: numberOffilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
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
}

rememberMyFilms();

function detectPersonalLevel() {
  if (personalMoviesDB.count < 10) {
    console.log("Посмотренно довольно мало фильмов");
  } else if (personalMoviesDB.count >= 10 && personalMoviesDB.count < 30) {
    console.log("Вы классический зритель");
  } else if (personalMoviesDB.count >= 30) {
    console.log("Вы киноман");
  } else {
    console.log("Произошла ошибка");
  }
}

detectPersonalLevel();

function sHowMyDB() {
  if (personalMoviesDB.privat === false) {
    console.log(personalMoviesDB);
  } else {
    console.log("this privat");
  }
}

function writeYourGeners() {
  for (let i = 1; i <= 3; i++) {
    const ganer = prompt(`Ваш любимый жанр номер ${i}`);
    personalMoviesDB.genres[i - 1] = ganer;
  }
}

writeYourGeners();
sHowMyDB();
