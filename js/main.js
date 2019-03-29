//	form make test

function call() {
	var msg = $('#form').serialize();
	$.ajax({
		type: 'POST',
		url: '/save.php',
		data: msg,
		success: function (data) {
			$('#1').html(data);
		},
		error: function (xhr, str) {
			alert('Возникла ошибка: ' + xhr.responseCode);
		}
	});

}

// ReloadGoToTop

$(window).on('beforeunload', function () {
	$(window).scrollTop(0);
	$("input:checkbox:checked").prop("checked", false);
	$("input:radio:checked").prop("checked", false);
});

//create age option

$(document).ready(function () {
	for (i = 10; i < 110; i++) {
		$('#person-age').append('<option value="' + i + '">' + i + '</option>');
	}
	$('#person-age option[value="выбор"]').attr('disabled', 'disabled');

	//input info user

	$(document).ready(function () {
		$('.card-button-first').click(function () {
			var k = $('#c-0').find("input:checked").length;
			if (k > 0 && $("#person-age").val()) {
				$(window).scrollTop(0);
				$(this).parents().removeClass('card-active');
				$(this).parents().next().toggleClass('card-active');
			}
			return false;
		});

		//turning pages with test

		var test = 1;
		$('.card-button').click(function () {
			var nametest = "#c-" + test;
			console.log(test);
			console.log(nametest);
			var n = $('#c-' + test).find("input:checked").length;
			console.log(n);

			if (n >= 5 && test < 9) {
				$(window).scrollTop(0);
				$(this).parents().removeClass('card-active');
				$(this).parents().next().toggleClass('card-active');
				test = test + 1;
				console.log(test);
			}
			if (n >= 8 && test > 8) {
				$(window).scrollTop(0);
				$(this).parents().removeClass('card-active');
				$(this).parents().next().toggleClass('card-active');
				test = test + 1;
				console.log(test);
			}
		});
		var testImg = 10;
		$('.card-button-3').click(function () {
			var nametest = "#c-" + testImg;
			console.log(testImg);
			console.log(nametest);
			var n = $('#c-' + testImg).find("input:checked").length;
			console.log(n);

			if (n >= 3) {
				$('body').scrollTop(0);
				$(this).parents().removeClass('card-active');
				$(this).parents().next().toggleClass('card-active');
				testImg = testImg + 1;
				console.log(test);
			}
		});

		// all sum for test


		$('.card-button-result').click(function () {

			//       test part-1     test-1

			var p2 = Number($('input[name="point-2"]:checked').val());
			var p8 = Number($('input[name="point-8"]:checked').val());
			var p9 = Number($('input[name="point-9"]:checked').val());
			var p17 = Number($('input[name="point-17"]:checked').val());
			var sum2 = p2 + p8 + p9 + p17;
			console.log(sum2);
			if (sum2 <= 8) {
				$('.result-2').text('На отдыхе Вы предпочитаете не выделяться на фоне других и желаете остаться незаметной.')
			};
			if (sum2 <= 11 && sum2 > 8) {
				$('.result-2').text('В путешествии Вам приятно получать комплименты и выглядеть привлекательно, но при этом для Вас не важно постоянно быть в центре внимания.')
			};
			if (sum2 > 11) {
				$('.result-2').text('В путешествии Вам приятно получать комплименты и быть в центре внимания. На отдыхе Вы всегда уделяет внимание своему внешнему виду и замечаете, как выглядят другие люди. Иногда Вы жертвуете удобством, ради красоты.')
			};

			//test-2

			var p4 = Number($('input[name="point-4"]:checked').val());
			var p10 = Number($('input[name="point-10"]:checked').val());
			var p13 = Number($('input[name="point-13"]:checked').val());
			var p15 = Number($('input[name="point-15"]:checked').val());
			var sum3 = p4 + p10 + p13 + p15;
			console.log(sum3);
			if (sum3 <= 8) {
				$('.result-3').text('Вы очень самостоятельны в планировании своего отдыха. Вы редко или почти никогда не обращаетесь к тур операторам и вряд ли поедете с организованными группами. Вы уверены, что самое лучшее путешествие можете организовать себе сами.')
			};
			if (sum3 <= 11 && sum3 > 8) {
				$('.result-3').text('Вы гибко подходите к вопросу организации своего путешествия. В зависимости от ситуации и возможностей, Вы можете организовывать его сами, либо доверить эту работу туристическому агенству.')
			};
			if (sum3 > 11) {
				$('.result-3').text('Вы любите, когда Ваш отдых планируют профессионалы и Вам не надо беспокоиться об организационных вопросах.  Вы внимательно подходите к выбору людей, которым доверите организацию своего путешествия. И потом следуете их рекомендациям.')
			};

			//test-3

			var p1 = Number($('input[name="point-1"]:checked').val());
			var p3 = Number($('input[name="point-3"]:checked').val());
			var p6 = Number($('input[name="point-6"]:checked').val());
			var p11 = Number($('input[name="point-11"]:checked').val());
			var sum4 = p1 + p3 + p6 + p11;
			console.log(sum4);
			if (sum4 <= 8) {
				$('.result-4').text('В отпуске Вас сложно склонить к авантюре. Вы не гонитесь за острыми впечатлениями и любите возвращаться в те места, где Вы уже отдыхали раньше.')
			};
			if (sum4 <= 11 && sum4 > 8) {
				$('.result-4').text('В путешествие Вы едете за новыми впечатлениями. На отдыхе Вам нравится необычно и интересно проводить время, но скорее всего вы не согласитесь на авантюру, чреватую сомнительными последствиями, так как знаете меру.')
			};
			if (sum4 > 11) {
				$('.result-4').text('Вы – экспериментатор. Обычно вы никогда не ездите в одно и тоже место дважды. Вы обожаете отдыхать в необычных местах и всегда выбираете путешествия, насыщенные событиями. Вам не сидится на одном месте. Вы ищете особенных впечатлений, иначе отдых не отдых.')
			};

			//test-4

			var p5 = Number($('input[name="point-5"]:checked').val());
			var p12 = Number($('input[name="point-12"]:checked').val());
			var p16 = Number($('input[name="point-16"]:checked').val());
			var p19 = Number($('input[name="point-19"]:checked').val());
			var sum5 = p5 + p12 + p16 + p19;
			console.log(sum5);
			if (sum5 <= 8) {
				$('.result-5').text('«Лучшее путешествие – это спонтанное путешествие». Отправляясь в путешествие Вы уверенны, что все устроиться само собой. В путешествии Вы легко меняете свои планы и подстраиваетесь под обстоятельства.')
			};
			if (sum5 <= 11 && sum5 > 8) {
				$('.result-5').text('Вы любите, когда Ваш отдых спланирован и отправляясь в путешествие, обычно Вы составляете план. Но в вашем плане всегда есть место спонтанным событиям, и незначительные изменения в планах не испортят вам отдых.')
			};
			if (sum5 > 11) {
				$('.result-5').text('«Хорошее путешествие – это тщательно, до мелочей спланированное путешествие». Вы проявляете настойчивость и упорство воплощая в жизнь свои планы, и не любите, когда что-то их нарушает. Вы любите постоянство и предпочитаете не вносить изменения в план путешествия. В путешествии на вас можно положиться.')
			};

			//test-5

			var p7 = Number($('input[name="point-7"]:checked').val());
			var p14 = Number($('input[name="point-14"]:checked').val());
			var p18 = Number($('input[name="point-18"]:checked').val());
			var p20 = Number($('input[name="point-20"]:checked').val());
			var sum1 = p7 + p14 + p18 + p20;
			console.log(sum1);
			if (sum1 <= 8) {
				$('.result-1').text('В путешествии Вас утомляют длительные разговоры и общество мало знакомых людей. Отправляясь в путешествие, Вы не стремитесь к новым знакомствам и предпочитаете уединение.')
			};
			if (sum1 <= 11 && sum1 > 8) {
				$('.result-1').text('В путешествии обычно вы любите общаться, но есть моменты, когда Вам хочется побыть одному. Вам нравится проводить время в хорошей компании, но и быть наедине с самим собой Вам не скучно.')
			};
			if (sum1 > 11) {
				$('.result-1').text('На отдыхе вам нравиться быть в окружении людей, Вы наслаждаетесь общением. Вы легко знакомитесь и можете найти общий язык с любым человеком. Общаясь, вы заряжаетесь положительными эмоциями.')
			};

			//test part-2 test-1

			var l1 = Number($('input[name="point-2-1"]:checked').val());
			var l8 = Number($('input[name="point-2-8"]:checked').val());
			var l15 = Number($('input[name="point-2-15"]:checked').val());
			var l22 = Number($('input[name="point-2-22"]:checked').val());
			var sum6 = l1 + l8 + l15 + l22;
			console.log(sum6);
			if (isNaN(sum6)) {
				var sum6 = 0;
			}
			if (sum6 > 11) {
				$('.result-6').text('Скорее всего Вы оцените путешествие, которое откроет возможность обогатить ваш внутренний мир и достичь гармонии с самим собой. В настоящий момент для Вас важно поразмышлять о себе, возможно, об отношениях с другими людьми. Может быть, Вы хотели бы побыть наедине с самим собой, лучше понять свои мысли и чувства.')
			}
			if (sum6 < 12) {
				$('.result-6').parent().addClass('card-result_point-none');
			};

			//test-2

			var l2 = Number($('input[name="point-2-2"]:checked').val());
			var l9 = Number($('input[name="point-2-9"]:checked').val());
			var l16 = Number($('input[name="point-2-16"]:checked').val());
			var l23 = Number($('input[name="point-2-23"]:checked').val());
			var sum7 = l2 + l9 + l16 + l23;
			console.log(sum7);
			if (isNaN(sum7)) {
				var sum7 = 0;
			}
			if (sum7 > 11) {
				$('.result-7').text('От путешествия Вы ожидаете максимального комфорта и удобства. Вам доставит удовольствие вкусная еда и приятная обстановка, а также посещение релаксационных процедур и возможность спокойно выспаться. Скорее всего, удачным вариантом для Вас будет отдых по системе «все включено»')
			}
			if (sum7 < 12) {
				$('.result-7').parent().addClass('card-result_point-none');
			};

			//test-3

			var l3 = Number($('input[name="point-2-3"]:checked').val());
			var l10 = Number($('input[name="point-2-10"]:checked').val());
			var l17 = Number($('input[name="point-2-17"]:checked').val());
			var l24 = Number($('input[name="point-2-24"]:checked').val());
			var sum8 = l3 + l10 + l17 + l24;
			console.log(sum8);
			if (isNaN(sum8)) {
				var sum8 = 0;
			}
			if (sum8 > 11) {
				$('.result-8').text('В путешествии для Вас важна возможность духовного развития. Возможно, главной целью Вашего путешествия может стать паломничество. Вы могли бы посетить святые места, пообщаться с духовно просвещенными людьми.')
			}
			if (sum8 < 12) {
				$('.result-8').parent().addClass('card-result_point-none');
			};

			//test-4

			var l4 = Number($('input[name="point-2-4"]:checked').val());
			var l11 = Number($('input[name="point-2-11"]:checked').val());
			var l18 = Number($('input[name="point-2-18"]:checked').val());
			var l25 = Number($('input[name="point-2-25"]:checked').val());
			var sum9 = l4 + l11 + l18 + l25;
			console.log(sum9);
			if (isNaN(sum9)) {
				var sum9 = 0;
			}
			if (sum9 > 11) {
				$('.result-9').text('С большой вероятностью в путешествии Вы высоко оцените возможность посетить музеи, выставки и другие культурные достопримечательности и мероприятия. Их посещение может доставить Вам большое эстетическое удовольствие, поскольку Вы испытываете потребность в культурном развитии и обогащении, а также в художественно-эстетических переживаниях.')
			}
			if (sum9 < 12) {
				$('.result-9').parent().addClass('card-result_point-none');
			};

			//test-5

			var l5 = Number($('input[name="point-2-5"]:checked').val());
			var l12 = Number($('input[name="point-2-12"]:checked').val());
			var l19 = Number($('input[name="point-2-19"]:checked').val());
			var l26 = Number($('input[name="point-2-26"]:checked').val());
			var sum10 = l5 + l12 + l19 + l26;
			console.log(sum10);
			if (isNaN(sum10)) {
				var sum10 = 0;
			}
			if (sum10 > 11) {
				$('.result-10').text('Одной из целей Вашего путешествия может стать реализация профессиональных интересов. Вы испытываете потребность в профессиональном росте и развитии и в настоящий момент времени стремитесь к профессиональному признанию.')
			}
			if (sum10 < 12) {
				$('.result-10').parent().addClass('card-result_point-none');
			};

			//test-6

			var l6 = Number($('input[name="point-2-6"]:checked').val());
			var l13 = Number($('input[name="point-2-13"]:checked').val());
			var l20 = Number($('input[name="point-2-20"]:checked').val());
			var l27 = Number($('input[name="point-2-27"]:checked').val());
			var sum11 = l6 + l13 + l20 + l27;
			console.log(sum11);
			if (isNaN(sum11)) {
				var sum11 = 0;
			}
			if (sum11 > 11) {
				$('.result-11').text('В путешествии Вам доставит удовольствие возможность провести время в приятной компании, пообщаться, поделиться с окружающими своими впечатлениями и найти новых друзей.')
			}
			if (sum11 < 12) {
				$('.result-11').parent().addClass('card-result_point-none');
			};
			var l7 = Number($('input[name="point-2-7"]:checked').val());
			var l14 = Number($('input[name="point-2-14"]:checked').val());
			var l21 = Number($('input[name="point-2-21"]:checked').val());
			var l28 = Number($('input[name="point-2-28"]:checked').val());
			var sum12 = l7 + l14 + l21 + l28;
			console.log(sum12);
			if (isNaN(sum12)) {
				var sum12 = 0;
			}
			if (sum12 > 11) {
				$('.result-12').text('Вы из тех людей кому физическая активность приносит удовольствие, поэтому спорт – неотъемлемая часть Вашего отдыха.')
			}
			if (sum12 < 12) {
				$('.result-12').parent().addClass('card-result_point-none');
			};
		});
		$('.card-button-result-img').click(function () {
			var n = $('#c-14').find("input:checked").length;
			console.log(n);

			if (n >= 3) {
				$(window).scrollTop(0);
				$('.card-4-5').removeClass('card-active');
				$(".card-result").toggleClass('card-active');
			}

			//make test text

			var texttour = ['красивыхи завораживающих природных мест', 'эко-туризма, посещения ферм или деревень, а так же здоровой и вкусной еды и напитков', 'отдыха в разнообразных парках развлечений и интерактивных музеях', 'ночных развлечений и романтических приключений', 'шопинга', 'посещения духовных и религиозных мест', 'посещения проффесионлаьных мероприятий и и обучения чему-то новому', 'спортивной активности', 'культурных объектов и мероприятий']
			s1 = $('input[name=1]:checked').length;
			console.log(s1);
			s2 = $('input[name=2]:checked').length;
			console.log(s2);
			s3 = $('input[name=3]:checked').length;
			console.log(s3);
			s4 = $('input[name=4]:checked').length;
			console.log(s4);
			s5 = $('input[name=5]:checked').length;
			console.log(s5);
			s6 = $('input[name=6]:checked').length;
			console.log(s6);
			s7 = $('input[name=7]:checked').length;
			console.log(s7);
			s8 = $('input[name=8]:checked').length;
			console.log(s8);
			s9 = $('input[name=9]:checked').length;
			console.log(s9);
			var maxsum = [s1, s2, s3, s4, s5, s6, s7, s8, s9];
			console.log(maxsum);
			max1 = Math.max.apply(null, maxsum);
			console.log(max1);
			number1 = jQuery.inArray(max1, maxsum);
			console.log(number1);
			maxsum[number1] = 0;
			max2 = Math.max.apply(null, maxsum);
			console.log(max2);
			number2 = jQuery.inArray(max2, maxsum);
			console.log(number2);
			maxsum[number2] = 0;
			max3 = Math.max.apply(null, maxsum);
			console.log(max3);
			number3 = jQuery.inArray(max3, maxsum);
			console.log(number3);
			maxsum[number3] = 0;
			var firstword = '<strong>В путешествии вы получите удовольствие от </strong>';
			$('.card-result_tour-text').text(texttour[number1] + ', ' + texttour[number2] + ', ' + texttour[number3] + '.');

		});
	});

	//control checked uncheced input

	$('#1 input[type=checkbox]').change(function () {
		if ($('#1 input[type=checkbox]:checked').length >= 3) {
			$('#1 input[type=checkbox]:not(:checked)').attr('disabled', "disabled");
		} else {
			$('#1 input[type=checkbox]:disabled').removeAttr('disabled');
		}
	});
	$('#2 input[type=checkbox]').change(function () {
		if ($('#2 input[type=checkbox]:checked').length >= 3) {
			$('#2 input[type=checkbox]:not(:checked)').attr('disabled', "disabled");
		} else {
			$('#2 input[type=checkbox]:disabled').removeAttr('disabled');
		}
	});
	$('#3 input[type=checkbox]').change(function () {
		if ($('#3 input[type=checkbox]:checked').length >= 3) {
			$('#3 input[type=checkbox]:not(:checked)').attr('disabled', "disabled");
		} else {
			$('#3 input[type=checkbox]:disabled').removeAttr('disabled');
		}
	});
	$('#4 input[type=checkbox]').change(function () {
		if ($('#4 input[type=checkbox]:checked').length >= 3) {
			$('#4 input[type=checkbox]:not(:checked)').attr('disabled', "disabled");
		} else {
			$('#4 input[type=checkbox]:disabled').removeAttr('disabled');
		}
	});
	$('#5 input[type=checkbox]').change(function () {
		if ($('#5 input[type=checkbox]:checked').length >= 3) {
			$('#5 input[type=checkbox]:not(:checked)').attr('disabled', "disabled");
		} else {
			$('#5 input[type=checkbox]:disabled').removeAttr('disabled');
		}
	});
});
