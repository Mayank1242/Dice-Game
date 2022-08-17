var randomNumber1=Math.floor(Math.random()*6)+1;
var randomdiceimg="images/dice"+randomNumber1+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomdiceimg);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomdiceimg2="images/dice"+randomNumber2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomdiceimg2);

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="😎Player One Wins";
}else if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML="😎Player Two Wins";
}else{
  document.querySelector("h1").innerHTML="Match Draw!";
}
