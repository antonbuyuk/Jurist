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

    if($('.carousel_awards').length){
        $('.carousel_awards').owlCarousel({
            loop:false,
            navText: ['<i class="i-left-chevron"></i>','<i class="i-right-chevron"></i>'],
            dots: true,
            responsive:{
                0:{
                    nav:false,
                    items:1,
                    margin:0
                },
                640:{
                    nav:false,
                    items:3,
                    margin:15
                },
                1024:{
                    items:5,
                    nav:true,
                    margin:30
                }
            }
        })
    }
});


if ($('#map').length > 0) {
    function initMap() {
        var lt = + $('#map').attr('data-lt');
            lg = + $('#map').attr('data-lg');
            gps = {lat: lt, lng: lg};
            text = $('#map').attr('data-text');

        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 12,
          styles: [
            {elementType: 'geometry', stylers: [{color: '#efefef'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#fff'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#767676'}]},
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#bababa'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#bababa'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#003a57'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#bababa'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#fff'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#bababa'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#dadada'}]
            }
          ]
        });

        var marker = new google.maps.Marker({
            position: {lat: -34.397, lng: 150.644},
            icon: './templates/_ares/img/svg/placeholder.svg',
            map: map,
            title: 'tex'
        });
    }
};
