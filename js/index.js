$(function (){
  $(".input").hide();
  // $("aside").hide();
  
  $(document).on('click','.result-panel', function(){
    window.open('https://en.wikipedia.org/wiki/' + $(this).children("h2").text().replace(" ", "_"));
  });
  
  $(document).keypress(function(key){
    if(key.which==13){
      var searchCriteria =String($('input').val()).replace(" ", "_");
      if (searchCriteria != ""){
        $("#right-content").html("");
        $.getJSON("http://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&generator=search&exsentences=1&exlimit=10&exintro=1&explaintext=1&gsrsearch="+ searchCriteria +"&gsrlimit=10&callback=?",
          function(json){
            jQuery.each(json.query.pages, function(key, page){
            var html = "<div class=\"result-panel\"> ";
            html += "<h2>" + page.title + "</h2>";
            html += "<h4>" + page.extract + "</h4></div>";
            $('#right-content').append(html);
          }); 
        });
        $("aside").animate({
          'width': '500px'
        },400);
      }
    }  
  });
  
  $(".random").on('click', function(){
    window.open("https://en.wikipedia.org/wiki/Special:Random");
  });
  
  $(".search").on('click', function(){ 
    $('.input').show('fast', function(){
      $('input').focus();
    });
  });
  
  $('#icon-container').on('click', function(){
    $('aside').animate({
      'width':'0px'
    }, 400);
  });
  
  $(".search").hover(
  function(){
    $(this).animate(
      {
        'backgroundColor': "#2D232E",
        'color': "#47E07D"
      }, 200);
  },
  function(){
    $(this).animate(
      {
        'backgroundColor': "#47E07D",
        'color': "#932985"
      }, 200);
  });
  
  $(".random").hover(
  function(){
    $(this).animate(
      {
        'backgroundColor': "#2D232E",
        'color': "#932985"
      }, 200);
  },
  function(){
    $(this).animate(
      {
        'backgroundColor': "#932985",
        'color': "#47E07D"
      }, 200);
  });
  
  $(document).on('mouseenter', '.result-panel',
  function(){
    $(this).animate(
      {
        'backgroundColor': "#2D232E",
        'color': "#47E07D"
      }, 200);
  });
  
  $(document).on('mouseleave', '.result-panel',
  function(){
    $(this).animate(
      {
        'backgroundColor': "#47E07D",
        'color': "#2D232E"
      }, 200);
  });
});