var myName=prompt("ENTER YOUR NAME HERE");
console.log(myName);
alert("HI ,"+myName);
document.write(myName + " Your name is saved in variable.</br>");
let game=confirm("want to visit DCI WebPAGE");
if(game==true){
    window.open("https://digitalcareerinstitute.org/","_blank");
}
else{
    window.open("https://google.com/","width=500,height=500");
}
