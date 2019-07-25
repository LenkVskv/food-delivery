'use strict'

$(function(){
  //Set an interval for image slider in header section
  //animate by margin-left if it's last - go to position 1

    setInterval(function(){
      $('.slider .slides').animate({'margin-left':'-700px'},1000)
    });
});