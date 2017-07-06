
/*--------------------------------------*/
/*--------------------------------------*/
/*----------------ONLOAD----------------*/
/*--------------------------------------*/
/*--------------------------------------*/
/*--------------------------------------*/
  $(document).ready(function(){


    console.log("ONLOAD");
      //that is used to maintain the parent class object, if we use $(this) in a child class it will use the child classes object
      var Last = $(".timeline").children().last();
      var inner = Last.text();
      var ajaxurl = 'http://localhost:8888/wordpress/wp-admin/admin-ajax.php';
      var dateArray = $(Last).text();
      var split = dateArray.split(/[ ,]+/);



      $('.next').removeClass('Onclick');
      $('.next').addClass('noclick');

      /*
      console.log("LAST CHILD: "+Last);
      console.log("LAST CHILD TEXT : "+inner);
      console.log("LAST CHILD data-url: "+ajaxurl);*/
      /*console.log("DATE: "+dateArray);*/

      var y = split[3];
      var m = split[1];
      var d = split[2];

      /*console.log("year: "+y);
      console.log("month: "+m);
      console.log("day: " +d);*/


      $('.selected_date').empty();
      $('.selected_date').append(dateArray);

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
  /*----------------Next------------------*/
  /*--------------------------------------*/
  /*--------------------------------------*/
  /*--------------------------------------*/

  $(document).on('click','.next', function(){

    console.log("next");
    $('.previous').removeClass('noclick');
    $('.previous').addClass('Onclick');

    var Current_date=$('.selected_date').text();
  //  console.log("Current Date:"+Current_date);

    var Current_object=$('p:contains(' + Current_date + ')').get(0);
//    console.log("Current Object:"+Current_object);
    var Current_object_text = $(Current_object).text();
//    console.log("Current Object Inner Text:"+Current_object_text);


      var Next_object = $(Current_object).next();

//      console.log("Next Object:"+Next_object);

      var Next_object_text = $(Next_object).text();

      var Last = $(".timeline").children().last();
      var inner = Last.text();
      console.log("Last Object:"+inner);
      if(Next_object_text===inner){
        $('.next').removeClass('Onclick');
        $('.next').addClass('noclick');
        console.log("CANT GO ANY FARTHER");
      }
      else {
        $('.next').removeClass('noclick');
        $('.next').addClass('Onclick');
      }


    //  console.log("Next Object Text:"+Next_object_text);
      var ajaxurl = 'http://localhost:8888/wordpress/wp-admin/admin-ajax.php';
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



    console.log("previous");
    $('.next').removeClass('noclick');
    $('.next').addClass('Onclick');


    var Current_date=$('.selected_date').text();
  //  console.log("Current Date:"+Current_date);

    var Current_object=$('p:contains(' + Current_date + ')').get(0);
//    console.log("Current Object:"+Current_object);
    var Current_object_text = $(Current_object).text();
//    console.log("Current Object Inner Text:"+Current_object_text);


      var Previous_object = $(Current_object).prev();

  //    console.log("Previous Object:"+Previous_object);

      var Previous_object_text = $(Previous_object).text();



      console.log("Previous Object:"+Previous_object_text);

      var First = $(".timeline").children().first();
      var inner = First.text();
      console.log("First Object:"+inner);
      if(Previous_object_text===inner){
        $('.previous').removeClass('Onclick');
        $('.previous').addClass('noclick');
        console.log("CANT GO ANY FARTHER");
      }
      else {
        $('.previous').removeClass('noclick');
        $('.previous').addClass('Onclick');
      }


//      console.log("Previous Object Text:"+Previous_object_text);

      //that is used to maintain the parent class object, if we use $(this) in a child class it will use the child classes object
      var ajaxurl = 'http://localhost:8888/wordpress/wp-admin/admin-ajax.php';
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
  $(document).on('click','.day', function(){

    console.log("click");

      //that is used to maintain the parent class object, if we use $(this) in a child class it will use the child classes object
      var ajaxurl = 'http://localhost:8888/wordpress/wp-admin/admin-ajax.php';
      var dateArray = $(this).text();
      var split = dateArray.split(/[ ,]+/);
/*console.log("DATE: "+dateArray);*/

      var y = split[2];
      var m = split[0];
      var d = split[1];

    //  console.log("year: "+y);
    //  console.log("month: "+m);
    //  console.log("day: " +d);

      $('.selected_date').empty();
      $('.selected_date').append(dateArray);


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
