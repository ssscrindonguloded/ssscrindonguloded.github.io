let xScale = 0.015;
let yScale = 0.02;

function setup() {
  let canvas = createCanvas(windowWidth-17, 100);
  canvas.parent('crea');  
  gap = 15;
  offset = 105;
  dotGrid();
}

function dotGrid() {
  background(65, 65, 65);
  noStroke();
  fill(255);

  for (let x = gap / 2; x < width; x += gap) {
    for (let y = gap / 2; y < height; y += gap) {
      let noiseValue = noise((x + offset) * xScale, (y + offset) * yScale);
      let diameter = noiseValue * gap;
      circle(x, y, diameter);
    }
  }
}