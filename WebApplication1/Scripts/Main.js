'use strict'

$(document).ready(function () {

    $('#MoviesTable').DataTable(
        {
            "columns": [
                { "visible": false},
                { "visible": false },
                { "visible": false },
                null
            ],
            //"lengthMenu": [[20, 50, 100, -1], [20, 50, 100, "All"]],
            "dom": 'lBfrtip',
            "select": {
                style: 'multi'
            },
            "autoWidth": true,
            "scrollX": true,
            responsive: true
        }
    );
    $(function () {
        $('[rel=tooltip]').tooltip({ trigger: "hover" });
    });
   
    loadTable(1);

    $('#MoviesTable tbody').on('click', 'tr', function () {
        var table = $('#MoviesTable').DataTable();
        //$(this).toggleClass('selected');
        var selectedRow = table.row(this).data();
        var imageParh = "https://image.tmdb.org/t/p/w342/" + selectedRow[1];
        $("#imagePoster").attr("src", imageParh);
        var description = selectedRow[2];
        $('#movieDescr').html(description);
        $('#movieTitle').html(selectedRow[3]);
    });
});

   

$('#next').click(function () {
    var num = parseInt($('#pageNum').text());
    var nextPage = num++;
    //$('#pageNum').text(nextPage);
    loadTable(nextPage);
});

function loadTable(pageNum) {  //load Movies DataTable   

    var url = "/Home/GetMovies";
    $.ajax({
        url: url,
        type: 'POST',
        data: { "page": pageNum},
        dataType: 'json',
        success: function (data) {
            $('#MoviesTable').DataTable().clear();
            if (data.length > 0) {
                for (var i in data) {
                    $('#MoviesTable').DataTable().row.add(data[i]);
                }
            }
            $('#MoviesTable').DataTable().draw();
            $('#pageNum').text(pageNum);
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert('eror: \xa0\xa0' + thrownError);
        }        
    });
}

