//SMOOTH TOP DOWN SCROLLING





if( !device.tablet() && !device.mobile() ) {

            //Desktop Navigation Scroll
            $(document).ready(function() {

                $(".scroll-link").click(function() {
                    var ScrollOffset = 59;
                    //alert(ScrollOffset);
                    $("html, body").animate({
                        scrollTop: $($(this).attr("href")).offset().top-ScrollOffset + "px"
                    }, {
                        duration: 1500,
                        easing: "linear"
                    });
                    return false;
                });

            });
                        
        } else {
            
            //Mobile Navigation Scroll
            $(document).ready(function() {

                $(".scroll-link").click(function() {
                    var ScrollOffset = 48;
                    //alert(ScrollOffset);
                    $("html, body").animate({
                        scrollTop: $($(this).attr("href")).offset().top-ScrollOffset + "px"
                    }, {
                        duration: 1500,
                        easing: "linear"
                    });
                    return false;
                });

            });
           
        }