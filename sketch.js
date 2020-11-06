//Create variables here
var dog, happyDog, dogIMG, happyDogIMG
var database
var foodS, foodStock;
function preload() {
  //load images here
  dogIMG = loadImage("dog.png")
  happyDogIMG = loadImage("happydog.png")
}
function setup() {
  createCanvas(500, 500);
  console.log("firebase = " + firebase)
  database = firebase.database();
  dog = createSprite(250, 250, 1, 1);
  dog.scale = 0.5; dog.addImage(dogIMG)
  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
}
function draw() {
  background(46, 139, 87)
  if (keyWentDown(UP_ARROW)) {
    writeStock(foodS);
    dog.addImage(happyDogIMG);
  }
  drawSprites();
  //add styles here fill("white") text("Remaining Food: " + foodS, 200, 50); // fill("red"); //text("Remaining Food text ",200,200)
}
function readStock(data) {
  foodS = data.val();
}


function writeStock(x) {
  if (x <= 0) { x = 0 }
  else { x = x - 1 } database.ref('/').update({
    Food: x
  })
}
