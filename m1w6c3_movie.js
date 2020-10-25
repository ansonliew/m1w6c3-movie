var movies = [];
var selectedMovie;
var moviesDetail = [];

function buttonPressed(){

	//When you click the add button then this is to store the input value into var
	var movie = document.getElementById("movieInput").value;

	console.log(movie);

	//Get the movie name API
	fetch('http://www.omdbapi.com/?s='+movie+'&apikey=87d10179')
	.then(response => response.json())
	.then(data => {
		console.log(data)
		movies = data["Search"]
		for (var i = 0; i < movies.length; i++){

		//Creating a tr
		var newTr = document.createElement("tr");

		//Create td1
		var td1 = document.createElement("td");

		//Create td2
		var td2 = document.createElement("td");

		//Create td3
		var td3 = document.createElement("td");

		//Create td4
		var td4 = document.createElement("td");

		//Create td5
		var td5 = document.createElement("td");

		//Create poster url
		var posterUrl = document.createElement("posterUrl");

		//innerHTML for td1
		td1.innerHTML = movies[i]["Title"];

		//innerHTML for td2
		td2.innerHTML = movies[i]["Year"];

		//innerHTML for td3
		td3.innerHTML = movies[i]["imdbID"];

		//innerHTML for td4
		td4.innerHTML = movies[i]["Type"];

		//innerHTML for td5
		var movieImg = document.createElement("img");
		var posterUrl = movies[i]["Poster"];
		console.log(posterUrl)
		movieImg.setAttribute("src", posterUrl);
		td5.appendChild(movieImg)


		//append td1 to tr
		newTr.appendChild(td1)

		//append td2 to tr
		newTr.appendChild(td2)

		//append td3 to tr
		newTr.appendChild(td3)

		//append td4 to tr
		newTr.appendChild(td4)

		//append td5 to tr
		newTr.appendChild(td5)


		newTr.movie = movies[i];
		newTr.addEventListener('click', function(evt){
			

			selectedMovie = evt.currentTarget.movie
			document.getElementById("movieImage").setAttribute("src", selectedMovie["Poster"])
			document.getElementById("title").innerHTML = selectedMovie["Title"];
			document.getElementById("year").innerHTML = selectedMovie["Year"];
			document.getElementById("imdbID").innerHTML = selectedMovie["imdbID"];
			document.getElementById("type").innerHTML = selectedMovie["Type"];
			document.getElementById("poster").innerHTML = selectedMovie["Poster"];


			//This 2nd fetch API put here in order to get the selectedMovie["imdbID"] above
			fetch("http://www.omdbapi.com/?i=" + selectedMovie["imdbID"] + "&apikey=87d10179")
			.then(response => response.json())
			.then(data => {

				var Rated = data["Rated"]
				var Released = data["Released"]
				var Director = data["Director"]
				var Awards = data["Awards"]

			document.getElementById("rated").innerHTML = Rated;
			document.getElementById("released").innerHTML = Released;
			document.getElementById("director").innerHTML = Director;
			document.getElementById("awards").innerHTML = Awards;

			//Create the hyperlink
			var info = "More Movie Info";
			var result = info.link("http://www.omdbapi.com/?i=" + selectedMovie["imdbID"] + "&apikey=87d10179");
			document.getElementById("moreLink").innerHTML = info.link("http://www.omdbapi.com/?i=" + selectedMovie["imdbID"] + "&apikey=87d10179");
			});
			

		});

		//append tr to body
		document.getElementById("movieBody").appendChild(newTr)
		}
	})

		.catch(function(err){
			console.log(err);
		})
}

	function formateDateTime(){

	}

	
	


