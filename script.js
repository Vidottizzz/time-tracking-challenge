let daily_current = [];
let daily_previous = [];
let weekly_current = [];
let weekly_previous = [];
let monthly_current = [];
let monthly_previous = [];

let hours = document.querySelectorAll(".hours");
let previousHours = document.querySelectorAll(".previous-hours");
let spans = document.querySelectorAll(".spans");
let btns = document.querySelectorAll(".button");


for (var i = 0; i < spans.length; i++) {
    spans[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });

fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    for (let i = 0; i <= 6; i++) {
        
      daily_current.push(data[i].timeframes.daily.current);
      daily_previous.push(data[i].timeframes.daily.previous);
      weekly_current.push(data[i].timeframes.weekly.current);
      weekly_previous.push(data[i].timeframes.weekly.previous);
      monthly_current.push(data[i].timeframes.monthly.current);
      monthly_previous.push(data[i].timeframes.monthly.previous);


      if (spans[0].classList.contains("active")) {
        hours[i].innerHTML = `${daily_current[i]}hrs`;
        previousHours[i].innerHTML = `Yesterday - ${daily_previous[i]}hrs`;
      } else if (spans[1].classList.contains("active")) {
        hours[i].innerHTML = `${weekly_current[i]}hrs`;
        previousHours[i].innerHTML = `Last Week - ${weekly_previous[i]}hrs`;
      } if (spans[2].classList.contains("active")) {
        hours[i].innerHTML = `${monthly_current[i]}hrs`;
        previousHours[i].innerHTML = `Last Month - ${monthly_previous[i]}hrs`;
      }
    }
  });
}
