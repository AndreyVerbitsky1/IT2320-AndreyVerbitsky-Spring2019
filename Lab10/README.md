#Creating JSON object

```
<!DOCTYPE html>
<html>
<body>

<p>different ways to access JSON objects</p>

<p id="lab10"></p>

<script>
  var MyVariable = { "Name":"Andrey", "Major":"Programming and Development", "FavoriteLanguage":"Java" }

//First way

  document.getElementById("lab10").innerHTML += MyVariable.Name + "<br>";
  document.getElementById("lab10").innerHTML += MyVariable.Major + "<br>"+ "<br>";

//Second way
document.getElementById("lab10").innerHTML += MyVariable["Name"] + "<br>";
document.getElementById("lab10").innerHTML += MyVariable["Major"] + "<br>";

</script>

</body>
</html>
```

##Difference between Stringify() and Parse() with JSON objects

JSON.stringify() - makes the data to or from a server a string. 
 
example would be 

```

<!DOCTYPE html>
<html>
<body>

<h2>Create JSON string from a JavaScript object.</h2>

<p id="lab10"></p>

<script>
var MyVariable = { name: "Andrey", Major:"Programming and Development", FavoriteLanguage:"Java"  };
var JSONSTRING = JSON.stringify(MyVariable);
document.getElementById("lab10").innerHTML = JSONSTRING;
</script>

</body>
</html>

```


JSON.parse() - makes string data a JavaScript object 
```
<!DOCTYPE html>
<html>
<body>

<h2>JSON string to object using PARSE</h2>

<p id="lab10"></p>

<script>
var string = '{"Name":"Andrey", "Major":"Programming and Development", "FavoriteLanguage":"Java" }'
var object = JSON.parse(string);
document.getElementById("lab10").innerHTML = object.Name + ", " + object.Major + ", " +object.FavoriteLanguage ;

</script>

</body>
</html>

```

### Retrieve Information from a Server
```
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
  $("button").click(function(){
    $.get("demo_test.asp", function(data, status){
      alert("Info: " + data + " Status of the Request: " + status);
    });
  });
});
</script>
</head>
<body>

<button>Request and Retrieves</button>

</body>
</html>
```


