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
    console.log(genresIds);
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



function getGenreNames() {

}