// Wait to load the DOM then run Masonry
$(document).ready( function() {
  // call masonry-item
  var msnry = new Masonry( '.grid', {
    columnWidth: '.grid-sizer',
    itemSelector: '.grid-item',
    percentPosition: true
  });
});

// begin randomBlocks app

var randomBlocksApp = randomBlocksApp || {};

randomBlocksApp.randomNumber = function(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

randomBlocksApp.divMaker = function(count, classname) {
  
  // create an array of random colors
  var colorsArray = randomColor({
    count: 5 // let's use a maxium of 5...
  });
  // these are the classes to access that each div will be assigned
  var div = document.getElementsByClassName(classname);

  // this is the class to access for masonry grid
  var grid = document.getElementsByClassName('grid');

  // a few values for possible widths
  var widthArray = [10, 20, 60];
  
  for (i = 0; i < count; i ++) {

    // keep making random numbers
    var width = this.randomNumber(0, 3);
    var height = this.randomNumber(20, 180);
    var color = this.randomNumber(0,4);

    // insert divs into the .grid class for masonry.js
    grid[0].innerHTML += "<div class=" + classname + "></div>";

    // now adjust their width and height

    //div[i].style.width = widthArray[width] + "%";

    div[i].style.height = height + "px";

    // now let's color them randomly
    div[i].style.backgroundColor = randomColor(color);
  }
};

// initiate the function
randomBlocksApp.divMaker(300, "grid-item");

