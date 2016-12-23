$(document).ready(function() {

    var clicked = false;
    $('.popover-element').popover({
        //container: 'body',
        // trigger: 'hover',
        html: true,
        content: function() {
            var clone = $($(this).data('popover-content')).clone(true).removeClass('hide');
            return clone;
        }
    }).click(function(e) {
        e.preventDefault();
    });

    $("#products").find('[rel="actionPopover"]').popover({
        container: $('#productTable'),
        html: true,
        content: function() {
            var clone = $($(this).data('popover-content')).clone(true).removeClass('hide');
            return clone;
        }
    }).click(function(e) {
        e.preventDefault();
        if ($('.popover').find("#productActionPopover").length > 0)
            $('.popover').addClass('action-popover');
    }).hover(function(e) {
        e.preventDefault();
        if ($('.popover').find("#productActionPopover").length > 0)
            $('.popover').addClass('action-popover');
    });

    $('[rel="logoutPopover"]')
        .popover({
            container: 'nav',
            //  trigger: "hover",
            html: true,
            content: function() {
                var clone = $($(this).data('popover-content')).clone(true).removeClass('hide');
                00
                return clone;
            }
        }).click(function(e) {
            e.preventDefault();
            if ($('.popover').find("#userLogoutPopover").length > 0)
                $('.popover').addClass('logout-popover');
        }).hover(function(e) {
            e.preventDefault();
            if ($('.popover').find("#userLogoutPopover").length > 0)
                $('.popover').addClass('logout-popover');
        });

    $('[rel="filterpopover"]')
        .popover({
            container: 'body',
            html: true,
            content: function() {
                var clone = $($(this).data('popover-content')).clone(true).removeClass('hide');
                return clone;
            }
        }).click(function(e) {
            e.preventDefault();
        });

    $('[rel="allreviewerspopover"]')
        .popover({
            container: $('#productTable'),
            html: true,
            content: function() {
                var clone = $($(this).data('popover-content')).clone(true).removeClass('hide');
                return clone;
            }
        })
    $(document).on("click", "[rel='allreviewerspopover']", function(e) {
        e.preventDefault();
        $('.popover').addClass('allreviewers-popover');
    })

    $("#products").find('[rel="imgPopover"]').popover({
        container: $(this),
        trigger: "hover",
        html: true,
        content: function() {
            var clone = $($(this).data('popover-content')).clone(true).removeClass('hide');
            return clone;
        }
    }).click(function(e) {
        e.preventDefault();
        if ($(".popover").find("#imagePopoverApproved").length > 0 || $(".popover").find("#imagePopoverRejected").length > 0)
            $('.popover').addClass('img-popover');
    }).hover(function(e) {
        e.preventDefault();
        if ($(".popover").find("#imagePopoverApproved").length > 0 || $(".popover").find("#imagePopoverRejected").length > 0)
            $('.popover').addClass('img-popover');
    });


    $('[rel="task-popover"]').popover({
        container: 'body',
        trigger: "click",
        html: true,
        content: function() {
            var clone = $($(this).data('popover-content')).clone(true).removeClass('hide');
            return clone;
        }
    }).click(function(e) {
        $('.popover').addClass('task-popover');
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
$('a[rel="imagePopover"]').popover({
        container: 'body',
        trigger: "click",
        html: true,
        //delay:200,
        content: function() {
            var clone = $($(this).data('popover-content')).clone(true).removeClass('hide');
            return clone;
        }
    }).click(function(e) {

        e.preventDefault();
        if ($(".popover").find("#taskimagePopover").length > 0 || $(".popover").find("#taskimagePopover").length > 0)
            $('.popover').addClass('img-popover');
    }).hover(function(e) {
        e.preventDefault();
        if ($(".popover").find("#taskimagePopover").length > 0 || $(".popover").find("#taskimagePopover").length > 0)
            $('.popover').addClass('img-popover');
    });
    $('body').on('click', function(e) {
        $('.popover-element').each(function() {
            // hide any open popovers when the anywhere else in the body is clicked
            if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
                $(this).popover('hide');
            }
        });
        $('[rel="filterpopover"]').each(function() {
            // hide any open popovers when the anywhere else in the body is clicked
            if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
                $(this).popover('hide');
            }
        });
        $('[rel="allreviewerspopover"]').each(function() {
            if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
                $(this).popover('hide');
            }
        });
        $('[rel="imagePopover"]').each(function() {
            if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
                $(this).popover('hide');
            }
        });
        $('[rel="scenariosActionPopover"]').each(function() {
            if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
                $(this).popover('hide');
            }
        });

    });
    $('a[rel="imgPopover"]').on('shown.bs.popover', function() {
        if ($(".popover").find("#imagePopoverApproved").length > 0 || $(".popover").find("#imagePopoverRejected").length > 0)
            $('.popover').css("left", parseInt($(this).offset().left - 125) + "px");
    });
    $('a[rel="imagePopover"]').on('shown.bs.popover', function() {
        if ($(".popover").find("#taskimagePopover").length > 0)
            $('.popover').css("left", parseInt($(this).offset().left - 125) + "px");
    });
      $('a[rel="task-popover"]').on('shown.bs.popover', function() {
        if ($(".popover").find("#taskPopover").length > 0){

           $('.popover').css("left", parseInt($(this).offset().left - 220) + "px");
        }
    });

    $(document).on('show.bs.popover', 'a[rel="allreviewerspopover"]', function() {
        $(".allreviewers-popover").removeClass("img-popover");
        $(".popover.allreviewers-popover").css("left", parseInt($(this).offset().left - 405) + "px !important");
        var e = $(this).parent("span");
        var hidden = $(e).find("a.hidden").length;
        $("#allreviewers").find("div.singlereviewer").remove();
        $(e).find('a.popover-element.hidden').each(function(k, ele) {
            $("#allreviewers").find("span.glyphicon-triangle-right").before("<div class='singlereviewer'> <div class='actionPopover'><div class='approved'> <img src=" + $(ele).find("img").attr("src") + "> </div><div>Jessica Jones<div>Country Manager - India</div></div></div><div class='actionPopover'><span class='approvedImage no-padding glyphicon glyphicon-ok pull-left font-gray-small'></span>" +
                "<div class='no-padding pull-right'><span>Approved</span>" +
                "<span class='col-sm-12'>On Nov 2, 2016</span></div></div>");
        });
        $(".singlereviewer:not(:first-child)").addClass("hidden");
        $(".allreviewers + .singlereviewer").removeClass("hidden");
    });
    $(document).on('click', 'span.allreviewers', function(k, e) {
        if ($(this).hasClass("glyphicon-triangle-left")) {
            var ele = $(".singlereviewer:not(.hidden)");
            if ($(ele).prev(".singlereviewer").length > 0)
                $(ele).addClass("hidden").prev(".singlereviewer").removeClass("hidden");
            if ($(".singlereviewer:not(.hidden)").prev(".singlereviewer").length > 0)
                $(this).attr("disabled", "disabled")
            if ($(".singlereviewer:not(.hidden)").next(".singlereviewer").length > 0)
                $(".glyphicon-triangle-right").attr("disabled", "disabled")
        }
        if ($(this).hasClass("glyphicon-triangle-right")) {
            var ele = $(".singlereviewer:not(.hidden)");
            if ($(ele).next(".singlereviewer").length > 0)
                $(ele).addClass("hidden").next(".singlereviewer").removeClass("hidden");
            if ($(".singlereviewer:not(.hidden)").next(".singlereviewer").length > 0)
                $(this).attr("disabled", "disabled");
            if ($(".singlereviewer:not(.hidden)").prev(".singlereviewer").length > 0)
                $(".glyphicon-triangle-left").attr("disabled", "disabled")
        }
    });
    //
    $(document).on('show.bs.popover', 'a[rel="filterpopover"]', function() {
        $(document).on("click", ".popover-content input", function() {

            if ($(this).is(":checked")) {
                $(this).prop("checked", "checked");
            } else {
                $(this).prop("checked", "");
            }
            if ($(".popover").find('#StatusFilter').length > 0)
                $("#StatusFilter").html($(".popover-content").html());
            else
            if ($(".popover").find('#RequestedByFilter').length > 0)
                $("#RequestedByFilter").html($(".popover-content").html());
        });
    });
    $(document).on("hidden.bs.popover", 'a[rel="filterpopover"]', function(e) {
        if ($(".popover").find('#StatusFilter').length > 0)
            $("#StatusFilter").html($(".popover-content").html());
        else
        if ($(".popover").find('#RequestedByFilter').length > 0)
            $("#RequestedByFilter").html($(".popover-content").html());
        // $("#StatusFilter").html($(".popover-content").html());
    });
    //Add row in table  
    $(document).on("click", ".new-feature span", function(e) {
        if (!$(".view-product-details").hasClass("view")) {
            var count = $(this).parents('tr').prev('tr').find('.count').html();
            var template;
            if ($(this).parents("tr").prev('tr').find(".remove-row").length >= 1 && !$(this).parents("tr").prev('tr').hasClass("hide"))
                template = "<tr>" + $(this).parents("tr").prev('tr').html() + "</tr>";
            else
            if ($(".remove-row").length >= 1) {
                if ($(".remove-row").length == 1 && $(".remove-row").parents('tr').hasClass("hide")) {
                    $(".remove-row").parents('tr').removeClass('hide');
                    $(".remove-row").removeClass("hidden")
                    template = "<tr>" + $(".remove-row").parents("tr").html() + "</tr>";
                    $(".remove-row").parents('tr').addClass('hide');
                    count = 0;
                } else {
                    template = "<tr>" + $(".remove-row").parents("tr").html() + "</tr>";
                }
            }
            var tr = $(this).parents('tr');
            tr.before(template);
            if (count == undefined) count = 0;
            $(this).parents('tr').prev('tr').find('.count').html(++count);
        }
    });

    //remove row from table  

    $(document).on("click", ".remove-row", function(e) {
        if (!$(".view-product-details").hasClass("view")) {
            var count = $(this).parents('tr').find('.count').html();
            if (count == undefined)
                count = 2;
            $(this).parents('tr').nextUntil('.feature').each(function(k, e) {
                $(e).find('.count').html(count++);
            });
            if ($(".remove-row").length > 1)
                $(this).parents('tr').remove();
            else
                $(this).parents('tr').addClass('hide');
        }
    });

    //remove column from table  
    $(document).on("click", ".remove-column", function(e) {
        if (!$(".view-product-details").hasClass("view")) {
            var cellIndex = $(this).parent('th')[0].cellIndex + 1;
            $(this).parents('table').find('tbody').find('td:nth-child(' + cellIndex + ')').remove();
            $(this).parents('table').find('thead').find('tr:nth-child(2)>th:nth-child(' + cellIndex + ')').remove();
            $(this).parents('th').remove();
        }
    });

    $(document).on("click", ".btn-group .btn", function(e) {
        $(this).parents(".btn-group").find(".btn").removeClass('active');
        $(this).addClass('active');
    });


    $(document).on("click", ".addcompetitors", function(e) {
        var competitors = $('#addcompetitor').find('input[type="checkbox"]:checked');
        var index = $('#product-details').find('th.competitors').index();
        $(competitors).each(function(k, v) {
            $('.dataTables_scrollHeadInner').find('thead > tr:first-child').find('th:nth-child(' + (index) + ')').after('<th><div class="text-overflow">' + $(this).parent("span").text() + '</div> <span class="glyphicon-minus remove-column glyphicon pull-right"></span></th>')
            $('.dataTables_scrollHeadInner').find('thead > tr:nth-child(2)').find('th:nth-child(' + (index + 1) + ')').html('<span class="pull-left">Feature Specs</span><span class="pull-right">Valuation</span>');
            $('.dataTables_scrollHeadInner').find('thead > tr:nth-child(2)').append('<th></th>');
            $('#product-details').find('tbody > tr').each(function(key, value) {
                if ($(this).find('.new-feature').length > 0 ||
                    $(this).find('.section-head').length > 0 ||
                    $(this).find('.summary').length > 0 || key == 0 ||
                    $(this).hasClass('custom-field'))
                    $(this).find('td:nth-child(' + (index + 1) + ')').before("<td></td>");
                else
                    $(this).find('td:nth-child(' + (index + 1) + ')').before("<td><span class='sign'>$</span><span>200</span></td>");
            });
            $('#product-details').DataTable().draw();

          //  $.fn.dataTable.tables({
            //    visible: true,
            //    api: true
            //}).columns.adjust().fixedColumns().relayout();
            index++;
        });
        $('#product-detail').css("width", "auto");
        $('#product-detail').find('td').css("width", "300px");
    });

    $(document).on("click", ".checkbox input", function(e) {
        if ($(this)[0].checked) {
            $(this).parents('li').addClass("active");
            if ($(this).parents('.search-list').length > 0) {
                allotRegionToUser($(this));
                $(this).prop("checked", '');
                $(this).parents("li").removeClass('active');
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
                addcompetitor_productTable.search(obj, true, false).draw();
            }
            if ($(this).parents('#addcompetitor').find('table input:checked').length > 0) {
                $(this).parents('#addcompetitor').find('.count-competitors').html('(' + $(this).parents('#addcompetitor').find('table input:checked').length + ')');
                $(this).parent('.checkbox').toggleClass('checked')
            } else
            if ($(this).parents('#addcompetitor').find('table input:checked').length == 0) {
                $(this).parents('#addcompetitor').find('.count-competitors').html('');
                $(this).parent('.checkbox').toggleClass('checked')
            }
        } else if ($(this).parents('#StatusFilter').length > 0) {
            var status_filter = $(this).parents("div.actionPopover").find('input[type="checkbox"]:checked');
            if ($("div#products").length > 0) {

                var addcompetitor_productTable = $('#productTable').DataTable();
                var obj = "";
                if (status_filter.length > 0) {
                    $(status_filter).each(function(key, value) {
                        if (status_filter.length == key - 1 || key == 0)
                            obj = obj + $(value).val();
                        else
                            obj = obj + "|" + $(value).val();
                    });
                }
                addcompetitor_productTable.search(obj, true, false).draw();
            } else {
                if ($('#tasksTable').length > 0) {

                    var obj = "";
                    if (status_filter.length > 0) {
                        $(status_filter).each(function(key, value) {
                            if (status_filter.length == key - 1 || key == 0)
                                obj = obj + $(value).val();
                            else
                                obj = obj + "|" + $(value).val();
                        });
                    }
                    //$(".popover").removeClass("in");
                    tasksTable.search(obj, true, false).draw();
                }
            }
        }
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
                            $('<input>').attr('type', "checkbox").attr('value', countryList[k].value)
                        ).append(countryList[k].value)
                    )));
        });

        $('#sendForReview').find('select.region + .btn-group > .multiselect-container').empty();
        $(regionList).each(function(k, v) {
            $('#sendForReview').find('select.region + .btn-group > .multiselect-container').append(
                $('<li>').append($('<a>').append(
                    $('<label>').attr('class', 'checkbox').append(
                        $('<input>').attr('type', "checkbox").attr('value', regionList[k].value)
                    ).append(regionList[k].value)
                )));
        });

        $('#sendForReview').on("click", ".multiselect-container input", function() {
            var options = $(this).parents('.multiselect-container').find("input:checked").length;
            var element = $(this).parents('.multiselect-container').parent(".btn-group").find(".multiselect >.multiselect-selected-text");
            var title = $(element).text();
            if (options == 0) {
                return $(element).text(title.substring(0, title.indexOf('(') >= 0 ? title.indexOf('(') : title.length));
            } else if (options >= 1) {
                return $(element).text(title.substring(0, title.indexOf('(') >= 0 ? title.indexOf('(') : title.length) + '(' + options + ')');
            }
        });
        $("#sendForReview.modal").modal('show');
    });
    $(document).on("keyup", "#sendForReview input[type='search']", function(e) {
        var searchedText = $(this).val().trim();
        filterSendList(searchedText);
    });
    $(document).on("click", "#sendForReview .btn-primary.addreviwer", function(e) {
        var id = $("#sendForReview").attr("data-id");
        $(".send-list").find("span.mail").each(function(k, e) {
            if ($("#productTable").length > 0)
                $("#productTable").find("td[data-id='" + id + "']").parents("tr").find("td:nth-child(6) > div > span.pull-right:nth-child(2)").append('<a href="#" rel="imgPopover" class="popover-element" data-popover-content="#imagePopoverApproved" data-placement="bottom" data-original-title="" title="" >' +
                    '<span class="roundImage approved">' +
                    '<img class="img-responsive img-circle" src="' + $(this).find('img').attr("src") + '">' +
                    '</span>' +
                    '</a>');
            if ($("#tasksTable").length > 0)
                $("#tasksTable").find("td[data-id='" + id + "']").parents("tr").find("td:nth-child(6) > div > span.pull-right:nth-child(2)").append('<a href="#" rel="imgPopover" class="popover-element" data-popover-content="#imagePopoverApproved" data-placement="bottom" data-original-title="" title="" >' +
                    '<span class="roundImage approved">' +
                    '<img class="img-responsive img-circle" src="' + $(this).find('img').attr("src") + '">' +
                    '</span>' +
                    '</a>');
        });
        $("#sendForReview").modal("hide");
        hideReviewer();
    })
    hideReviewer();
    $(document).on("click", ".sendForReviewmodal", function(e) {
        var id = $(this).parents("tr").find("td:first-child").attr("data-id");
        $("#sendForReview").attr("data-id", id);
        $("#sendForReview").modal("show");
    });

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

    var addcompetitor_productTable = $('#addcompetitor').find('#productTable').DataTable({
        "sDom": "<'row table-head'<'col-sm-6'<'table-panel-heading'>><'col-sm-2'<'products-table-panel-action pull-right'>><'col-sm-4'f>>" +
            "<'row'<'col-sm-12'tr>>" +
            "<'row'<'col-sm-6' i><'col-sm-6'<'pull-right'p><'table-footer pull-right'l>>>",
        "oLanguage": {
          //  "sSearch": '<div class="input-group"><span class="glyphicon glyphicon-search"></span><span class="input-group-addon search-icon"></span>',
            "sSearch": '<div class="input-group"><span class="input-group-addon search-icon"><span class="glyphicon glyphicon-search"></span></span>',
            "sSearchPlaceholder": 'Search',
            "sInfo": 'Viewing <b>_START_</b> to <b>_END_</b> of _TOTAL_',
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


    $('.view-product-details').find('#product-details').DataTable({
        scrollY: false,
        "paging": false,
        "ordering": false,
        "info": false,
       scrollX: "800px",
        //scrollCollapse: true,
        paging: false,
        fixedColumns: {
            leftColumns: 2,
        }
    })

    $('.products-page.page-content ').find('#productTable').DataTable({
        "sDom": "<'row products-toolbar table-head'<'col-sm-5'<'table-panel-heading'>><'col-sm-4'<'table-panel-action pull-right'>><'col-sm-3'f>>" +
            "<'row'<'col-sm-12'tr>>" +
            "<'row'<'col-sm-6' i><'col-sm-6'<'pull-right'p><'table-footer pull-right'l>>>",
        "oLanguage": {
            "sSearch": '<div class="input-group"><span class="input-group-addon search-icon"><span class="glyphicon glyphicon-search"></span></span>',
            "sSearchPlaceholder": 'Search',
            "sInfo": 'Viewing <b>_START_</b> - <b>_END_</b> of <b>_TOTAL_</b>',
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
    });
    $(".products-page.page-content").find("div.table-panel-heading").html('<span class="products-table-heading">My New Products</span>');
    $(".products-page.page-content").find("div.table-panel-action").html('<div class="products-table-heading-right"><span class="addcompetitor glyphicon glyphicon-plus new-product product-modal"></span><span class="new-product product-modal">NEW PRODUCT</span></div>');

    $('#addcompetitor').find("div.table-panel-heading").append('<div class="btn-group" role="group" aria-label="...">' +
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
        $('.popover').removeClass('in');
        if ($(this).hasClass('view-product')) {
            if ($(this).parents(".page-section").hasClass("view-product-details")) {

                modalName = "View Product";
                productName = localStorage.productName;

                $('#NewProductModal').addClass("view").removeClass('edit');
                $("#NewProductModal").find(".view-continue-product").addClass('view').removeClass('new').removeClass('edit');
            } else {
                $(window).attr('location', 'view-product.html');
                localStorage.view = "view";
            }

        } else
        if ($(this).hasClass('edit-product')) {
            if ($(this).parents(".page-section").hasClass("view-product-details")) {

                modalName = "Edit Product";
                productName = localStorage.productName;
                // $('#productTable').find('a[aria-describedby="' + $(this).parents('.popover.fade').attr('id') + '"]').parents('tr').find('.product-modal').html();
                $('#NewProductModal').find('input').removeAttr('disabled');
                $('#NewProductModal').addClass("edit").removeClass('view');
                $("#NewProductModal").find(".view-continue-product").addClass('edit').removeClass('new').removeClass('view');
            } else {
                localStorage.view = "edit";
                $(window).attr('location', 'view-product.html');
            }
        } else
        if ($(this).hasClass('new-product')) {
            modalName = "Add New Product";
            $('#NewProductModal').find('input').removeAttr('disabled');
            $('#NewProductModal').addClass("edit").removeClass('view');
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
                $('.product-modal').addClass("view-product").removeClass("edit-product");
                $('.product-name').text(localStorage.productName);
            } else
            if (localStorage.view == 'edit') {
                $('.task').find('span:first-child').text("Edit Product")
                $('.product-modal').addClass("edit-product").removeClass("view-product");
                $('.product-name').text(localStorage.productName);
            }
            if (localStorage.view == 'new') {
                $('.task').find('span:first-child').text("New Product");
                $('.product-modal').addClass("edit-product").removeClass("view-product");
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
        if ($('.page-content').hasClass('products-page')) {}
    }
    $(document).on('click', '.edit-product.btn', function(e) {
        if ($(this).parents('.view-product-details').length > 0) {
            $('.view-product-details').addClass("edit").removeClass("view").removeClass("new");
            $('.view-product-details').find(".task").find("span.task-product").html("Edit Product");
            localStorage.view = "edit";
        } else {
            if ($(this).parents('#NewProductModal').length > 0) {
                $('#NewProductModal').removeClass("view");
                $('#NewProductModal').addClass("edit");
                $('#NewProductModal').find('input').removeAttr('disabled');
                $('#NewProductModal').find('.modal-title').html('Edit Product');
                $('#NewProductModal').find('.view-continue-product').removeClass('view').addClass('edit');;

                localStorage.view = "edit";
            }
        }
    });
    /* ............ script for products page ends .............. */
    /* ............ script for scenarios page start .............. */

    $('#scenariosTable').DataTable({
        "sDom": "<' col-sm-12 scenarios-toolbar table-head'<'col-sm-8'<'table-panel-heading'>><'col-sm-2'<'table-panel-action pull-right'>><'col-sm-2'f>>" +
            "<'row'<'col-sm-12'tr>>" +
            "<'row'<'col-sm-6'i><'col-sm-6'<'pull-right'p><'table-footer pull-right'l>>>",
        "oLanguage": {
            "sSearch": '<div class="input-group"><span class="input-group-addon search-icon"><span class="glyphicon glyphicon-search"></span></span>',
            "sSearchPlaceholder": 'Search',
            "sInfo": 'Viewing <b>_START_</b> to <b>_END_</b> of _TOTAL_',
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

    $(".scenarios-page").find("div.table-panel-heading").html('<div class="tasks-table-heading">My New Scenarios</div>');
    $(".scenarios-page").find("div.table-panel-heading").html('<span class="table-heading">My New Scenarios</span>');
    $(".scenarios-page").find("div.table-panel-action").html('<div class="table-heading-right"><span class="addcompetitor glyphicon glyphicon-plus new-product product-modal"></span><span class="new-scenarios">NEW SCENARIO</span></div>');

    $(document).on('click', '.new-scenarios', function() {
        $("#NewScenarioModal").modal('show');
    });
    $('[rel="scenariosActionPopover"]').popover({
        container: $("#scenariosTable"),
        //trigger: "hover" ,
        html: true,
        content: function() {
            var clone = $($(this).data('popover-content')).clone(true).removeClass('hide');
            return clone;
        }
    }).click(function(e) {
        e.preventDefault();
        $(".popover").addClass('action-popover');
    }).hover(function(e) {
        e.preventDefault();
        $(".popover").addClass('action-popover');
    });
    /* ............ script for scenarios page end .............. */

    /* ............ script for Tasks page start .............. */


    $(".view-task-details .region-dropdown .dropdown-menu li a").click(function() {
        $(this).parents('.btn-group.open').find('.btn').text($(this).text());
        $(this).parents('.btn-group.open').find('.btn').val($(this).text());
    });
    var tasksTable = $('#tasksTable').DataTable({
        "sDom": "<'row col-sm-12 tasks-toolbar table-head'<'col-sm-10'<'table-panel-heading'>><'col-sm-2'f>>" +
            "<'row'<'col-sm-12'tr>>" +
            "<'row'<'col-sm-6'i><'col-sm-6'<'pull-right'p><'table-footer pull-right'l>>>",
        "oLanguage": {
            "sSearch": '<div class="input-group"><span class="input-group-addon search-icon"><span class="glyphicon glyphicon-search"></span></span>',
            "sSearchPlaceholder": 'Search',
            "sInfo": 'Viewing <b>_START_</b> to <b>_END_</b> of _TOTAL_',
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

    $(".tasks-page").find("div.table-panel-heading").html('<div class="tasks-table-heading">My Review Tasks</div>');
    /* ............ script for Tasks page ends .............. */
    $(document).on("click", ".downloads", function() {
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
    $(document).on("click", ".download", function() {
        var canvas = document.getElementById("mycanvas");
        var img = canvas.toDataURL("image/png");
        document.write('<img src="' + img + '"/>');
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
    $("select").change(function() {
        $(this).removeClass("italic");
    });
    $("#taskPopover").on("keyup","textarea",function() {
       
       $("a.action-column[aria-describedby=" +$(".task-popover.popover").attr("id") + "]")
       .find(".add-icon").removeClass("add-icon").addClass("pen-icon");
 })   
});


function allotRegionToUser(element) {
    var id = $(element).parents('div').attr("id")
    var src = $(element).parents('li').find('img').attr("src");
    var name = $(element).parents('li').find('.name').html();
    var designation = $(element).parents('li').find('.designation').html();
    var verify_selection = false;
    var division = "";
    if ($(".allot-region-country >.btn").hasClass("active")) {
        verify_selection = $('.send-list').find(".mail[data-id='" + id + "'][data-division='" + $(".allot-region-country").find(".btn.active").html() + "']").length == 0;
        if (verify_selection) {
            division = $(".allot-region-country >.btn.active").text();
            addHTMLtoSendList(id, src, name, division, designation);
        }
    } else {
        $(".allot-region-country > .btn-group ").find(".multiselect-container").find("input:checked").each(function(key, ele) {
            verify_selection = $('.send-list').find(".mail[data-id='" + id + "'][data-division='" + $(ele).val() + "']").length == 0;
            if (verify_selection) {
                division = $(ele).val();
                addHTMLtoSendList(id, src, name, division, designation);
            }
        });
    }
}

function addHTMLtoSendList(id, src, name, division, designation) {
    var html = $.parseHTML('<span class="mail" data-id=' + id + ' data-division="' + division + '">' +
        '<img src="' + src + '" class="img-circle img-responsive">' +
        '<span class="name">' + name + '</span> - ' +
        '<span class="font-gray-small division">' + designation + '|' + division + ' </span>' +
        '<span class="close">x</span>' +
        '<span></span>' +
        '</span>');

    var div = $('.send-box').find('.send-list');
    div.append(html);
}

function filterSendList(searchtext) {
    $("#sendForReview").find('.search-list').find("li").addClass("hidden");
    $("#sendForReview").find('.search-list').find("li").each(function(key, value) {
        var text = $(value).find('.name').html();
        if (searchtext != undefined && searchtext != "") {
            if (text.toLowerCase().indexOf(searchtext.toLowerCase()) >= 0)
                $(value).removeClass("hidden");
        } else
            $("#sendForReview").find('.search-list').find("li").removeClass("hidden");
    });
}

function ClearModal() {
    $('.modal-body').find('input[type="text"]').val('');
    $('.modal-body').find('input[type="checkbox"]').prop('checked', 'false');
    $('.modal-body').find('input[type="checkbox"]').prop('checked', '');
    //    $('.modal-body').find('input[type="checkbox"]').removeAttr('checked');


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


function hideReviewer() {
    $("#productTable").find("td:nth-child(6)").each(function(k, element) {
        var e = $(this).find("span");
        if ($(e).find('a:not([rel="allreviewerspopover"])').length > 3) {
            $(e).find('a:not([rel="allreviewerspopover"]):nth-child(n+3)').addClass("hidden");
            if ($(e).find('a[rel="allreviewerspopover"]').length > 0)
                $(e).find('a[rel="allreviewerspopover"] >.count-rest').text($(e).find('a.popover-element:not([rel="allreviewerspopover"])').length - 2);
            else
                $(e).find('a:not([rel="allreviewerspopover"]):nth-child(2)').after('<a rel="allreviewerspopover" data-toggle="popover" data-popover-content="#allreviewers" data-placement="bottom" class="popover-element"><span class=count-rest>' + ($(e).find('a.popover-element:not([rel="allreviewerspopover"])').length - 2) + '</span></a>');

            var popOverSettings = {
                placement: 'bottom',
                container: $(this),
                html: true,
                selector: '[rel="allreviewerspopover"]', //Sepcify the selector here
                content: function() {
                    return $('#allreviewers').html();
                }
            }
            $('body').popover(popOverSettings);

            var approved = $(e).find("a[data-popover-content='#imagePopoverApproved'].hidden").length;
            var rejected = $(e).find("a[data-popover-content='#imagePopoverRejected'].hidden").length;
            var hidden = $(e).find("a.hidden").length;
            if (approved == hidden)
                $(e).find(".count-rest").addClass("allapproved");
            if (rejected == hidden)
                $(e).find(".count-rest").addClass("allrejected");
        }
    });
    $("#tasksTable").find("td:nth-child(6)").each(function(k, element) {
        var e = $(this).find("span");
        if ($(e).find('a:not([rel="allreviewerspopover"])').length > 3) {
            $(e).find('a:not([rel="allreviewerspopover"]):nth-child(n+3)').addClass("hidden");
            if ($(e).find('a[rel="allreviewerspopover"]').length > 0)
                $(e).find('a[rel="allreviewerspopover"] >.count-rest').text($(e).find('a.popover-element:not([rel="allreviewerspopover"])').length - 2);
            else
                $(e).find('a:not([rel="allreviewerspopover"]):nth-child(2)').after('<a rel="allreviewerspopover" data-toggle="popover" data-popover-content="#allreviewers" data-placement="bottom" class="popover-element"><span class=count-rest>' + ($(e).find('a.popover-element:not([rel="allreviewerspopover"])').length - 2) + '</span></a>');

            var popOverSettings = {
                placement: 'bottom',
                container: $(this),
                html: true,
                selector: '[rel="allreviewerspopover"]', //Sepcify the selector here
                content: function() {
                    return $('#allreviewers').html();
                }
            }
            $('body').popover(popOverSettings);

            var approved = $(e).find("a[data-popover-content='#imagePopoverApproved'].hidden").length;
            var rejected = $(e).find("a[data-popover-content='#imagePopoverRejected'].hidden").length;
            var hidden = $(e).find("a.hidden").length;
            if (approved == hidden)
                $(e).find(".count-rest").addClass("allapproved");
            if (rejected == hidden)
                $(e).find(".count-rest").addClass("allrejected");
        }
    });
}