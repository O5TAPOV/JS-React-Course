"use strict";

let numberOfFilms;

function start() {
    do {
        numberOfFilms = prompt("Скільки фільмів ви уже передивились?", "");
    } while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms));
}

start();

const personalMovieDB = 
{
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const lastWatchedFilm = prompt("Один з останніх переглянутих фільмів?", ""),
              lastFilmRating = prompt("На скільки ви оцінюєте його?", "");

        if (lastWatchedFilm != null && lastFilmRating != null && lastWatchedFilm !== "" && lastFilmRating !== "" && lastWatchedFilm.length < 50) {
            personalMovieDB.movies[lastWatchedFilm] = lastFilmRating;
            alert("Дякуємо за відповідь!");
        } else {
            alert("Помилка! Спробуйте ще раз.");
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        return "Ви переглянули досить мало фільмів.";
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        return "Ви класичний глядач.";
    } else if (personalMovieDB.count >= 30) {
        return "Ви кіноман!";
    } else {
        return "Сталася помилка!";
    }
}

detectPersonalLevel();

console.log(personalMovieDB);

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for(let i = 0; i < 3; i++) {
        const genre = prompt(`Ваш улюблений жанр під номером ${i + 1}`, "");

        if (genre != null && genre !== "") {
            personalMovieDB.genres[i] = genre;
        } else {
            alert("Ви ввели некоректні дані. Спробуйте ще раз.");
            i--;
        }
    }
}

writeYourGenres();