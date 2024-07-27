/*
	Spectral by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

// Project Animations
document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.querySelector('.canvas');
    if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const context = canvas.getContext("2d");
        const frameCount = 240;

        const currenFrame = (index) => `./blender/${(index + 1).toString()}.jpg`;
        const images = [];
        let ball = {frame:0};

        for(let i = 0; i<frameCount; i++){
            const img = new Image();
            img.src = currenFrame(i);
            images.push(img);
        }
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(ball, {
            frame: frameCount - 1,
            snap: "frame",
            ease: "none",
            scrollTrigger: {
                scrub: true,
                pin: "canvas",
                end: "500%",
            },
            onUpdate: render,
			
        });
		gsap.fromTo('.ball-text', {
			opacity: 0,
		}, {
			opacity: 1,
			duration: 1,
			delay: 0.5,
			scrollTrigger: {
				start: "top top",
				end: "top top",
				toggleActions: "play none none reverse"
			}
		});

		gsap.fromTo('.ball-text', {opacity: 1}, {opacity: 0, scrollTrigger: {
			scrub: true,
			start: '3%',
			end: '5%',
		}});

		gsap.fromTo('.ball-proj', {opacity: 0}, {opacity: 1, scrollTrigger: {
			scrub: true,
			start: '16%',
			end: '19%',
			},
			onComplete: () => {
				gsap.to('.ball-proj', {opacity: 0, scrollTrigger: {
					scrub: true,
					start: '19%',
					end: '23%',
					}});
			}
		});

		gsap.fromTo('.ball-proj2', {opacity: 0}, {opacity: 1, scrollTrigger: {
			scrub: true,
			start: '30%',
			end: '39%',
			},
			onComplete: () => {
				gsap.to('.ball-proj2', {opacity: 0, scrollTrigger: {
					scrub: true,
					start: '49%',
					end: '43%',
					}});
			}
		});

		gsap.fromTo('.ball-proj3', {opacity: 0}, {opacity: 1, scrollTrigger: {
			scrub: true,
			start: '43%',
			end: '70%',
			},
			onComplete: () => {
				gsap.to('.ball-proj3', {opacity: 0, scrollTrigger: {
					scrub: true,
					start: '70%',
					end: '80%',
					}});
			}
		});

        images[0].onload = render;

        function render() {
            context.canvas.width = images[0].width;
            context.canvas.height = images[0].height;
            context.clearRect(0,0,canvas.width,canvas.height);
            context.drawImage(images[ball.frame],0,0)
        }
    }

   
});

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$wrapper = $('#page-wrapper'),
		$banner = $('#banner'),
		$header = $('#header');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Mobile?
		if (browser.mobile)
			$body.addClass('is-mobile');
		else {

			breakpoints.on('>medium', function() {
				$body.removeClass('is-mobile');
			});

			breakpoints.on('<=medium', function() {
				$body.addClass('is-mobile');
			});

		}

	// Scrolly.
		$('.scrolly')
			.scrolly({
				speed: 1500,
				offset: $header.outerHeight()
			});

	// Menu.
		$('#menu')
			.append('<a href="#menu" class="close"></a>')
			.appendTo($body)
			.panel({
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'right',
				target: $body,
				visibleClass: 'is-menu-visible'
			});

	// Header.
		if ($banner.length > 0
		&&	$header.hasClass('alt')) {

			$window.on('resize', function() { $window.trigger('scroll'); });

			$banner.scrollex({
				bottom:		$header.outerHeight() + 1,
				terminate:	function() { $header.removeClass('alt'); },
				enter:		function() { $header.addClass('alt'); },
				leave:		function() { $header.removeClass('alt'); }
			});

		}

})(jQuery);