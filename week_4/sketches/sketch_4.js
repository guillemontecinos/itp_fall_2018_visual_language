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
  let rSide = actualHeight * .5;
  rectMode(CENTER);
  for (var i = 0; i < 10; i++) {
    let rectColor = paleta[int(random(paleta.length))];
    rectColor.setAlpha(80);
    fill(rectColor);
    push();
      translate(width/2 + random(-.4*rSide, .4*rSide), actualHeight/2 + random(-.4*rSide, .4*rSide));
      push();
        rotate(random(HALF_PI));
        rect(0, 0, rSide, rSide);
      pop();
    pop();
  }

}
