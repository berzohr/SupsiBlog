var container; var newContainer; var context;

import * as $ from 'jquery';

$(document).ready(function(){
    container = $("#main-container").prop('outerHTML');
    context = $('#searchForm').attr('action');

    newContainer = $("#main-container");

    $('#searchBar').on('input',function(e){
        if($('#searchBar').val().length >= 3){
            search();
        }else if($('#searchBar').val().length == 0){
            clean();
        }
    });

    $( "#searchForm" ).submit(function( event ) {
        event.preventDefault();
        search();
    });

});



function search(){

    var searchedWord = $('#searchBar').val();

    $.ajax({
        url: context +"?q="+searchedWord,
        dataType: "json"
    })
        .done(function (data) {
            $(".container")[0].innerHTML = "";
            var html = "<button onclick='clean()' class='btn btn-primary' id='searchBackBtn'>Go Back</button> ";
            $(data).each(function (index, value) {
                html += "<section>";
                html += "<header><h2><a href="+context.slice(0,-6)+value.id+">"+value.title+"</a></h2></header>";
                html += "<p>"+value.text+"</p>";
                html += "<footer><p>posted by: "+value.author+"</p></footer>";
                html += "</section>";
            });
            newContainer.append(html);
        })
        .fail(function () {
            alert('errore');
        });
};

function clean(){
    $(".container")[0].innerHTML = "";
    newContainer.append(container);
}