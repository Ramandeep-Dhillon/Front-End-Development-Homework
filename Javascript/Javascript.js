var a = 4;
var b = -9;
var c = 7;
if (a > b && a > c) {
    if (b > c) {
        document.writeln("Numbers in descending order are: <br>", a, "<br>", b, "<br>", c);
    }
    else {
        document.writeln("Numbers in descending order are: <br>", a, "<br>", c, "<br>", b);
    }    
}
else if (b> a && b > c) {
    if (a > c) {
        document.writeln("Numbers in descending order are: <br>", b, "<br>", a, "<br>", c);
    }
    else{
        document.writeln("Numbers in descending order are: <br>", b, "<br>", c, "<br>", a);
    }
}
else if (c > a && c > b) {
    if (a > b) {
        document.writeln("Numbers in descending order are: <br>", c, "<br>", a, "<br>", b);
    }
    else {
        document.writeln("Numbers in descending order are: <br>", c, "<br>", b, "<br>", a);
    }
}