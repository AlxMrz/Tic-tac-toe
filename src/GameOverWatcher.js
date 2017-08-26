class GameOverWatcher {

  constructor( game ) {
    if ( game instanceof Game ) {
      this.game = game;
    } else {
      throw new Error( 'game is not instance of Game!' );
    }
  }

  /**
   * Проверяет, занял ли игрок 3 клетки подряд.
   * @return void
   */
  reloadPageIfGameIsOverAndSetGameOverInTrue() {
    var check = this.checkIfWin();
    console.log(this.game.getPlayer() + ' ' + check);
    if ( check === true ) {
      this.showMessageAndReloadPage( "Выйграл игрок: " + this.game.getPlayer());
    } else if ( check === 'ничья' ) {
      this.showMessageAndReloadPage( "Да тут Ничья" );
    }
  }
  showMessageAndReloadPage( message ) {
    alert( message );
    location.reload();
    this.game.gameover = true;
  }
  /**
   * Проверяет игру на завершенность шагов.
   * @returns mixed Возвращает true в случае окончания свободных шагов и есть победитель
   * Возвращает false, если есть доступные шаги
   * Возвращает "ничья", если шагов свободных нет и победителя тоже
   */
  checkIfWin() {
    if ( this.areThreeCellsInARowCompleted() ) {
      return true;
    } else if ( this.areThereAnyFreeCells() ) {
      return false;
    }
    return 'ничья';
  }
  areThreeCellsInARowCompleted() {
    console.log(this.is369Equivalent());
    console.log(this.game.getCell('Cell3'));
    console.log(this.game.getCell('Cell6'));
    console.log(this.game.getCell('Cell9'));
    return this.is123Equivalent() ||
            this.is456Equivalent() ||
            this.is789Equivalent() ||
            this.is147Equivalent() ||
            this.is258Equivalent() ||
            this.is369Equivalent() ||
            this.is159Equivalent() ||
            this.is357Equivalent();
  }
  is123Equivalent() {
    return ( this.game.getCell( 'Cell1' ) === this.game.getCell( 'Cell2' ) &&
            this.game.getCell( 'Cell2' ) === this.game.getCell( 'Cell3' ) &&
            ( this.game.getCell( 'Cell3' ) === this.game.getPlayer() ) );
  }
  is456Equivalent() {
    return ( this.game.getCell( 'Cell4' ) === this.game.getCell( 'Cell5' )
            && this.game.getCell( 'Cell5' ) === this.game.getCell( 'Cell6' )
            && ( this.game.getCell( 'Cell6' ) === this.game.getPlayer() ) );
  }
  is789Equivalent() {
    return ( this.game.getCell( 'Cell7' ) === this.game.getCell( 'Cell8' )
            && this.game.getCell( 'Cell8' ) === this.game.getCell( 'Cell9' )
            && ( this.game.getCell( 'Cell9' ) === this.game.getPlayer() ) );
  }

  is147Equivalent() {
    return ( this.game.getCell( 'Cell1' ) === this.game.getCell( 'Cell4' )
            && this.game.getCell( 'Cell4' ) === this.game.getCell( 'Cell7' )
            && ( this.game.getCell( 'Cell7' ) === this.game.getPlayer() ) );
  }
  is258Equivalent() {
    return ( this.game.getCell( 'Cell2' ) === this.game.getCell( 'Cell5' )
            && this.game.getCell( 'Cell5' ) === this.game.getCell( 'Cell8' )
            && ( this.game.getCell( 'Cell8' ) === this.game.getPlayer() ) );
  }
  is369Equivalent() {
    return ( this.game.getCell( 'Cell3' ) === this.game.getCell( 'Cell6' )
            && this.game.getCell( 'Cell6' ) === this.game.getCell( 'Cell9' )
            && ( this.game.getCell( 'Cell9' ) === this.game.getPlayer() ) );
  }

  is159Equivalent() {
    return ( this.game.getCell( 'Cell1' ) === this.game.getCell( 'Cell5' )
            && this.game.getCell( 'Cell5' ) === this.game.getCell( 'Cell9' )
            && ( this.game.getCell( 'Cell9' ) === this.game.getPlayer() ) );
  }
  is357Equivalent() {
    return ( this.game.getCell( 'Cell3' ) === this.game.getCell( 'Cell5' )
            && this.game.getCell( 'Cell5' ) === this.game.getCell( 'Cell7' )
            && ( this.game.getCell( 'Cell7' ) === this.game.getPlayer() ) );
  }

  areThereAnyFreeCells() {
    return ( this.game.getCell( 'Cell1' ) == 0 || this.game.getCell( 'Cell2' ) == 0 || this.game.getCell( 'Cell3' ) == 0 ||
            this.game.getCell( 'Cell4' ) == 0 || this.game.getCell( 'Cell5' ) == 0 || this.game.getCell( 'Cell6' ) == 0 ||
            this.game.getCell( 'Cell7' ) == 0 || this.game.getCell( 'Cell8' ) == 0 || this.game.getCell( 'Cell9' ) == 0 );
  }
}


