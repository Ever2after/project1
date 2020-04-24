$(document).ready(function(){
  $('.alterbutton').click(function(){
    var top = ($(window).height()-484)/2;
    $('#popupbox').css('top', top);
    $('#popup2').show();
  });

  $('.button').click(function(){
    if($(this).hasClass('unselected')){
      var cls = `${this.classList[1]}`;
      $(`.${cls}.selected`).attr("src", './images/check_icon.svg');
      $(`.${cls}.selected`).attr('class', `button ${cls} unselected`);
      $(this).attr("src", './images/check_icon_fill.svg');
      $(this).attr('class', `button ${cls} selected`);
      $('.complete').show();
    }
  });

  $('.confirmbutton').click(function(){
    $('.button.selected').attr('src','./images/check_icon_disabled.svg');
    $('.complete').hide();
  });

});

$(document).mouseup(function(e){
  var container = $('#popup2');
  if(container.has(e.target).length ===0){
    container.hide();
  }
});
