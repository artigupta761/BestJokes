$(document).ready(function(){
     $.ajax({
        type: "GET",
        url: "https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten",
        success: function(data) { 
            console.log("Ajax call success.");
            outputToDiv(data);
        }
     });
 });


function outputToDiv(data){
    console.log("Data here is " + JSON.stringify(data));

    var jokes = document.getElementsByClassName("jokes-container")[0];
    while (jokes.firstChild) {
        jokes.removeChild(jokes.firstChild);
    }

    var len = data.length;
    var noOfJokesinARow = 3; // Snake case a_b_c_d, camel case. => noOfJokes
    //1.45 => 1
    //10%3 = 3.33 => 3
    totalNumberOfRows = len/noOfJokesinARow;
    leftNumberOfJokes = len%noOfJokesinARow;

    console.log("totalNumberOfRows" + totalNumberOfRows);
    console.log("leftNumberOfJokes" + leftNumberOfJokes);
    key = 0;

    for (var i = 0; i < totalNumberOfRows; i++){

        var row_div = document.createElement("div");
        row_div.setAttribute("class", "row");

        for (var j = 0; j < noOfJokesinARow; j++){

            //console.log(i);

            var setup = data[key].setup;
            var punchline = data[key].punchline;

            var div = document.createElement("div");
            div.setAttribute("class", "listing card small col s4 cyan");

            var h5 = document.createElement("h5");
            h5.innerText = setup;

            var p = document.createElement("p");
            p.innerText = punchline;

            div.appendChild(h5);
            div.appendChild(p);

            row_div.appendChild(div);
            jokes.appendChild(row_div);
            key = key + 1;
        }
    }
}



/**
function abc(a, b){}

abc(1, 2)

success : function(data){
    
}


*/