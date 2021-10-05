
for(i=0;i<100;i++){
  var cond= true;
  if(i % 3 == 0){
    document.write("fizz ");
    cond = false;
  }
  if (i%5==0) {
    document.write("buzz");
    cond=false;
  }
  if (i%3!=0 && i%5!=0) {
    document.write(i);
  }
  document.write("<br>");
}
