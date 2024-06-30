const body= document.querySelector("body"),
hourHand= document.querySelector(".hour"),
minuteHand= document.querySelector(".minute"),
secondHand= document.querySelector(".second"),
modeSwitch= document.querySelector(".mode-switch");

modeSwitch.addEventListener('click', ()=>{
    body.classList.toggle("dark")
    
})

const updateTime = () => {
    // We are going to get current time and calculate degrees for clock hand
    let date = new Date(),
    secToDeg = (date.getSeconds() / 60) * 360;
    minToDeg = (date.getMinutes() / 60) * 360;
    hrToDeg =(date.getHours() / 12) * 360;

    console.log(secToDeg)

    //rotate the clock hands to the appropiate degree based on the current time
    secondHand.style.transform = `rotate(${secToDeg}deg)`;
    minuteHand.style.transform = `rotate(${minToDeg}deg)`;
    hourHand.style.transform = `rotate(${hrToDeg}deg)`;
}
// Call updateTime to set clock hands every second
setInterval(updateTime, 1000);
// Call updateTime function on pageload
updateTime();