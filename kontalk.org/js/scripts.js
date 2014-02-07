/* Author:
DANNY POSTMA
www.dannypostma.com
*/

$(document).ready(function(){
		"use strict";
		$('.testimonialsslider').bxSlider({
			 auto: true,
			 autoControls: false
		});
		
		
		var sliderTestimonial = $('.appslider').bxSlider({
			 auto: false,
			 autoControls: false
		});


		$('.first-box').hover(function(){
			sliderTestimonial.goToSlide(0);
			return false;
		});
		$('.second-box').hover(function(){
			sliderTestimonial.goToSlide(1);
			return false;

		});
		$('.third-box').hover(function(){
			sliderTestimonial.goToSlide(2);
			return false;
		});
	});