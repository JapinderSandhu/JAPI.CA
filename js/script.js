//Global variable of all dates in a single Array
var Dates = $('#dom-target');

//Global variable of all dates-children in a single Array
var dateListFull = $('#dom-target').children();


// var today = new Date();
// var monthNames = ["January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December"
// ];
//
// var dd = today.getDate();
// var mm = today.getMonth()+1; //January is 0!
//
// var yyyy = today.getFullYear();
// if(dd<10){
//     dd='0'+dd;
// }
// if(mm<10){
//     mm='0'+mm;
// }
// mm=monthNames[mm];
// var today = dd+' '+mm+', '+yyyy;
// console.log(today+"todays date styl")
//
//
// dateListFull.append("<p> <a>"+today+"</a></p>")
//
// console.log(($('#dom-target').children().last()).text())

//Changes TITLE
$(document).ready(function() {
  var messages = [
  'THANK YOU','FOR SUPPORTING','SELF','DISCOVERY',
  'JAPI','JAPI','JAPI'
  ,'LIVING IN THIRD PERSON','IN THIRD PERSON','living',
  'A DREAM WITHIN', 'A DREAM', 'WITHIN A DREAM','JAPI','JAPI','JAPI',
  'I DONT UNDERSTAND','MY FACE',
  'JAPI','JAPI','JAPI'
  ,'ARE YOU WATCHING CLOSELY?','CHAOS','CHAOS','CHAOS','CHAOS'
  ,'BUT ALSO','PIZZA','IS PRETTY COOL',
  'JAPI','JAPI','JAPI',
  'ARE','YOU','REALLY LIVING?'
  ,'JAPI','JAPI','JAPI'];
  var index = -1;
  var $changedTitle = $('#changed-title');



  setInterval(function(){
    //get the message at the next index, modding by the length so it wraps
      console.log("helloyesyesyes");
    var message = messages[++index % messages.length];
    $changedTitle.text(message);
  }, 1250);
});

//Media Queries change on window resize, allignment of background
$(window).resize(function(){
  if (window.matchMedia("(min-width: 1441px) and (max-width: 2560px)").matches) {

    var scrollTop = (window.innerWidth-1440)/4.2 + 1060;
    var marginHome = (window.innerWidth-1440)/5.22 + 179;
    var positionY =  -window.innerWidth+1440 + (-721);
    var marginBottom = (-window.innerWidth+1440)/2.2954 + window.innerHeight-834  + 225;

    console.log(window.innerWidth);
    console.log("Height:"+window.innerHeight);
    var $el = $('#w');
    var bottom = $el.position().top + $el.offset().top + $el.outerHeight(true);
    console.log("Bottom of Wrapper: " + bottom);


    console.log("scrollTop: " + scrollTop);
    console.log("marginHome: " + marginHome);
    console.log("positionY: " + positionY);
    console.log("marginBottom: " + marginBottom);

    $("#Home").css('margin-bottom', marginHome);
    $("#w").css('background-position-y', positionY);
    $("#w").css('margin-bottom', marginBottom);
  }


  if (window.matchMedia("(min-width: 769px) and (max-width: 1440px)").matches) {

    var scrollTop = (window.innerWidth-1440)/4.2 + 1060;
    var marginHome = (window.innerWidth-1440)/5.22 + 179;
    var positionY =  -window.innerWidth+1440 + (-721);
    var marginBottom = (-window.innerWidth+1440)/2.2954 + window.innerHeight-834  + 225;

    console.log(window.innerWidth);
    console.log("Height:"+window.innerHeight);
    var $el = $('#w');
    var bottom = $el.position().top + $el.offset().top + $el.outerHeight(true);
    console.log("Bottom of Wrapper: " + bottom);


    console.log("scrollTop: " + scrollTop);
    console.log("marginHome: " + marginHome);
    console.log("positionY: " + positionY);
    console.log("marginBottom: " + marginBottom);

    $("#Home").css('margin-bottom', marginHome);
    $("#w").css('background-position-y', positionY);
    $("#w").css('margin-bottom', marginBottom);
  }

});

//Media Queries change on window load, allignment of background
//mouseover mouse leave function for timeline
$(document).ready(function(){
  //scroll to specific home page point
  if (window.matchMedia("(min-width: 1441px) and (max-width: 2560px)").matches) {

    var scrollTop = (window.innerWidth-1440)/4.2 + 1060;
    var marginHome = (window.innerWidth-1440)/5.22 + 179;
    var positionY =  -window.innerWidth+1440 + (-721);
    var marginBottom = (-window.innerWidth+1440)/2.05 + window.innerHeight-834  + 225;

    console.log(window.innerWidth);
    console.log("Height:"+window.innerHeight);
    var $el = $('#w');
    var bottom = $el.position().top + $el.offset().top + $el.outerHeight(true);
    console.log("Bottom of Wrapper: " + bottom);


    console.log("scrollTop: " + scrollTop);
    console.log("marginHome: " + marginHome);
    console.log("positionY: " + positionY);
    console.log("marginBottom: " + marginBottom);

    $("html, body").animate({ scrollTop: scrollTop}, 1000);
    $("#Home").css('margin-bottom', marginHome);
    $("#w").css('background-position-y', positionY);
    $("#w").css('margin-bottom', marginBottom);
  }


  if (window.matchMedia("(min-width: 769px) and (max-width: 1440px)").matches) {

    var scrollTop = (window.innerWidth-1440)/4.2 + 1060;
    var marginHome = (window.innerWidth-1440)/5.22 + 179;
    var positionY =  -window.innerWidth+1440 + (-721);
    var marginBottom = (-window.innerWidth+1440)/2.2954 + window.innerHeight-834  + 225;

    console.log(window.innerWidth);
    console.log("Height:"+window.innerHeight);
    var $el = $('#w');
    var bottom = $el.position().top + $el.offset().top + $el.outerHeight(true);
    console.log("Bottom of Wrapper: " + bottom);


    console.log("scrollTop: " + scrollTop);
    console.log("marginHome: " + marginHome);
    console.log("positionY: " + positionY);
    console.log("marginBottom: " + marginBottom);

    $("html, body").animate({ scrollTop: scrollTop}, 1000);
    $("#Home").css('margin-bottom', marginHome);
    $("#w").css('background-position-y', positionY);
    $("#w").css('margin-bottom', marginBottom);
  }
  if (window.matchMedia("(min-width: 426px) and (max-width: 768px)").matches) {
      var scrollTop = (window.innerWidth-768)/9 + 747;
      var marginHome = (window.innerWidth-768)/24  + 40;
      var positionY =  (-window.innerWidth+768)/3 + (405);
      var marginBottom = (-window.innerWidth+768)/2.45 + (window.innerHeight-689)  + 383;

      console.log(window.innerWidth);
      console.log("Height:"+window.innerHeight);
      var $el = $('#w');
      var bottom = $el.position().top + $el.offset().top + $el.outerHeight(true);
      console.log("Bottom of Wrapper: " + bottom);


      console.log("scrollTop: " + scrollTop);
      console.log("marginHome: " + marginHome);
      console.log("positionY: " + positionY);
      console.log("marginBottom: " + marginBottom);

      $("html, body").animate({ scrollTop: scrollTop}, 1000);
      $("#Home").css('margin-bottom', marginHome);
      $("#w").css('background-position-y', positionY);
      $("#w").css('margin-bottom', marginBottom);

      $("html, body").animate({ scrollTop: scrollTop}, 1000);

  }


  if (window.matchMedia("(min-width: 320px) and (max-width: 425px)").matches) {
    var scrollTop = (window.innerWidth-320)/4.2 + 593;
    var marginHome = (window.innerWidth-320)/9 + 14;
    var positionY =  (-window.innerWidth+320)/4 + (450);
    var marginBottom = (-window.innerWidth+320)/2.62 + (window.innerHeight-689)  + 561;

    console.log(window.innerWidth);
    console.log("Height:"+window.innerHeight);
    var $el = $('#w');
    var bottom = $el.position().top + $el.offset().top + $el.outerHeight(true);
    console.log("Bottom of Wrapper: " + bottom);


    console.log("scrollTop: " + scrollTop);
    console.log("marginHome: " + marginHome);
    console.log("positionY: " + positionY);
    console.log("marginBottom: " + marginBottom);

    $("html, body").animate({ scrollTop: scrollTop}, 1000);
    $("#Home").css('margin-bottom', marginHome);
    $("#w").css('background-position-y', positionY);
    $("#w").css('margin-bottom', marginBottom);

  }



  /*  if (window.matchMedia("(min-width: 425px) and (max-width: 767px)").matches) {
      $("html, body").animate({ scrollTop: 608 }, 1000);
    }
    //IPHONE 6S PLUS
    if (window.matchMedia("(min-width: 414px) and (max-width: 424px)").matches) {
      $("html, body").animate({ scrollTop: 607 }, 1000);
    }
    if (window.matchMedia("(min-width: 375px) and (max-width: 413px)").matches) {
      $("html, body").animate({ scrollTop: 602 }, 1000);
    }
    if (window.matchMedia("(min-width: 320px) and (max-width: 374px)").matches) {
      $("html, body").animate({ scrollTop: 593 }, 1000);
    }
    else {
    /* the viewport is less than 1060 pixels wide */




 function hover_slide(){
    var id_mouseout;
    //This will drop down the list of dates on mouseover
    $('.archive-months').mouseover(function() {
    //  console.log("id: "+this.id);
     $('#'+this.id+"-monthList").slideDown("slow");
     id_mouseout = '#'+this.id+"-monthList"
    // console.log("slidedown mouseover: "+ id_mouseout);
    $("."+this.id+"-monthList").mouseleave(function(){
  //  $(".timeline").mouseleave(function(){


     for(i=0;i<=dateListFull.length;i++){
       var other_split=dateListFull.eq(i).text().split(/[ ,]+/);
       if(!($('#' +other_split[1]+other_split[2]+other_split[3]).parent().parent().parent().children().children().children().hasClass("selected_box"))){
         $('#' +other_split[1]+other_split[2]+other_split[3]).parent().parent().parent().slideUp("slow");
         //console.log("slideup mouseout: "+ $('#'+this.id+"-monthList").text());
       }
     }
   });



  });
    //This will slide Up the list of dates on mouseover

 }
 hover_slide()
});

/*--------------------------------------*/
/*--------------------------------------*/
/*----------------ONLOAD----------------*/
/*--------------------------------------*/
/*--------------------------------------*/
/*--------------------------------------*/

//Load latest video on front page, show most recent post, activate Live title
function Reload(){

  $('#live_title').addClass('title_click');


  $('.next').removeClass('Onclick');
  $('.next').addClass('noclick');
    console.log("ONLOAD");
      //that is used to maintain the parent class object, if we use $(this) in a child class it will use the child classes object

      var ajaxurl = $('#dom-target').data('url');
      var last_Date = $('#dom-target').children().last();
      var dateArray = last_Date.text();
      var split = dateArray.split(/[ ,]+/);


    //  console.log("last_Date Text: " +dateArray);

      var y = split[3];
      var m = split[1];
      var d = split[2];

  //    console.log("year: "+y);
  //    console.log("month: "+m);
  //    console.log("day: " +d);


      $('.selected_date').empty();
      $('.selected_date').append(dateArray);




      $('#' +split[1]+split[2]+split[3]).removeClass("day_box");
      $('#' +split[1]+split[2]+split[3]).addClass("selected_box");
      $('#_' +split[1]+split[2]+split[3]).addClass("selected_text");



  //    console.log("DATE: "+dateArray.trim());
  var dateListFull = $('#dom-target').children();

  for(i=0;i<=dateListFull.length;i++){
    var other_split=dateListFull.eq(i).text().split(/[ ,]+/);


    if($('#' +other_split[1]+other_split[2]+other_split[3]).hasClass("selected_box")){

      $('#' +other_split[1]+other_split[2]+other_split[3]).parent().parent().parent().slideDown("slow");
      //      console.log("this is the parent Onload");
    }
    else {
      $('#' +other_split[1]+other_split[2]+other_split[3]).parent().parent().parent().slideUp("slow");
    }

  }
  function convertMonthNameToNumber(monthName) {
      var myDate = new Date(monthName + " 1, 2000");
      var monthDigit = myDate.getMonth();
      return isNaN(monthDigit) ? 0 : (monthDigit + 1);
  }
  var m_number = convertMonthNameToNumber(m);
      $.ajax({

        url : ajaxurl,
        type: 'post',
        data :{
          "digwp_y": y,
          "digwp_m" : m_number,
          "digwp_d" : d,
        action: 'japi_load_more'
        },
        error:function(response){
          console.log(response);
          console.log("FAILURE");
        },
        success:function(response){
          $('.Post-container').empty();
          console.log("success");
          $('.Post-container').hide().prepend(response).fadeIn('slow');

        }

      });
  }
$(document).ready(Reload());


  /*--------------------------------------*/
  /*--------------------------------------*/
  /*----------------Next------------------*/
  /*--------------------------------------*/
  /*--------------------------------------*/
  /*--------------------------------------*/
//when click on next day arrow
$(document).on('click','.next', function(){
  //because on load, you can not go to a previous post as it loads the latest post, the previous button has class noclick, this will remove class noclick
  $('.previous').removeClass('noclick');
  $('.previous').addClass('Onclick');
    console.log("next");


    var Current_date=$('.selected_date').text();
  //  console.log("Current Date:"+Current_date);

    var Current_object=$('p:contains(' + Current_date + ')').get(0);
    //    console.log("Current Object:"+Current_object);
    var Current_object_text = $(Current_object).text();
    //    console.log("Current Object Inner Text:"+Current_object_text);


      var Next_object = $(Current_object).next();

      //      console.log("Next Object:"+Next_object);

      var Next_object_text = $(Next_object).text();

      var Last = $("#dom-target").children().last();
      var inner = Last.text();
      //console.log("Last Object:"+inner);
      if(Next_object_text===inner){
        $('.next').removeClass('Onclick');
        $('.next').addClass('noclick');
        $('.previous').removeClass('noclick');
        $('.previous').addClass('Onclick');
        console.log("CANT GO ANY FARTHER");
      }
      else {
        $('.next').removeClass('noclick');
        $('.next').addClass('Onclick');
      }


    //  console.log("Next Object Text:"+Next_object_text);
      var ajaxurl = $('#dom-target').data('url');
      var dateArray = Next_object_text;
      var split = dateArray.split(/[ ,]+/);
  //    console.log("DATE: "+dateArray);

  var y = split[3];
  var m = split[1];
  var d = split[2];


    //  console.log("year: "+y);
  //    console.log("month: "+m);
  //    console.log("day: " +d);

      $('.selected_date').empty();
      $('.selected_date').append(dateArray);
      var dateListFull = $('#dom-target').children();
          for(i=0;i<=dateListFull.length;i++){

            var other_split=dateListFull.eq(i).text().split(/[ ,]+/);


            if(dateListFull.eq(i).text()==dateArray){
              $('#' +other_split[1]+other_split[2]+other_split[3]).removeClass("day_box");
              $('#' +other_split[1]+other_split[2]+other_split[3]).addClass("selected_box");
              $('#_' +other_split[1]+other_split[2]+other_split[3]).addClass("selected_text");

            }
            else{
              $('#_' +other_split[1]+other_split[2]+other_split[3]).removeClass("selected_text");
              $('#' +other_split[1]+other_split[2]+other_split[3]).removeClass("selected_box");
              $('#' +other_split[1]+other_split[2]+other_split[3]).addClass("day_box");
          //    console.log("removeClass"+dateListFull.eq(i).text());
            }
          }
        //  console.log("Length of List of dates: "+ dateListFull.length);

    //  that.addclass(.japi_load_more)
    //converts month as a string name to the number corresponding to the month ex. August = 08
    function convertMonthNameToNumber(monthName) {
        var myDate = new Date(monthName + " 1, 2000");
        var monthDigit = myDate.getMonth();
        return isNaN(monthDigit) ? 0 : (monthDigit + 1);
    }
    var m_number = convertMonthNameToNumber(m);
      $.ajax({

        url : ajaxurl,
        type: 'post',
        data :{
          "digwp_y": y,
  				"digwp_m" : m_number,
				  "digwp_d" : d,
        action: 'japi_load_more'
        },
        error:function(response){
          console.log(response);
          console.log("FAILURE");
        },
        success:function(response){
          $('.Post-container').empty();
          console.log("success");
          $('.Post-container').hide().prepend(response).fadeIn('slow');

        }

    });
    var dateListFull = $('#dom-target').children();

    for(i=0;i<=dateListFull.length;i++){
      var other_split=dateListFull.eq(i).text().split(/[ ,]+/);
      if(($('#' +other_split[1]+other_split[2]+other_split[3]).parent().parent().parent().children().children().children().hasClass("selected_box"))){

           $('#' +other_split[1]+other_split[2]+other_split[3]).parent().parent().parent().slideDown("slow");
  //         console.log("this is the parent previous");

  //           console.log("children"+($('#' +other_split[1]+other_split[2]+other_split[3]).parent().parent().parent().children().children().children().text()));

      }
      else{
        $('#' +other_split[1]+other_split[2]+other_split[3]).parent().parent().parent().slideUp("slow");
      }
    }

});


  /*--------------------------------------*/
  /*--------------------------------------*/
  /*---------------Previous---------------*/
  /*--------------------------------------*/
  /*--------------------------------------*/
  /*--------------------------------------*/
$(document).on('click','.previous', function(){

  $('.next').removeClass('noclick');
  $('.next').addClass('Onclick');

  //  console.log("previous");


    var Current_date=$('.selected_date').text();
    //    console.log("Current Date:"+Current_date);

    var Current_object=$('p:contains(' + Current_date + ')').get(0);
    //    console.log("Current Object:"+Current_object);
    var Current_object_text = $(Current_object).text();
  //  console.log("Current Object Inner Text:"+Current_object_text);


      var Previous_object = $(Current_object).prev();

    //  console.log("Previous Object:"+Previous_object);

      var Previous_object_text = $(Previous_object).text();

      var First = $("#dom-target").children().first();
      var inner = First.text();
      //      console.log("First Object:"+inner);
      if(Previous_object_text===inner){
        $('.previous').removeClass('Onclick');
        $('.previous').addClass('noclick');

        $('.next').removeClass('noclick');
        $('.next').addClass('Onclick');

        console.log("CANT GO ANY FARTHER");
      }
      else {
        $('.previous').removeClass('noclick');
        $('.previous').addClass('Onclick');
      }





      //that is used to maintain the parent class object, if we use $(this) in a child class it will use the child classes object
      var ajaxurl = $('#dom-target').data('url');
      var dateArray = Previous_object_text;
      var split = dateArray.split(/[ ,]+/);
  //    console.log("DATE: "+dateArray);

    var y = split[3];
    var m = split[1];
    var d = split[2];

    //    console.log("year: "+y);
    //      console.log("month: "+m);
    //      console.log("day: " +d);

      $('.selected_date').empty();
      $('.selected_date').append(dateArray);
        var dateListFull = $('#dom-target').children();
            for(i=0;i<=dateListFull.length;i++){

              var other_split=dateListFull.eq(i).text().split(/[ ,]+/);


              if(dateListFull.eq(i).text()==dateArray){
                $('#' +other_split[1]+other_split[2]+other_split[3]).removeClass("day_box");
                $('#' +other_split[1]+other_split[2]+other_split[3]).addClass("selected_box");
                $('#_' +other_split[1]+other_split[2]+other_split[3]).addClass("selected_text");
              }
              else{
                $('#_' +other_split[1]+other_split[2]+other_split[3]).removeClass("selected_text");
                $('#' +other_split[1]+other_split[2]+other_split[3]).removeClass("selected_box");
                $('#' +other_split[1]+other_split[2]+other_split[3]).addClass("day_box");
        //        console.log("removeClass"+dateListFull.eq(i).text());
              }
            }
        //    console.log("Length of List of dates: "+ dateListFull.length);

    //  that.addclass(.japi_load_more)
    function convertMonthNameToNumber(monthName) {
        var myDate = new Date(monthName + " 1, 2000");
        var monthDigit = myDate.getMonth();
        return isNaN(monthDigit) ? 0 : (monthDigit + 1);
    }
    var m_number = convertMonthNameToNumber(m);
      $.ajax({

        url : ajaxurl,
        type: 'post',
        data :{
          "digwp_y": y,
  				"digwp_m" : m_number,
				  "digwp_d" : d,
        action: 'japi_load_more'
        },
        error:function(response){
          console.log(response);
          console.log("FAILURE");
        },
        success:function(response){
          $('.Post-container').empty();
          console.log("success");
          $('.Post-container').hide().prepend(response).fadeIn('slow');

        }

      });
      var dateListFull = $('#dom-target').children();

      for(i=0;i<=dateListFull.length;i++){
        var other_split=dateListFull.eq(i).text().split(/[ ,]+/);
        if(($('#' +other_split[1]+other_split[2]+other_split[3]).parent().parent().parent().children().children().children().hasClass("selected_box"))){

             $('#' +other_split[1]+other_split[2]+other_split[3]).parent().parent().parent().slideDown("slow");
             //             console.log("this is the parent previous");

  //           console.log("children"+($('#' +other_split[1]+other_split[2]+other_split[3]).parent().parent().parent().children().children().children().text()));

        }
        else{
          $('#' +other_split[1]+other_split[2]+other_split[3]).parent().parent().parent().slideUp("slow");
        }


    /*
        if(($('#' +other_split[1]+other_split[2]+other_split[3]).parent().parent().parent().hasClass("selected_box"))) {
            $('#' +other_split[1]+other_split[2]+other_split[3]).parent().parent().parent().slideDown("slow");
           console.log("no child has class previous");

         }
         */

      }
});

  /*--------------------------------------*/
  /*--------------------------------------*/
  /*---------------CLICKDAY---------------*/
  /*--------------------------------------*/
  /*--------------------------------------*/
  /*--------------------------------------*/
$(document).on('click','.archive-days', function(){

    $('.next').removeClass('noclick');
    $('.next').addClass('Onclick');

    console.log("click");

      //that is used to maintain the parent class object, if we use $(this) in a child class it will use the child classes object
      var ajaxurl = $('#dom-target').data('url');
      var dateArray = $(this).data('day');
      var split = dateArray.split(/[ ,]+/);

  //    console.log("DATE:"+dateArray);

      var y = split[2];
      var m = split[0];
      var d = split[1];

      console.log("year: "+y);
      console.log("month: "+m);
      console.log("day: " +d);

      $('.selected_date').empty();
      $('.selected_date').append(dateArray);

      var dateListFull = $('#dom-target').children();
          for(i=0;i<=dateListFull.length;i++){

            var other_split=dateListFull.eq(i).text().split(/[ ,]+/);


            if(dateListFull.eq(i).text()==(' '+dateArray)){
              $('#' +other_split[1]+other_split[2]+other_split[3]).removeClass("day_box");
              $('#' +other_split[1]+other_split[2]+other_split[3]).addClass("selected_box");
              $('#_' +other_split[1]+other_split[2]+other_split[3]).addClass("selected_text");
            }
            else{
              $('#_' +other_split[1]+other_split[2]+other_split[3]).removeClass("selected_text");
              $('#' +other_split[1]+other_split[2]+other_split[3]).removeClass("selected_box");
              $('#' +other_split[1]+other_split[2]+other_split[3]).addClass("day_box");
              //          console.log("removeClass:"+dateListFull.eq(i).text());
            }
          }
    //      console.log("Length of List of dates: "+ dateListFull.length);
    //  that.addclass(.japi_load_more)

    //Check if you clicked on the first object
      var First = $("#dom-target").children().first();
      var inner = First.text();
    //  console.log("First Object:"+inner);
      if((' '+dateArray)===inner){
        $('.previous').removeClass('Onclick');
        $('.previous').addClass('noclick');

        $('.next').removeClass('noclick');
        $('.next').addClass('Onclick');

        console.log("CANT GO ANY FARTHER Back");
      }
      var Last = $("#dom-target").children().last();
      var inner = Last.text();
    //  console.log("Last Object:"+inner);
      if((' '+dateArray)===inner){
        $('.next').removeClass('Onclick');
        $('.next').addClass('noclick');

        $('.previous').removeClass('noclick');
        $('.previous').addClass('Onclick');

        console.log("CANT GO ANY FARTHER");
      }

      function convertMonthNameToNumber(monthName) {
          var myDate = new Date(monthName + " 1, 2000");
          var monthDigit = myDate.getMonth();
          return isNaN(monthDigit) ? 0 : (monthDigit + 1);
      }
      var m_number = convertMonthNameToNumber(m);

      $.ajax({

        url : ajaxurl,
        type: 'post',
        data :{
          "digwp_y": y,
  				"digwp_m" : m_number,
				  "digwp_d" : d,
        action: 'japi_load_more'
        },
        error:function(response){
          console.log(response);
          console.log("FAILURE");
        },
        success:function(response){
          $('.Post-container').empty();
          console.log("success");
          $('.Post-container').hide().prepend(response).fadeIn('slow');

        }

      });

      var dateListFull = $('#dom-target').children();

      for(i=0;i<=dateListFull.length;i++){
        var other_split=dateListFull.eq(i).text().split(/[ ,]+/);
        if(($('#' +other_split[1]+other_split[2]+other_split[3]).parent().parent().parent().children().children().children().hasClass("selected_box"))){

             $('#' +other_split[1]+other_split[2]+other_split[3]).parent().parent().parent().slideDown("slow");
    //         console.log("this is the parent previous");

  //           console.log("children"+($('#' +other_split[1]+other_split[2]+other_split[3]).parent().parent().parent().children().children().children().text()));

        }
        else{
          $('#' +other_split[1]+other_split[2]+other_split[3]).parent().parent().parent().slideUp("slow");
        }
      }


  });




/*--------------------------------------*/
/*--------------------------------------*/
/*---------------LIVETITLE--------------*/
/*--------------------------------------*/
/*--------------------------------------*/
/*--------------------------------------*/
$(document).on('click','#live_title', function(){
  $('#Code').hide();
  $('#Film').hide();
  $('#Live').show();
  $('.title_click').removeClass('title_click');
  $('#live_title').addClass('title_click');

  //reloads content on live page from first post
  Reload();


});

/*--------------------------------------*/
/*--------------------------------------*/
/*---------------CODETITLE--------------*/
/*--------------------------------------*/
/*--------------------------------------*/
/*--------------------------------------*/
var loadedBooleanCode = false;

$(document).on('click','#code_title', function(){
    $('#Live').hide();
    $('#Film').hide();
    $('#Code').show();
    $('.title_click').removeClass('title_click');
    $('#code_title').addClass('title_click');
    var ajaxurl = $('#dom-target').data('url');

 //prevent from sending AJAX multiple times
 //prevent from loading same tab multiple times
    if(loadedBooleanCode===false){
      loadedBooleanCode=true;

      $.ajax({

        url : ajaxurl,
        type: 'post',
        data :{

        action: 'japi_code_tab'
        },
        error:function(response){
          console.log(response);
          console.log("FAILURE");
        },
        success:function(response){
          $('.Post-container').empty();
          console.log("success");
          $('#Code').hide().prepend(response).fadeIn('slow');

        }

      });


    }


});


/*--------------------------------------*/
/*--------------------------------------*/
/*---------------FILMTITLE--------------*/
/*--------------------------------------*/
/*--------------------------------------*/
/*--------------------------------------*/
  var loadedBooleanFilm = false;

$(document).on('click','#film_title', function(){
  $('#Live').hide();
  $('#Code').hide();
  $('#Film').show();
  $('.title_click').removeClass('title_click');
  $('#film_title').addClass('title_click');

  var ajaxurl = $('#dom-target').data('url');

  if(loadedBooleanFilm===false){
    loadedBooleanFilm=true;

  $.ajax({

    url : ajaxurl,
    type: 'post',
    data :{

    action: 'japi_film_tab'
    },
    error:function(response){
      console.log(response);
      console.log("FAILURE");
    },
    success:function(response){
      $('.Post-container').empty();
      console.log("success");
      $('#Film').hide().prepend(response).fadeIn('slow');

    }

  });
  }



});
