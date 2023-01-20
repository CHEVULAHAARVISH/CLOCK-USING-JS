const hour = document.getElementById('hours')
const minute = document.getElementById("minutes")
const seconds = document.getElementById("seconds")
const day =document.getElementById('DATE') 
const month =document.getElementById('MONTH')  // getMonth() returns month from 0 to 11
const year =document.getElementsByClassName('YEAR') 
const clock = setInterval(function time(){
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();
    //console.log(hour,minute,seconds,dateToday);
    if (hr < 10){
        hr = '0' + hr;
    }
    if (min <10){
        min= "0" + min;
    }
    if (sec <10){
        sec = "0" + sec;
    }
    hours.textContent = hr;
    minutes.textContent = min;
    seconds.textContent = sec;
},1000);    
const DTY = setInterval(function Time(){
    let dateToday1 = new Date();
    let d = dateToday1.getDate();
    let m = dateToday1.getMonth();
    let y = dateToday1.getFullYear();
    if (m>=0){
        m= m + 1;
    } 
    DATE.textContent = d;
    MONTH.textContent = m;
    YEAR.textContent = y;
},1000);
