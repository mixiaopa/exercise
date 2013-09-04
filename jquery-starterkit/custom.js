$(document).ready(function() {
	$("a").click(function() {
               alert("Hello World!");
	});

	$("#orderedlist").addClass("red");

	$("#orderedlist > li").addClass("blue");

	$("#orderedlist li:last").hover(function() {
		$(this).addClass("green");
		}, function() {
			$(this).removeClass("green");
		});

	$("#orderedlist").find("li").each(function(i) {
		$(this).html( $(this).html() + " BAM! " + i);
	});

	$("#reset").click(function() {
 		$("form")[0].reset();
 		$("form")[1].css("colour", "green");
	});

//	$("#reset").click(function() {
//		$("form").each(function() {
//			this.reset();
//		});
//	});

	$("li").not(":has(ul)").css("border", "1px solid black");

    $("a[name]").css("background-color","#000");

    $("a[href*=/content/gallery]").click(function() {
        // do something with all links that point somewhere to /content/gallery
    });

    $('#faq').find('dd').hide().end().find('dt').click(function() {
        var answer = $(this).next();
        if (answer.is(':visible')) {
            answer.slideUp();
        } else {
            answer.slideDown();
        }
    });

    $("a").hover(function() {
        $(this).parents("p").addClass("highlight");
    }, function() {
        $(this).parents("p").removeClass("highlight");
    });
});
