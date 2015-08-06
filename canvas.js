function canvas () {
      var theCanvas = document.getElementById('hangman');
      var ctx = theCanvas.getContext('2d');
      var counter = 0;

      ctx.strokeStyle='blue';
     // ctx.lineCap = 'square';
      ctx.lineJoin = 'circle';


      this.draw = function (a, b, c, d) {
            ctx.beginPath();

            ctx.lineWidth = 8;
            ctx.moveTo(a, b);
            ctx.lineTo(c, d);
            ctx.stroke();

      };
      /* moveTo se usa en cada funcion de forma que la nueva posicion del pointer es en la ultima posicion del dibujo anterior
       Todos tienen las mismas instrucciones. Armar solo una funcion en donde se pasen los parametros */

      //dibuja palo cuerpo
      this.drawLineBody = function() {
            this.draw(200, 100, 200, 250);
      };
      this.drawLeftLeg = function (){
            ctx.beginPath();
            ctx.translate(0, 0.5);
            ctx.lineWidth = 8;
            ctx.moveTo(200,250);
            ctx.lineTo(150,350);
            ctx.stroke();
         // this.draw(150, 100, 100, 130);
      };
      this.drawRightLeg = function (){
            this.draw(200, 250, 250, 350);
      };
      this.drawLeftArm = function() {
            this.draw(200, 100, 150, 180);
      };
      this.drawRightArm = function() {
            this.draw(200, 100, 250, 180);
      };
      this.drawHead = function () {
            ctx.beginPath();
            ctx.arc(200, 50, 40, 0, Math.PI * 2, true);
            ctx.stroke();
      }


      this.drawHangman = function() {
            switch (counter) {
                  case 0:
                        this.drawLineBody();
                        break;
                  case 1:
                        this.drawLeftLeg();
                        break;
                  case 2:
                        this.drawRightLeg();
                        break;
                  case 3:
                        this.drawLeftArm();
                        break;
                  case 4:
                        this.drawRightArm();
                        break;
                  case 5:
                       this.drawHead();
                        break;
                  default:
                        console.log("you lose");
            }

            counter++;
            console.log(counter);
      }
}




var hangMan = new canvas();
hangMan.height = 500;

