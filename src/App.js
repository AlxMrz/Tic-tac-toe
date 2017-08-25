class App {
    constructor() {
        this.game = new Game();
        this.cells = document.getElementsByClassName( 'cell' );
        console.log( this );
    }
    run() {
        for (var i = 0; i < this.cells.length - 1; i++) {
            this.cells[ i ].onclick = function () {
                console.log(this);
                this.game.mainProcess();
            }.bind(this);
        }
    }
}

(new App()).run();
