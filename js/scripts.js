//Bidness
function Movie(age, movie, time, cost)
{
  this.age = age;
  this.movie = movie;
  this.time = time;
  this.cost = cost;
}

Movie.prototype.ticketCost = function()
{
  if(this.age >= 65) { this.cost += 2; }
  else if (this.age < 65 && this.age >= 13) { this.cost += 5; }
  else { this.cost += 0; }

  if (this.movie === 2) { this.cost /= 2; }
  else if (this.movie === 3) { this.cost += 3; }
  else { this.cost += 0; }

  if(this.time === 1) { this.cost -= 2; }
  else { this.cost += 0; }

  return this.cost;
}

//For People with Eyes
$(document).ready(function()
{
  $("form#ticket-form").submit(function(event)
  {
    event.preventDefault();
    var userAge = parseFloat($("input#user-age").val());
    var userMovie = parseFloat($("select#movie").val());
    var userTime = parseFloat($("select#movie-time").val());
    var movieName = $(".movie-name:selected").text();
    var movieTime = $(".movie-time:selected").text();
    alert(movieTime);
    var baseCost = 5;

    var newMovie = new Movie(userAge, userMovie, userTime, baseCost);

    $("ul#movie-results").append("<li><p>The cost of your ticket to see " +
      movieName + " at " + movieTime + " comes to $" + newMovie.ticketCost() + "</p></li>");

    $("#movie-results").show();
  });

});
