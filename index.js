

//start button pressed
document.getElementById("startBtnToGenText").onclick=function() {startButton()};
document.getElementById("myOwnTextBtn").onclick=function (){
    document.getElementById("randomText").innerHTML="<u class='highlight'>"+$("#myOwnText").val().slice(0,1)+"</u>"+"<span class='highlight'>"+$("#myOwnText").val().slice(1,$("#myOwnText").val().length)+"</span>" ;
    restart();
    inputText.focus();
};
let someTexts =[
    "aa ss dd ff jj kk ll ;;",
    "as as df df jk jk l; l;",
    "threshing debouch efficiency empty Illinoisan Mona sunbeam Freon provisional Donnell",
    'A Fisherman who could play the flute went down one day to the sea-shore with his nets and his flute; and, taking his stand on a projecting rock, began to play a tune, thinking that the music would bring the fish jumping out of the sea. He went on playing for some time, but not a fish appeared: so at last he threw down his flute and cast his net into the sea, and made a great haul of fish. When they were landed and he saw them leaping about on the shore, he cried, "You rascals! you wouldnt dance when I piped: but now Ive stopped, you can do nothing else!',
    "Rb impersonator Wash icosahedra fatherly footrest senile confluent plausible honeymooner",
    "pigskin substantial eleemosynary Adriatic registration afresh farthing Alec nonprofit billingsgate",
    "chancellor abhor uninitiated instituter reemployment reducible Clay adjuster overlaying ineffectual",
    "house trifler mutable turnout propound ligature Marcuse unrecorded vb biddy",
    "therapeutic decapitate impetus meritorious aggregation mistook ship rung transcribe popularize",
    'Two little Frogs were playing about at the edge of a pool when an Ox came down to the water to drink, and by accident trod on one of them and crushed the life out of him. When the old Frog missed him, she asked his brother where he was. "He is dead, mother," said the little Frog; "an enormous big creature with four legs came to our pool this morning and trampled him down in the mud." "Enormous, was he? Was he as big as this?" said the Frog, puffing herself out to look as big as possible. "Oh! yes, much bigger," was the answer. The Frog puffed herself out still more. "Was he as big as this?" said she. "Oh! yes, yes, mother, MUCH bigger," said the little Frog. And yet again she puffed and puffed herself out till she was almost as round as a ball. "As big as...?" she began, but then she burst.',
    'A Stag was chased by the hounds, and took refuge in a cave, where he hoped to be safe from his pursuers. Unfortunately the cave contained a Lion, to whom he fell an easy prey. "Unhappy that I am," he cried, "I am saved from the power of the dogs only to fall into the clutches of a Lion."\n' + 'Out of the frying-pan into the fire.',
    'I went to the park and saw a tree, it was a big tree and it was very green. I could see a red apple on a high branch so I reached up and picked it off. It was weird how I picked it off, as I am very short. I suppose I just jumped really high.',
    ''

]
let textIndex=0;
function startButton(){
    //choose random text
    textIndex = Math.round(Math.random()*(someTexts.length-1));
    document.getElementById("randomText").innerHTML="<u class='highlight'>"+someTexts[textIndex].slice(0,1)+"</u>"+"<span class='highlight'>"+someTexts[textIndex].slice(1,someTexts[textIndex].length)+"</span>" ;

    //restart progress, speed and time
    restart();
    inputText.focus();

}

function restart(){
    after=true;
    restartTime();
    sec = 0;
    min = 0;
    inputText.value="";
    $("#progress").text('0');
    $("#speed").text('0');
    inputText.readOnly=false;
}
function addText(text){
    someTexts.push(text);
}


// Highlighting text
let inputText=document.getElementById("inputTextHere")
inputText.oninput=function () {startTouchTyping()};


function startTouchTyping(){
    highlight($("#randomText"),$("#inputTextHere"));
    progress($("#randomText"),$("#inputTextHere"));

    afterInput();
    if(parseInt($("#progress").text())>=100){ //if finished
        clearTimeout(t);//stop timer
        inputText.readOnly=true; // make it impossible to input
        //completed sound
        document.getElementById("completed").currentTime=0;
        document.getElementById("completed").play();

    }
}
setInterval(everyHalfSecond,500);
function everyHalfSecond(){
    typingSpeed($("#inputTextHere"));
}

let after=true;
function afterInput(){
    if(after){
        timer();
        after=false;
    }
}

let wrongLetter=0;
function highlight(firstText, secondText){

    let oldText = secondText.val(), text = '';
    firstText.text().split('').forEach(function(val, i){
        if (val != oldText.charAt(i)){
            if(oldText.length==i){
                text += "<u class='highlight'>"+val+"</u>";
            }
            else{
                text += "<span class='highlight'>"+val+"</span>";
            }

            if(oldText.length>i){
                wrongLetter++;
            }
        }
        else{
            if(oldText.length==i){
                text += "<u class='highlightGreen'>"+val+"</u>";
            }
            else{
                text += "<span class='highlightGreen'>"+val+"</span>";
            }
        }
    });
    firstText.html(text);
    wrongLetter=0;
}


function typingSpeed(text){
    let speed = Math.round((text.val().length-wrongLetter)/(min+(sec/60))/4);
    $("#speed").text(speed);
}


//Timer found from StackOverFlow then changed something
let h1 = document.getElementById("timer");
let sec = 0;
let min = 0;
let t;

function tick(){
    sec++;
    if (sec >= 60) {
        sec = 0;
        min++;
    }
}
function add() {
    tick();
    h1.textContent =(min > 9 ? min : "0" + min) + ":" + (sec > 9 ? sec : "0" + sec);
    timer();
}
function timer() {
    t = setTimeout(add, 1000);
}
function restartTime() {
    h1.textContent = "00:00";
    clearTimeout(t);
}

//Typing  progress
function progress(firstText,secondText){
    let value = Math.round((secondText.val().length*100)/firstText.text().length)+"%";
    $("#progress").text(value);
}



//typing effect
let i = 0;
let txt = 'This web site will help you to increase your typing skills.';
let speed = 30;


function typeWriter() {
    if (i < txt.length) {
        document.getElementById("headerText").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
    else if(i>=txt.length){
        document.getElementById("typingSound1").pause();
    }
}
typeWriter();


let sound1= document.getElementById("Sound1");
sound1.volume =0.15;

//gif  пасхалка :)
function imgChanger(id="",obychnyi="",neobychnyi=""){
    document.getElementById(id).onclick=function (){
        sound1.currentTime = 3;
        sound1.play();
        this.src="image/"+neobychnyi;
        if(this.parentElement.lastElementChild.innerHTML!="↓ ↑ ↑ → ← ← ↓ ↑ →"){ //
            this.parentElement.appendChild(document.createElement("div"));
            this.parentElement.lastElementChild.innerHTML="↓ ↑ ↑ → ← ← ↓ ↑ →";
        }


    };
    document.getElementById(id).onmouseleave=function (){
        sound1.pause();
        sound1.currentTime = 0
        this.src="image/"+obychnyi;
        if(this.parentElement.lastElementChild.innerHTML=="↓ ↑ ↑ → ← ← ↓ ↑ →") {
            this.parentElement.lastElementChild.remove();
        }
    };
}

imgChanger("headerImg","HeaderImg.png","420e39bd34d74ffae5c6af92a701d5cb.gif");
imgChanger("keyboardImg","keyboard.png","200.gif");

// тоже пасхалка ↓ ↑ ↑ → ← ← ↓ ↑ →
let keyPressed=[];
document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
            keyPressed.push('left');
            break;
        case 38:
            keyPressed.push('up');
            break;
        case 39:
            keyPressed.push('right');
            break;
        case 40:
            keyPressed.push('down');
            break;
    }

    if(keyPressed[keyPressed.length-9]=='down'&&keyPressed[keyPressed.length-8]=='up'&&keyPressed[keyPressed.length-7]=='up'&&keyPressed[keyPressed.length-6]=='right'&&keyPressed[keyPressed.length-5]=='left'&&keyPressed[keyPressed.length-4]=='left' && keyPressed[keyPressed.length-3]=='down'&&keyPressed[keyPressed.length-2]=='up'&&keyPressed[keyPressed.length-1]=='right'){
        window.location.assign("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    }
};



document.getElementById("arrowTop").onclick = function() {
    window.scrollTo(pageXOffset, 0);
    // после scrollTo возникнет событие "scroll", так что стрелка автоматически скроется
};

window.addEventListener('scroll', function() {
    document.getElementById("arrowTop").hidden = (pageYOffset < document.documentElement.clientHeight);
});

