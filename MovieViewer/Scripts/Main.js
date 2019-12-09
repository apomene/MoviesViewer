'use strict'

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
    var genres = document.getElementsByClassName(id+' gennres-ids');
    var genresIds = [];
    for (let i = 0; i < genres.length; i++) {
        genresIds.push(genres[i].textContent);
    }
    getGenreNames(genresIds);
    $('#selMovieId').text(id);
    var imageParh = "https://image.tmdb.org/t/p/w342/" + document.getElementById(selectedPoster).textContent;
    $("#imagePoster").attr("src", imageParh);
    var description = document.getElementById(selectedOverview).textContent;
    $('#movieDescr').html(description);
    var title = document.getElementById(selectedTitle).textContent;
    var releaseDate = document.getElementById(selectedDate).textContent;
    $('#movieTitle').html(title + ' (' + releaseDate.split('-')[0] + ')');
   
    var rating = document.getElementById(selectedRating).textContent;
    $('#rating').html(rating);
    /// Highlight Selected movie: remove class titleListSelected from all and then assign to selected movie
    var allTitles = document.getElementsByClassName('titleList');
    for (let i = 0; i < allTitles.length; i++) {
        var elelment = document.getElementById(allTitles[i].id);
        elelment.classList.remove('titleListSelected');
    }
    $('#' + id).addClass('titleListSelected');
}

function getGenreNames(genresIds) {

    $.ajax({
        timeout: 10000,
        type: "POST",
        url: "/Home/GetGenreNames",
        traditional: true,
        data: { 'genresIds': genresIds },         
        success: function (data) {
            for (var name in data) {
                var newDiv = document.createElement("div");
                var newContent = document.createTextNode(data[name]);
                // add the text node to the newly created div
                //newDiv.appendChild(newContent);  
                // add the newly created element and its content into the DOM 
                var currentDiv = document.getElementById("genres");
                currentDiv.appendChild(newContent);  
                //document.body.insertBefore(newDiv, currentDiv); 
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert('AJAX error:' + thrownError);
        },
        complete: function () {
            
        }
    });
}