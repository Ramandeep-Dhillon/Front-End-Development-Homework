$(document).ready(function()
{
    

    // FAQ's Toggle Start

    $("#p1, #p2, #p3, #p4, #p5, #p6, #p7 , #p8").hide();

    $("#q1").click(function()
    {
      $("#p1").toggle(1000);
    });

    $("#q2").click(function()
    {
      $("#p2").toggle(1000);
    });

    $("#q3").click(function()
    {
      $("#p3").toggle(1000);
    });

    $("#q4").click(function()
    {
      $("#p4").toggle(1000);
    });

    $("#q5").click(function()
    {
      $("#p5").toggle(1000);
    });

    $("#q6").click(function()
    {
      $("#p6").toggle(1000);
    });

    $("#q7").click(function()
    {
      $("#p7").toggle(1000);
    });

    $("#q8").click(function()
    {
      $("#p8").toggle(1000);
    });
    
    // FAQ's Toggle End

    

});

// adding images to the index page using bootstrap card start

function search()
    {
        var input = $('#search').val();
        var num = $('#number').val();
        

        $.get('https://api.giphy.com/v1/gifs/search?api_key=dql6uBKpPjmAnC7KvnhxlmjKIlc1qa7a&q='+ input +'&limit=' + num + '&lang=en', function(response)
        {
          const ch = document.getElementById("result");
          ch.textContent = ' ';
          console.log(response);
          for(let i=0; i<=response.data.length; i++)
          
            {
              
              document.getElementById("result").innerHTML += "<div class=\"card col-lg-4 col-md-6 col-sm-12\"><img src = \"" + response.data[i].images.downsized_large.url + "\"class=\"img-fluid\"><div class=\"card-body\"><p class=\"card-title\">" + response.data[i].title + "</p>";
              
            }
                        
        });
    }
// adding images to the index page using bootstrap card End