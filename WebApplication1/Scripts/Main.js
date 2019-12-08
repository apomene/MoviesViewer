'use strict'

$(document).ready(function () {
    loadInitImage();   
});

function loadInitImage() {
    var id = $('#selMovieId').text();
    loadImage(id);
}

function loadImage(id) {
    var selectedPoster = id + ' poster';
    var selectedOverview = id + ' overview';
    var selectedTitle = id + ' title';

    $('#selMovieId').text(id);
    var imageParh = "https://image.tmdb.org/t/p/w342/" + document.getElementById(selectedPoster).textContent;
    $("#imagePoster").attr("src", imageParh);
    var description = document.getElementById(selectedOverview).textContent;
    $('#movieDescr').html(description);
    var title = document.getElementById(selectedTitle).textContent;
    $('#movieTitle').html(title);
}
