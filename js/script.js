"use strict";

const personalMovieDB = 
{
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function() {
        do {
            personalMovieDB.count = prompt("Скільки фільмів ви уже передивились?", "");
        } while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count || personalMovieDB.count < 0));
    },

    rememberMyFilms: function() {
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
    },

    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
        return "Ви переглянули досить мало фільмів.";
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            return "Ви класичний глядач.";
        } else if (personalMovieDB.count >= 30) {
            return "Ви кіноман!";
        } else {
            return "Сталася помилка!";
        }
    },

    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },

    writeYourGenres: function() {
        for (let i = 0; i < 3; i++) {
            const genre = prompt(`Ваш улюблений жанр під номером ${i + 1}`, "");

            if (genre != null && genre !== "") {
                personalMovieDB.genres[i] = genre;
            } else {
                alert("Ви ввели некоректні дані. Спробуйте ще раз.");
                i--;
            }
        }

        console.log("Ваші улюблені жанри:");
        personalMovieDB.genres.forEach((item, index) => {console.log(`Улюблений жанр №${index + 1} - це ${item}`);});
    },

    toggleVisibleMyDB: function() {
        personalMovieDB.privat = !personalMovieDB.privat;
    }
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
let personalLVL = personalMovieDB.detectPersonalLevel();
console.log(personalLVL);
console.log(personalMovieDB);
personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();
console.log(personalMovieDB);