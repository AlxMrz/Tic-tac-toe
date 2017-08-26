  'use strict';
  /**
   * Класс для имитация Искуственного Интеллекта
   */
class ArtificialIntelligent {
  constructor( game ) {
    this.game = game;
    //console.log('getDifLvl' in game);
    this.difficult = game.getDifLvl();
    switch ( this.difficult ) {
      case 'Легко':
        this.compositor = new EasyStrategy( game );
        break;
      case 'Нормально':
        this.compositor = new NormalStrategy( game );
        break;
      case 'Сложно':
        this.compositor = new HardStrategy( game );
        break;
    }
  }

  makeWayByAI() {
    var aiWay = this.compositor.makeWay();
    var obj = document.getElementById( "cell" + aiWay );
    this.game.changeVal( obj );
  }

}