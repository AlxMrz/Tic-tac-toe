class ArtificialIntelligent {
  constructor( game ) {
    this.game = game;
    console.log('getDifLvl' in game);
    this.diffcult = game.getDifLvl();
    switch ( this.difficult ) {
      case 'Легко':
        this.compositor = new EasyStrategy(game);
        break;
      case 'Нормально':
        this.compositor = new NormalStrategy(game);
        break;
      case 'Сложно':
        this.compositor = new HardStrategy(game);
        break;
    }
  }
  /**
   * Имитация Искуственного интеллекта
   * @constructor
   */
  makeWayByAI() {
    aiWay = this.compositor.makeWay();
    var obj = document.getElementById( "cell" + aiWay );
    changeVal( obj );
  }
  /**
   * Ищет ячейки, которые могут завершить игру, т.е. 2 занятые подряд от любого игрока
   * @returns {*}
   * @constructor
   */
  AI_Way() {
// Первая горизонтальная строка
    if ( Cell1 === Cell2 && Cell2 !== 0 && Cell3 === 0 ) {
      return aiWay = 3;
    } else if ( Cell1 === Cell3 && Cell3 !== 0 && Cell2 === 0 ) {
      return aiWay = 2;
    } else if ( Cell2 === Cell3 && Cell3 !== 0 && Cell1 === 0 ) {
      return aiWay = 1;
    }
// Вторая горизонтальная строка
    else if ( Cell4 === Cell5 && Cell5 !== 0 && Cell6 === 0 ) {
      return aiWay = 6;
    } else if ( Cell5 === Cell6 && Cell6 !== 0 && Cell4 === 0 ) {
      return aiWay = 4;
    } else if ( Cell4 === Cell6 && Cell6 !== 0 && Cell5 === 0 ) {
      return aiWay = 5;
    }
//Третья горизонтальная строка
    else if ( Cell7 === Cell8 && Cell8 !== 0 && Cell9 === 0 ) {
      return aiWay = 9;
    } else if ( Cell7 === Cell9 && Cell9 !== 0 && Cell8 === 0 ) {
      return aiWay = 8;
    } else if ( Cell8 === Cell9 && Cell9 !== 0 && Cell7 === 0 ) {
      return aiWay = 7;
    }
//Первая вертикальная строка
    else if ( Cell1 === Cell4 && Cell4 !== 0 && Cell7 === 0 ) {
      return aiWay = 7;
    } else if ( Cell1 === Cell7 && Cell7 !== 0 && Cell4 === 0 ) {
      return aiWay = 4;
    } else if ( Cell4 === Cell7 && Cell7 !== 0 && Cell1 === 0 ) {
      return aiWay = 1;
    }
//Вторая вертикальная строка
    else if ( Cell2 === Cell5 && Cell5 !== 0 && Cell8 === 0 ) {
      return aiWay = 8;
    } else if ( Cell2 === Cell8 && Cell8 !== 0 && Cell5 === 0 ) {
      return aiWay = 5;
    } else if ( Cell5 === Cell8 && Cell8 !== 0 && Cell2 === 0 ) {
      return aiWay = 2;
    }
//Третья вертикальная строка
    else if ( Cell3 === Cell6 && Cell6 !== 0 && Cell9 === 0 ) {
      return aiWay = 9;
    } else if ( Cell3 === Cell9 && Cell9 !== 0 && Cell6 === 0 ) {
      return aiWay = 6;
    } else if ( Cell6 === Cell9 && Cell9 !== 0 && Cell3 === 0 ) {
      return aiWay = 3;
    }
//Первая наклонная строка
    else if ( Cell1 === Cell5 && Cell5 !== 0 && Cell9 === 0 ) {
      return aiWay = 9;
    } else if ( Cell1 === Cell9 && Cell9 !== 0 && Cell5 === 0 ) {
      return aiWay = 5;
    } else if ( Cell5 === Cell9 && Cell9 !== 0 && Cell1 === 0 ) {
      return aiWay = 1;
    }
//Вторая наклонная строка
    else if ( Cell3 === Cell5 && Cell5 !== 0 && Cell7 === 0 ) {
      return aiWay = 7;
    } else if ( Cell3 === Cell7 && Cell7 !== 0 && Cell5 === 0 ) {
      return aiWay = 5;
    } else if ( Cell5 === Cell7 && Cell7 !== 0 && Cell3 === 0 ) {
      return aiWay = 3;
    } else {
      return false;
    }
    ;
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