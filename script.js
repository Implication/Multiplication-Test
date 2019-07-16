var counter = 0;
    var num1;
    var num2;
    var answer;
function loadQuestion(){
    num1= Math.round(Math.random(12) * 12);
    num2= Math.round(Math.random(12) * 12);
    answer = num1 * num2;
    document.getElementById("question").innerHTML = num1 + "X" + num2;
    var answerButton =  Math.round(Math.random(4) * 4);
    if(answerButton == 0)
        answerButton = 1;
    console.log(answerButton);
    document.getElementById("button" + answerButton).innerHTML = answer;
    for(var i = 1; i <= 4; i++){
        if(i != answerButton){
            window.document.getElementById("button" + i).innerHTML = Math.round(Math.random(144) * 144);
        }
    }
}

function tryAgain(){
    window.document.getElementById("tryAgain").style.opacity = "1.0";
    setInterval(function(){
        window.document.getElementById("tryAgain").style.opacity = "0";
    },1500);
}
window.document.getElementById("start").onclick = function(){
    window.document.getElementById("scorevalue").innerHTML = 0;
    window.document.getElementById("start").innerHTML = "Reset Game";
    loadQuestion();
}

window.document.getElementById("button1").onclick = function(){
    if(window.document.getElementById("button1").innerHTML == answer){
        window.document.getElementById("scorevalue").innerHTML = ++counter;
        loadQuestion();
        }
    else{
        tryAgain();
    }
}

window.document.getElementById("button2").onclick = function(){
    if(window.document.getElementById("button2").innerHTML == answer){
        window.document.getElementById("scorevalue").innerHTML = ++counter;
            loadQuestion();
        }
    else{
        tryAgain();
    }
}

window.document.getElementById("button3").onclick = function(){
    if(window.document.getElementById("button3").innerHTML == answer){
        window.document.getElementById("scorevalue").innerHTML = ++counter;
            loadQuestion();
        }
    else{
        tryAgain();
    }
}

window.document.getElementById("button4").onclick = function(){
    if(window.document.getElementById("button4").innerHTML == answer){
        window.document.getElementById("scorevalue").innerHTML = ++counter;
            loadQuestion();
        }
    else{
        tryAgain();
    }
}