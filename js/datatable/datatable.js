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
    $('#DanhSachBaoCaoVanBanDaiHoi').DataTable({
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
        "pageLength": 7,
        "searchable": false, 
        "orderable": false
    });

    function addFillTable(){
        document.getElementById("DanhSachBaoCaoVanBanDaiHoi")
            .classList
            .add("group");
        document.querySelector(".listDocs").classList.remove('bg-gray-200');
        document.querySelector(".groupDocs").classList.add('bg-gray-200');
    }

    function removeFillTable(){
        document.getElementById("DanhSachBaoCaoVanBanDaiHoi").classList.remove("group");
        
        document.querySelector(".groupDocs").classList.remove('bg-gray-200');
        document.querySelector(".listDocs").classList.add('bg-gray-200');
    }

    $('.groupDocs').on("click",function(){
        addFillTable()
    })

    $('.listDocs').on("click",function(){
        removeFillTable()
    })
    
})(jQuery); // End of use strict