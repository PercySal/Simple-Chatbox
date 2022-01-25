/*FUNCTIONS*/
function initialize() {
    const ta = document.querySelector("textarea");
    /*ta.textContent = ta.textContent + "\n" + Math.random();*/
    ta.scrollTop = ta.scrollHeight;
  }

function updateScroll(){
    var  chatScroll= document.getElementById("msgBox");
    chatScroll.scrollTop = chatScroll.scrollHeight;
}

function sendTheMessage()
{
    /*console.log("Button Clicked!");*/
    var userMessage = document.getElementsByClassName("usrMsg")[0];
    var chatBox = document.getElementById("msgbox");
    
    var dateToday = new Date();

    var mon=dateToday.getMonth()+1;
    var day=dateToday.getDate();
    var yr=dateToday.getFullYear();

    var hrs= dateToday.getHours();
    var min= dateToday.getMinutes();
    var sec= dateToday.getSeconds();

    if (min < 10) {
        min = "0"+min;
    }

    if (sec < 10) {
        sec= "0"+sec;
    }

    /*console.log(userMessage.value);*/
    chatBox.innerHTML += mon+"/"+day+"/"+yr+" "+hrs+":"+min+":"+sec +": "+userMessage.value +"&#013";
    userMessage.value="";
    /*updateScroll();*/
    initialize();
}
/* */
/*PROGRAM MAIN*/
/* */
var btn = document.getElementById("sendMsg");
var type = document.getElementsByClassName("usrMsg");

    /*from StackOverflow*/
document.querySelector('#usrMsg').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      // code for enter
    sendTheMessage();  
    }
});
/*end StackOverflow code*/

btn.addEventListener("click", sendTheMessage);