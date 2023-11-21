class Device {
    constructor(name) {
      this.type = 'Home-Device';
      this.country = 'USA';
      this.power = false;
      this.name = name;
    }
  
    powerOn() {
      if (!this.power) {
        console.log(`${this.name} включен`);
        this.power = true;
      } else {
        console.log(`${this.name} уже включен`);
      }
    }
  
    powerOff() {
      if (this.power) {
        console.log(`${this.name} выключен`);
        this.power = false;
      } else {
        console.log(`${this.name} уже выключен`);
      }
    }
  
    finalPrice(price, discount) {
      return price - price * (discount / 100);
    }
  }
  
  const lamp = new Device('Лампа');
  lamp.price = 1000;
  lamp.discount = 20;
  
  const tv = new Device('Телевизор');
  tv.price = 99000;
  tv.discount = 15;
  
  lamp.powerOn();
  console.log(lamp.finalPrice(lamp.price, lamp.discount)); 
  tv.powerOn();
  console.log(tv.finalPrice(tv.price, tv.discount)); 