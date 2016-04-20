$(document).ready(function() {
	$.validator.setDefaults({
		errorClass: 'help-block',
		highlight: function(element) {
			$(element)
				.addClass('form-question__input-error');
		},
		unhighlight: function(element) {
			$(element)
				.removeClass('form-question__input-error');
		},
		errorPlacement: function (error, element) {
			element.attr("placeholder", error[0].outerText);
		}
	});



	var form = $('#form-question');

	form.validate({
		rules: {
			name: {
				required: true,
				minlength: 2
			},
			email: {
				required: true,
				email: true
			},
			message: {
				required: true
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
			},
			message: {
				required: 'Поле для обов’язкового заповнення'
			}
		}
	});


});

