class Clock {
    constructor(){
    this.hourhandHolder = document.querySelector(".hour");
    this.minutehandHolder = document.querySelector(".minute");
    this.secondhandHolder = document.querySelector(".second");
    this.digitalClockHolder = document.querySelector(".digital-clock");
    this.calendarHolder = document.querySelector(".calendar");
    this.timeNow;
    this.monthNow;
    this.dayNow;
    this.hourNow;
    this.minuteNow;
    this.secondNow;
    this.counter();
    }
    counter(){
    this.setInt = setInterval(()=> {
            this.timeNow = new Date();
            this.hourNow = this.timeNow.getHours();
            this.minuteNow = this.timeNow.getMinutes();
            this.secondNow = this.timeNow.getSeconds();
            // by using the option I change the numeric value for month to long version
            let monthOptions = { month: 'long'};
            this.monthNow = new Intl.DateTimeFormat('en-US', monthOptions).format(this.timeNow);
            // by using the option I change the numeric value for day to long version
            let dayOptions = { weekday: 'long'};
            this.dayNow = new Intl.DateTimeFormat('en-US', dayOptions).format(this.timeNow);
            // Don't repeat yourself
            // first arguments is time (hour, minute, second)
            // second argument is for DOM manipulation
            // the third argument is for turning number to degree for DOM manipulation
            this.analogClock(this.hourNow,this.hourhandHolder, 30);
            this.analogClock(this.minuteNow,this.minutehandHolder, 6);
            this.analogClock(this.secondNow,this.secondhandHolder, 6);
            this.digitalClock(this.hourNow, this.minuteNow);
            this.calendar(this.monthNow, this.dayNow);
        }, 1000);
    }
    analogClock(timeNow,timeHolder,timeInterval){
        let counter = 0;
        if (timeNow == 0) {
            counter = 360;
            timeHolder.style.transform = `rotate(${counter}deg)`;
        }
        else {
            counter = timeNow * timeInterval;
            timeHolder.style.transform = `rotate(${counter}deg)`;  
        };
    }
    digitalClock(hour, minute){
            let digitHour;
            if (hour >= 12) {
                digitHour = hour - 12;
                this.digitalClockHolder.innerText = `${digitHour}:${minute} PM`;
            }
            else {
                digitHour = hour;
                this.digitalClockHolder.innerText = `${digitHour}:${minute} AM`; 
            };

    }
    calendar(month, day){
        this.calendarHolder.innerText = `${day}, ${month}`;
    }
};
const clock = new Clock();

const modeHolders = document.querySelector(".mode");
const contentHolders = document.querySelector(".content");
const hourHolders = document.querySelector(".hour");
const minuteHolders = document.querySelector(".minute");
const digitalClockHolders = document.querySelector(".digital-clock");
const calendarHolders = document.querySelector(".calendar");
modeHolders.addEventListener("click", (e)=>{
    e.preventDefault();
    modeHolders.classList.toggle("active-mode");
    contentHolders.classList.toggle("active");
    hourHolders.classList.toggle("active-mode");
    minuteHolders.classList.toggle("active-mode");
    digitalClockHolders.classList.toggle("active");
    calendarHolders.classList.toggle("active");
});


















































// class Counter {
//     constructor(el,follower,sec){
//     this.followers = follower;
//     this.element = el;
//     this.seconds = sec*1000;
//     this.counter = 0;
//     this.setInt;
//     this.counts();
//     }
//     counts(){
//         this.setInt = setInterval(()=> {
//             if (this.counter < this.followers){
//                 this.counter += Math.round(this.followers/(this.seconds/100)); 
//                 if (this.counter <= this.followers){
//                     this.element.innerHTML = `${this.counter.toString()}`;
        
//                 }
//                 else {
//                     this.element.innerHTML = `${this.followers}`;
//                 } 
//             }
//             else {
//                 this.stop();
//             }
//         }, (this.seconds/100));
//     }
//     stop(){
//         clearInterval(this.setInt);
//     }
// };

// const facebook = new Counter(facebookCounter,6838, 4);
// const twitter = new Counter(twitterCounter,25012, 4);
// const instagram = new Counter(instagramCounter,34129, 4);

