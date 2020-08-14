$(document).ready(function () {
	
	$('html').removeClass('no-js');
	
	//photo
	$('.onephoto, .onevideo').lightcase({showSequenceInfo: false, showCaption:false});
	//masked input phone number
	function phoneMask(){
		$.mask.definitions['~'] = '([01234569])';
		//$("input[name='phone']").mask('+7(~99) 999-99-99?9');
		$("input[name='phone']").mask('+7(~99) 999-99-99');
	}
	phoneMask();
	
	//form submit
	$(document).on('submit','form[data-rel=tolightcase],form[data-rel=lightcase]', function (event) {
		event.preventDefault();
		var $this = $(this);
		$this.lightcase('start', {
			href : $this.attr('action'),
			type: 'ajax',
			ajax : {
				width : 550,
				type : $this.attr('method'),
				href : $this.attr('action'),
				dataType : 'html',
				data : $this.serialize()
			},
			onFinish : {
				baz: function() {
					lightcase.resize();
					$this.get(0).reset();
				}
			}
		});
	});
	
	//form open
	$('a.buildform').lightcase({
		// Would be called immediately after lightcase is initialized
		type: 'ajax',
		forceHeight: 'true',
		maxWidth:800,
		width : 800,
		onFinish : {
			baz: function() {
			//masked input phone number
			phoneMask();
			lightcase.resize();
			}
		}
	});
	
	//outgoing links
	$('a')
		.filter('[href^="http"], [href^="//"]')
		.not('[href*="' + window.location.host + '"]')
		.attr('rel', 'noopener noreferrer')
		.attr('target', '_blank');
	
});

$(window).on('load',function(){
	$('.loading').fadeOut('100');
});
