const numberOfFilms = prompt("Скільки фільмів ви уже передивились?", "0");

const personalMovieDB = 
{
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

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

if (personalMovieDB.count < 10) {
    alert("Ви переглянули досить мало фільмів.");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert("Ви класичний глядач.");
} else if (personalMovieDB.count >= 30) {
    alert("Ви кіноман!");
} else {
    alert("Сталася помилка!"); 
}

console.log(personalMovieDB);