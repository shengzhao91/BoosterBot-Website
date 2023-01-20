;(function(){
	// Menu settings
	$('#menuToggle, .menu-close').on('click', function(){
		$('#menuToggle').toggleClass('active');
		$('body').toggleClass('body-push-toleft');
		$('#theMenu').toggleClass('menu-open');
	});
})(jQuery)

$( document ).ready(function() {
	$('#watchVideoBtn').click(function(){
		console.log('Playing Intro Video');
		window.introvideoplayer.playVideo();
	});

	$('#IntroVideoModal').on('hidden.bs.modal', function () {
	    introvideoplayer.stopVideo();
	})
});

var introvideoplayer;
function onYouTubeIframeAPIReady() {
	console.log( "iFrame ready!" );
	introvideoplayer = new YT.Player('introvideo', {
		height: '487',
		width: '800',
		videoId: 'rwIMUJ7QLfw',
		playerVars: { 
			'autoplay': 0, // auto start
			'autohide': 1, // auto hide control after play
			'rel': 0, // no related video
			'modestbranding' : 1, // hides YouTube icon
			'controls': 0
			 },
		events: {
			// 'onReady': onPlayerReady,
			// 'onStateChange': onPlayerStateChange
		}
	});
}
