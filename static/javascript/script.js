  $(document).ready(function(){
	//navbar stick to top
	$(window).bind('scroll', function() {
		var windowPos = $(window).scrollTop();
		var homePos = $("#hero-container").outerHeight(true) + $("#navbar").outerHeight(true);
		var boardPos = homePos + $("#home").outerHeight(true) + $("#welcome-header").outerHeight(true);
		var eventsPos = boardPos + $("#board").outerHeight(true);
		var connectPos = eventsPos + $("#events").outerHeight(true);
		

		if (windowPos > ($('#navbar').outerHeight(true) + $('#hero').outerHeight(true)) + 4) {
			$('#navbar').addClass('fixed');
			$('#content').css('padding-top', '80px');
		}
		else {
			$('#navbar').removeClass('fixed');
			$('#content').css('padding-top', '0px');
		}

		if (windowPos == 0 || windowPos < homePos){
			$(".highlight").removeClass("highlight");
		} else if (windowPos >= homePos && windowPos < boardPos) {
			$(".highlight").removeClass("highlight");
			$("#home-link").addClass("highlight");
		} else if (windowPos >= boardPos && windowPos < eventsPos) {
			$(".highlight").removeClass("highlight");
			$("#board-link").addClass("highlight");
		} else if (windowPos >= eventsPos && windowPos < connectPos) {
			$(".highlight").removeClass("highlight");
			$("#events-link").addClass("highlight");
		}
		if (windowPos >= connectPos || $(window).scrollTop() + $(window).height() == $(document).height()) {
			$(".highlight").removeClass("highlight");
			$("#connect-link").addClass("highlight");
		}
	});
	$('.bxslider').bxSlider({
		adaptiveHeight: true,
		mode: 'fade',
		captions: true
	});

	function scrollToAnchor(aid){
		console.log(aid);
		var aTag = $("a[name='"+ aid +"']");
		$('html,body').animate({scrollTop: aTag.offset().top},'slow');
	}
	//navigation
	$(".navlink").click(function(){
		scrollToAnchor($(this).text().toLowerCase());

	});

	$("#logo").click(function(){
		$('html,body').animate({scrollTop: 0},'slow');
	});

	//add to mailing list
	$('#mlist').click(function(){
		$.ajax({
			url: '/mlist',
			type: 'POST',
			data: { name: $('#mlist-name').val(), email: $('#mlist-email').val() },
			success: function(response) {
				if (response == "success") {
					$("#mlist-name").val('');
					$("#mlist-email").val('');
					alert("We have added you to our mailing list.");
				} else {
					alert("Oops, an error has occurred. Please try again later.");
				}

			}
		});

	});



	//profile qtip
	$('.profile').each(function() { // Grab all elements with a title attribute,and set "this"
		position = $(this).attr('id')
		if (position == 'president1') {
			$(this).qtip({ 
				content: { 
					title: '<h2>Kevin Nguyen</h2>',
					text: buildprofile('/static/img/poppics/kevin.jpg', 'Hello friends! <br><br> I’m Kevin (P.), ES ‘16, and I hail from the wild realm of Ohio, from a suburb devoid of much cultural diversity. When I’m not doing Asian things, you can find me playing in DPops and SYO, raising roundworms at the School of Medicine, crying over Kdramas, or getting fat from baked goods and ice cream. I also go to school.' + 
						'<br><br>I got involved with ViSA last year to make up for this lack of culture in my life, and to obey my mother by making lots of “nice Vietnamese friends”. After a term as social chair, I now humbly serve as co-president of the most beautiful and talented cultural group on campus. I hope you’ll join me and the rest of ViSA in having a fun and delicious year!' +
						'<br><br>See you at our next event (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧'
						+'<hr>Email me at <a href="mailto:kevin.nguyen@yale.edu">kevin.nguyen@yale.edu</a> '),
					button: true
				},
				style: { classes: 'qtip-rounded qtip-shadow qtip-bootstrap tooltip' },

				show: {
					event: 'click',
					solo:true,
effect: function(offset) {
            $(this).fadeIn(300); // "this" refers to the tooltip
        }
    },
    position: {
			        my: 'top left',  // Position my top left...
			        at: 'bottom right', // at the bottom right of...
			        target: $(this) // my target,
			        
			    },
			    hide: {
			    	event: 'click'
			    }
			});
} else if (position == 'president2') {
	$(this).qtip({ 
		content: { 
			title: '<h2>Jenny Nguyen</h2>',
			text: buildprofile('/static/img/poppics/jenny.png', 'Hi there!\
				<br><br>My name is Jenny, and I am a proud member of the Jonathan Edwards class of 2016. Hailing from Canada (but living in NYC), I enjoy watching hockey,	 building snowmen, being enthused about everything, shopping, playing musical instruments, singing, dancing, frolicking about,	 and exploring new places. As the first half of Team JK, I am excited to push ViSA to greater heights this year and continue the traditions upheld by our predecessors!\
				<br><br>Interested in public health, chemistry, French, and creative writing, I aspire to channel these passions into a future career as a doctor who might make educational scientific/health-related music videos to pass some knowledge onto my patients. I love meeting and welcoming new people, especially freshmen, so do not hesitate to reach out!'
				+'<hr>Email me at <a href="mailto:jenny.nguyen@yale.edu">jenny.nguyen@yale.edu</a> '),
			button: true
		},
		style: { classes: 'qtip-rounded qtip-shadow qtip-bootstrap tooltip' },
		show: {
			event: 'click',
			solo:true,
effect: function(offset) {
            $(this).fadeIn(300); // "this" refers to the tooltip
        }
		},
		position: {
			        my: 'top left',  // Position my top left...
			        at: 'bottom left', // at the bottom right of...
			        target: $(this) // my target,

			    },
			    hide: {
			    	event: 'click'
			    }
			});
} else if (position == 'political1') {
	$(this).qtip({ 
		content: { 
			title: '<h2>Mark Pham</h2>',
			text: buildprofile('/static/img/poppics/mark.jpg', 'Hi guys! <br><br>' + 
				'I hail from the beautiful suburb of Springfield, Virginia, where I moved to from Saigon five years ago.  A poli sci major, I love anything  diplomacy, in theory as well as practice.  Eventually, I want to work for the State Department and serve as an IR professor somewhere.' + 
				'<br><br>In my free time, if there is ever any, I enjoy hanging out with  friends and playing sports.  Most recently, I\'ve rediscovered my passion for soccer. I\'m terrible at it, but haven\'t given up.  As Vietnamese like to say, "Đá hay không bằng hay đá" (playing soccer often is better than just being good at it).  So hopefully, one of these days my wish to persist will reward me with a goal....or at least prevent me from scoring one in the wrong end :D'
				+'<hr>Email me at <a href="mailto:mark.pham@yale.edu">mark.pham@yale.edu</a> '),
			button: true
		},
		style: { classes: 'qtip-rounded qtip-shadow qtip-bootstrap tooltip' },
		show: {
			event: 'click',
			solo:true,
effect: function(offset) {
            $(this).fadeIn(300); // "this" refers to the tooltip
        }
		},
		position: {
			        my: 'top right',  // Position my top left...
			        at: 'bottom right', // at the bottom right of...
			        target: $(this) // my target
			    },
			    hide: {
			    	event: 'click'
			    }

			});
} else if (position == 'political2') {
	$(this).qtip({ 
		content: { 
			title: '<h2>Johnny Xu</h2>',
			text: buildprofile('/static/img/poppics/johnny.jpg', 'Chào bạn!' + 
				'<br><br>You can call me Johnny. I spent 52% of my life in Dalian, China (complicated) where I was born, 20% in Canada (freedom), 18% in Seattle (most livable city), and 10% in New Orleans (warm, crawfish).'+
				'<br><br>I\'m currently undecided about my major, but I enjoy learning economics and other social sciences very much. I enjoy playing basketball and making music. When the new series come out please watch it at "http://www.fox.com/24-live-another-day/" because it\'s my favorite show other than VISA\'s annual cultural show!' 
				+'<hr>Let\'s chill at <a href="mailto:zhaoning.xu@yale.edu">zhaoning.xu@yale.edu</a> '),
			button: true
		},
		style: { classes: 'qtip-rounded qtip-shadow qtip-bootstrap tooltip' },
		show: {
			event: 'click',
			solo:true,
effect: function(offset) {
            $(this).fadeIn(300); // "this" refers to the tooltip
        }
		},
		position: {
			        my: 'top right',  // Position my top left...
			        at: 'bottom left', // at the bottom right of...
			        target: $(this) // my target
			    },
			    hide: {
			    	event: 'click'
			    }
			});
} else if (position == 'social1') {
	$(this).qtip({ 
		content: { 
			title: '<h2>Minh Tri Pham</h2>',
			text: buildprofile('/static/img/poppics/minh.jpg', 'Yo! <br><br> I’m Minh and I come from the Czech Republic. My parents are Vietnamese, but I went to a German school in Prague. I am a programmer and designer and love working on useless (but super cool) projects. When I grow up, I want to become a tech entrepreneur, but right now I like watching Bayern Munich, learning new languages, drinking Pilsner Urquell, playing billiards, and betting on sports.'
				+'<hr>Email me at <a href="mailto:minhtri.pham@yale.edu">minhtri.pham@yale.edu</a> '),
			button: true
		},
		style: { classes: 'qtip-rounded qtip-shadow qtip-bootstrap tooltip' },
		show: {
			event: 'click',
			solo:true,
effect: function(offset) {
            $(this).fadeIn(300); // "this" refers to the tooltip
        }
		},
		position: {
			        my: 'top left',  // Position my top left...
			        at: 'bottom right', // at the bottom right of...
			        target: $(this) // my target
			    },
			    hide: {
			    	event: 'click'
			    }
			});
} else if (position == 'social3') {
	$(this).qtip({ 
		content: { 
			title: '<h2>Jason Liu</h2>',
			text: buildprofile('/static/img/poppics/jason.jpg', 
				'Hi guys,<br><br> \
				 I’m going to be one of the social chairs for ViSA this year. I come from Pearland, Texas. I like to take pictures of things, so don’t be alarmed if you catch me snapping away at you!\
				  New kinds of food are always amazing and I also love watching intense movies.\
				   Buzzfeed takes up 23.48% of my life. I’m excited for a great year full of FUN and CRAZY and CULTURAL activities!\
				    <br><br>Shoot me an email if you want to chat or hang!'
				+'<hr>Email me at <a href="mailto:jason.j.liu@yale.edu">jason.j.liu@yale.edu</a> '),
			button: true
		},
		style: { classes: 'qtip-rounded qtip-shadow qtip-bootstrap tooltip' },
		show: {
			event: 'click',
			solo:true,
effect: function(offset) {
            $(this).fadeIn(300); // "this" refers to the tooltip
        }
		},
		position: {
			        my: 'top left',  // Position my top left...
			        at: 'bottom left', // at the bottom right of...
			        target: $(this) // my target
			    },
			    hide: {
			    	event: 'click'
			    }
			});
} else if (position == 'social2') {
	$(this).qtip({ 
		content: { 
			title: '<h2>Kevin A. Nguyen</h2>',
			text: buildprofile('/static/img/poppics/kevina.jpg', 'Hey, <br><br>\
				I am a freshman in Branford College and am prospectively majoring in Molecular Biophysics and Biochemistry. A native of Plano, Texas, I am very much involved in research at Yale. Before working at the medical school, I used to intern at the National Cancer Institute. You can sometimes see me throwing a frisbee on old campus, sleeping in a hammock in Branford, or maybe even out partying at Toads, because I’m a totally cool social chair!'
				+'<hr>Email me at <a href="mailto:kevin.a.nguyen@yale.edu">kevin.a.nguyen@yale.edu</a> '),
			button: true
		},
		style: { classes: 'qtip-rounded qtip-shadow qtip-bootstrap tooltip' },
		show: {
			event: 'click',
			solo:true,
effect: function(offset) {
            $(this).fadeIn(300); // "this" refers to the tooltip
        }
		},
		position: {
			        my: 'top right',  // Position my top left...
			        at: 'bottom right', // at the bottom right of...
			        target: $(this) // my target
			    },
			    hide: {
			    	event: 'click'
			    }
			});
} else if (position == 'publicity') {
	$(this).qtip({ 
		content: { 
			title: '<h2>Hannah Truong</h2>',
			text: buildprofile('/static/img/poppics/hannah.jpg', 'Chào mừng bạn đến trường đại học Yale!' + 
				'<br><br>My name is Hannah, and I am a freshman in Morse College hailing from Seattle, Washington. I hope to fulfill a science degree in biochemistry at Yale and continue on to medical school, with a particular interest in the business side of healthcare. '+
				'<br><br>On campus, I am also involved in the Freshman Class Council and Morse College Council. I am a member of the Yale Cheerleading Squad (Go Bulldogs!), Kappa Kappa Gamma sorority and the Leadership Education and Development (LEAD) Program. '+
				'<br><br>In my free time, I like to dance with the Yale Phoenix Asian Dance Team and cook food for my friends in the Morse student kitchen… Pho of course!'
				+'<hr>Email me at <a href="mailto:hannah.truong@yale.edu">hannah.truong@yale.edu</a> '),
			button: true
		},
		style: { classes: 'qtip-rounded qtip-shadow qtip-bootstrap tooltip' },
		show: {
			event: 'click',
			solo:true,
effect: function(offset) {
            $(this).fadeIn(300); // "this" refers to the tooltip
        }
		},
		position: {
			        my: 'top right',  // Position my top left...
			        at: 'bottom right', // at the bottom right of...
			        target: $(this) // my target
			    },
			    hide: {
			    	event: 'click'
			    }
			});
} else if (position == 'treasurer') {
	$(this).qtip({ 
		content: { 
			title: '<h2>Gia Hoa Nguyen</h2>',
			text: buildprofile('/static/img/poppics/giahoa.png', 'Hi, everyone!<br><br> I’m Giahoa, currently the treasurer for ViSA, and part of Ezra Stiles class of 2017.\
			 Although I have only been on board for a year, it’s been a wonderful experience I will always look back to because I\'ve learned so much - not only from everyone I worked with- but truly also from the shared memories we each created as a part of this community.\
			  (Shredding chicken and cutting onions at 1 AM really builds solidarity, woo!).<br><br> Outside of ViSA, I’m also involved with Phoenix and Alive as one of my passions has always been to explore new cultures and languages because I believe these connections really allow us to understand the people around us and the world that we share.\
			   Though, in my free time, (or more realistically speaking, the “I-have-a-paper-due-next-week-but-I’m-gonna-procrastinate –anyways-stages”) l love to draw, maybe do some kirigami, and of course perfect my paper snowballs (which I am perfecting through my origami skills- or lack thereof). Anyhoo, more than anything, I love being on board because I want to give back to ViSA everything it has given me. '
				+'<hr>Email me at <a href="mailto:giahoa.nguyen@yale.edu">giahoa.nguyen@yale.edu</a> '),
			button: true
		},
		style: { classes: 'qtip-rounded qtip-shadow qtip-bootstrap tooltip' },
		show: {
			event: 'click',
			solo:true,
effect: function(offset) {
            $(this).fadeIn(300); // "this" refers to the tooltip
        }
		},
		position: {
			        my: 'bottom left',  // Position my top left...
			        at: 'top left', // at the bottom right of...
			        target: $(this) // my target
			    },
			    hide: {
			    	event: 'click'
			    }
			});
} else if (position == 'cultural') {
	$(this).qtip({ 
		content: { 
			title: '<h2>Nancy Tran</h2>',
			text: buildprofile('/static/img/poppics/nancy.jpg', 'Nancy is a junior in Trumbull College. She majors in East Asian Studies and has studied abroad in Japan in three different locations. Her interests include running, singing, travel, reading about finance and hanging out with her ViSA friends. On campus campus she is a part of the Yale Student Investment Group, and is also Treasurer for Yale\'s Japanese American Student Union. She loves to try new things. She has been apart of the African singing group Asempa!, as well as Danceworks for a semester during her sophomore year.<br><br> She loves helping out, so feel free to reach out to her if you have any questions!'
				+'<hr>Email me at <a href="mailto:nancy.tran@yale.edu">nancy.tran@yale.edu</a> '),
			button: true
		},
		style: { classes: 'qtip-rounded qtip-shadow qtip-bootstrap tooltip' },
		show: {
			event: 'click',
			solo:true,
effect: function(offset) {
            $(this).fadeIn(300); // "this" refers to the tooltip
        }
		},
		position: {
			        my: 'bottom left',  // Position my top left...
			        at: 'top left', // at the bottom right of...
			        target: $(this) // my target
			    },
			    hide: {
			    	event: 'click'
			    }
			});
} else if (position == 'historian') {
	$(this).qtip({ 
		content: { 
			title: '<h2>Tony Nguyen</h2>',
			text: buildprofile('/static/img/poppics/tony.png', 'Hello friends! <br><br> My name is Tony, and I\'m a rising junior/class of 2016 in Davenport College. I\'m from Chandler, Arizona and majoring in Ethics, Politics, and Economics.\
Besides being ViSA\'s historian, I am part of the Yale Debate Association, which competes at debate tournaments across the U.S. and internationally. I also work as a Student Tech fixing computers on campus and am a research assistant in the Political Science department. <br><br>\
In my free time, I enjoy exploring New Haven\'s restaurants and coffee shops, reading articles on The Onion, and watching movies.'
				+'<hr>Email me at <a href="mailto:tony.nguyen@yale.edu">tony.nguyen@yale.edu</a> '),
			button: true
		},
		style: { classes: 'qtip-rounded qtip-shadow qtip-bootstrap tooltip' },
		show: {
			event: 'click',
			solo:true,
effect: function(offset) {
            $(this).fadeIn(300); // "this" refers to the tooltip
        }
		},
		position: {
			        my: 'bottom right',  // Position my top left...
			        at: 'top right', // at the bottom right of...
			        target: $(this) // my target
			    },
			    hide: {
			    	event: 'click'
			    }
			});
} else if (position == 'secretary') {
	$(this).qtip({ 
		content: { 
			title: '<h2>Mimi Pham</h2>',
			text: buildprofile('/static/img/poppics/mimi.jpg', 'Mimi Pham is a freshman in Morse College. She is a prospective Economics major who hails from the wonderful land of Tampa, FL. She likes to eat and nap and shop in her free time. Whenever those things aren\'t options, she also volunteers with YHHAP or can be found fulfilling her Morse duties as a Master\'s Aide.'
				+'<hr>Email me at <a href="mailto:mimi.pham@yale.edu">mimi.pham@yale.edu</a> '),
			button: true
		},
		style: { classes: 'qtip-rounded qtip-shadow qtip-bootstrap tooltip' },
		show: {
			event: 'click',
			solo:true,
effect: function(offset) {
            $(this).fadeIn(300); // "this" refers to the tooltip
        }
		},
		position: {
			        my: 'bottom right',  // Position my top left...
			        at: 'top left', // at the bottom right of...
			        target: $(this) // my target
			    },
			    hide: {
			    	event: 'click'
			    }
			});
} 
});


  function buildprofile(src, description) {
  	var profile = $(document.createElement('div'));
  	profile.addClass('profile-tooltip');
  	profile.html('<div class="tooltip-photo"><img src="'+ src +'"></div><div class="description">' + description + '</description>');
  	return profile;

  };


});