 'use strict';
class DifficultStrategy {
  constructor( game ) {
    this.game = game;
  }
  makeWay() {
    throw new Error('Метод не переопределен!');
  }
}