var userTab;
var categoriesTab;
var postsTab;

import * as $ from 'jquery';
import 'datatables';

$(document).ready( function () {
    $('#usersTable').DataTable();
    $('#categoriesTable').DataTable();
    $('#postsTable').DataTable();

    userTab = $('#uTable');
    categoriesTab = $('#cTable');
    postsTab = $('#pTable');
} );

function showUsers() {
    userTab.removeClass("hide");
    categoriesTab.addClass("hide");
    postsTab.addClass("hide");
}

function showCategories() {
    userTab.addClass("hide");
    categoriesTab.removeClass("hide");
    postsTab.addClass("hide");
}

function showPosts() {
    userTab.addClass("hide");
    categoriesTab.addClass("hide");
    postsTab.removeClass("hide");
}

