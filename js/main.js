/*
$(document).ready(function() {
    for(var x = 0; x < 16; x++) {
        for(var y = 0; y < 16; y++) {
            var unit = $("<div class='unit'></div>");
            unit.appendTo('#container');
        }
    }
});
*/
/*
$(document).ready(function createGrid(x) {
  for (var rows = 0; rows < x; rows++) {
    for (var columns = 0; columns < x; columns++) {
      $("#container").append("<div class='grid'></div>")
    };
  };
  $(".grid").width(960/x);
  $(".grid").height(960/x);
};
});

$(document).ready(function() {
    createGrid(16);
});
*/

function createGrid(x) {
  for (var rows = 0; rows < x; rows++) {
    for (var columns = 0; columns < x; columns++) {
      $("#container").append("<div class='grid'></div>");
    };
    };
    $(".grid").width(720/x);
    $(".grid").height(720/x);
};

function black() {
  $('.grid').hover (
  function(){ $(this).addClass("black")}
  );
};

function randomColor(){
  $('.grid').hover (
    function(){ $(this).addClass(getRandomClass())}
    )
}

function getRandomClass (){
  var classes = new Array("red", "blue", "yellow", "green", "orange", "violet");
  var randomNumber = Math.floor(Math.random() * 7);
  return classes[randomNumber];
};


$(document).ready(function() {
    createGrid(16);
    black();
    $(".reset").click(function (){
      $("#container").html("");
      var input = prompt('How big do you want the grid?');
      createGrid(parseInt(input));
      black();
    });

    $(".random").click(function (){
      $("#container").html("");
      var input = prompt('How big do you want the grid');
      createGrid(parseInt(input));
      randomColor();
    });



});
