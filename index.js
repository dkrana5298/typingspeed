var container=document.getElementById('container');
var right=document.getElementById('right');
var sad=document.getElementById('sad');
var happy=document.getElementById('happy');
// var count=0;
function countChars(container,wpm){
    var text=document.getElementById('container').value;
    var word=text.split(" ");
    var count=0;
    for(var i=0;i<word.length;i++){
       if(word[i]==""){
       count +=0;
       }
       else {
          count +=1;
       }
    }
    document.getElementById('wpm').innerHTML=count - 1 ;
    if((count-1) < 1 ){
        sad.style.display= "block";
        
    }
    else {
        happy.style.display= "block";
        sad.style.display= "none";
    }
 }
 
 var interval;
 var second=0;
 function timer(){
   clearInterval(interval);
  interval=setInterval(startTimer, 1000);
  
 }
function startTimer(){
    second++;
    if(second < 10){
        document.getElementById('timer').innerHTML="0" + second + " sec";
    }
    if(second > 9){
        document.getElementById('timer').innerHTML=second + " sec";
    }
   if(second===5){
       document.getElementById('average').innerHTML=
       "your speed there:";
       right.style.display= "block";
       right.style.display= "inline";
       container.style.display= "none";
       clearInterval(interval)
     
   }
}
