class App {
    constructor() {
        this.game = new Game();
        console.log(game);
        this.cells = document.getElementsByClassName('cell');
        console.log(this.cells);
        for (var i=0;i<this.cells.length-1;i++) {
            console.log(this.cells[i]);
            this.cells[i].onclick = function () {
                this.game.mainProcess();
            }
        }
    }
}

new App();
