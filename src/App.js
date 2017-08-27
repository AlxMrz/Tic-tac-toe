'use strict';
class App {
  constructor() {
    this.game = new Game();
    this.game.setAI( new ArtificialIntelligent( this.game ) );
    this.game.cellAgregator = new CellAgregator( this.game );
    this.cells = document.getElementsByClassName( 'cell' );
  }
  /**
   * Назначает каждой ячейке событие onclick с методом Game.mainProcess
   * Инициирует само приложение.
   */
  run() {
    for ( var i = 0; i <= this.cells.length - 1; i++ ) {
      var currentCell = this.cells[ i ];
      currentCell.onclick = function ( currentCell ) {
        this.game.mainProcess( currentCell.target );
      }.bind( this );
    }
  }
}

( new App() ).run();
