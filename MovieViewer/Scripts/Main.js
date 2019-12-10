'use strict';

var posterSizes = [ "w92", "w154", "w185", "w342"];
var posterSize = 'w342';

$(document).ready(function () {
    loadInit();
});

function loadInit() {
    var id = $('#selMovieId').text();
    loadDetails(id);
}

function loadDetails(id) {
    var selectedPoster = id + ' poster';
    var selectedOverview = id + ' overview';
    var selectedTitle = id + ' title';
    var selectedDate = id + ' release';
    var selectedRating = id + ' rating';
    var genres = document.getElementsByClassName(id + ' gennres-ids');
    var genresIds = [];
    for (let i = 0; i < genres.length; i++) {
        genresIds.push(genres[i].textContent);
    }
    getGenreNames(genresIds);
    $('#selMovieId').text(id);
    var imageParh = "https://image.tmdb.org/t/p/" + posterSize+"/" + document.getElementById(selectedPoster).textContent;
    $("#imagePoster").attr("src", imageParh);
    var description = document.getElementById(selectedOverview).textContent;
    $('#movieDescr').html(description);
    var title = document.getElementById(selectedTitle).textContent;
    var releaseDate = document.getElementById(selectedDate).textContent;
    $('#movieTitle').html(title + ' (' + releaseDate.split('-')[0] + ')');
    var rating = document.getElementById(selectedRating).textContent;
    $('#rating').html(rating);
    RatingCheck(id);
    HighlightSelection(id);
}

function RatingCheck(id) {
    var selectedVotes = id + ' votes';
    var v = document.getElementById(selectedVotes).textContent;
    var votes = parseInt(v);
    if (votes === 0) {
        $('#rating').html('-'); ///indicate no rating available
    }
}

function getGenreNames(genresIds) {

    $.ajax({
        timeout: 10000,
        type: "POST",
        url: "/Home/GetGenreNames",
        traditional: true,
        data: { 'genresIds': genresIds },
        success: function (data) {
            CreateGenreElements(data);
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert('AJAX error:' + thrownError);
        },
        complete: function () {

        }
    });
}

function CreateGenreElements(data) {
    var genreDiv = document.getElementById("genres");
    //1st we remove all existing genre elements
    while (genreDiv.firstChild) {
        genreDiv.removeChild(genreDiv.firstChild);
    }
    var newSpan = document.createElement('span'); 
    newSpan.innerHTML = 'Genres:';
    genreDiv.appendChild(newSpan);
    for (var name in data) {    
        ///we add new genres to a new div and 
        //add the newly created element and its content into the DOM
        var newDiv = document.createElement('div');
        newDiv.className += 'badge badge-primary gennres-tag';
        newDiv.innerHTML = data[name];
        genreDiv.appendChild(newDiv);
    }
    
}

function HighlightSelection(id) {
    /// Highlight Selected movie: remove class titleListSelected from all and then assign to selected movie
    var allTitles = document.getElementsByClassName('titleList');
    for (let i = 0; i < allTitles.length; i++) {
        var elelment = document.getElementById(allTitles[i].id);
        elelment.classList.remove('titleListSelected');
    }
    $('#' + id).addClass('titleListSelected');
}

function AdjustPoster() {  //TO DO: Refactor, naive logic 
    var windowWidth = $(window).width();
    if (windowWidth <= 400) {
        var imageSource = $("#imagePoster").attr("src");
        var newImageSource = imageSource.replace(posterSizes[3], posterSizes[2]); 
        $("#imagePoster").attr("src", newImageSource);
    }
    else {
        imageSource = $("#imagePoster").attr("src");
         newImageSource = imageSource.replace(posterSizes[2], posterSizes[3]); 
        $("#imagePoster").attr("src", newImageSource);
    }   
}

