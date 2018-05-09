function Dot(xpos, ypos, xstep, ystep, color, id) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.xstep = xstep;
    this.ystep = ystep;
    this.id = id;
    this.color = color;
    var elem = document.getElementById(this.id);
    this.render = function () {
        elem.style.top = this.ypos + 'px';
        elem.style.left = this.xpos + 'px';
        elem.style.backgroundColor = color;
    }
}

var dots = [];
var numDots = 10;
var container = document.getElementById("container");

for(var i = 0; i < numDots; i++){
    var elem = document.createElement("div");
    elem.className = "dot";
    elem.id = "dot" + i;
    container.appendChild(elem);
    dots[i] = new Dot(Math.random()*750,
                       Math.random()*750,
                       Math.random(),
                       Math.random(),
                       '#'+Math.floor(Math.random()*16777215).toString(16),
                       elem.id);
}

var id = setInterval(frame, 5);

function frame() {
    for (var i = 0; i < dots.length; i++) {
        if (dots[i].xpos > 750 || dots[i].xpos < 0) {
            dots[i].xstep = -dots[i].xstep;
        }
        if (dots[i].ypos > 750 || dots[i].ypos < 0) {
            dots[i].ystep = -dots[i].ystep;
        }

        dots[i].xpos = dots[i].xpos + dots[i].xstep;
        dots[i].ypos = dots[i].ypos + dots[i].ystep;
        dots[i].render();
    }
}
