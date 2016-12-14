$(document).ready(function() {
       $(document).on("click", ".new-feature span", function(e) {
        var template = $(document).find('.custom-row').html();
        var tr = $(this).parents('tr');
        tr.before(template);
        $(document).find('.custom-row').find("td:first-child").html("Custom Field 3");

    });
    $(document).on("click", ".remove-row", function(e) {
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

    $('#example').DataTable();

       $('[multiple=multiple]').multiselect({
            buttonText: function(options, select) {
                if (options.length === 0) {
                    return this.title;
                }
                else if (options.length > 1) {
                    return this.title + " ("+ options.length +")";
                 }
            }
        });

    ///***//////

/* ............ script for products page start .............. */

 
/* ............ script for products page start .............. */

    $('#productTable').DataTable({
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
        "aoColumnDefs" : [{
                     'bSortable' : false,
                     'aTargets' : [ 0, 2, 3, 4, 5, 6 ]
        }],
        "order": [],
        "columnDefs": [{
              "targets"  : 'no-sort',
              "orderable": false,
        }]
       
    });

     $("div.products-table-panel-heading").html('<div class="products-table-heading">My New Products</div>');

     $("div.products-table-panel-action").html('<div class="products-table-heading-right"><span class="fa fa-plus-circle"></span><span class="new-product">NEW PRODUCTS</span></div>');
     

$(document).on('click', '.new-product', function () {
    $("#NewProductModal").modal('show');
  });

    $(function(){
    $('[rel="actionPopover"]').popover({
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

    $(function(){
    $('[rel="imgPopover"]').popover({
        container: 'body',
        trigger: "hover" ,
        html: true,
        content: function () {
            var clone = $($(this).data('popover-content')).clone(true).removeClass('hide');
            return clone;
        }
    }).click(function(e) {
        e.preventDefault();
    });
    });

    $('body').on('click', function (e) {
    $('[rel="actionPopover"]').each(function () {
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
        "aoColumnDefs" : [{
                     'bSortable' : false,
                     'aTargets' : [ 0, 2, 3, 4 ]
        }],
        "order": [],
        "columnDefs": [{
              "targets"  : 'no-sort',
              "orderable": false,
        }]
       
    });

     $("div.scenarios-table-panel-heading").html('<div class="scenarios-table-heading">My New Scenarios</div>');

     $("div.scenarios-table-panel-action").html('<div class="scenarios-table-heading-right"><span class="fa fa-plus-circle"></span><span class="new-scenarios">NEW SCENARIO</span></div>');
     
     $(document).on('click', '.new-scenarios', function () {
    $("#NewScenarioModal").modal('show');
  });


    $(function(){
    $('[rel="scenariosActionPopover"]').popover({
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

        $('body').on('click', function (e) {
    $('[rel="scenariosActionPopover"]').each(function () {
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
        "aoColumnDefs" : [{
                     'bSortable' : false,
                     'aTargets' : [ 0, 2, 3, 4, 5, 6]
        }],
        "order": [],
        "columnDefs": [{
              "targets"  : 'no-sort',
              "orderable": false,
        }]
       
    });

     $("div.tasks-table-panel-heading").html('<div class="tasks-table-heading">My Review Tasks</div>');
     
 

    /* ............ script for Tasks page ends .............. */
});