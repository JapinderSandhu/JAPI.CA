//Global variable of all dates-children in a single Array
var dateListFull = $('#dom-target').children();

//Global variable of all dates in a single Array
var Dates = $('#dom-target');

$(document).ready(function(){
  //scroll to specific home page point


  if (window.matchMedia("(min-width: 1440px) and (max-width: 2560px)").matches) {
    $("html, body").animate({ scrollTop: 1000 }, 1000);
  }

/* the viewport is more than 1060 pixels wide */
  if (window.matchMedia("(min-width: 1060px) and (max-width: 1439px)").matches) {
    $("html, body").animate({ scrollTop: 998 }, 1000);
  }
  if (window.matchMedia("(min-width: 1024px) and (max-width: 1059px)").matches) {
    $("html, body").animate({ scrollTop: 950 }, 1000);
  }
  if (window.matchMedia("(min-width: 768px) and (max-width: 1023px)").matches) {
    $("html, body").animate({ scrollTop: 768 }, 1000);
  }
  if (window.matchMedia("(min-width: 425px) and (max-width: 767px)").matches) {
    $("html, body").animate({ scrollTop: 615 }, 1000);
  }
  if (window.matchMedia("(min-width: 375px) and (max-width: 424px)").matches) {
    $("html, body").animate({ scrollTop: 618 }, 1000);
  }
  if (window.matchMedia("(min-width: 320px) and (max-width: 374px)").matches) {
    $("html, body").animate({ scrollTop: 608 }, 1000);
  }
  else {
  /* the viewport is less than 1060 pixels wide */
  }


 function hover_slide(){
    var id_mouseout;
    //This will drop down the list of dates on mouseover
    $('.archive-months').mouseover(function() {
    //  console.log("id: "+this.id);
     $('#'+this.id+"-monthList").slideDown("slow");
     id_mouseout = '#'+this.id+"-monthList"
    // console.log("slidedown mouseover: "+ id_mouseout);



    });
    //This will slide Up the list of dates on mouseover
    $(".timeline").mouseleave(function(){


     for(i=0;i<=dateListFull.length;i++){
       var other_split=dateListFull.eq(i).text().split(/[ ,]+/);
       if(!($('#' +other_split[1]+other_split[2]+other_split[3]).parent().parent().parent().children().children().children().hasClass("selected_box"))){
         $('#' +other_split[1]+other_split[2]+other_split[3]).parent().parent().parent().slideUp("slow");
         //console.log("slideup mouseout: "+ $('#'+this.id+"-monthList").text());
       }
     }
   });
 }
 hover_slide()
});

/*--------------------------------------*/
/*--------------------------------------*/
/*----------------ONLOAD----------------*/
/*--------------------------------------*/
/*--------------------------------------*/
/*--------------------------------------*/
$(document).ready(function(){



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
});


  /*--------------------------------------*/
  /*--------------------------------------*/
  /*----------------Next------------------*/
  /*--------------------------------------*/
  /*--------------------------------------*/
  /*--------------------------------------*/

$(document).on('click','.next', function(){
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
            }
            else{
              $('#' +other_split[1]+other_split[2]+other_split[3]).removeClass("selected_box");
              $('#' +other_split[1]+other_split[2]+other_split[3]).addClass("day_box");
          //    console.log("removeClass"+dateListFull.eq(i).text());
            }
          }
        //  console.log("Length of List of dates: "+ dateListFull.length);

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
              }
              else{
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
            }
            else{
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
