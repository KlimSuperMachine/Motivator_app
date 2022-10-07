"use strict"

class Clock {
   constructor({ template }) {
      this.template = template;
   }

   getRandomInRange(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
   }

   render() {
      let arr = ['держись', 'еще чутка', 'бодрячком', 'не спеши', 'грызи гранит бро', 'не сдаваться', 'терпеть', 'тяжело в учении легко в бою', 'не раслабляться'];

      let date = new Date();

      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;

      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;

      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;

      let output = this.template
         .replace('h', hours)
         .replace('m', mins)
         .replace('s', secs);

      let div = document.createElement('div');
      div.className = "message";
      div.innerHTML = `${arr[this.getRandomInRange(0, 8)] + ' ' + output}`;

      document.body.append(div);

   }

   stop() {
      clearInterval(this.timer);
   }

   start() {
      this.render();
      this.timer = setInterval(() => this.render(), 5000);
   }
}

let clock = new Clock({ template: 'h:m:s' });

let start = document.querySelector('.start');
start.style.width = "150px";
start.style.height = "50px";
start.style.margin = "30px";
start.addEventListener("click", () => clock.start());

let stop = document.querySelector('.stop');
stop.style.width = "150px";
stop.style.height = "50px";
stop.style.margin = "30px";
stop.addEventListener("click", () => {
   clock.stop();
   alert('Отдохни, но не долго');
});




// setTimeout(() => {
//    clock.stop();
//    alert('Отдохни, но не долго');
// }, 30000);

