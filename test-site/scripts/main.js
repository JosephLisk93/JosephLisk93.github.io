let myImg = document.querySelector('img');

myImg.onclick = function(){
    let mySrc = myImg.getAttribute('src')
    if (mySrc === 'images/happy.png'){
        myImg.setAttribute('src','images/firefox2.png');
    } else {
        myImg.setAttribute('src','images/happy.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
    let myName = prompt('Please Enter Your NAME');
    if(!myName || myName === null) {
        setUserName();
    } else {
    localStorage.setItem('name',myName);
    myHeading.textContent = 'U CAN MAY MAY ' + myName;
    }
}
if(!localStorage.getItem('name')){
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'U CAN MAY MAY ' + storedName;  
}

myButton.onclick = function() {
    setUserName();
}