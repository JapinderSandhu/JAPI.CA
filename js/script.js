//Global variable of all dates in a single Array
var Dates = $('#dom-target');

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

      $.ajax({

        url : ajaxurl,
        type: 'post',
        data :{
          "digwp_y": y,
          "digwp_m" : m,
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

      $.ajax({

        url : ajaxurl,
        type: 'post',
        data :{
          "digwp_y": y,
  				"digwp_m" : m,
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
      console.log("First Object:"+inner);
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

      $.ajax({

        url : ajaxurl,
        type: 'post',
        data :{
          "digwp_y": y,
  				"digwp_m" : m,
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

      console.log("DATE:"+dateArray);

      var y = split[2];
      var m = split[0];
      var d = split[1];

    //  console.log("year: "+y);
    //  console.log("month: "+m);
    //  console.log("day: " +d);

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
              console.log("removeClass:"+dateListFull.eq(i).text());
            }
          }
          console.log("Length of List of dates: "+ dateListFull.length);
    //  that.addclass(.japi_load_more)

    //Check if you clicked on the first object
      var First = $("#dom-target").children().first();
      var inner = First.text();
      console.log("First Object:"+inner);
      if((' '+dateArray)===inner){
        $('.previous').removeClass('Onclick');
        $('.previous').addClass('noclick');

        $('.next').removeClass('noclick');
        $('.next').addClass('Onclick');

        console.log("CANT GO ANY FARTHER Back");
      }
      var Last = $("#dom-target").children().last();
      var inner = Last.text();
      console.log("Last Object:"+inner);
      if((' '+dateArray)===inner){
        $('.next').removeClass('Onclick');
        $('.next').addClass('noclick');

        $('.previous').removeClass('noclick');
        $('.previous').addClass('Onclick');

        console.log("CANT GO ANY FARTHER");
      }


      $.ajax({

        url : ajaxurl,
        type: 'post',
        data :{
          "digwp_y": y,
  				"digwp_m" : m,
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
