document.addEventListener('DOMContentLoaded', function (x, y) {
    var canva = document.querySelector('#canva');
    var xpos = document.querySelector('.xpos');
    var ypos = document.querySelector('.ypos');
    var linepush = document.querySelector('#l');
    var hints = document.querySelector('.hint');
    var idn = 0;
    var x1 = 0;
    var x2 = 0;
    var y1 = 0;
    var y2 = 0;
    var lines = [];

    var newline = canva.getContext('2d');
    newline.beginPath();
    newline.moveTo(0, 0);
    newline.lineTo(1240, 600);
    newline.lineWidth = 1;
    newline.strokeStyle = '#fff';
    newline.stroke();

    canva.addEventListener('mousemove',function (e) {
        xpos.innerHTML = e.offsetX;
        ypos.innerHTML = e.offsetY;


    });

    function setupCanvas(canvas) {
        // Get the device pixel ratio, falling back to 1.
        var dpr = window.devicePixelRatio || 1;
        // Get the size of the canvas in CSS pixels.
        var rect = canvas.getBoundingClientRect();
        // Give the canvas pixel dimensions of their CSS
        // size * the device pixel ratio.
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        var ctx = canvas.getContext('2d');
        // Scale all drawing operations by the dpr, so you
        // don't have to worry about the difference.
        ctx.scale(dpr, dpr);
        return ctx;
    }
    var ctx = setupCanvas(canva);

    function line(x1,y1,x2,y2,idn) {
        this.startX = x1;
        this.starty = y1;
        this.finishx = x2;
        this.finishy = y2;
        this.id = idn;
        this.lineLength = Math.sqrt(Math.pow(Math.abs(x1-x2),2)+Math.pow(Math.abs(y1 - y2), 2));
        this.rotation = Math.atan(Math.abs(x1-x2)/Math.abs(y1-y2));
        this.obj = function () {

            ctx.beginPath();
            ctx.moveTo(this.startX, this.starty);
            ctx.lineTo(this.finishx, this.finishy);
            ctx.lineWidth = 5;
            ctx.strokeStyle = '#fff';
            ctx.stroke();

            idn++;
        }
    }
    function fisrtpoint(e) {
        x1 = e.offsetX;
        y1 = e.offsetY;
        hints.innerHTML = "Select second point";
        console.log(x1);
        console.log(y1);
        canva.addEventListener('click', secondpoint);
        e.stopImmediatePropagation();
        this.removeEventListener("click", fisrtpoint);

    }

    function secondpoint(e) {
        x2 = e.offsetX;
        y2 = e.offsetY;
        hints.innerHTML = "";
        var newl = new line(x1,y1,x2,y2,idn);
        newl.obj();
        console.log(newl);
        lines.push(newl);
        this.removeEventListener('click', secondpoint);
    }

    linepush.addEventListener('click', function () {
        console.log('cliklem linie');
        hints.innerHTML = "Select first point";
        canva.addEventListener('click', fisrtpoint);
    });




});