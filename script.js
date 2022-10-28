var randNo1 = Math.floor((Math.random()*8)+1);
do{
    var randNo2 = Math.floor((Math.random()*8)+1);
}while(randNo2 == randNo1)
do{
    var randNo3 = Math.floor((Math.random()*8)+1);
}while(randNo3 == randNo1 || randNo3 == randNo2)
do{
    var randNo4 = Math.floor((Math.random()*8)+1);
}while(randNo4 == randNo1 || randNo4 == randNo2 || randNo4 == randNo3)

console.log("For easy gifts:",randNo1,randNo2,randNo3,"danger:",randNo4);

var score = 0;

var vh1 = false;
var vh2 = false;
var vh3 = false;

function compare1(){
    
    var element = document.getElementById('count');
    var value = element.innerHTML;
    ++value;
    document.getElementById('count').innerHTML = value;

    var guess1 = document.getElementById("guess").value;
    
    if(randNo1 == guess1){
        document.getElementById(guess1).style.backgroundImage = "url('winner.jpg')";
        document.getElementById(guess1).style.backgroundSize = "100%";
        vh1 = true;
        score++;
        if(vh1 == true && vh2 == true && vh3 == true){
            var x = (score/value)*100;
            alert("YOU WON!!! Your accuracy is : "+x);
            location.reload();
        }
    }
    else if(randNo2 == guess1){
        document.getElementById(guess1).style.backgroundImage = "url('winner.jpg')";
        document.getElementById(guess1).style.backgroundSize = "100%";
        vh2 = true;
        score++;
        if(vh1 == true && vh2 == true && vh3 == true){
            var x = (score/value)*100;
            alert("YOU WON!!! Your accuracy is : "+x);
            location.reload();
        }
    }
    else if(randNo3 == guess1){
        document.getElementById(guess1).style.backgroundImage = "url('winner.jpg')";
        document.getElementById(guess1).style.backgroundSize = "100%";
        vh3 = true;
        score++;
        if(vh1 == true && vh2 == true && vh3 == true){
            var x = (score/value)*100;
            alert("YOU WON!!! Your accuracy is : "+x);
            location.reload();
        }
    }
    else if(randNo4 == guess1){
        document.getElementById(guess1).style.backgroundImage = "url('skull.gif')";
        document.getElementById(guess1).style.backgroundSize = "100%";
        var x = (score/value)*100;
        alert("You Lose!!! Your accuracy is : "+x);
        location.reload();
    }
    else{
        document.getElementById(guess1).style.backgroundImage = "url(wrong.png)";
        document.getElementById(guess1).style.backgroundSize = "100%";
    }
}


//***************************************//***************************************//


var randNo5 = Math.floor((Math.random()*15)+1);
do{
    var randNo6 = Math.floor((Math.random()*15)+1);
}while(randNo6 == randNo5)
do{
    var randNo7 = Math.floor((Math.random()*15)+1);
}while(randNo7 == randNo5 || randNo7 == randNo6)
do{
    var randNo8 = Math.floor((Math.random()*15)+1);
}while(randNo8 == randNo5 || randNo8 == randNo6 || randNo8 == randNo7)

console.log(" For Medium gifts:",randNo5,randNo6,randNo7,"danger:",randNo8);

function compare2(){
    var element = document.getElementById('count');
    var value = element.innerHTML;
    ++value;
    console.log(value);
    document.getElementById('count').innerHTML = value;

    var guess2 = document.getElementById("guess1").value;
    if(randNo5 == guess2){
        document.getElementById(guess2).style.backgroundImage = "url('winner.jpg')";
        document.getElementById(guess2).style.backgroundSize = "100%";
        score++;
        vh1 = true;
        if(vh1 == true && vh2 == true && vh3 == true){
            var x = (score/value)*100;
            alert("YOU WON!!! Your accuracy is : "+x);
            location.reload();
        }
    }
    else if(randNo6 == guess2){
        document.getElementById(guess2).style.backgroundImage = "url('winner.jpg')";
        document.getElementById(guess2).style.backgroundSize = "100%";
        vh2 = true;
        score++;
        if(vh1 == true && vh2 == true && vh3 == true){
            var x = (score/value)*100;
            alert("YOU WON!!! Your accuracy is : "+x);
            location.reload();
        }
    }
    else if(randNo7 == guess2){
        document.getElementById(guess2).style.backgroundImage = "url('winner.jpg')";
        document.getElementById(guess2).style.backgroundSize = "100%";
        vh3 = true;
        score++;
        if(vh1 == true && vh2 == true && vh3 == true){
            var x = (score/value)*100;
            alert("YOU WON!!! Your accuracy is : "+x);
            location.reload();
        }
    }
    else if(randNo8 == guess2){
        document.getElementById(guess2).style.backgroundImage = "url('skull.gif')";
        document.getElementById(guess2).style.backgroundSize = "100%";
        var x = (score/value)*100;
        alert("You Lose!!! Your accuracy is : "+x);
        location.reload();
    }
    else{
        document.getElementById(guess2).style.backgroundImage = "url(wrong.png)";
        document.getElementById(guess2).style.backgroundSize = "100%";
    }
}


//***************************************//***************************************//


var randNo9 = Math.floor((Math.random()*35)+1);
do{
    var randNo10 = Math.floor((Math.random()*35)+1);
}while(randNo10 == randNo9)
do{
    var randNo11 = Math.floor((Math.random()*35)+1);
}while(randNo11 == randNo9 || randNo11 == randNo10)
do{
    var randNo12 = Math.floor((Math.random()*35)+1);
}while(randNo12 == randNo9 || randNo12 == randNo10 || randNo12 == randNo11)

console.log("For Hard gifts:",randNo9,randNo10,randNo11,"danger:",randNo12);

function compare3(){
    var element = document.getElementById('count');
    var value = element.innerHTML;
    ++value;
    console.log(value);
    document.getElementById('count').innerHTML = value;

    var guess3 = document.getElementById("guess2").value;
    if(randNo9 == guess3){
        document.getElementById(guess3).style.backgroundImage = "url('winner.jpg')";
        document.getElementById(guess3).style.backgroundSize = "100%";
        vh1 = true;
        score++;
        if(vh1 == true && vh2 == true && vh3 == true){
            var x = (score/value)*100;
            alert("YOU WON!!! Your accuracy is : "+x);
            location.reload();
        }
    }
    else if(randNo10 == guess3){
        document.getElementById(guess3).style.backgroundImage = "url('winner.jpg')";
        document.getElementById(guess3).style.backgroundSize = "100%";
        vh2 = true;
        score++;
        if(vh1 == true && vh2 == true && vh3 == true){
            var x = (score/value)*100;
            alert("YOU WON!!! Your accuracy is : "+x);
            location.reload();
        }
    }
    else if(randNo11 == guess3){
        document.getElementById(guess3).style.backgroundImage = "url('winner.jpg')";
        document.getElementById(guess3).style.backgroundSize = "100%";
        vh3 = true;
        score++;
        if(vh1 == true && vh2 == true && vh3 == true){
            var x = (score/value)*100;
            alert("YOU WON!!! Your accuracy is : "+x);
            location.reload();
        }
    }
    else if(randNo12 == guess3){
        document.getElementById(guess3).style.backgroundImage = "url('skull.gif')";
        document.getElementById(guess3).style.backgroundSize = "100%";
        var x = (score/value)*100;
        alert("You Lose!!! Your accuracy is : "+x);
        location.reload();
    }
    else{
        document.getElementById(guess3).style.backgroundImage = "url(wrong.png)";
        document.getElementById(guess3).style.backgroundSize = "100%";

    }
}

