//new DataTable('#example');

$(document).ready(function () {
    $('#example').DataTable({
        lengthMenu: [5, 10, 15, 20, 25],
        pageLength: 10,
        dom: 'Bfrtilp',
        //text: "<i class='bi bi-file-earmark-spreadsheet-fill'></i>",
        //titleAttr: 'Exportar a Excel',
        //className: 'btn btn-success',        
        
    });
});