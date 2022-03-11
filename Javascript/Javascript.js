// var a = 4;
// var b = -9;
// var c = -7;
// if (a > b && a > c) {
//     if (b > c) {
//         document.writeln("Numbers in descending order are: <br>", a, "<br>", b, "<br>", c);
//     }
//     else {
//         document.writeln("Numbers in descending order are: <br>", a, "<br>", c, "<br>", b);
//     }    
// }
// else if (b > a && b > c) {
//     if (a > c) {
//         document.writeln("Numbers in descending order are: <br>", b, "<br>", a, "<br>", c);
//     }
//     else{
//         document.writeln("Numbers in descending order are: <br>", b, "<br>", c, "<br>", a);
//     }
// }
// else if (c > a && c > b) {
//     if (a > b) {
//         document.writeln("Numbers in descending order are: <br>", c, "<br>", a, "<br>", b);
//     }
//     else {
//         document.writeln("Numbers in descending order are: <br>", c, "<br>", b, "<br>", a);
//     }
// }



// for (i=1; i<=10; i++)
// {
//     document.writeln("3 * " + i + " = " + 3*i + "<br>");
// }

// var a = [23, 34, 4, 23, 45, 75, 8, 243, 345, 234];
// for (i=(a.length - 1); i>=0; i--)
// {
//     document.writeln(a[i] + "<br>")
// }

// var a=0, b=1, i, c, d=100;
// for (i = 1; i < d; i++)
// {
//   document.writeln (a + ", ");
//   c=a+b;
//   a=b;
//   b=c;
//   if (c>=d) {
//       break;
//   }
//  }

// var array = ["ind", "ind", "aus", "SA", "aus","aus","aus","aus",];
// var a=0, b=0, c=0;
// for (i=0; i<array.length-1; i++)
// {
//   switch (array[i]) {
//         case "ind":
//           a++;
//           break;
//         case "aus":
//             b++;
//             break; 
//             case "SA":
//                 c++;
//                 break;         
  
//       default:
//           document.writeln("NoCase");
//           break;
//   }
// }
// document.writeln(" Ind = " + a + " Aus = " + b + " SA = " + c);


var array = [5,2,7,9,15,81,11];
var a=0, b=0, c=0, x=1, y=0, z=0;
function secondMaximum()
{

for ( i = 0; i < array.length - 1; i++)
{
     if (array[i] > a)
          {a = array[i]; 
               if (a>b)
                      { c=b;
                         b=a;
                         a=c;}
               }
}}


function secondMinimum()
{

for ( i = 0; i < array.length - 1; i++)
{
     if (array[i] < x)
          {x = array[i];
               document.writeln(x);

                 if (x<y)
                      { z=y;
                         y=x;
                         x=z;}
               }
}}
secondMaximum(array);
document.writeln("The Second Maximum Number from the Array is : " + c + "<br>");
secondMinimum(array);
document.writeln("The Second Minimum Number from the Array is : " + x);


// function Validate()
// {
//      var User_Name = document.getElementById("UserName").value;
//      var Pass = document.getElementById("Password").value;
//      if (User_Name=="Raman" && Pass == "12345")
     
          
//           {document.getElementById("Result").innerHTML = "Welcome Raman";}
          
    
     
//      else{document.getElementById("Result").innerHTML = "Wrong UserName";}
     

// }

// $(document).ready(function()
// {
     
//      $('#btn-Click').click(function()
//      {
//           var textval = $('.txt').val( );
//           $('#list').append(" <li> " + textval + " </li> ");
//           $('.txt').val(" ");
//      }
//      )
// }
// )

// $(document).ready(function(){  
//      $("#btn1").click(function(){  
//          $("p").append(" <b>Newly added appended text</b>.");  
//      });  
//      $("#btn2").click(function(){  
//          $("ol").append("<li><b>Newly added appended item</b></li>");  
//      });  
//  });  