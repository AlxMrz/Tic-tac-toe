 'use strict';
class NormalStrategy extends DifficultStrategy {
  constructor( game ) {
    super( game );
    this.easyStrategy = new EasyStrategy( game );
  }
  makeWay() {
    var aiWay = this.AI_Way();
    if ( aiWay === false ) {
      aiWay = this.easyStrategy.AI_Random();
    }
    return aiWay;
  }
  /**
   * Ищет ячейки, которые могут завершить игру, т.е. 2 занятые подряд от любого игрока
   * @returns {*}
   */
  AI_Way() {
    var aiWay = false;
// Первая горизонтальная строка
    if ( this.game.Cell1 === this.game.Cell2 && this.game.Cell2 !== 0 && this.game.Cell3 === 0 ) {
       aiWay = 3;
    } else if ( this.game.Cell1 === this.game.Cell3 && this.game.Cell3 !== 0 && this.game.Cell2 === 0 ) {
       aiWay = 2;
    } else if ( this.game.Cell2 === this.game.Cell3 && this.game.Cell3 !== 0 && this.game.Cell1 === 0 ) {
       aiWay = 1;
    }
// Вторая горизонтальная строка
    else if ( this.game.Cell4 === this.game.Cell5 && this.game.Cell5 !== 0 && this.game.Cell6 === 0 ) {
       aiWay = 6;
    } else if ( this.game.Cell5 === this.game.Cell6 && this.game.Cell6 !== 0 && this.game.Cell4 === 0 ) {
       aiWay = 4;
    } else if ( this.game.Cell4 === this.game.Cell6 && this.game.Cell6 !== 0 && this.game.Cell5 === 0 ) {
      aiWay = 5;
    }
//Третья горизонтальная строка
    else if ( this.game.Cell7 === this.game.Cell8 && this.game.Cell8 !== 0 && this.game.Cell9 === 0 ) {
      aiWay = 9;
    } else if ( this.game.Cell7 === this.game.Cell9 && this.game.Cell9 !== 0 && this.game.Cell8 === 0 ) {
      aiWay = 8;
    } else if ( this.game.Cell8 === this.game.Cell9 && this.game.Cell9 !== 0 && this.game.Cell7 === 0 ) {
      aiWay = 7;
    }
//Первая вертикальная строка
    else if ( this.game.Cell1 === this.game.Cell4 && this.game.Cell4 !== 0 && this.game.Cell7 === 0 ) {
      aiWay = 7;
    } else if ( this.game.Cell1 === this.game.Cell7 && this.game.Cell7 !== 0 && this.game.Cell4 === 0 ) {
      aiWay = 4;
    } else if ( this.game.Cell4 === this.game.Cell7 && this.game.Cell7 !== 0 && this.game.Cell1 === 0 ) {
      aiWay = 1;
    }
//Вторая вертикальная строка
    else if ( this.game.Cell2 === this.game.Cell5 && this.game.Cell5 !== 0 && this.game.Cell8 === 0 ) {
      aiWay = 8;
    } else if ( this.game.Cell2 === this.game.Cell8 && this.game.Cell8 !== 0 && this.game.Cell5 === 0 ) {
      aiWay = 5;
    } else if ( this.game.Cell5 === this.game.Cell8 && this.game.Cell8 !== 0 && this.game.Cell2 === 0 ) {
      aiWay = 2;
    }
//Третья вертикальная строка
    else if ( this.game.Cell3 === this.game.Cell6 && this.game.Cell6 !== 0 && this.game.Cell9 === 0 ) {
      aiWay = 9;
    } else if ( this.game.Cell3 === this.game.Cell9 && this.game.Cell9 !== 0 && this.game.Cell6 === 0 ) {
      aiWay = 6;
    } else if ( this.game.Cell6 === this.game.Cell9 && this.game.Cell9 !== 0 && this.game.Cell3 === 0 ) {
      aiWay = 3;
    }
//Первая наклонная строка
    else if ( this.game.Cell1 === this.game.Cell5 && this.game.Cell5 !== 0 && this.game.Cell9 === 0 ) {
      aiWay = 9;
    } else if ( this.game.Cell1 === this.game.Cell9 && this.game.Cell9 !== 0 && this.game.Cell5 === 0 ) {
      aiWay = 5;
    } else if ( this.game.Cell5 === this.game.Cell9 && this.game.Cell9 !== 0 && this.game.Cell1 === 0 ) {
      aiWay = 1;
    }
//Вторая наклонная строка
    else if ( this.game.Cell3 === this.game.Cell5 && this.game.Cell5 !== 0 && this.game.Cell7 === 0 ) {
      aiWay = 7;
    } else if ( this.game.Cell3 === this.game.Cell7 && this.game.Cell7 !== 0 && this.game.Cell5 === 0 ) {
      aiWay = 5;
    } else if ( this.game.Cell5 === this.game.Cell7 && this.game.Cell7 !== 0 && this.game.Cell3 === 0 ) {
      aiWay = 3;
    }
    return aiWay;
  }
}