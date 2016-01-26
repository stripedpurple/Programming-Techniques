window.onload = function () {
  document.write(`<h1>test</h1><p>Words</p>`)
  var foo={};
  foo.name = "John";
  document.write("Name in foo: ");
  document.writeln(foo.name+"<br>");
  foo.age = 23;
  document.writeln("Age of foo: "+foo.age+"<br>");
  document.writeln("Today's date is: "+Date()+"<br>");
  var cities = ["NYC","LA","Chicago"];

  document.write("City at index 0: "+ cities[0]+"<br>");
  cities[3] = 3;
  document.write(cities+"<br>");
  document.write(cities.length+"<br>");
  cities.sort();
  document.write(cities+"<br>");
  cities.shift();
  document.write(cities+"<br>");
  cities.shift();
  document.write(cities.length+"<br>");
  cities.unshift("Harrisburg");
  document.write(cities+"<br>");
  cities.splice(1,0,"Pittsburg");
  document.write(cities+"<br>");
}
