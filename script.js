let daily_current = [];
let daily_previous = [];
let weekly_current = [];
let weekly_previous = [];
let monthly_current = [];
let monthly_previous = [];

let hours = document.querySelectorAll(".hours");
let previousHours = document.querySelectorAll(".previous-hours");
var activedElement;

let spans = document.querySelectorAll(".spans");
let btns = document.querySelectorAll(".button");

// for (var i = 0; i < spans.length; i++) {
//   spans[i].addEventListener("click", function () {
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace("active", "");
//     this.className += " active";
//   });
// }

const clearActiveButton = () => btns.forEach(button => button.classList.remove('active'));

btns.forEach(button => button.addEventListener('click', event => {
  clearActiveButton();
  event.target.classList.add('active');
}));

fetch("data.json")
  .then(res => res.json())
  .then(data => { 
       data.forEach(element => {
        daily_current.push(element.timeframes.daily.current);
        daily_previous.push(element.timeframes.daily.previous);
        weekly_current.push(element.timeframes.weekly.current);
        weekly_previous.push(element.timeframes.weekly.previous);
        monthly_current.push(element.timeframes.monthly.current);
        monthly_previous.push(element.timeframes.monthly.previous);   
       })   
  })
  .then(result => {
    for (let i = 0; i <= 6; i++) {  
      if (spans[0].classList.contains("active")) {
        hours[i].innerHTML = `${daily_current[i]}hrs`;
        previousHours[i].innerHTML = `Yesterday - ${daily_previous[i]}hrs`;
      } else if (spans[1].classList.contains("active")) {
        hours[i].innerHTML = `${weekly_current[i]}hrs`;
        previousHours[i].innerHTML = `Last Week - ${weekly_previous[i]}hrs`;
      } else if (spans[2].classList.contains("active")) {
        hours[i].innerHTML = `${monthly_current[i]}hrs`;
        previousHours[i].innerHTML = `Last Month - ${monthly_previous[i]}hrs`;
      }
    }
  });

