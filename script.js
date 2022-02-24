const daily_current = [];
const daily_previous = [];
const weekly_current = [];
const weekly_previous = [];
const monthly_current = [];
const monthly_previous = [];

const $spans = document.querySelectorAll(".spans");
const $btns = document.querySelectorAll(".button");

fetch("data.json")
  .then((response) => response.json())
  .then((json_data) => {
    json_data.forEach((element) => {
      daily_current.push(element.timeframes.daily.current);
      daily_previous.push(element.timeframes.daily.previous);
      weekly_current.push(element.timeframes.weekly.current);
      weekly_previous.push(element.timeframes.weekly.previous);
      monthly_current.push(element.timeframes.monthly.current);
      monthly_previous.push(element.timeframes.monthly.previous);
    });
  })
  .then((result) => {
    const currentHours = document.querySelectorAll(".hours");
    const previousHours = document.querySelectorAll(".previous-hours");
    for (let i = 0; i < 6; i++) {
      currentHours[i].innerHTML = daily_current[i] + "hrs";
      previousHours[i].innerHTML = "Yesterday " + " - " + daily_previous[i] + "hrs";
    }
  });

function changeDuration() {
  let targets = document.getElementsByName("duration");
  targets.forEach((target) => {
    target.addEventListener("click", function () {
      if (target.checked) {
        let duration = target.value;
        display(duration);
      }
    });
  });
}

function display(duration) {
  const hours = document.getElementsByClassName("hours");
  const previous_hours = document.getElementsByClassName("previous-hours");
  let current;
  let previous;
  let range;
  switch (duration) {
    case "daily":
      current = daily_current;
      previous = daily_previous;
      range = "Yesterday";
      break;
    case "weekly":
      current = weekly_current;
      previous = weekly_previous;
      range = "Last Week";
      break;
    case "monthly":
      current = monthly_current;
      previous = monthly_previous;
      range = "Last Month";
      break;
  }
  for (let i = 0; i < 6; i++) {
    hours[i].innerHTML = current[i] + "hrs";
    previous_hours[i].innerHTML = range + " - " + previous[i] + "hrs";
  }
}

changeDuration();
