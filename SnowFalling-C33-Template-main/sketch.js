var snow, snowImg





function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  snow.createSprite(2400,200,800,400)
}
function preload(){
snowImg = loadImage(snow1.png)


}
function draw() {
  background(255,255,255);  

  drawSprites();
}