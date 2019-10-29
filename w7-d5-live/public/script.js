$(document).ready(function () {
    $('.avl').on('click', function () {
        console.log("xyz");
        $(this).toggleClass('btn-success btn-danger');
    });
});