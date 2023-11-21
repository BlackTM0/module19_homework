function Device (name) { 
    this.type = ' Home-Device';
   this.country = 'USA'; 
   this.power = false; 
   this.name=name;
}

Device.prototype.powerOn = function() { 
 if (!this.power) { 
  console.log( `${this.name} включен`); 
  this.power = true; 
 } else { 
   console.log (`${this.name} уже включен`);
 }
}

Device.prototype.powerOff = function() { 
  if (this.power) { 
     console.log( `${this.name} вЫключен`); 
     this.power = false; 
  } else { 
     console.log (`${this.name} уже выключен`);
  }
 }
   

const lamp = new Device ('Лампа'); 
lamp.price = 1000;
lamp.discount = 20;
lamp.fPrice = function finalPrice() { 
 console.log(lamp.price - lamp.price * (lamp.discount/100)); 
    
 }

   
const tv = new Device ('Телевизор'); 
tv.price = 99000;
tv.discount = 15;
tv.fPrice = function finalPrice() { 
 console.log(tv.price - tv.price * (tv.discount/100)); 
    
}


 
  tv.powerOn();
  console.log(tv, lamp);
