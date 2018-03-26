'use strict';

var count = 0;

$(document).ready(function(){
  $('.draggable').draggable({
    revert: "invalid"
  })
  };
  $('#droparea, #droparea2, #droparea3').droppable({
    drop: function(event, ui){
      count++;
      var drag = $(ui.draggable).data('block');
      console.log(`current block ${drag}`);
      var last = $(this).children().last().data('block');
      console.log(`last block ${last}`);
      if(drag > last){
        $(ui.draggable).draggable( "option", "revert", true );
      }
      else{
      $(ui.draggable).appendTo($(this)).attr('style', 'position:relative');
    }
  })

  checkwin();
}


function checkwin(){
  $('[data-stack=3]').children().length == 4;

}

$('#clear').click function(){

};
