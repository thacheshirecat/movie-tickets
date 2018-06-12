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
  this.cost = 5;
  if(this.age >= 65)
  {
    this.cost += 2;
  }
  else if (this.age < 65 && this.age >= 13)
  {
    this.cost += 5;
  }
  else
  {
    this.cost += 0;
  }

  if (this.movie === $("#rerelease").val() || this.movie === $("#rerelease-two").val())
  {
    this.cost /= 2;
    alert("divide two");
  }
  else
  {
    alert("add nothing");
    this.cost += 0;
  }
  if(this.time === $("#matinee").val() || this.time === $("#matinee-two").val())
  {
    this.cost -= 2;
  }
  else
  {
    this.cost += 0;
  }
  return this.cost;
}

function resetValues(){

}
//For People with Eyes
$(document).ready(function()
{
  $("form#ticket-form").submit(function(event)
  {
    event.preventDefault();
    var userAge = parseInt($("input#user-age").val());
    var userMovie = $("select#movie").val();
    var userTime = $("select#movie-time").val();
    var userCost = 0;

    var newMovie = new Movie(userAge, userMovie, userTime, userCost);

    $("ul#movie-results").append("<li><p>Your ticket cost comes to $" + newMovie.ticketCost() + "</p></li>");
    $("#movie-results").show();


  });

});
