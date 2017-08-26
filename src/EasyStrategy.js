 'use strict';

class EasyStrategy extends DifficultStrategy {
  makeWay() {
    return this.AI_Random();
  }
  /**
   * Делает рандомный ход в свободную клетку
   * Используется при слабом уровне сложности и при не возможности расчитать дальнейший ход
   * @returns {number}
   */
  AI_Random() {
    for ( var x = true; x === true; ) {
      var aiWay = Math.floor( ( Math.random() * 9 ) + 1 );
      this.setCellIfUndefined( aiWay );
      if ( this.game.checkCell( this.cell ) === false ) {
        delete this.cell;
        continue;
      } else {
        x = false;
      }
    }
    return aiWay;
  }
  setCellIfUndefined( aiWay ) {
    if(this.cell === undefined) {
      this.cell = document.getElementById( "cell" + aiWay );
    }
  }
}