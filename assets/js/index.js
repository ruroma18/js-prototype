'use strict'

function Car(manufacture, model, color, releaseYear, speed, maxSpeed, fuelConsumption, volume) {
  if (typeof manufacture !== 'string' ||
    typeof model !== 'string' ||
    typeof color !== 'string') {
    throw new TypeError('Enter strings')
  } else if (typeof releaseYear !== 'number' ||
    typeof speed !== 'number' ||
    typeof maxSpeed !== 'number' ||
    typeof fuelConsumption !== 'number' ||
    typeof volume !== 'number') {
    throw new TypeError('Enter number')
  } else if (speed < 0 || maxSpeed < 0) {
    throw new Error('Speed mustn`t be a negative')
  }
  this.manufacture = manufacture;
  this.model = model;
  this.color = color;
  this.releaseYear = releaseYear;
  this.speed = speed;
  this.maxSpeed = maxSpeed;
  this.fuelConsumption = fuelConsumption;
  this.volume = volume;

}

function CarPrototype() {
  this.accelerate = function (speedNum) {
    if (this.speed < this.maxSpeed) {
      return this.speed += speedNum;
    } else {
      return false;
    }
  };

  this.brake = function (speedNum) {
    if (this.speed > 0) {
      return this.speed -= speedNum;
    } else {
      return false;
    }
  };

  this.stop = function () {
    return this.speed = 0;
  };
}

Car.prototype = new CarPrototype;

const car1 = new Car('audi', 'a7', 'black', 2018, 10, 220, 10.2, 69);
const car2 = new Car('bmw', '5', 'white', 2020, 0, 300, 9, 60);

