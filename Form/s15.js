function setup() {
  createCanvas(1400, 720);
  colorMode(HSB);
  angleMode(DEGREES);

 
  let x = width / 2;
  let y = height / 2 + 100;
  colorWheel(x, y, 200); //slide 11

  noStroke();
  pieChartPop(200, 100); //slide 12
}

function pieChartPop(x, y) {
  let [total, child, young, adult, senior, elder] = [577, 103, 69,
    122, 170, 113
  ];
  let startValue = 0;
  let range = 0;

  //child slice
  range = child / total;
  drawSlice("blue", x, y, 200, startValue, startValue + range);
  startValue += range;
  //young slice
  range = young / total;
  drawSlice("orange", x, y, 200, startValue, startValue + range);
  startValue += range;
  //adult slice
  range = adult / total;
  drawSlice("green", x, y, 200, startValue, startValue + range);
  startValue += range;
  //senior slice
  range = senior / total;
  drawSlice("tan", x, y, 200, startValue, startValue + range);
  startValue += range;
  //elder slice
  range = elder / total;
  drawSlice("pink", x, y, 200, startValue, startValue + range);
  startValue += range;

}


function drawSlice(fColor, x, y, d, percent1, percent2) {
  fill(fColor);
  arc(x, y, d, d, -90 + percent1 * 360, -90 + percent2 * 360);
}

//**** slide 11 trig demo 
function colorWheel(x, y, rad) {
  strokeWeight(10);
  strokeCap(SQUARE);

  //Iterate 360 degrees of lines, +10deg per turn
  for (let a = 0; a < 360; a += 10) {
    stroke(a, 150, 200); //hue based on a
    //radius is 100, angle is a degrees
    line(x, y, x + rad * cos(a),
      y + rad * sin(a));
  }
}