$(document).ready(function() {
    $(document).on("click", ".new-feature span", function(e) {
        var count = $(this).parents('tr').prev('tr').find('.count').html();
        var template = $(document).find('.custom-row').html();
        var tr = $(this).parents('tr');
        tr.before(template);
        if (count == undefined) count = 0;
        $(this).parents('tr').prev('tr').find('.count').html(++count);
    });
    $(document).on("click", ".remove-row", function(e) {
        var count = $(this).parents('tr').find('.count').html();
        if (count == undefined)
            count = 2;
        $(this).parents('tr').nextAll('tr').each(function(k, e) {
            $(e).find('.count').html(count++);
        });
        $(this).parents('tr').remove();
    });
    $(document).on("click", ".remove-column", function(e) {
        var cellIndex = $(this).parent('th')[0].cellIndex + 1;
        $(this).parents('table').find('tbody').find('td:nth-child(' + cellIndex + ')').remove();
        $(this).parents('table').find('thead').find('tr:nth-child(2)>th:nth-child(' + cellIndex + ')').remove();
        $(this).parents('th').remove();

    });
    $(document).on("click", ".btn-group .btn", function(e) {
        $(".btn-group .btn").removeClass('active');
        $(this).addClass('active');
    });
    $('[multiple=multiple]').multiselect({
        buttonText: function(options, select) {
            if (options.length === 0) {
                return this.title;
            } else if (options.length > 1) {
                return this.title + " (" + options.length + ")";
            }
        }
    });
    $(document).on("click", ".checkbox input", function(e) {
        if ($(this)[0].checked) {
            $(this).parents('li').addClass("active");
            if ($(this).parents('.search-list').length > 0) {
                $(document).find('.mail-template > img').attr("src", $(this).find('img').src);
                $(document).find('.mail-template > .name').html($(this).find('.name').html());
                $(document).find('.mail-template > .division').html($(this).find('.division').html());
                var div = $(this).parents('.send-box').find('.send-list');
                div.append($(document).find('.mail-template').html());
            }
        } else {
            $(this).parents('li').removeClass("active");
        }
        if ($(this).parents('#addcompetitor').length > 0) {
            if ($(this).parents('#addcompetitor').find('input:checked').length > 0)

                $(this).parents('#addcompetitor').find('.count-competitors').html('(' + $(this).parents('#addcompetitor').find('input:checked').length + ')');
            else
                $(this).parents('#addcompetitor').find('.count-competitors').html('');
        $(this).parent('.checkbox').toggleClass('checked')
    }
    });

    $(document).on("click", ".send-list .close", function(e) {
        $(this).parents('.mail').remove();
    });
    $(document).on("click", ".toggle-edit-link", function(e) {
        if (!$(this).hasClass("edit")) {
            $(document).find('.view-edit-toggle').find('input').removeClass('hidden');
            $(document).find('.view-edit-toggle').find('input').val($(document).find('.view-edit-toggle').find('.product-name').html());
            $(document).find('.view-edit-toggle').find('.product-name').addClass('hidden');
            $(this).html("Save");
            $(this).addClass("edit");
        } else {
            $(document).find('.view-edit-toggle').find('.product-name').html($(document).find('.view-edit-toggle').find('input').val());
            $(document).find('.view-edit-toggle').find('.product-name').removeClass('hidden');
            $(document).find('.view-edit-toggle').find('input').addClass('hidden');
            $(this).html("Edit");
            $(this).removeClass("edit");
        }
    });

    $('#addcompetitor').find('#productTable').DataTable({
        "sDom": "<'row col-sm-12 products-toolbar'<'col-sm-8'<'products-table-panel-heading'>><'col-sm-2'<'products-table-panel-action pull-right'>><'col-sm-2'f>>" +
            "<'row'<'col-sm-12'tr>>" +
            "<'row'<'col-sm-6'i><'col-sm-2'l><'col-sm-4 products-paging'p>>",
        "oLanguage": {
            "sSearch": '',
            "sSearchPlaceholder": 'Search',
            "sInfo": 'viewing _START_ to _END_ of _TOTAL_',
            "sLengthMenu": 'view _MENU_ rows',
            "oPaginate": {
                "sPrevious": "<<",
                "sNext": ">>"
            }
        },
        "aoColumnDefs": [{
            'bSortable': false,
            'aTargets': [0, 2, 3, 4, 5, 6]
        }],
        "order": [],
        "columnDefs": [{
            "targets": 'no-sort',
            "orderable": false,
        }]

    });

    ///***//////
 
/* ............ script for products page start .............. */

   $('.products-page.page-content').find('#productTable').DataTable({
      "sDom": "<'row col-sm-12 products-toolbar'<'col-sm-8'<'products-table-panel-heading'>><'col-sm-2'<'products-table-panel-action pull-right'>><'col-sm-2'f>>" +
        "<'row'<'col-sm-12'tr>>" +
        "<'row'<'col-sm-6'i><'col-sm-2'l><'col-sm-4 products-paging'p>>",
        "oLanguage": { "sSearch": '<div class="input-group"><span class="input-group-addon search-icon"><span class="glyphicon glyphicon-search"></span></span>' ,
                        "sSearchPlaceholder": 'Search',
                       "sInfo": 'Viewing _START_ to _END_ of _TOTAL_',
                       "sLengthMenu":'View _MENU_ rows' ,
                       "oPaginate": { "sPrevious": "<<", 
                                      "sNext": ">>"
                        }
        },
        "aoColumnDefs": [{
            'bSortable': false,
            'aTargets': [0, 2, 3, 4, 5, 6]
        }],
        "order": [],
        "columnDefs": [{
            "targets": 'no-sort',
            "orderable": false,
        }]

    });

    $(".products-page.page-content").find("div.products-table-panel-heading").html('<div class="products-table-heading">My New Products</div>');

    $(".products-page.page-content").find("div.products-table-panel-action").html('<div class="products-table-heading-right"><span class="fa fa-plus-circle"></span><span class="new-product">NEW PRODUCTS</span></div>');
    /*  $(".model-body").find("div.products-table-panel-heading").append('<div class="custom-search-input col-md-6 pull-right"> '+
                                      '<div class="input-group col-md-12">'+
                                          '<span class=" glyphicon glyphicon-search"></span>'+
                                          '<input type="search" class="form-control input-sm" placeholder="Search" aria-controls="productTable">'+
                                          '<input type="text" class="  search-query form-control" placeholder="Search" />'+
                                      '</div>'+
                                  '</div>');*/

    $(document).on('click', '.new-product', function() {
        $("#NewProductModal").modal('show');
    });

 $(function(){
    $('[rel="logoutPopover"]').popover({
        container: 'body',
        //trigger: "hover" ,
        html: true,
        content: function () {
            var clone = $($(this).data('popover-content')).clone(true).removeClass('hide');
            return clone;
        }
    }).click(function(e) {
        e.preventDefault();
    });
    });

    $(function() {
        $('[rel="imgPopover"]').popover({
            container: 'body',
            trigger: "hover",
            html: true,
            content: function() {
                var clone = $($(this).data('popover-content')).clone(true).removeClass('hide');
                return clone;
            }
        }).click(function(e) {
            e.preventDefault();
        });
    });

    $('body').on('click', function(e) {
        $('[rel="actionPopover"]').each(function() {
            // hide any open popovers when the anywhere else in the body is clicked
            if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
                $(this).popover('hide');
            }
        });
    $('[rel="logoutPopover"]').each(function () {
        // hide any open popovers when the anywhere else in the body is clicked
        if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
            $(this).popover('hide');
        }
    });
});

    /* ............ script for products page ends .............. */


    /* ............ script for scenarios page start .............. */

    $('#scenariosTable').DataTable({
      "sDom": "<'row col-sm-12 scenarios-toolbar'<'col-sm-8'<'scenarios-table-panel-heading'>><'col-sm-2'<'scenarios-table-panel-action pull-right'>><'col-sm-2'f>>" +
        "<'row'<'col-sm-12'tr>>" +
        "<'row'<'col-sm-6'i><'col-sm-2'l><'col-sm-4 scenarios-paging'p>>",
        "oLanguage": { "sSearch": '<div class="input-group"><span class="input-group-addon search-icon"><span class="glyphicon glyphicon-search"></span></span>' ,
                        "sSearchPlaceholder": 'Search',
                       "sInfo": 'Viewing _START_ to _END_ of _TOTAL_',
                       "sLengthMenu":'View _MENU_ rows' ,
                       "oPaginate": { "sPrevious": "<<", 
                                      "sNext": ">>"
                        }
        },
        "aoColumnDefs": [{
            'bSortable': false,
            'aTargets': [0, 2, 3, 4]
        }],
        "order": [],
        "columnDefs": [{
            "targets": 'no-sort',
            "orderable": false,
        }]

    });

    $("div.scenarios-table-panel-heading").html('<div class="scenarios-table-heading">My New Scenarios</div>');

    $("div.scenarios-table-panel-action").html('<div class="scenarios-table-heading-right"><span class="fa fa-plus-circle"></span><span class="new-scenarios">NEW SCENARIO</span></div>');

    $(document).on('click', '.new-scenarios', function() {
        $("#NewScenarioModal").modal('show');
    });

    $(document).ready(function() {
        $('#example-getting-started').multiselect();
    });

    $(function() {
        $('[rel="scenariosActionPopover"]').popover({
            container: 'body',
            //trigger: "hover" ,
            html: true,
            content: function() {
                var clone = $($(this).data('popover-content')).clone(true).removeClass('hide');
                return clone;
            }
        }).click(function(e) {
            e.preventDefault();
        });
    });

    $('body').on('click', function(e) {
        $('[rel="scenariosActionPopover"]').each(function() {
            // hide any open popovers when the anywhere else in the body is clicked
            if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
                $(this).popover('hide');
            }
        });
    });

    /* ............ script for scenarios page end .............. */

    /* ............ script for Tasks page start .............. */


$('#tasksTable').DataTable({
      "sDom": "<'row col-sm-12 tasks-toolbar'<'col-sm-10'<'tasks-table-panel-heading'>><'col-sm-2'f>>" +
        "<'row'<'col-sm-12'tr>>" +
        "<'row'<'col-sm-6'i><'col-sm-2'l><'col-sm-4 tasks-paging'p>>",
        "oLanguage": { "sSearch": '<div class="input-group"><span class="input-group-addon search-icon"><span class="glyphicon glyphicon-search"></span></span>' ,
                        "sSearchPlaceholder": 'Search',
                       "sInfo": 'Viewing _START_ to _END_ of _TOTAL_',
                       "sLengthMenu":'View _MENU_ rows' ,
                       "oPaginate": { "sPrevious": "<<", 
                                      "sNext": ">>"
                        }
        },
        'language': {
            'search': '',
        },
        "aoColumnDefs": [{
            'bSortable': false,
            'aTargets': [0, 2, 3, 4, 5, 6]
        }],
        "order": [],
        "columnDefs": [{
            "targets": 'no-sort',
            "orderable": false,
        }]

    });

     $("div.tasks-table-panel-heading").html('<div class="tasks-table-heading">My Review Tasks</div>');
     
 

    /* ............ script for Tasks page ends .............. */
});
