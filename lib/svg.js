
// SVG ELEMENT
// `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${svgText}</svg>`

// SVG TEXT ELEMENT
// `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${svgColor}">${svgMessage}</text>`

class SVG {
    constructor() {
        this.svgText = ``
    }
    setText(message, color) {
        this.message = message;
        this.color = color;
    }
    setShape() {

    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.svgText}</svg>`
    };
};

module.exports = SVG