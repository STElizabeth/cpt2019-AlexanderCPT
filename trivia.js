var score = 0
var i = 1
var ans = 1
var sound1 = new Audio('CorrectAnswerSoundEffect.mp3'); 
var sound2 = new Audio('WrondAnswerSoundEffect.mp3');
function submitAnswer(){
    y = document.getElementById("qans").value
    var yy=y.toUpperCase();
    x = document.getElementById("question").value
if (ans===1){
    y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are right"
        score++
        sound1.play()
	    document.searchImage.src = "HappyFace.jpg"
    }
    else {
        document.getElementById("question").value="You are wrong"
        sound2.play()
        document.searchImage.src = "SadFace.png"
    }
    document.view.qscore.value=score
}
else if (ans===2){ 
	y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("question").value="You are right"
         score++
         sound1.play()
        document.searchImage.src = "HappyFace.jpg"
    }
    else {
        document.getElementById("question").value="You are wrong"
        sound2.play()
        document.searchImage.src = "SadFace.png"
    }
    document.view.qscore.value=score
}
    
else if (ans===3){ 
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are right"
         score++
        sound1.play()
	    document.searchImage.src = "HappyFace.jpg"
    }
    else {
        document.getElementById("question").value="You are wrong"
        sound2.play()
        document.searchImage.src = "SadFace.png"
    }
    document.view.qscore.value=score
}
else if (ans===4){ 
	y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are right"
         score++
        sound1.play()
	    document.searchImage.src = "HappyFace.jpg"
    }
    else {
        document.getElementById("question").value="You are wrong"
        sound2.play()
        document.searchImage.src = "SadFace.png"
    }
    document.view.qscore.value=score
}
	
	else if (ans==5){ 
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are right"
         score++
        sound1.play()
	    document.searchImage.src = "HappyFace.jpg"
    }
    else {
        document.getElementById("question").value="You are wrong"
        sound2.play()
        document.searchImage.src = "SadFace.png"
    }
    document.view.qscore.value=score
}
	else if (ans===6){ 
	y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("question").value="You are right"
         score++
        sound1.play()
	    document.searchImage.src = "HappyFace.jpg"
    }
    else {
        document.getElementById("question").value="You are wrong"
        sound2.play()
        document.searchImage.src = "SadFace.png"
    }
    document.view.qscore.value=score
}
	
else if (ans===7){ 
	y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("question").value="You are right"
         score++
        sound1.play()
	    document.searchImage.src = "HappyFace.jpg"
    }
    else {
        document.getElementById("question").value="You are wrong"
        sound2.play()
        document.searchImage.src = "SadFace.png"
    }
    document.view.qscore.value=score
}
	
else if (ans===8){ 
	y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are right"
         score++
        sound1.play()
	    document.searchImage.src = "HappyFace.jpg"
    }
    else {
        document.getElementById("question").value="You are wrong"
        sound2.play()
	   document.searchImage.src = "SadFace.png"
        
    }
    document.view.qscore.value=score
}
	
else if (ans===9){ 
	y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("question").value="You are right"
         score++
        sound1.play()
	    document.searchImage.src = "HappyFace.jpg"
    }
    else {
        document.getElementById("question").value="You are wrong"
        sound2.play()
        document.searchImage.src = "SadFace.png"
    }
    document.view.qscore.value=score
}
	
else if (ans===10){ 
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are right"
         score++
        sound1.play()
	    document.searchImage.src = "HappyFace.jpg"
    }
    else {
        document.getElementById("question").value="You are wrong"
        sound2.play()
	    document.searchImage.src = "SadFace.png"
        
    }
    document.view.qscore.value=score
}
	
	ans++; 
}
        
function main(){ 
if (i===1){ 
	document.view.qnum.value=i;
   	document.view.question.value ="Who did the Raptors Draft with the #9 pick in the First Round of the 2016 NBA Draft? \na)Pascal Siakam \nb)Delon Wright \nc)Jokab Poeltl \nd)OG Anunoby";
    document.view.qans.value=""
}
else if (i===2){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Which year did Kyle Lowry get traded to the Raptors? \na)2011 \nb)2012 \nc)2013 \nd)2014";
    document.view.qans.value=""
}
else if (i===3){ 
	document.view.qnum.value=i;	
	document.view.question.value ="What is the most amount of wins the Raptors got in a regular season? \na)59 \nb)58 \nc)60 \nd)57";
    document.view.qans.value=""
}
else if (i===4){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Who Drafted Kawhi Leonard? \na)San Antonio Spurs \nb)Toronto Raptors \nc)Indiana Pacers \nd)Los Angeles Clippers";
    document.view.qans.value=""
}
	
else if (i===5){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Which year did the Raptors make their first Eastern Conference Finals Apperance? \na)2016 \nb)2017 \nc)2018 \nd)2019";
    document.view.qans.value=""
}
	
else if (i===6){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Who did the Raptors draft with the #5 pick in the First Round of the 2011 NBA Draft? \na)Delon Wright \nb)Pascal Siakam \nc)Cory Joseph \nd)Jonas Valanciunas";
    document.view.qans.value=""
}
	
else if (i===7){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Who did the Raptors trade for Serge Ibaka in 2017? \na)Cory Joseph \nb)Terence Ross \nc)Bismack Biyombo \nd)C.J. Miles";
    document.view.qans.value=""
}
	
else if (i===8){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Which year did the Raptors draft DeMar DeRozan? \na)2007 \nb)2008 \nc)2009 \nd)2010";
    document.view.qans.value=""
}
	
else if (i===9){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Which year was Vince Carter's last year as a Raptor? \na)2001 \nb)2002 \nc)2003 \nd)2004";
    document.view.qans.value=""
}
	
else if (i===10){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Who is the current President of the Raptors? \na)Masai Ujiri \nb)Jerry West \nc)Magic Johnson \nd)Adam Silver";
    document.view.qans.value=""
}
	i++; 
}
