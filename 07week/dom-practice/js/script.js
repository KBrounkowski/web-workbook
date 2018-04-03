'use strict';

// <!-- This assignment is incomplete. -->


document.addEventListener("DOMContentLoaded", function(event) {
  var list = document.getElementsByTagName("ol");
  var message = " This page has "+ list[0].children.length + "list items";

  var newh1 = document.createElement('h1');
  newh1.innerhtml = "Manupulating the DOM!!";
  document.body.appendChild(newh1);

  var div = document.getElementById('div');
  var p3 = document.getElementById('p3');
  div.removeChild(p3);

  var list5 = document.createElement('li');
  list5.innerHTML = "Fifth List Item";
  list[0].appendChild(list5);
});

window.onload=function(){





}
