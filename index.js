const fs = require('fs');
const {Shape, Square, Triangle, Circle} = require('./lib/shapes')
const SVG = require('./lib/svg')



const circle = new Circle();
circle.setColor("green")
circle.render();




