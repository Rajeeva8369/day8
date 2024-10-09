function houdini() {
    $('p').fadeOut(); 
}

$(function() {
    $('#makeDisappear').on('click', houdini); 
});
