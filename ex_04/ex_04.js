function houdini() {

    $('p').fadeOut(); 
}
$(document).ready(function() {
    $('#makeDisappear').on('click', function() {
        houdini(); 
    });
});
