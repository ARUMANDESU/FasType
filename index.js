/*document.getElementById("increaseNumber").onclick = function() {numberIncrement()};
let b= 0;
function numberIncrement(){
    let a = parseInt(document.getElementById("inputNumberHere").value) ;
    if (Number.isInteger(a)){
        b+=a;
        //console.log(typeof (document.getElementById("someBlock").style.marginLeft));
        document.getElementById("someBlock").style.marginLeft=b+"px";
    }
    else{
        alert("Error: it isn't number");
    }
}*/


//random text
document.getElementById("startBtnToGenText").onclick=function() {startButton()};
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
    'A Stag was chased by the hounds, and took refuge in a cave, where he hoped to be safe from his pursuers. Unfortunately the cave contained a Lion, to whom he fell an easy prey. "Unhappy that I am," he cried, "I am saved from the power of the dogs only to fall into the clutches of a Lion."\n' + 'Out of the frying-pan into the fire.'
]
let textIndex=0;
function startButton(){
    //choose random text
    textIndex = Math.round(Math.random()*(someTexts.length-1));
    document.getElementById("randomText").innerHTML= someTexts[textIndex];

    //restart progress, speed and time
    timer();
    restartTime();
    inputText.value="";
    $("#progress").text('');

}
function addText(text){
    someTexts.push(text);
}

// Highlighting text
let inputText=document.getElementById("inputTextHere")
inputText.oninput=function () {startTouchTyping()};


/*
First version but not working properly
function checkText(){
    let firstText = document.getElementById("randomText").innerHTML.split(" ");
    let secondText =inputText.value.split();
    let fullText=[];
    document.getElementById("randomText").innerHTML="";
    for(k=0;k<firstText.length-1;k++){
        if(firstText[k]==secondText[k]){
            fullText.push(firstText+" ");
        }
        else{
            fullText.push(("<u>"+firstText+"</u>"+" "));
        }
    }


    document.getElementById("randomText").innerHTML=fullText.toString();
}*/
/*let bol=true;
function highlight(firstText, secondText){

    let lengthPlus=0;
    let oldText = firstText.text(), text = ''/!*firstText.html().slice(1,secondText.val().length+lengthPlus)*!/;
    secondText.val().split('').forEach(function(val, i){
        if (val != oldText.charAt(i)){
            text += "<span class='highlight'>"+val+"</span>";
            lengthPlus+=35;
        }
        else{
            text += "<span class='highlightGreen'>"+val+"</span>";
            lengthPlus+=40;
        }
    });
    let k=text+ firstText.html().slice(secondText.val().length+(bol?0:lengthPlus),firstText.html().length)
    firstText.html(k);
    if(bol){
        bol=false;
    }
}*/

function startTouchTyping(){
    highlight($("#randomText"),$("#inputTextHere"));
    progress($("#randomText"),$("#inputTextHere"));
}
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
}

//Time
var h1 = document.getElementById("timer");
var start = document.getElementById('strt');
var stop = document.getElementById('stp');
var reset = document.getElementById('rst');
var sec = 0;
var min = 0;
var t;

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
    t = setTimeout(add, 1250);
}

/*timer();
start.onclick = timer;
stop.onclick = function() {
    clearTimeout(t);
}*/
function restartTime() {
    h1.textContent = "00:00";
}


function progress(firstText,secondText){
    let value = Math.round((secondText.val().length*100)/firstText.text().length);
    $("#progress").text(value);
}

if($("#progress").text()==100){
    clearTimeout(t);
}