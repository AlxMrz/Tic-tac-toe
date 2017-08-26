'use strict';
/**
 * Основной класс приложения. Вызывает метод mainProcess() при нажатии на кнопку.
 * TODO: переписать класс в терминах Class es6
 */
class Game
{
  constructor() {
    this.self = this;
    this.Cell1 = 0;
    this.Cell2 = 0;
    this.Cell3 = 0;
    this.Cell4 = 0;
    this.Cell5 = 0;
    this.Cell6 = 0;
    this.Cell7 = 0;
    this.Cell8 = 0;
    this.Cell9 = 0;
    this.gameOverWatcher = new GameOverWatcher( this );
    this.logger = new Logger();
    this.diflvl = document.getElementById( 'lvl' ) ? document.getElementById( 'lvl' ).value : 'Легко';
    this.AI;
    this.gameover = false;
    this.player = "X";
  }

  /**
   * Основной процесс в этой функции. Меняем значение ячейки
   * проверяем результат, выйграл ли игрок.
   * @param cell Текущая ячейка
   */
  mainProcess( cell ) {
    
    if(!this.changeCellValueIfNotMarked( cell )) {
      return false;
    }
    
    this.gameOverWatcher.reloadPageIfGameIsOverAndSetGameOverInTrue();
    this.changePlayer();
    if ( this.gameover === false ) {
      this.AI.makeWayByAI();
      this.gameOverWatcher.reloadPageIfGameIsOverAndSetGameOverInTrue();
    }
    this.changePlayer();
    return true;
  }
  changeCellValueIfNotMarked( cell ) {
    if ( this.isCellMarked( cell ) ) {
      this.changeVal( cell );
      return true;
    } 
    return false;
  }
  /**
   * Проверяет, свободна ли ячейка
   * @param obj Текущая ячейка
   * @returns {boolean}
   */
  isCellMarked( obj ) {
    if ( obj === null )
      return 'none';
    if ( obj.value !== " " )
      return false;
    return true;
  }

  /**
   * Меняет значение ячейки в системе
   * @param obj Текущая ячейка
   */
  changeVal( obj ) {
    if ( obj == null ) {
      return false;
    }

    obj.value = this.player;
    this.changeCell( obj.id );
    return true;
  }

  /**
   * Меняет игрока
   * return void
   */
  changePlayer() {
    if ( this.player === "X" ) {
      this.player = "O";
    } else if ( this.player === "O" ) {
      this.player = "X";
    }
  }

  /**
   * Меняет значение ячейки на экране
   * @param cell
   */
  changeCell( cell ) {
    switch ( cell ) {
      case "cell1":
        this.Cell1 = this.player;
        break;
      case "cell2":
        this.Cell2 = this.player;
        break;
      case "cell3":
        this.Cell3 = this.player;
        break;
      case "cell4":
        this.Cell4 = this.player;
        break;
      case "cell5":
        this.Cell5 = this.player;
        break;
      case "cell6":
        this.Cell6 = this.player;
        break;
      case "cell7":
        this.Cell7 = this.player;
        break;
      case "cell8":
        this.Cell8 = this.player;
        break;
      case "cell9":
        this.Cell9 = this.player;
        break;
    }
  }

  setBackGround( cellsValue, playerValue = 'X' ) {
    this.Cell1 = cellsValue.Cell1;
    this.Cell2 = cellsValue.Cell2;
    this.Cell3 = cellsValue.Cell3;
    this.Cell4 = cellsValue.Cell4;
    this.Cell5 = cellsValue.Cell5;
    this.Cell6 = cellsValue.Cell6;
    this.Cell7 = cellsValue.Cell7;
    this.Cell8 = cellsValue.Cell8;
    this.Cell9 = cellsValue.Cell9;
    console.log( cellsValue );
    console.log( this.Cell6 );
    this.player = playerValue;
  }
  getCell( cellName ) {
    switch ( cellName ) {
      case 'Cell1':
        return this.Cell1;
      case 'Cell2' :
        return this.Cell2;
      case 'Cell3' :
        return this.Cell3;
      case 'Cell4' :
        return this.Cell4;
      case 'Cell5' :
        return this.Cell5;
      case 'Cell6' :
        return this.Cell6;
      case 'Cell7' :
        return this.Cell7;
      case 'Cell8' :
        return this.Cell8;
      case 'Cell9' :
        return this.Cell9;
    }
    ;
  }
  getPlayer() {
    return this.player;
  }
  getDifLvl() {
    return this.diflvl;
  }
  setGameOver( set ) {
    this.gameover = set;
  }
  setAI( ai ) {
    this.AI = ai;
  }
}