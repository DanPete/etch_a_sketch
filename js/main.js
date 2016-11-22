function createGrid(size) {
  for (var rows = 0; rows < size; rows++) {
    for (var columns = 0; columns < size; columns++) {
      $("#container").append("<div class='grid'></div>");
    };
    };
    $(".grid").width(720/size);
    $(".grid").height(720/size);
};

function black() {
  $('.grid').hover (function(){
    $(this).addClass("black")
  });
};

function randomColor(){
  $('.grid').hover (function(){
    $(this).addClass(getRandomClass())
  });
}

function superRandomColor(){
  $('.grid').hover (function (){
    random_color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    $(this).css("background-color", random_color);
  });
}

function shadeGrey(){
    $('.grid').hover (function(){
      $(this).css("opacity", "+=0.075")
    });
};

function getRandomClass (){
  var classes = new Array("red", "blue", "yellow", "green", "orange", "violet");
  var randomNumber = Math.floor(Math.random() * 7);
  return classes[randomNumber];
};


$(document).ready(function() {
    size = 16
    createGrid(size);
    black();

    $('.resize').click(function(){
      haveSize = false;
      while (haveSize === false){
        oldSize = size;
        size = prompt("How big do you want the grid? (1 -100)", "16");
        if (size > 0 && size <= 100){haveSize = true}
        else if(size === null){
          size = oldSize;
          haveSize = true  }
        else {alert("The number you entered is outside the range!")};
    };
     $("#container").empty();
    createGrid(size);
    black ();
  });

    $(".classic").click(function (){
      $("#container").empty();
      createGrid(size);
      black();
    });

    $(".random").click(function (){
      $("#container").empty();
      createGrid(size);
      randomColor();
    });

    $(".xrandom").click(function (){
      $("#container").empty();
      createGrid(size);
      superRandomColor();
    });

    $(".shades").click(function (){
      $("#container").empty();
      createGrid(size);
      $('.grid').css("background-color", "black");
      $('.grid').css("outline", "none");
      $('.grid').css("opacity", 0);
      shadeGrey();
    });

});
