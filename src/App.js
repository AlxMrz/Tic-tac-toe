class App {
    constructor() {
        this.game = new Game();
        this.game.setAI( new ArtificialIntelligent( this.game ) );
        
        this.cells = document.getElementsByClassName( 'cell' );
        console.log( this );
    }
    run() {
        for (var i = 0; i <= this.cells.length - 1; i++) {
            
            var currentCell = this.cells[ i ];
            console.log(this.cells.length);
            currentCell.onclick = function ( currentCell ) {
                console.log(currentCell.target);
                this.game.mainProcess(currentCell.target);
            }.bind(this);
        }
    }
}

(new App()).run();
