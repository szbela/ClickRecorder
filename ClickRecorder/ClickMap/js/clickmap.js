/*
   ClickMap jQuery Plugin
   By Jay Salvat
   http://www.jaysalvat.com/
   changes on Csongi branch!
*/

(function($) { 

$.fn.saveClicks = function() { 
    $(this).bind('mousedown.clickmap', function(evt) { 
        $.post('/ClickRecorder/ClickMap/clickmap.php', {  
            x:evt.pageX,  
            y:evt.pageY,  
            l:escape(document.location.pathname) 
        }); 
    }); 
}; 
 
$.fn.stopSaveClicks = function() { 
     $(this).unbind('mousedown.clickmap'); 
}; 

$.displayClicks = function(settings) { 
    $('<div id="clickmap-overlay"></div>').appendTo('body'); 
 
    $('<div id="clickmap-loading"></div>').appendTo('body'); 
 
    $.get('/ClickRecorder/ClickMap/clickmap.php', { l:escape( document.location.pathname) },  
        function(html) { 
            $(html).appendTo('body');     
            $('#clickmap-loading').remove(); 
        } 
    ); 
    //$('#clickmap-overlay').css('z-index', 9999);  // note: it appears 'zIndex' no longer works
    //$('#clickmap-overlay').css('position', 'absolute');
    
}; 
 
$.removeClicks = function() { 
    //alert('remove');
    $('#clickmap-overlay').remove(); 
    $('#clickmap-container').remove(); 
}; 
         
})(jQuery); 