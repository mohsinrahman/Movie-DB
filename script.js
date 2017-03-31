//
// Construction Function
function Movie(title, year, genre, ratings){
    this.title = title;
    this.year = year;
    this.genre = genre;
    this.ratings = ratings;
 
}

var Movie1 = new Movie("The Lobster", 2015, [ "Comedy", "Drama", "Romance", "Sci-Fi", "Thrill"], [7, 10, 1, 10]);
var Movie2 = new Movie("Gladiater", 2010, [ "Drama", "Action", "Romance", "Sci-Fi"], [2, 4, 9, 9, 5]);
var Movie3 = new Movie("The Lion", 2010, [ "Thrill", "Drama", "Romance", "Sci-Fi"], [8, 9, 9, 5]);
var Movie4 = new Movie("War", 2000, [ "Action", "Comedy", "Romance", "Sci-Fi", "xyz"], [0, 10, 5, 10]);

function ShowMovieList(){

	this.movies = [];

}
   // Add movies in list
  ShowMovieList.prototype.add = function(movie){
    this.movies.push(movie);
    
}

  // Search movies by year
  ShowMovieList.prototype.getMoviesByYear= function(year){
     let sortedMovies =  [] ;
     document.getElementById("resultList").innerHTML = "";
        
       for(let i=0; i<this.movies.length; i++){
        if(this.movies[i].year == year){
         // console.log(this.movies[i].year);
          sortedMovies.push(this.movies[i]);
          console.log(sortedMovies);
                      
        }  
     }
       moviesResult(sortedMovies);

       if(sortedMovies.length == 0){   
        console.log(" Please enter year");
    }
  }
      // Search movies by Grnre
  ShowMovieList.prototype.getMoviesByGenre = function(gen){
     let sortedMovies = [];
     document.getElementById("resultList").innerHTML = "";

        for(let i in this.movies){
           let ul = document.getElementById("resultList");
           //console.log(this.movies[i].genre.length);
           for(let j = 0; j<this.movies[i].genre.length; j++){
               //console.log(this.movies[i].genre[j]);
               if(this.movies[i].genre[j] == gen)
                  {
                 sortedMovies.push(this.movies[i]);  
                 console.log(this.movies[i].title);
                   }
               else{
                  console.log("No");               
                  }
            }
            
        }
        moviesResult(sortedMovies);    
}

          // Search top rated movie
 ShowMovieList.prototype.getMoviesTopRating = function(){
     let sortedMovies = [];
     let maxValue;
     document.getElementById("resultList").innerHTML = "";
         for(let i in this.movies){
         let addRating = 0;
             //console.log(this.movies[i].ratings);
             for(let j = 0; j<this.movies[i].ratings.length; j++){           
                  addRating = addRating + this.movies[i].ratings[j];
                                      
            } 

            console.log(addRating); 
             sortedMovies.push(addRating);
                  maxValue = Math.max.apply(null, sortedMovies);
              }
                 
         
         for(let x in  this.movies){
           let finalSort = [];
            let addRate = 0;
          for (var y = 0; y < this.movies[x].ratings.length; y++) {
            
             addRate = addRate + this.movies[x].ratings[y];

          }
               if (addRate == maxValue) {

                  finalSort.push(this.movies[x]);
                   
                   moviesResult(finalSort);
               }

         }

                console.log(maxValue);
                   
                
}

  // Search low rated movie
 ShowMovieList.prototype.getMoviesLowRating = function(){
     let sortedMovies = [];
     let  minValue;
     document.getElementById("resultList").innerHTML = "";
         for(let i in this.movies){
         let addRating = 0;
             //console.log(this.movies[i].ratings);
             for(let j = 0; j<this.movies[i].ratings.length; j++){           
                  addRating = addRating + this.movies[i].ratings[j];                                      
            } 
            console.log(addRating); 
             sortedMovies.push(addRating);
                  minValue = Math.min.apply(null, sortedMovies);                        
        }        
         for(let x in  this.movies){
           let finalSort = [];
            let addRate = 0;
          for (var y = 0; y < this.movies[x].ratings.length; y++) {           
             addRate = addRate + this.movies[x].ratings[y];
          }
          if (addRate == minValue) {
              finalSort.push(this.movies[x]);
              moviesResult(finalSort);
          }
         }              
}

           // add new rating to the movies
ShowMovieList.prototype.setNewRating = function(val){
       console.log(val);
       for (let i = 0; i < this.movies.length; i++) {
           let x=  document.getElementById(i).getAttribute("id");
               if(x == val.getAttribute("id")){               
               console.log(x);
               var newRating = document.getElementsByClassName("giveRating");             
                     for (let j = 0; j < newRating.length; j++) {
                           let getValue = newRating[j].value;  // value enterend by user
                            // console.log(newRating[j].value);
                            if (newRating[j].value !== "" ) {
                            this.movies[j].ratings.push(getValue);
                            }         
                            let ShowBackRating = document.getElementsByClassName("Rating")[j];
                           // console.log(ShowBackRating);
                            ShowBackRating.innerHTML=  this.movies[j].ratings;
                            console.log(this.movies[j].ratings);
                            newRating[j].value = '';
                      }

                         
                         
               }
          
      }
      
      
} 
      // fucntion that is showing result after filteration
var moviesResult = function(sortedMovies){
  let ul = document.getElementById("resultList");
         for(let i=0; i<sortedMovies.length; i++){
             
             //console.log(sortedMovies.length);
                let li = document.createElement("li");
             li.setAttribute("class", "listMov");

             h3MovName = document.createElement("h3");
             h3MovName.innerHTML = " Movie: " + sortedMovies[i].title;
             h3MovYear = document.createElement("h3");
             h3MovYear.innerHTML = "Year: " + sortedMovies[i].year;
             h3MovGenre = document.createElement("h3");
             h3MovGenre.innerHTML = "Genre: " + sortedMovies[i].genre;
             h3MovRaitings = document.createElement("h3");
             h3MovRaitings.innerHTML = "Ratings: " + sortedMovies[i].ratings;

               li.appendChild(h3MovName); 
               li.appendChild(h3MovYear);
               li.appendChild(h3MovGenre);
               li.appendChild(h3MovRaitings);
               ul.appendChild(li);
        
           //console.log(sortedMovies[i].title + " And " + sortedMovies[i].year + " And " + sortedMovies[i].genre + " And " + sortedMovies[i].ratings  );
         }      
}
// creating object
var movieList = new ShowMovieList();

  movieList.add(Movie1);
  movieList.add(Movie2);
  movieList.add(Movie3);
  movieList.add(Movie4);      
  document.getElementById("listMovies").addEventListener("click", listOfMovies);

      function listOfMovies(){  let ul = document.getElementById("movieList");
      for(let i=0; i<movieList.movies.length; i++){
        
       /* console.log(movieList.movies[i].title + ' and ' + movieList.movies[i].year  + ' and ' + movieList.movies[i].genre); */
        let li = document.createElement("li");
             li.setAttribute("class", "listMov listNon");
             li.setAttribute("id", i);
        
             h3MovieName = document.createElement("h3");
             h3MovieName.innerHTML = " Movie: " + movieList.movies[i].title;
             h3MovieYear = document.createElement("h3");
             h3MovieYear.innerHTML = "Year: " + movieList.movies[i].year;
             h3MovieGenre = document.createElement("h3");
             h3MovieGenre.innerHTML = "Genre: " + movieList.movies[i].genre;
             h3MovieRaitings = document.createElement("h3");
             h3MovieRaitings.setAttribute("class", "Rating");
             h3MovieRaitings.innerHTML = "Ratings: " + movieList.movies[i].ratings;
              // li.innerHTML = movieList.movies[i].title + ' and ' + movieList.movies[i].year  + ' and ' + movieList.movies[i].genre;
               li.appendChild(h3MovieName); 
               li.appendChild(h3MovieYear);
               li.appendChild(h3MovieGenre);
               li.appendChild(h3MovieRaitings);

            let hrLine = document.createElement("hr");

               li.appendChild(hrLine);

            let giveRating = document.createElement("input");
                             giveRating.setAttribute("type", "text");
                             giveRating.setAttribute("class", "giveRating");
                 li.appendChild(giveRating);
 
                 let btnRating = document.createElement("input");
                             btnRating.setAttribute("type", "button");
                             btnRating.setAttribute("value", "Rating");
                             btnRating.setAttribute("id", "btnRating");
                             btnRating.setAttribute("onclick", "movieList.setNewRating(this.parentElement)");
                 li.appendChild(btnRating);
                 ul.appendChild(li);

        
      }

// adding delay and sound
(function(){let op = document.getElementsByClassName("listNon");                 
  //op.style.display = "none";
  var t = 2000;
  for (let i = 0; i < op.length; i++) {
    setTimeout(function(){ op[i].style.display = "block";
    var snd = new Audio("images/click.wav"); // buffers automatically when created
    snd.play();
  }, t);
  t= t + 2000;
  }}
  )();
  //console.log(op);
}



// Get Movie By Year      
    
document.getElementById("byYear").addEventListener("click",function(){
let year = document.getElementById("year").value;
movieList.getMoviesByYear(year);
});

// Get Movie By Genre
    
document.getElementById("byGenre").addEventListener("click", function(){
let genre = document.getElementById("genre").value;
movieList.getMoviesByGenre(genre);
});

// Get Movie Top Rated
    
document.getElementById("bytopRating").addEventListener("click", function(){
movieList.getMoviesTopRating();
});

// Get Movie By Genre

document.getElementById("bylowRating").addEventListener("click", function(){
movieList.getMoviesLowRating();
});

   


                     

                   


