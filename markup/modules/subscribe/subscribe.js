$(document).ready(function() {
	$.validator.setDefaults({
		errorClass: 'help-block',
		highlight: function(element) {
			$(element)
				.closest('.subscribe__input')
				.addClass('subscribe__input-error');
		},
		unhighlight: function(element) {
			$(element)
				.closest('.subscribe__input')
				.removeClass('subscribe__input-error');
		},
		errorPlacement: function (error, element) {
			element.attr("placeholder", error[0].outerText);
		},
		submitHandler: function() {
			$('.subscribe__w').hide();
			$('.success').show();
		}
	});



	var form = $('#subscribe');

	form.validate({
		rules: {
			name: {
				required: true,
				minlength: 2
			},
			email: {
				required: true,
				email: true
			}
		},
		messages: {
			name: {
				required: 'Поле для обов’язкового заповнення',
				minlength: 'Мінімум 2 символи'
			},
			email: {
				required: 'ласка введіть правильний email',
				email: 'ласка введіть правильний email'
			}
		}
	});


});
