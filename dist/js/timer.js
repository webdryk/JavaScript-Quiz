let dt = new Date(new Date().setTime(0));
let ctime = dt.getTime();

let seconds = Math.floor((ctime % (1000 * 60))/ 1000);
let minutes = Math.floor((ctime % (1000 * 60 * 60))/( 1000 * 60));
let hours= Math.floor((ctime % (1000 * 60 * 60 * 60))/( 1000 * 60 *60));
console.log(seconds, minutes,hours);
let time = 0;

let mytime = setInterval(function(){
        time++;
        
        if(seconds < 59) {
            seconds++;
        } 
        
        else if(minutes<59) {
            seconds = 0;
            minutes++;
        }else{
            seconds=0;
            minutes=0;
            hours++;
        }
        let formatted_sec = seconds < 10 ? `0${seconds}`: `${seconds}`;
        let formatted_min = minutes < 10 ? `0${minutes}`: `${minutes}`
        let formatted_hr = hours < 10 ? `0${hours}`: `${hours}`

        document.querySelector("span.time").innerHTML =`${formatted_hr}: ${formatted_min} : ${formatted_sec}`;


        if(hours===00 &&minutes===05 && seconds===00){
            document.location.replace("end.html")
        }
    }, 1000);


    