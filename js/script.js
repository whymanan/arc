$(window).scroll(function(){
    if ($(this).scrollTop() > 50) {
       $('#vjheader').addClass('vjClass');
    } else {
       $('#vjheader').removeClass('vjClass');
    }
});


$(window).scroll(function(){
    if ($(this).scrollTop() > 650) {
       $('.bottom-ul').addClass('color-change');
    } else {
       $('.bottom-ul').removeClass('color-change');
    }
});

$(window).scroll(function(){
    if ($(this).scrollTop() > 650) {
       $('#vjheader').addClass('white-bg');
    } else {
       $('#vjheader').removeClass('white-bg');
    }
});

$(window).scroll(function(){
    if ($(this).scrollTop() > 650) {
       $('.project-tab').addClass('fixed-tab');
    } else {
       $('.project-tab').removeClass('fixed-tab');
    }
});

$(window).scroll(function(){
    if ($(this).scrollTop() > 650) {
       $('#projects').addClass('top-space');
    } else {
       $('#projects').removeClass('top-space');
    }
});

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
};

