function setup() {
  createCanvas(500, 500);      
  background(100);
}

function draw() {
  strokeWeight(0);
  if(mouseIsPressed){
   background(100);
 } else{
   //star
   frameRate(1);
   fill(255) 
   triangle(mouseX,mouseY-10,mouseX-5,mouseY,mouseX+5,mouseY);
   triangle(mouseX,mouseY+5,mouseX+5,mouseY-5,mouseX-5,mouseY-5);
 }
 //buildings
   strokeWeight(3);
  fill(148, 180, 232);
  rect(100,100,100,200);
  rect(200,125,75,175);
  rect(150,150,100,150);
  rect(300,100,100,200);
  rect(350,75,100,225);
  //buildings
   if(mouseIsPressed){
     fill(148, 180, 232);
    rect(100,100,100,200);
    rect(200,125,75,175);
    rect(150,150,100,150);
    rect(300,100,100,200);
    rect(350,75,100,225);
   //windows Off
    fill(0);
    rect(100,125,30,25);
    rect(170,125,30,25);
    rect(100,175,30,25);
    rect(100,225,30,25);
    rect(150,160,30,25);
    rect(150,210,30,25);
    rect(150,260,30,25);
    rect(220,160,30,25);
    rect(220,210,30,25);
    rect(220,260,30,25);
    rect(300,125,30,25);
    rect(300,175,30,25);
    rect(300,225,30,25);
    rect(350,100,30,25);
    rect(350,150,30,25);
    rect(350,200,30,25);
    rect(350,250,30,25);
    rect(420,100,30,25);
    rect(420,150,30,25);
    rect(420,200,30,25);
    rect(420,250,30,25);
   }else{
    //windows On
   fill(252, 255, 117);
   rect(100,125,30,25);
   rect(170,125,30,25);
   rect(100,175,30,25);
   rect(100,225,30,25);
   rect(150,160,30,25);
   rect(150,210,30,25);
   rect(150,260,30,25);
   rect(220,160,30,25);
   rect(220,210,30,25);
   rect(220,260,30,25);
   rect(300,125,30,25);
   rect(300,175,30,25);
   rect(300,225,30,25);
   rect(350,100,30,25);
   rect(350,150,30,25);
   rect(350,200,30,25);
   rect(350,250,30,25);
   rect(420,100,30,25);
   rect(420,150,30,25);
   rect(420,200,30,25);
   rect(420,250,30,25);
   }
    strokeWeight(0);
  //C
  fill(148, 180, 232);
  rect(25,300,450,1750);
  fill(255);
  ellipse(125,400,150,150);
  //i
  fill(148, 180, 232);
  ellipse(125,400,90,90);
  rect(125,300,350,1750);
  fill(255);
  rect(150,325,35,150);
  fill(148, 180, 232);
  rect(150,350,325,25);
  rect(150,300,325,25);
  rect(150,475,325,25);
  //t
  fill(255);
  rect(200,325,125,100);
  ellipse(275,425,100,100);
  fill(148, 180, 232);
  rect(200,375,25,100);
  rect(200,325,25,25);
  rect(250,325,75,25);
  rect(250,375,75,50);
  ellipse(275,425,50,50);
  //y
  fill(255);
  ellipse(374.5,450,75,75);
  fill(148, 180, 232);
  ellipse(374.5,450,25,25);
  rect(325,400,150,50);
  fill(255);
  ellipse(400,375,100,100);
  rect(387,375,25,75);
  fill(148, 180, 232);
  rect(325,325,150,50);
  ellipse(400,375,50,50);
  
}