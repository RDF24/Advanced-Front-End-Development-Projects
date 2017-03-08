$(document).ready(function () {
	var current = '';
	var entry = '';
	var equation = '';


	$('.button').click(function () {
		entry = $(this).val();



		if (equation == '0') {
			equation = entry;
		} else if(isNaN(entry) && isNaN(equation.charAt(equation.length - 1))) {
			equation = equation.slice(0, -1) + entry;
		}
			else{
			equation += entry;
			
		}
		
		
	

		if (entry == 'AC') {
			entry = '0';
			equation = '0';
			$('#mini').html(equation);
			$('#main').html(entry);
		} else if (entry === 'CE') {
			equation = equation.slice(0, -3);
			entry = equation.charAt(equation.length - 1);

			$('#main').html(entry);
			$('#mini').html(equation);
		} else if (entry === '=') {
			var result = eval(equation.slice(0, -1));
			if (result % 1 !== 0) {
				result = result.toFixed(2);
			}
			$('#main').html(result);
			$('#mini').html(equation + result);
			entry = '';
			equation = '';
		} else {

			$('#main').html(entry);
			$('#mini').html(equation);
		}



		if (equation.length > 27) {
			$('#main').html('Too many digits!');
			$('#mini').html('Too many digits!');
		}

	});
});
