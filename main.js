

var canvas=new fabric.Canvas("myCanvas");
b_width=90;
b_height=90;
player_x=10;
player_y=10;

var player_object="";
var block_object="";
function player_update(){
fabric.Image.fromURL("player.jpg", function(Img) { 
    player_object = Img;
    player_object.scaleToWidth(150);
     player_object.scaleToHeight(140);
      player_object.set({ top:player_y, left:player_x });
       canvas.add(player_object);
});
}
function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img) { 
       block_object = Img;
        block_object.scaleToWidth(b_width);
         block_object.scaleToHeight(b_height);
          block_object.set({ top:player_y, left:player_x });
           canvas.add(block_object);
    });
    }
    window.addEventListener("keydown",mykeydown);
    function mykeydown(e) {
    kypress=e.keyCode;
    console.log(kypress);
    if(e.shiftKey==true&&keypress=='80'){
      b_width=b_width + 10;
      b_height=b_height + 10;
      document.getElementById("span1").innerHTML=b_width;
      document.getElementById("span2").innerHTML=b_height;
      console.log("shift+p");
    }
    if(e.shiftKey==true&&kypress=='77'){
        b_width=b_width - 10;
        b_height=b_height - 10;
        document.getElementById("span1").innerHTML=b_width;
        document.getElementById("span2").innerHTML=b_height;
        console.log("shift+m");
      }
      if(kypress=='38'){
       up();
       console.log("up");   
      }
      if(kypress=='40'){
      down();
        console.log("up");   
       }
       if(kypress=='37'){
        left();
        console.log("up");   
       }
       if(kypress=='39'){
        right();
        console.log("up");   
       }
       if(kypress=='68'){
        new_image('creation trio.jpg');
        console.log("d");   
       }
       if(kypress=='71'){
        new_image('eternatus.jpg');
        console.log("g");
    }
    if(kypress=='76'){
      new_image('galarian legendary titans.jpg');
      console.log("l");
    }
    if(kypress=='82'){
      new_image('zacian and zamezanta.jpg');
      console.log("r");
  }
  if(kypress=='84'){
    new_image('regigigas.jpg');
    console.log("t");
}
if(kypress=='85'){
  new_image('tapus.png');
  console.log("u");
}
if(kypress=='89'){
  new_image('solageo,lunala.png');
  console.log("y");
}
if(kypress=='90'){
  new_image('single strike urshifu and rapid.jpg');
  console.log("z");
    }
  }
  function up(){
    if(player_y>=0){
      player_y=player_y-10;
      console.log(player_y);
      canvas.remove(player_object);
      player_update();
    }
  }
  function down(){
    if(player_y<=850){
      player_y=player_y+10;
      console.log(player_y);
      canvas.remove(player_object);
      player_update();
    }
  }
  function right(){
    if(player_x<=850){
      player_x=player_x+10;
      console.log(player_x);
      canvas.remove(player_object);
      player_update();
    }
  }
  function left(){
    if(player_x>=0){
      player_x=player_x-10;
      console.log(player_x);
      canvas.remove(player_object);
      player_update();
    }
  }
    