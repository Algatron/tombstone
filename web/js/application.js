
$(document).ready(function mapping() {

    var CANVAS = {
        id: 'mainCanvas',
        height: 300,
        width: 500
    };

    var canvas = document.getElementById(CANVAS.id);
    canvas.setAttribute('width', CANVAS.width.toString());
    canvas.setAttribute('height', CANVAS.height.toString());
    canvas.addEventListener("mousewheel", MouseWheelHandler, false);
    canvas.addEventListener("DOMMouseScroll", MouseWheelHandler, false);

    var gravesStage = new createjs.Stage(CANVAS.id);
    var zoom;

    function MouseWheelHandler(e) {
        if(Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)))>0)
            zoom=1.1;
        else
            zoom=1/1.1;

        gravesStage.scaleX=gravesStage.scaleY*=zoom;

        gravesStage.update();
    }


    var border = new createjs.Shape();

    border.graphics.beginFill("black").drawRect(0, 0, CANVAS.width, CANVAS.height);


    var circle = new createjs.Shape();
    circle.graphics.beginFill("blue").drawCircle(0,0,50);
    circle.x = 50;
    circle.y = 50;
    circle.on("pressmove",
        function(evt) {
            console.log('dragin?');
            evt.target.x = evt.stageX;
            evt.target.y = evt.stageY;
            gravesStage.update();
        }
    );
    circle.on("pressup",
        function(evt) {
            console.log("up");
        }
    );

    gravesStage.addChild(border);
    gravesStage.addChild(circle);
    gravesStage.update();

});
