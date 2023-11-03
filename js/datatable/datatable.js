(function($) {
    "use strict"; // Start of use strict
    $('#DangKyToChucDaiHoi').DataTable({
        pagingType: 'full_numbers',
        responsive: true,
        dom: 't<"mt-5"<"left"p><"right"i>>',
        language: {
            "info": "Trang _PAGE_ đến _PAGES_",
            "paginate": {
                "first":      '<i class="fa fa-solid fa-angles-left"></i>',
                "last":       '<i class="fa fa-solid fa-angles-right"></i>',
                "next":       '<i class="fa fa-solid fa-angle-right"></i>',
                "previous":   '<i class="fa fa-solid fa-angle-left"></i>'
            },
        },
        "pageLength": 10
    });
    $('#DanhSachDaiHoi').DataTable({
        pagingType: 'full_numbers',
        responsive: true,
        dom: 't<"mt-5"<"left"p><"right"i>>',
        language: {
            "info": "Trang _PAGE_ đến _PAGES_",
            "paginate": {
                "first":      '<i class="fa fa-solid fa-angles-left"></i>',
                "last":       '<i class="fa fa-solid fa-angles-right"></i>',
                "next":       '<i class="fa fa-solid fa-angle-right"></i>',
                "previous":   '<i class="fa fa-solid fa-angle-left"></i>'
            },
        },
        "pageLength": 4,
        "searchable": false, 
        "orderable": false
    });
    
})(jQuery); // End of use strict