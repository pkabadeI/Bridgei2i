$(document).ready(function() {
    $('[rel="actionPopover"]').popover({
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
    $('[rel="logoutPopover"]').popover({
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

    $('[rel="imgPopover"]').popover({
        container: 'body',
        //trigger: "hover",
        html: true,

        content: function() {
            var clone = $($(this).data('popover-content')).clone(true).removeClass('hide');
            return clone;
        }
    }).click(function(e) {
        e.preventDefault();
    });
    $('[rel="task-popover"]').popover({
        container: 'body',
        html: true,
        content: function() {
            var clone = $($(this).data('popover-content')).clone(true).removeClass('hide');
            return clone;
        }
    }).click(function(e) {
        $('.popover').addClass('task-popover');
        $('.popover').css('left', '277px');
        e.preventDefault();
    });
     $('[rel="tasklarge-popover"]').popover({
        container: 'body',
        html: true,
        content: function() {
            var clone = $($(this).data('popover-content')).clone(true).removeClass('hide');
            return clone;
        }
    }).click(function(e) {
        $('.popover').addClass('tasklarge-popover task-popover');
        $('.popover').css('left', 'initial');
        $('.popover').css('right', '45px');
        e.preventDefault();
        });

    $('body').on('click', function(e) {
        $('[rel="actionPopover"]').each(function() {
            // hide any open popovers when the anywhere else in the body is clicked
            if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
                $(this).popover('hide');
            }
        });
        $('[rel="logoutPopover"]').each(function() {
            // hide any open popovers when the anywhere else in the body is clicked
            if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
                $(this).popover('hide');
            }
        });
    })

    $(document).on("click", ".new-feature span", function(e) {
        var count = $(this).parents('tr').prev('tr').find('.count').html();
        var template = "<tr>" + $(this).parents("tr").prev('tr').html() + "</tr>";
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
        $(this).parents(".btn-group").find(".btn").removeClass('active');
        $(this).addClass('active');
    });


    $(document).on("click", ".addcompetitors", function(e) {
        var competitors = $('#addcompetitor').find('input[type="checkbox"]:checked');
        var index = $('#product-detail').find('th.competitors').index();
        $(competitors).each(function(k, v) {
            $('#product-detail').find('th:nth-child(' + (index + 1) + ')').before('<th><div class="text-overflow">' + $(this).parent("span").text() + '</div> <span class="glyphicon-minus remove-column glyphicon pull-right"></span></th>')
            $('#product-detail').find('tr:nth-child(2) > th:nth-child(' + (index + 1) + ')').html('<span class="pull-left">Feature Specs</span><span class="pull-right">Valuation</span>');
            $('#product-detail').find('tbody > tr').each(function(key, value) {
                if ($(this).find('.new-feature').length > 0 ||
                    $(this).find('.section-head').length > 0 ||
                    $(this).find('.summary').length > 0 || key == 0 ||
                    $(this).hasClass('custom-field'))
                    $(this).find('td:nth-child(' + (index + 1) + ')').before("<td></td>");
                else
                    $(this).find('td:nth-child(' + (index + 1) + ')').before("<td><span class='sign'>$</span><span>200</span></td>");
            });

            index++;
        });
        $('#product-detail').css("width", "auto");
        $('#product-detail').find('td').css("width", "300px");
    });
    $(document).on("click", ".checkbox input", function(e) {
        if ($(this)[0].checked) {
            $(this).parents('li').addClass("active");
            if ($(this).parents('.search-list').length > 0)
                if ($(this).parents('.send-box').find('.send-list').find("span[data-id=" + $(this).parents('div').attr("id") + "]").length == 0) {
                    var html = $.parseHTML('<span class="mail" data-id=' + $(this).parents('div').attr("id") + '>' +
                        '<img src="' + $(this).parents('li').find('img').attr("src") + '" class="img-circle img-responsive">' +
                        '<span class="name">' + $(this).parents('li').find('.name').html() + '</span>' +
                        '<span class="font-gray-small division"> ' + $(this).parents('li').find('.division').html() + '</span>' +
                        '<span class="close">x</span>' +
                        '<span></span>' +
                        '</span>');

                    var div = $(this).parents('.send-box').find('.send-list');
                    div.append(html);
                }
        } else
            $(this).parents('li').removeClass("active");

        if ($(this).parents('#addcompetitor').length > 0) {

            if ($(this).parents('ul').hasClass('multiselect-container')) {
                var regioncheckList = $("#addcompetitor").find('.region + .btn-group > ul.multiselect-container').find('input[type="checkbox"]:checked');
                var countrycheckList = $("#addcompetitor").find('.country + .btn-group > ul.multiselect-container').find('input[type="checkbox"]:checked');
                var obj = "";
                if (regioncheckList.length > 0) {
                    $(regioncheckList).each(function(key, value) {
                        if (regioncheckList.length == key - 1 || key == 0)
                            obj = obj + $(value).val();
                        else
                            obj = obj + "|" + $(value).val();
                    });
                }

                if (countrycheckList.length > 0) {
                    if (obj.length > 0) obj = obj + "|";
                    $(countrycheckList).each(function(key, value) {
                        if (countrycheckList.length == key - 1 || key == 0)
                            obj = obj + $(value).val();
                        else
                            obj = obj + "|" + $(value).val();
                    });
                }
                productTable.search(obj, true, false).draw();
            }
            if ($(this).parents('#addcompetitor').find('table input:checked').length > 0) {
                $(this).parents('#addcompetitor').find('.count-competitors').html('(' + $(this).parents('#addcompetitor').find('table input:checked').length + ')');
                $(this).parent('.checkbox').toggleClass('checked')
            } else
            if ($(this).parents('#addcompetitor').find('table input:checked').length == 0) {
                $(this).parents('#addcompetitor').find('.count-competitors').html('');
                $(this).parent('.checkbox').toggleClass('checked')
            }
        } else
        if ($(this).parents("#sendForReview").length > 0) {
            var searchedText = $(this).parents('label').text();
            if ($(this).parents('.multiselect-container').length > 0)
                filterSendList("");
        }
    });

    $('#sendForReview').on("click", ".checkbox input", function(e) {
        var searchedText = $(this).parents('label').text();
        if ($(this).parents('.multiselect-container').length > 0)
            filterSendList("");
    });
    $(document).on("click", ".send-for-review", function(e) {
        $('#sendForReview').find('select.country + .btn-group > .multiselect-container').empty();
        $('#sendForReview').find('select.region + .btn-group > .multiselect-container').empty();
        var countryList = $('.view-product-details').find('select.country + .btn-group > .multiselect-container').find("input[type='checkbox']:checked");
        var regionList = $('.view-product-details').find('select.region + .btn-group > .multiselect-container').find("input[type='checkbox']:checked");

        $(countryList).each(function(k, v) {
            $('#sendForReview').find('select.country + .btn-group > .multiselect-container').append(
                $('<li>').append(
                    $('<a>').append(
                        $('<label>').attr('class', 'checkbox').append(
                            $('<input>').attr('class', 'checkbox').attr('type', "checkbox").attr('value', countryList[k].value)
                        ).append(countryList[k].value)
                    )));
        });

        $('#sendForReview').find('select.region + .btn-group > .multiselect-container').empty();
        $(regionList).each(function(k, v) {
            $('#sendForReview').find('select.region + .btn-group > .multiselect-container').append(
                $('<li>').append($('<a>').append(
                    $('<label>').attr('class', 'checkbox').append(
                        $('<input>').attr('class', 'checkbox').attr('type', "checkbox").attr('value', regionList[k].value)
                    ).append(regionList[k].value)
                )));
        });
        $("#sendForReview").find('.search-list').find("li").addClass("hidden");
        $("#sendForReview").find('.search-list').find("li").each(function(key, value) {

            $("#sendForReview").find(".multiselect-container").find("input[type='checkbox']").each(function(k, e) {
                var text = $(value).find('.division').html();
                if (text.indexOf($(e).val()) >= 0)
                    $(value).removeClass("hidden");
            });
        });

        $("#sendForReview.modal").modal('show');
    });
    $(document).on("keyup", "#sendForReview input[type='search']", function(e) {
        var searchedText = $(this).val().trim();
        filterSendList(searchedText);
    });

    function filterSendList(searchtext) {
        $("#sendForReview").find('.search-list').find("li").addClass("hidden");
        $("#sendForReview").find('.search-list').find("li").each(function(key, value) {
            var text = $(value).find('.name').html();
            if (searchtext != undefined && searchtext != "") {
                if (text.toLowerCase().indexOf(searchtext.toLowerCase()) >= 0)
                    $(value).removeClass("hidden");
            } else
            if ($("#sendForReview").find(".multiselect-container").find("input[type='checkbox']:checked").length == 0) {
                $("#sendForReview").find('.search-list').find("li").removeClass("hidden");
            }

            $("#sendForReview").find(".multiselect-container").find("input[type='checkbox']:checked").each(function(k, e) {
                var text = $(value).find('.division').html();
                if (text.indexOf($(e).val()) >= 0)
                    $(value).removeClass("hidden");
            });
        });
    }
    $(document).on("click", ".send-list .close", function(e) {
        $(".search-list").find("div[id=" + $(this).parents('.mail').attr("data-id") + "]").find("input[type='checkbox']").prop("checked", "");
        $(".search-list").find("div[id=" + $(this).parents('.mail').attr("data-id") + "]").parent("li").removeClass("active");
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

    var productTable = $('#addcompetitor').find('#productTable').DataTable({
        "sDom": "<'row col-sm-12 products-toolbar'<'col-sm-8'<'products-table-panel-heading'>><'col-sm-2'<'products-table-panel-action pull-right'>><'col-sm-2'f>>" +
            "<'row'<'col-sm-12'tr>>" +
            "<'clearfix'<'col-sm-6'i><'col-sm-4 products-paging pull-right'p><'col-sm-2 pull-right'l>>",
        "oLanguage": {
            "sSearch": '<div class="input-group"><span class="input-group-addon search-icon"><span class="glyphicon glyphicon-search"></span></span>',
            "sSearchPlaceholder": 'Search',
            "sInfo": 'Viewing _START_ to _END_ of _TOTAL_',
            "sLengthMenu": 'View _MENU_ rows',
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
        }],

    })

    /* ............ script for products page start .............. */

    $('.products-page.page-content').find('#productTable').DataTable({
        "sDom": "<'row col-sm-12 products-toolbar'<'col-sm-8'<'products-table-panel-heading'>><'col-sm-2'<'products-table-panel-action pull-right'>><'col-sm-2'f>>" +
            "<'row'<'col-sm-12'tr>>" +
            "<'row'<'col-sm-6'i><'col-sm-2'l><'col-sm-4 products-paging'p>>",
        "oLanguage": {
            "sSearch": '<div class="input-group"><span class="input-group-addon search-icon"><span class="glyphicon glyphicon-search"></span></span>',
            "sSearchPlaceholder": 'Search',
            "sInfo": 'Viewing _START_ to _END_ of _TOTAL_',
            "sLengthMenu": 'View _MENU_ rows',
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

    $(".products-page.page-content").find("div.products-table-panel-heading").html('<div class="products-table-heading">My New Products</div>');
    $(".products-page.page-content").find("div.products-table-panel-action").html('<div class="products-table-heading-right"><span class="fa fa-plus-circle"></span><span class="new-product product-modal">NEW PRODUCTS</span></div>');

    $('#addcompetitor').find("div.products-table-panel-heading").append('<div class="btn-group" role="group" aria-label="...">' +
        '<button type="button" class="btn active">Global</button>' +
        '<select  multiple="multiple" class="region" data-title="Region">' +
        '</select>' +
        '<select multiple="multiple" class="country" data-title="Country">' +
        '</select>' +
        '</div>');

    $('[multiple=multiple]').multiselect({
        buttonText: function(options, select) {
            if (options.length === 0) {
                return this.title;
            } else if (options.length >= 1) {
                return this.title + " (" + options.length + ")";
            }
        }
    });

    $(document).on('click', '.product-modal', function(e) {
        e.preventDefault();
        ClearModal();
        var modalName = "";
        var productName = "";
        if ($(this).hasClass('view-product')) {
            modalName = "View Product";
            productName = $(this).html();
            $("#NewProductModal").find(".view-continue-product").addClass('view').removeClass('new').removeClass('edit');
        } else
        if ($(this).hasClass('edit-product')) {
            $('.popover').removeClass('in');
            modalName = "Edit Product";
            productName = $('#productTable').find('a[aria-describedby="' + $(this).parents('.popover.fade').attr('id') + '"]').parents('tr').find('.product-modal').html();
            $("#NewProductModal").find(".view-continue-product").addClass('edit').removeClass('new').removeClass('view');
        } else
        if ($(this).hasClass('new-product')) {
            modalName = "Add New Product";
            $("#NewProductModal").find(".view-continue-product").addClass('new').removeClass('edit').removeClass('view');
            productName = "";
        }
        $("#NewProductModal").find("#ProductName").val(productName);
        $("#NewProductModal").find(".modal-title").html(modalName);
        $("#NewProductModal").modal('show');
    });

    $(document).on('click', '.competitors', function(e) {
        $('#addcompetitor').find('select.country + .btn-group > .multiselect-container').empty();
        $('#addcompetitor').find('select.region + .btn-group > .multiselect-container').empty();
        var countryList = $('.view-product-details').find('select.country + .btn-group > .multiselect-container').find("input[type='checkbox']:checked");
        var regionList = $('.view-product-details').find('select.region + .btn-group > .multiselect-container').find("input[type='checkbox']:checked");

        $(countryList).each(function(k, v) {
            $('#addcompetitor').find('select.country + .btn-group > .multiselect-container').append(
                $('<li>').append(
                    $('<a>').append(
                        $('<label>').attr('class', 'checkbox').append(
                            $('<input>').attr('class', 'checkbox').attr('type', "checkbox").attr('value', countryList[k].value)
                        ).append(countryList[k].value)
                    )));
        });

        $('#addcompetitor').find('select.region + .btn-group > .multiselect-container').empty();
        $(regionList).each(function(k, v) {
            $('#addcompetitor').find('select.region + .btn-group > .multiselect-container').append(
                $('<li>').append(
                    $('<a>').append(
                        $('<label>').attr('class', 'checkbox').append(
                            $('<input>').attr('class', 'checkbox').attr('type', "checkbox").attr('value', regionList[k].value)
                        ).append(regionList[k].value)
                    )));
        });
        $("#addcompetitor.modal").modal('show');
    });

    $(document).on('click', '.view-continue-product', function(e) {

        if ($(this).hasClass('edit'))
            localStorage.setItem("view", "edit");
        else
        if ($(this).hasClass('view'))
            localStorage.setItem("view", "view");
        else
            localStorage.setItem("view", "new");
        localStorage.setItem("productName", $(this).parents(".modal-content").find("#ProductName").val());

        var checkList = $('#NewProductModal').find('select[multiple="multiple"].region + .btn-group').find('.multiselect-container').find('input[type="checkbox"]:checked');
        var obj = [];
        $(checkList).each(function(k, v) {
            obj[k] = checkList[k].value;
        });

        localStorage.setItem("checkRegionList", JSON.stringify(obj));

        checkList = [];
        obj = [];

        checkList = $('#NewProductModal').find('select[multiple="multiple"].country + .btn-group').find('.multiselect-container').find('input[type="checkbox"]:checked');
        $(checkList).each(function(k, v) {
            obj[k] = checkList[k].value;
        });

        localStorage.setItem("checkCountryList", JSON.stringify(obj));
        $(window).attr('location', 'view-product.html');
    });

    if ($('.page-section').hasClass('view-product-details')) {
        html2canvas($('body')).then(function(canvas) {
            $('body').append(canvas);
        });

        if (localStorage.view != undefined) {
            $('.page-section').addClass(localStorage.view);
            if (localStorage.view == 'view') {
                $('.task').find('span:first-child').text("View Product")
                $('.product-name').text(localStorage.productName);
            } else
            if (localStorage.view == 'edit') {
                $('.task').find('span:first-child').text("Edit Product")
                $('.product-name').text(localStorage.productName);
            }
            if (localStorage.view == 'new') {
                $('.task').find('span:first-child').text("New Product")
                $('.product-name').text(localStorage.productName);
            }
        }


        var regionList;
        var countryList;
        if (localStorage.getItem("checkRegionList") != undefined && localStorage.getItem("checkRegionList") != "")
            regionList = JSON.parse(localStorage.getItem("checkRegionList"));

        if (localStorage.getItem("checkCountryList") != undefined && localStorage.getItem("checkCountryList") != "")
            countryList = JSON.parse(localStorage.getItem("checkCountryList"));


        if (regionList && regionList.length > 0) {
            $('.view-product-details').find('select.region + .btn-group > .multiselect-container').empty();

            $(regionList).each(function(k, v) {

                $('.view-product-details').find('select.region + .btn-group > .multiselect-container').append(
                    $('<li>').append(
                        $('<a>').append(
                            $('<label>').attr('class', 'checkbox').append(
                                $('<input>').attr('class', 'checkbox').attr('type', "checkbox").attr('value', regionList[k])
                            ).append(regionList[k])
                        )));
            });
        }
        if (countryList && countryList.length > 0) {
            $('.view-product-details').find('select.country + .btn-group > .multiselect-container').empty();
            $(countryList).each(function(k, v) {
                $('.view-product-details').find('select.country + .btn-group > .multiselect-container').append(
                    $('<li>').append(
                        $('<a>').append(
                            $('<label>').attr('class', 'checkbox').append(
                                $('<input>').attr('class', 'checkbox').attr('type', "checkbox").attr('value', countryList[k])
                            ).append(countryList[k])
                        )));
            });
        }
    } else {
        localStorage.setItem("checkCountryList", []);
        localStorage.setItem("checkRegionList", []);
    }
    $(document).on('click', '.view-product-details .edit-product.btn', function(e) {
        $('.view-product-details').addClass("edit").removeClass("view").removeClass("new");
        $('.view-product-details').find(".task").find("span.task-product").html("Edit Product");
    });
    /* ............ script for products page ends .............. */
    /* ............ script for scenarios page start .............. */

    $('#scenariosTable').DataTable({
        "sDom": "<'row col-sm-12 scenarios-toolbar'<'col-sm-8'<'scenarios-table-panel-heading'>><'col-sm-2'<'scenarios-table-panel-action pull-right'>><'col-sm-2'f>>" +
            "<'row'<'col-sm-12'tr>>" +
            "<'row'<'col-sm-6'i><'col-sm-2'l><'col-sm-4 scenarios-paging'p>>",
        "oLanguage": {
            "sSearch": '<div class="input-group"><span class="input-group-addon search-icon"><span class="glyphicon glyphicon-search"></span></span>',
            "sSearchPlaceholder": 'Search',
            "sInfo": 'Viewing _START_ to _END_ of _TOTAL_',
            "sLengthMenu": 'View _MENU_ rows',
            "oPaginate": {
                "sPrevious": "<<",
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


    /* ............ script for scenarios page end .............. */

    /* ............ script for Tasks page start .............. */

    $(".view-task-details .region-dropdown .dropdown-menu li a").click(function() {
        $(this).parents('.btn-group.open').find('.btn').text($(this).text());
        $(this).parents('.btn-group.open').find('.btn').val($(this).text());
    });

    $('#tasksTable').DataTable({
        "sDom": "<'row col-sm-12 tasks-toolbar'<'col-sm-10'<'tasks-table-panel-heading'>><'col-sm-2'f>>" +
            "<'row'<'col-sm-12'tr>>" +
            "<'row'<'col-sm-6'i><'col-sm-2'l><'col-sm-4 tasks-paging'p>>",
        "oLanguage": {
            "sSearch": '<div class="input-group"><span class="input-group-addon search-icon"><span class="glyphicon glyphicon-search"></span></span>',
            "sSearchPlaceholder": 'Search',
            "sInfo": 'Viewing _START_ to _END_ of _TOTAL_',
            "sLengthMenu": 'View _MENU_ rows',
            "oPaginate": {
                "sPrevious": "<<",
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
    $(document).on("click", ".download", function() {
        $('.view-product-details').find('.table-container > table').tableExport({
            type: 'pdf',
            escape: 'false'
        });

        $('.view-product-details').find('.table-container > table').tableExport({
            typetype: 'jpg',
            escape: 'false'
        });
        var doc = new jsPDF('p', 'pt', 'a4', true);
        // var colPosition = startColPosition + (index * 50);
        /* 
            //doc.setFontSize(defaults.pdfFontSize);

            // Header
            var startColPosition = defaults.pdfLeftMargin;*/
        var startColPosition = 5
        $('.view-product-details').find('thead').find('tr').each(function() {
            $(this).filter(':visible').find('th').each(function(index, data) {
                if ($(this).css('display') != 'none') {
                    //if (defaults.ignoreColumn.indexOf(index) == -1) {
                    var colPosition = startColPosition + (index * 50);
                    doc.text(colPosition, 20, String($(this)));
                    //}
                }
            });
        });


        // Row Vs Column
        var startRowPosition = 20;
        var page = 1;
        var rowPosition = 0;
        $('.view-product-details').find('tbody').find('tr').each(function(index, data) {
            rowCalc = index + 1;

            if (rowCalc % 26 == 0) {
                doc.addPage();
                page++;
                startRowPosition = startRowPosition + 10;
            }
            rowPosition = (startRowPosition + (rowCalc * 10)) - ((page - 1) * 280);

            $(this).filter(':visible').find('td').each(function(index, data) {
                if ($(this).css('display') != 'none') {
                    //  if (defaults.ignoreColumn.indexOf(index) == -1) {
                    var colPosition = startColPosition + (index * 50);
                    doc.text(colPosition, rowPosition, String($(this)));
                    // }
                }

            });

        });
        // Output as Data URI
        doc.output('datauri');

    });
    $('[multiple=multiple]').multiselect({
        buttonText: function(options, select) {
            if (options.length === 0) {
                return this.title;
            } else if (options.length >= 1) {
                return this.title + " (" + options.length + ")";
            }
        }
    });

});

function ClearModal() {
    $('.modal-body').find('input[type="text"]').val('');
    $('.modal-body').find('input[type="checkbox"]').prop('checked', 'false');
    $('.modal-body').find('input[type="checkbox"]').prop('checked', '');
    $('.modal-body').find('input[type="checkbox"]').removeAttr('checked');


    var text = $('.modal-body').find('.country + .btn-group > button > .multiselect-selected-text').html()
    if (text.indexOf('(') >= 0)
        text = text.substring(0, text.indexOf('('));
    $('.modal-body').find('.country + .btn-group > button > .multiselect-selected-text').html(text);

    var text = $('.modal-body').find('.region + .btn-group > button > .multiselect-selected-text').html()
    if (text.indexOf('(') >= 0)
        text = text.substring(0, text.indexOf('(') - 1);
    $('.modal-body').find('.region + .btn-group > button > .multiselect-selected-text').html(text);
    $('.modal-body').find('li.active').removeClass('active');
    $('.modal-body').find('textarea').val('');
}