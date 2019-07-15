$(document).ready(function() {
	
	//Funciones Menú
	(function menuToggle() {
		$('.toggle-button').click(function(e) {
			e.preventDefault();
			//console.log('Boton funciona');
			$('.container-nav').slideToggle(function() {
				if ($('.container-nav').is(':hidden')) {
					$('.theme-header').removeClass('header-selected');
					$('.img-brand').attr('src','assets/img/logo-univercity-blanco.png');
					$('.toggle-button i').addClass('fa-bars');
					$('.toggle-button i').removeClass('fa-times');
					
				} else {
					$('.theme-header').addClass('header-selected');
					$('.img-brand').attr('src','assets/img/logo-univercity.png');
					$('.toggle-button i').addClass('fa-times');
					$('.toggle-button i').removeClass('fa-bars');
				}
			});
			
		});
	})();
})