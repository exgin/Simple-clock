function showTime() {
    let date = new Date(); // global date object, storing our time in this object
    let hours = date.getHours(); 
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let formatHours = convertFormat(hours); // is it AM or PM?

    hours = checkTime(hours);
    hours = zero(hours);
    minutes = zero(minutes);
    seconds = zero(seconds);

    document.getElementById('clock').innerHTML = `${hours} : ${minutes} : ${seconds} : ${formatHours}`; // USE `` not '' or "" to acess the variables
}

function convertFormat(time){
    let format = 'AM'; // start at am
    if(time >= 12){ 
        format = 'PM';
    }
    return format;
}

function checkTime(time){
    if(time > 12){ // if we get past 12, subtract it
        time -= 12;
    } 
    if(time === 0){
        time = 12;
    }
    return time;
}

function zero(time){
    if(time < 10){ // so we follow the normal format for a clock 00:00:00 
        time = '0' + time;
    }
    return time;
}

showTime(); // when the page is loading, the clock doesn't pop up for a second, so we call the fn initiality here
setInterval(showTime,1000);