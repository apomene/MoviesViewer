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
            "lengthMenu": [[20, 50, 100, -1], [20, 50, 100, "All"]],
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
   
    loadTable();

    $('#MoviesTable tbody').on('click', 'tr', function () {
        var table = $('#MoviesTable').DataTable();
        $(this).toggleClass('selected');
        var selectedRow = table.row(this).data();
        var imageParh = "https://image.tmdb.org/t/p/w342/" + selectedRow[1];
        $("#imagePoster").attr("src", imageParh);
        var description = selectedRow[2];
        $('#movieDescr').html(description);
        $('#movieTitle').html(selectedRow[3]);
    });
});

   

//$('#next').click(function () {
//    var num = $('#pageNum').val();
//    loadTable(num + 1);
//});

function loadTable() {  //load Movies DataTable   

    var url = "/Home/GetMovies";
    $.ajax({
        url: url,
        type: 'POST',
        //data: {"page":1},
        dataType: 'json',
        success: function (data) {
            $('#MoviesTable').DataTable().clear();
            if (data.length > 0) {
                for (var i in data) {
                    $('#MoviesTable').DataTable().row.add(data[i]);
                }
            }
            $('#MoviesTable').DataTable().draw();
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert('eror: \xa0\xa0' + thrownError);
        }        
    });
}

