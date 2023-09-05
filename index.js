const fs = require('fs');
const {Shape, Square, Triangle, Circle} = require('./lib/shapes')
const SVG = require('./lib/svg')



const circle = new Circle();
circle.setColor("red")
circle.render();


const svg = new SVG();
svg.setText("MJM", "yellow")
svg.setShape(circle)
console.log(svg)
svg.render();

