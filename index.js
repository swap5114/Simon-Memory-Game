//step-1 : selct colors
let color = ["red", "blue","green","yellow"];

//step2 : pick a random color
function randomColor(){
    let chosencolor = color[Math.floor(Math.random()*color.length)];
    // console.log(chosencolor);
    return chosencolor;
}

let gamepattern = [];
let userinputpattern = [];
let level = 0;
// let game = false;

// flash the random color
function flash(color){
    let box = document.getElementById(color);
    box.classList.add("pressed");

    setTimeout(function(){
        box.classList.remove("pressed");
    }, 500);
    console.log("Flashed " + color);
}

// start the game and flash the random color and store tht user input until level gets incresed
function gamestart(){
    // game = true;
    userinputpattern = [];
    let chosencolor = randomColor();
    gamepattern.push(chosencolor);
    level++;
    console.log(chosencolor);
    flash(chosencolor);
}


function startover(){
    console.log("reached startover");
    
    level = 0;
    userinputpattern = [];
    gamepattern = [];
    gamestart();
}

function checkanswer(currentIndex){
    if(userinputpattern[currentIndex] === gamepattern[currentIndex]){
        console.log("reached if check checkanswer")
        console.log("Correct at index " + currentIndex);
        if(userinputpattern.length === gamepattern.length){
            document.getElementById("level-title").textContent = `Your level is ${level}`;
            setTimeout( function(){
                gamestart();
            }, 1000);
        }
    }
    else{
        alert("you clicked wrong color");
        startover();
    }    
}

document.querySelectorAll(".box").forEach(function(box){
    // console.log("pressing button");
    
    box.addEventListener("click",function(){
        let user = box.id
        userinputpattern.push(user)
        console.log(userinputpattern);
        
        flash(user)
        console.log(userinputpattern.length-1);
        
        checkanswer(userinputpattern.length-1)

    })
})

gamestart();




