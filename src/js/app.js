$(document).foundation();

$(document).ready(function() {
    var wrapper = $( ".form_item-upload" ),
        inp = wrapper.find( "input" ),
        btn = wrapper.find( "button" ),
        lbl = wrapper.find( "div" );
    lbl.focus(function(){
        inp.focus()
    });
    // Crutches for the :focus style:
    inp.focus(function(){
        wrapper.addClass( "focus" );
    }).blur(function(){
        wrapper.removeClass( "focus" );
    });

    var file_api = ( window.File && window.FileReader && window.FileList && window.Blob ) ? true : false;

    inp.change(function(){
        var file_name;
        if( file_api && inp[ 0 ].files[ 0 ] )
            file_name = inp[ 0 ].files[ 0 ].name;
        else
            file_name = inp.val().replace( "C:\\fakepath\\", '' );

        if( ! file_name.length )
            return;

        if( lbl.is( ":visible" ) ){
            lbl.text( file_name );
        }else
            lbl.text( file_name );
    }).change();
});

// Carousel
$(document).ready(function() {
    if($('.carousel_contacts').length){
        $('.carousel_contacts').owlCarousel({
            loop:true,
            margin:00,
            nav:false,
            items:1,
            autoplay:true,
            autoplayTimeout:4000,
            autoplayHoverPause:true
        })
    }

    if($('.carousel_main').length){
        $('.carousel_main').owlCarousel({
            loop:true,
            margin:0,
            nav:false,
            items:1,
            dots: false,
            autoplay:true,
            autoplayTimeout:4000,
            autoplayHoverPause:true
        })
    }

    if($('.carousel_reviews').length){
        $('.carousel_reviews').owlCarousel({
            loop:true,
            margin:0,
            nav:true,
            navText: ['<i class="i-left-chevron"></i>','<i class="i-right-chevron"></i>'],
            items:1,
            dots: true,
            responsive:{
                0:{
                    nav:false,
                },
                640:{
                    nav:true,
                }
            }
        })
    }

});

