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

$(document).ready(function() {
    createGrid(16);
});
