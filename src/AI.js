'use strict';
/**
 * Класс для имитация Искуственного Интеллекта
 */
class ArtificialIntelligent {
  constructor( game ) {
    this.game = game;
    this.difficult = game.getDifLvl();
    this.compositor = this.getStrategy();
  }
  /**
   * Фабричный метод.
   * Создает нужную стратегию в зависимости от установленного уровня сложности.
   * @returns {HardStrategy|EasyStrategy|NormalStrategy} 
   */
  getStrategy() {
    switch ( this.difficult ) {
      case 'Легко':
        return new EasyStrategy( this.game );
      case 'Нормально':
        return new NormalStrategy( this.game );
      case 'Сложно':
        return new HardStrategy( this.game );
    }
  }
  /**
   * Осуществляет ход компьютером.
   */
  makeWayByAI() {
    var aiWay = this.compositor.makeWay();
    var cell = document.getElementById( "cell" + aiWay );
    this.game.changeVal( cell );
  }

}