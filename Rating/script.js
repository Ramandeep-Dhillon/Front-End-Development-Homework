$(document).ready(function()
{
  var ratedCount;
  var childs;
  console.log(childs);
    
  $('.rating-circle').hover(function()
  {
    var childs = $('.rating-container').children();

   
       $(this).prevAll().addClass('rating-hover');
       $(this).addClass('rating-hover');
       $(this).nextAll().removeClass('rating-hover rating-chosen');
      // $(this).prevAll().removeClass('rating-chosen');
      // $(this).removeClass('rating-chosen');

       if(onmousedown)
      {
        click.function(clk);
      }
      else if (ratedCount>0)
      {
        for(i =0; i < ratedCount; i++)
         {
            $(childs[i]).addClass('rating-chosen');
            $(childs[i]).removeClass('rating-hover');

        }
      }
      
  })

  
    $('.rating-circle').mouseout(function()
    {

      $(this).removeClass('rating-hover');
      $(this).prevAll().removeClass('rating-hover');   
    })
  

  $('.rating-circle').click(function(clk)
  {
      $(this).prevAll().addClass('rating-chosen');
      $(this).addClass('rating-chosen');
      $(this).nextAll().removeClass('rating-chosen rating-hover');
      $(this).prevAll().removeClass('rating-hover');
      $(this).removeClass('rating-hover');
      
      var index = $(this).index();
      console.log(index);
      ratedCount = index;


  })
  
})