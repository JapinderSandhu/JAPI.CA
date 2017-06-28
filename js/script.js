
  $(document).on('click','.day', function(){

    console.log("click");

      //that is used to maintain the parent class object, if we use $(this) in a child class it will use the child classes object
      var ajaxurl = $(this).data('url');
      var dateArray = $(this).text();
      var split = dateArray.split(/[ ,]+/);

      console.log("DATE: "+dateArray);
      var y = split[2];
      var m = split[0];
      var d = split[1];

      console.log("year: "+y);
      console.log("month: "+m);
      console.log("day: " +d);


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
