class EasyStrategy {
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
      var obj = document.getElementById( "cell" + aiWay );
      if ( checkCell( obj ) === false ) {
        continue;
      } else {
        x = false;
      }
    }
    return aiWay;
  }
}