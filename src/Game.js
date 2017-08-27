'use strict';
/**
 * Основной класс приложения. Вызывает метод mainProcess() при нажатии на кнопку.
 * TODO: переписать класс в терминах Class es6
 */
class Game
{
  constructor() {
    this.self = this;
    this.gameOverWatcher = new GameOverWatcher( this );
    this.logger = new Logger();
    this.cellAgregator = new CellAgregator( this );
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
    if(!this.cellAgregator.changeCellValueIfNotMarked( cell )) {
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