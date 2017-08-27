 'use strict';
class NormalStrategy extends DifficultStrategy {
  constructor( game ) {
    super( game );
    this.easyStrategy = new EasyStrategy( game );
  }
  makeWay() {
    var aiWay = this.AI_Way();
    console.log("NORMAI WAY:" + aiWay);
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
    var cellAgregator = this.game.cellAgregator;
// Первая горизонтальная строка
    if ( cellAgregator.Cell1 === cellAgregator.Cell2 && cellAgregator.Cell2 !== 0 && cellAgregator.Cell3 === 0 ) {
       aiWay = 3;
    } else if ( cellAgregator.Cell1 === cellAgregator.Cell3 && cellAgregator.Cell3 !== 0 && cellAgregator.Cell2 === 0 ) {
       aiWay = 2;
    } else if ( cellAgregator.Cell2 === cellAgregator.Cell3 && cellAgregator.Cell3 !== 0 && cellAgregator.Cell1 === 0 ) {
       aiWay = 1;
    }
// Вторая горизонтальная строка
    else if ( cellAgregator.Cell4 === cellAgregator.Cell5 && cellAgregator.Cell5 !== 0 && cellAgregator.Cell6 === 0 ) {
       aiWay = 6;
    } else if ( cellAgregator.Cell5 === cellAgregator.Cell6 && cellAgregator.Cell6 !== 0 && cellAgregator.Cell4 === 0 ) {
       aiWay = 4;
    } else if ( cellAgregator.Cell4 === cellAgregator.Cell6 && cellAgregator.Cell6 !== 0 && cellAgregator.Cell5 === 0 ) {
      aiWay = 5;
    }
//Третья горизонтальная строка
    else if ( cellAgregator.Cell7 === cellAgregator.Cell8 && cellAgregator.Cell8 !== 0 && cellAgregator.Cell9 === 0 ) {
      aiWay = 9;
    } else if ( cellAgregator.Cell7 === cellAgregator.Cell9 && cellAgregator.Cell9 !== 0 && cellAgregator.Cell8 === 0 ) {
      aiWay = 8;
    } else if ( cellAgregator.Cell8 === cellAgregator.Cell9 && cellAgregator.Cell9 !== 0 && cellAgregator.Cell7 === 0 ) {
      aiWay = 7;
    }
//Первая вертикальная строка
    else if ( cellAgregator.Cell1 === cellAgregator.Cell4 && cellAgregator.Cell4 !== 0 && cellAgregator.Cell7 === 0 ) {
      aiWay = 7;
    } else if ( cellAgregator.Cell1 === cellAgregator.Cell7 && cellAgregator.Cell7 !== 0 && cellAgregator.Cell4 === 0 ) {
      aiWay = 4;
    } else if ( cellAgregator.Cell4 === cellAgregator.Cell7 && cellAgregator.Cell7 !== 0 && cellAgregator.Cell1 === 0 ) {
      aiWay = 1;
    }
//Вторая вертикальная строка
    else if ( cellAgregator.Cell2 === cellAgregator.Cell5 && cellAgregator.Cell5 !== 0 && cellAgregator.Cell8 === 0 ) {
      aiWay = 8;
    } else if ( cellAgregator.Cell2 === cellAgregator.Cell8 && cellAgregator.Cell8 !== 0 && cellAgregator.Cell5 === 0 ) {
      aiWay = 5;
    } else if ( cellAgregator.Cell5 === cellAgregator.Cell8 && cellAgregator.Cell8 !== 0 && cellAgregator.Cell2 === 0 ) {
      aiWay = 2;
    }
//Третья вертикальная строка
    else if ( cellAgregator.Cell3 === cellAgregator.Cell6 && cellAgregator.Cell6 !== 0 && cellAgregator.Cell9 === 0 ) {
      aiWay = 9;
    } else if ( cellAgregator.Cell3 === cellAgregator.Cell9 && cellAgregator.Cell9 !== 0 && cellAgregator.Cell6 === 0 ) {
      aiWay = 6;
    } else if ( cellAgregator.Cell6 === cellAgregator.Cell9 && cellAgregator.Cell9 !== 0 && cellAgregator.Cell3 === 0 ) {
      aiWay = 3;
    }
//Первая наклонная строка
    else if ( cellAgregator.Cell1 === cellAgregator.Cell5 && cellAgregator.Cell5 !== 0 && cellAgregator.Cell9 === 0 ) {
      aiWay = 9;
    } else if ( cellAgregator.Cell1 === cellAgregator.Cell9 && cellAgregator.Cell9 !== 0 && cellAgregator.Cell5 === 0 ) {
      aiWay = 5;
    } else if ( cellAgregator.Cell5 === cellAgregator.Cell9 && cellAgregator.Cell9 !== 0 && cellAgregator.Cell1 === 0 ) {
      aiWay = 1;
    }
//Вторая наклонная строка
    else if ( cellAgregator.Cell3 === cellAgregator.Cell5 && cellAgregator.Cell5 !== 0 && cellAgregator.Cell7 === 0 ) {
      aiWay = 7;
    } else if ( cellAgregator.Cell3 === cellAgregator.Cell7 && cellAgregator.Cell7 !== 0 && cellAgregator.Cell5 === 0 ) {
      aiWay = 5;
    } else if ( cellAgregator.Cell5 === cellAgregator.Cell7 && cellAgregator.Cell7 !== 0 && cellAgregator.Cell3 === 0 ) {
      aiWay = 3;
    }
    return aiWay;
  }
}