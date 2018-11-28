document.addEventListener('DOMContentLoaded', function () {
    var canva = document.querySelector('.canva');
    var xpos = document.querySelector('.xpos');
    var ypos = document.querySelector('.ypos');
    var linepush = document.querySelector('#l');
    var hints = document.querySelector('.hint');
    var idn = 0;
    var clicked = 0;
    var x1 = 0;
    var x2 = 0;
    var y1 = 0;
    var y2 = 0;

    canva.addEventListener('mousemove',function (e) {
        xpos.innerHTML = e.offsetX;
        ypos.innerHTML = e.offsetY;


    });

    function line(x1,y1,x2,y2) {
        this.startX = x1;
        this.starty = y1;
        this.finishx = x2;
        this.finishy = y2;
        this.id = idn;
        this.lineLength = Math.sqrt(Math.pow(Math.abs(x1-x2),2)+Math.pow(Math.abs(y1-y2)));
        this.rotation = Math.atan(Math.abs(x1-x2)/Math.abs(y1-y2));
        function create() {
            canva.innerHTML = "<div class = 'white'></div>";
            var newline = canva.querySelector('.white');
            newLine.style.width = this.lineLength;
            newline.style.transform = 'rotate('+rotation+'drg)';
            idn++;
            console.log('divek powstal?');
        }
    }
    function fisrtpoint(e) {
        x1 = this.offsetX;
        y1 = this.offsetY;
        hints.innerHTML = "Select second point";
        canva.addEventListener('click', secondpoint);
        e.stopImmediatePropagation();
        this.removeEventListener("click", fisrtpoint);
        // canva.onclick = secondpoint;

    }

    function secondpoint() {
        x2 = this.offsetX;
        y2 = this.offsetY;
        hints.innerHTML = "";
        var newl = new line(x1,y1,x2,y2);
        console.log(newl);
        this.removeEventListener('click', secondpoint);
    }

    linepush.addEventListener('click', function () {
        console.log('cliklem linie');
        hints.innerHTML = "Select first point";
        canva.addEventListener('click', fisrtpoint);
    });




});