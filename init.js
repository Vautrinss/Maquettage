var canvas = new fabric.Canvas('canvas');
canvas.backgroundColor = "silver";
ctx = document.getElementById("canvas").getContext("2d");

canvas.renderAll();

function addtext(){
var texte = document.getElementById("texte").value;
var police = document.getElementById("mypolice").value;
var comicSansText = new fabric.Text(texte, {
    fontFamily: police,
});

canvas.add(comicSansText);
    canvas.renderAll();
}

function addcircle(){
    var x = document.getElementById("myColor").value;
    var circle = new fabric.Circle({
        top:140,
        left:230,
        radius:75,
        fill: x
    });
    canvas.add(circle);
    canvas.renderAll();
}

function addsquare() {
    var rect = new fabric.Rect({
        top : 100,
        left : 100,
        width : 60,
        height : 70
    });
    canvas.add(rect);
    canvas.renderAll();
}

function removeme() {
    var activeobject = canvas.getActiveObject();
    canvas.remove(activeobject);
    canvas.renderAll();
}

canvas.backgroundColor.onchange = function() {
    canvas.getActiveObject().set("fill", 'red');
    canvas.renderAll();
};

function changecolor() {
    var textcolor = document.getElementById("myColor").value;
    var activeObjectcolor = canvas.getActiveObject();
    canvas.getActiveObject().setFill(textcolor);
    canvas.renderAll();
}

function changeSize() {
    var sizeT = document.getElementById("sizeText").value;
    var activeObjectcolor = canvas.getActiveObject();
    canvas.getActiveObject().setFontSize(sizeT);
    canvas.renderAll();
}

function downloadURI(uri, name) {
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    delete link;
}

function expIMG() {
    downloadURI(canvas.toDataURL(), "billet.jpeg");
}


function expJSON(){
    json = encodeURI(canvas.toJSON());
    window.open(json);
}

function changebackground(){
    var couleur = document.getElementById("pickBgColor").value;
    canvas.setBackgroundColor(couleur, canvas.renderAll.bind(canvas));
}

function ajouterimagebackground(){
    var url = document.getElementById("imageURL").value;
    fabric.Image.fromURL(url, function(img) {
        img.set({width: canvas.width, height: canvas.height, originX: 'left', originY: 'top'});
        canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas));
    });
}

function changerLargeur(){
    var largeur = document.getElementById("largeurTicket").value;
    canvas.setWidth(largeur) ;
    canvas.renderAll();
}

function changerLongueur(){
    var longueur = document.getElementById("longueurTicket").value;
    canvas.setHeight(longueur) ;
    canvas.renderAll();
}

// Event handling
canvas.on('selection:created', function(options) {
    if (options.target) {
        menuSelectOn();
    }
});

canvas.on('object:selected', function(options) {
    if (options.target) {
        menuSelectOn();
    }
});

canvas.on('selection:cleared', function(options) {
    menuSelectOff();
});

function menuSelectOn(){
    document.getElementById("menu_select").style.display = 'block';
};

function menuSelectOff(){
    document.getElementById("menu_select").style.display = 'none';
};