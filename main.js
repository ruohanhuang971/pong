'use strict'

import Game from "./game.js"

function main() {
    const game = new Game();
    game.gameInit();
    if (game.isRunning) {
        // game.gameLoop();
    }
}

main();