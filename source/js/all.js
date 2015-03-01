//= require vendor/jquery.min
//= require vendor/bootstrap.min


// if hamburger menu is expanded, ensure it collapses when an item is clicked
// https://github.com/twbs/bootstrap/issues/9013
// https://github.com/twbs/bootstrap/issues/12852
$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});
