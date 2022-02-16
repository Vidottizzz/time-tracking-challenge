let daily_current = [];
let daily_previous = [];
let weekly_current = [];
let weekly_previous = [];
let monthly_current = [];
let monthly_previous = [];

let hours = document.querySelectorAll('.hours');
let previousHours = document.querySelectorAll('.previous-hours');
let buttons = document.querySelectorAll('.button');



fetch('data.json')
.then(res => res.json())
.then(data => {
    // se colocar o 0 é referente a sessão WORK
    // se colocar o 1 é referente a sessão PLAY e assim consecutivamente

    for (let i = 0; i <= 6 ; i++) {
        daily_current.push(data[i].timeframes.daily.current);
        daily_previous.push(data[i].timeframes.daily.previous);
        weekly_current.push(data[i].timeframes.weekly.current);
        weekly_previous.push(data[i].timeframes.weekly.previous);
        monthly_current.push(data[i].timeframes.monthly.current);
        monthly_previous.push(data[i].timeframes.monthly.previous);

        // quando tiver no weekly mostra ese código
        hours[i].innerHTML = `${weekly_current[i]}hrs`;
        previousHours[i].innerHTML = `Last Week - ${weekly_previous[i]}hrs`;


    
        // IF O BOTÃO DAILY ESTÁ ATIVO COLOCA A OUTRA COLUNA DE CÓDIGO

        // hours[i].innerHTML = `${daily_current[i]}hrs`
        // previousHours[i].innerHTML = `Yesterday - ${daily_previous[i]}hrs`;

        // IF O BOTÃO MONTHLY ESTÁ ATIVO COLOCA A OUTRA COLUNA DE CÓDIGO

        // hours[i].innerHTML = `${daily_current[i]}hrs`
        // previousHours[i].innerHTML = `Yesterday - ${daily_previous[i]}hrs`
                          
    }   
});

console.log(daily_current);
console.log(daily_previous);
console.log(weekly_current);
console.log(weekly_previous);
console.log(monthly_current);
console.log(monthly_previous);

















