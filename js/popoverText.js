/**
 * Created by PC on 2017/2/21.
 */
$(function(){
    $('[data-toggle = popover]').popover({
        trigger : 'hover | focus ',
        placement : 'bottom',
        arrow : false,
        className : "title"
    });
});