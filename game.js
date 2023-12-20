class Game {
    constructor(canvas){
        this.isRunning = true;
        this.canvas = canvas;
    }
    
    gameInit() {
        console.log("Initializing App")
        //get canvas and get webgl conetext
        var canvas = document.getElementById('game-surface');
        canvas.addEventListener("contextmenu", event => event.preventDefault());
        var gl = canvas.getContext("webgl2");
        if (!gl) {
            alert("Your browser does not support webgl");
            this.isRunning = false;
        }
    
        //resize canvas to window size
        // canvas.width = window.innerWidth;
        // canvas.height = window.innerHeight;
        // gl.viewport(0, 0, window.innerWidth, window.innerHeight);
    
        //background color
        gl.clearColor(0.75, 0.85, 0.8, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    }

    // run while game does not end
    // gameLoop(){
    //     while(this.isRunning) {
    //         processInput();
    //         updateGame();
    //         generateOutput();
    //     }
    // }
    // // shutDown(){
    // //     this.isRunning = false;
    // //     console.log("Ending");
    // // }

    // processInput(){
    //     if ()
    // }
    // updateGame(){}
    // generateOutput(){}
}

export default Game;