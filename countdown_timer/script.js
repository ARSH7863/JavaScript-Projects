
const daysE1=document.getElementById('days');
const hoursE1=document.getElementById('hours');
const minutesE1=document.getElementById('minutes');
const secondsE1=document.getElementById('seconds');

const newYears='1 Jan 2022';

function countDown(){
    const newYearsDate=new Date(newYears);
    const currDate=new Date();

    const totalSeconds=(newYearsDate-currDate)/1000;

    const days=Math.floor(totalSeconds/3600/24);
    const hours=Math.floor(totalSeconds/3600)%24;
    const minutes=Math.floor(totalSeconds/60)%60;
    const seconds=Math.floor(totalSeconds%60);

    daysE1.innerHTML=days;
    hoursE1.innerHTML=formatTime(hours);
    minutesE1.innerHTML=formatTime(minutes);
    secondsE1.innerHTML=formatTime(seconds);

    // console.log(days,hours,minutes,seconds);
}

function formatTime(time){
    return time <10?(`0${time}`):time;
}

setInterval(countDown,1000);

countDown();

