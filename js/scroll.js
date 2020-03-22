var pos = document.getElementById("head").offsetHeight;
         
        function myFunction(x) {;
            if (x >= pos) 
            {
                document.getElementById("main").className = "fixed";
                document.getElementById("nav-logo").className = "visible";
            }
            else
            {
                document.getElementById("main").className = "unfixed";
                document.getElementById("nav-logo").className = "unvisible";
            }

        
        }
        function scrollDetect(){
            var lastScroll = 0;
            var scrollCount = 0;
            var isScrolling;

            window.onscroll = function() {

                myFunction(document.documentElement.scrollTop || document.body.scrollTop);

                let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

                if ((currentScroll > 0) && (lastScroll <= currentScroll))
                {
                    if ((document.documentElement.scrollTop < pos) && (scrollCount == 0)){
                        document.documentElement.scrollTop = pos;
                        scrollCount = 1;
                    }
                    
                    lastScroll = currentScroll;

                    window.addEventListener('scroll', function ( event ) {

                        window.clearTimeout( isScrolling );

                        isScrolling = setTimeout(function() {

                            scrollCount = 0;

                        }, 100);

                    }, false);
                }
                else
                {
                    if (((document.documentElement.scrollTop > 0) && (document.documentElement.scrollTop <= (pos + 100))) && (scrollCount == 0)){
                        document.documentElement.scrollTop = 0;
                        scrollCount = 1;
                    }
                    
                    lastScroll = currentScroll;

                    window.addEventListener('scroll', function ( event ) {

                        window.clearTimeout( isScrolling );

                        isScrolling = setTimeout(function() {

                            scrollCount = 0;

                        }, 100);

                    }, false);
                }
            };
        }
        scrollDetect();