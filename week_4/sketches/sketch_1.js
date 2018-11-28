// template by Guillermo Montecinos
// for visual language assignmente
// actual canvas created: 800x740
// useful canvas: 800x640

let paleta;
let actualHeight = 640;
let paletteFrame = 100;

function setup() {
  colorMode(RGB);
  paleta = [color(0,0,0),color(120,143,172), color(91,129,41), color(196,180,144), color(252,167,186), color(255,255,255)];
  createCanvas(800,actualHeight+paletteFrame);
  background(240);
  noStroke();
  // palette drawing
  rectMode(CENTER);
  for (var i = 0; i < paleta.length; i++) {
    fill(paleta[i]);
    rect((i+.5)*width/paleta.length,actualHeight+(height-actualHeight)/2,(height-actualHeight)*.8,(height-actualHeight)*.8,10);
  }
  // Drawing current sketch
  drawSketch();
}

function draw() {

}

function drawSketch(){
  // drawing rects from above to de lowest part of the canvas changing its brightness
  // setting values
  let cuadrantW = width/paleta.length;
  let cuadrantH = cuadrantW*.8;
  let rectWidth = cuadrantW * .6;
  let rectHeight = rectWidth;
  let verticalCuadrants = int(actualHeight/rectHeight)-1;
  console.log(verticalCuadrants);
  //
  colorMode(HSB);
  noStroke();
  rectMode(CENTER);
  for (var i = 0; i < paleta.length; i++) {
    for (var j = 0; j < verticalCuadrants-1; j++) {
      fill(hue(paleta[i]),map(j,0,verticalCuadrants,saturation(paleta[i]),0),brightness(paleta[i]));
      // fill(hue(paleta[i]),saturation(paleta[i]),brightness(paleta[i]));
      push();
        translate((i+.5)*cuadrantW, (j+.5)*cuadrantH);
        rotate(random(0,HALF_PI*j/(verticalCuadrants-1)));
        // rotate(TWO_PI);
        rect(0,0, rectWidth, rectHeight);
      pop();
    }
  }
}
