const daysE1 = document.getElementById('days');
const hoursE1 = document.getElementById('hours');
const minsE1 = document.getElementById('mins');
const secondsE1 = document.getElementById('seconds');

const finalDate = '21 Dec 2022';

function countDown(){
    const winterDate = new Date(finalDate);
    const currentDate = new Date();

    const totalSeconds =new Date (winterDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor (totalSeconds / 3600) % 24;
    const mins = Math.floor (totalSeconds / 60) % 60;
    const seconds = Math.floor (totalSeconds) % 60;

    console.log(days,hours,mins, seconds);
 
    daysE1.innerHTML = formatTime(days);
    hoursE1.innerHTML = hours;
    minsE1.innerHTML = formatTime(mins);
    secondsE1.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
//initial call
countDown();

setInterval (countDown, 1000);

