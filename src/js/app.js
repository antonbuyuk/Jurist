$(document).foundation();

$(document).ready(function() {
    // if($('.accardion_list').length){
    //     accardionItem();
    // }
});
$(document).scroll(function() {
    $(document).scrollTop() > 800 ? $("header").addClass("header-fixed") : $("header").removeClass("header-fixed")
});

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

//Modal
$(document).ready(function(){
    $('.fixed_btn,.contacts_callback').click(function(){
        $('.overlay').addClass('is-active');
    })
    $('.modal_close').click(function(){
        $('.overlay').removeClass('is-active');
    })
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

// Text
$(document).ready(function() {
    $('.project-title').each(function() {
        var title = $(this).height(); 
            textSelect = $(this).next('.project-text');
            textBlock = $(textSelect).text();
            text = textBlock;
            link = $(this).attr('href');
            moreText = '[...]'
            more = '<a href=' + link + '>[...]</a>';

            if (text.length > 270) {
                text = text.substr(0, 270); 
                $(textSelect).html( text + more );
            } else {
                text = text.substr(0, 270);
                $(textSelect).html( text );
            }  
    });

    $('.news_title').each(function() {
        var titleSelect = $(this);
            titleBlock = $(titleSelect).text();
            title = titleBlock;
            textSelect = $(this).next('.news_text').children('p');
            textBlock = $(textSelect).text();
            text = textBlock;
            link = $(this).attr('href');
            moreText = '...'
            more = '<a href=' + link + '>[...]</a>';

            if (title.length > 57) {
                title = title.substr(0, 57); 
                $(titleSelect).html( title + moreText );
            } else {
                title = title.substr(0, 57);
                $(titleSelect).html( title );
            }  

            if (text.length > 155) {
                text = text.substr(0, 155); 
                $(textSelect).html( text + more );
            } else {
                text = text.substr(0, 155);
                $(textSelect).html( text );
            } 
    });

    $('.text_card p img').each(function() {
        var altText = $(this).attr('alt');
            srcImg = $(this).attr('src');
        $(this).after("<span>"+ altText +"</span>");

        $(this).wrap("<a href="+ srcImg +" data-fancybox='img'></a>")
    });

    if ($('iframe').length){
        $('iframe').each(function() {
            $(this).parents('p').addClass('iframe_parents');
        });
    }

    if($('table').length){
        $('table').each(function(){
            $(this).wrap("<div class='table-scroll'></div>")
        });
    }
});

// Form 10
$(document).ready(function() {
    $('#goSecondStep').click(function(){
        creatRadio();
        $(this).parents('.step').css('display','none');
        $('#secondStep').css('display','block');
    });

    $('#goThirdStep').click(function(){

        if($('#secondStep .form_item input').val()){
            creatInput();
            $(this).parents('.step').css('display','none');
            $('#thirdStep').css('display','block');
        }
    });

    $('.form_10 .back').click(function(){
        $(this).parents('.step').css('display','none');
        $(this).parents('.step').prev('.step').css('display','block');
    });

    $('#secondStep .back').click(function(){
        $('#formResult1').empty();
    });

    $('#thirdStep .back').click(function(){
        $('#formResult2').empty();
    });
});

function creatRadio(){
    $('.form_10 #firstStep .form_group').each(function(){
        var title = $(this).prev('.title').text();
            input = $(this).find('input');
        var inputData;

        $(input).each(function(){
            if($(this).prop("checked")){
                var inputData = $(this).data('text');
                $('#formResult1').append(
                    '<div class="form_item"><div class="row"><div class="columns small-12 medium-12 large-3"><div class="title title_size-small title-semibold title_color-dark">'+ title +'</div></div><div class="columns small-12 medium-12 large-9"><p>' + inputData +'</p></div></div></div>');
            }            
        });
        
    });
}

function creatInput(){
    $('.form_10 #secondStep .form_item').each(function(){
        var title = $(this).children('input,textarea').attr('placeholder');
            input = $(this).children('input,textarea').val();
        
        $('#formResult2').append(
            '<div class="form_item"><div class="row"><div class="columns small-12 medium-12 large-3"><div class="title title_size-small title-semibold title_color-dark">'+ title +'</div></div><div class="columns small-12 medium-12 large-9"><p>' + input +'</p></div></div></div>');
    });
}

// Accardion
function accardionItem() {
    $('.accardion_header').click(function() {
        $('.accardion_item').removeClass('is-active');
        $(this).parents('.accardion_item').addClass('is-active');
    });
}

if ($('#map').length > 0) {
    var markersData = [
        {
            lat: 56.246205,     // Широта
            lng: 43.8964165,    // Долгота
            img: "../templates/_ares/img/jpg/office.jpg",
            phone: "Телефон 1", // Произвольное название, которое будем выводить в информационном окне
            fax: "факс 1",
            email:"Адрес 1"   // Адрес, который также будем выводить в информационном окне
        },
        {
            lat: 56.2763807,
            lng: 43.94534,
            img: "../templates/_ares/img/jpg/office.jpg",
            phone: "Телефон 2",
            fax: "факс 2",
            email:"Адрес 2"
        },
        {
            lat: 56.3144715,
            lng: 43.9922894,
            img: "../templates/_ares/img/jpg/office.jpg",
            phone: "Телефон 3",
            fax: "факс 3",
            email:"Адрес 3"
        }
    ];
    
    
    var map, infoWindow;
     
    function initMap() {
        var centerLatLng = new google.maps.LatLng(56.2928515, 43.7866641);
        var mapOptions = {
            center: centerLatLng,
            zoom: 15,
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
        };
     
        map = new google.maps.Map(document.getElementById("map"), mapOptions);
     
        infoWindow = new google.maps.InfoWindow();
     
        google.maps.event.addListener(map, "click", function() {
            infoWindow.close();
        });
     
        // Определяем границы видимой области карты в соответствии с положением маркеров
        var bounds = new google.maps.LatLngBounds();
     
        for (var i = 0; i < markersData.length; i++){
     
            var latLng = new google.maps.LatLng(markersData[i].lat, markersData[i].lng);
            var img = markersData[i].img;
            var phone = markersData[i].phone;
            var fax = markersData[i].fax;
            var email = markersData[i].email;
     
            addMarker(latLng, img, phone, email, fax);
     
            // Расширяем границы нашей видимой области, добавив координаты нашего текущего маркера
            bounds.extend(latLng);
        }
     
        // Автоматически масштабируем карту так, чтобы все маркеры были в видимой области карты
        map.fitBounds(bounds);
     
    }
    
    function addMarker(latLng, img, phone, email, fax) {
        var marker = new google.maps.Marker({
            position: latLng,
            map: map,
            icon: './templates/_ares/img/svg/placeholder.svg',
            title: phone
        });
     
        google.maps.event.addListener(marker, "click", function() {
     
            var contentString = '<div class="map_content">' +
                                    '<div class="row">'+
                                        '<div class="columns small-6">'+
                                            '<div class="image-border"><img src="'+ img +'"></div>'+
                                        '</div>'+
                                        '<div class="columns small-6">'+
                                            '<div class="title title_color-dark title_size-small title_main">ГОЛОВНОЙ ОФИС:</div>'+
                                            '<div class="footer_block"><p><span>Телефон:</span><a href="tel:' + phone + '" class="title_color-dark">' + phone + '</a></p><p><span>Факс:</span><a href="tel:+375 (152) 967-004" class="title_color-dark">+375 (152) 967-004</a></p><p><span>E-mail:</span><a href="mailto:'+ email +'" class="title_color-dark">'+ email +'</a></p></div>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>';
     
            infoWindow.setContent(contentString);
            infoWindow.open(map, marker);
        });
    }
};


$(window).ready(function () {
    $('body').css('opacity', '1');
 })