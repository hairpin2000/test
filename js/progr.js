$(document).ready(function(){
	var s=0;
	
	$('.future-body').hide();
	$('.future-title').click(function(){
    $(this).toggleClass('opened').toggleClass('closed').next().slideToggle();
    if($(this).hasClass('opened')) {
        $(this).html('Скрыть текст');
    }
    else {
        $(this).html('Подробнее');
    }
	});
	
	$('section.kurs-name div.kurs-text').hover(
		function(){
		var $this=$(this);
		$this.stop().css('cursor','pointer'); 
		$this.stop().css('border-top','3px solid #8cc34b');
		$this.stop('h3').css('color','#8cc34b'); 
		},
		function(){
		var $this=$(this);
		$this.stop().css('cursor','default'); 
		$this.stop().css('border-bottom-style','none'); 
		$this.stop('h3').css('color','#000');
		}
		)
	$('div.kurs-check').on('click',
		function(){
		var $this=$(this);
		$this.children('label').stop().css('color','#8cc34b');
		$this.parent('section.kurs-name').stop().css('opacity','0.5');
		$this.parent('section.kurs-name').stop().delay(1000).hide('slow', function(){
			s++;
			$(this).remove(); 
		if (s==6) {
				$('article.kurs h2').css('display','none');
				$('article.kurs p.zag').css('display','none');
				$('main div.kurs-not').css('display', 'inline-block');
			}
	});	
	});	
	
});
