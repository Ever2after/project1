var cnt=0;

$(document).ready(function(){
  $('.checking').click(function(){
    if($(this).children().attr('id')=="check"){
        $('#check_fill').attr('id', 'check');
        $(this).children().attr('id','check_fill');
        $('#check_fill').attr("src", "./images/check_icon_fill.svg");
        $('#check').attr("src", "./images/check_icon.svg");
    }
  });

  $('.available').click(function(){
    if($(this).hasClass('select')){
      cnt--;
      $(this).removeClass('select');
      $(this).css('backgroundColor', '#fff');
      $(this).css('color', '#000');
    }
    else{
      cnt++;
      $(this).addClass('select');
      $(this).css('backgroundColor', "#006cb3");
      $(this).css('color', '#fff');
    }
    if(cnt>0){
      $('#popup1').css("display", "inline-block");
      $('.thisiscalendar').hide();
      $('#alarm').hide();
      $('.barcontainer').css('height', "64px");
      $('#selectmode').css('display',"flex");
      $('#nonselectmode').hide();
      $('.barcontainer').css( "box-shadow","0 3px 6px 0 rgba(0, 0, 0, 0.1)");
      $('#alterbutton').attr('href', `/index2/${cnt}`);
    }
    else{
      $('#popup1').css('display', 'none');
      $('.thisiscalendar').show();
      $('#alarm').show();
      $('.barcontainer').css('height', "108px");
      $('#selectmode').css('display', "none");
      $('#nonselectmode').show();
        $('.barcontainer').css( "box-shadow","none");
    }
    $('#totaldays').text(`총 ${cnt}일`);
  });
});
