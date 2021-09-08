// Create a Movie class with the following properties: movieName, rating, and yearReleased. Create a method to change the rating and another one to change the yearReleased properties using prompt. Create an instance of the class and use the two methods you created.

class Movie{
    constructor(name, rating, year){
        this.movieName = name;
        this.rating = rating;
        this.yearReleased = year;
    }
}

function main() {
    let movie1 = new Movie('Taken', 4.5, 2008)
    console.log(movie1);
}


// class Movie{
//     constructor(name){
//         this.movieName = name;
// }
// rating;
// yearReleased;
// }
// function main() {
//     let movie1 = new Movie('Taken')
//     movie1.rating = Math.random;
//     movie1.yearReleased = Math.random;
//     console.log(movie1);


main();