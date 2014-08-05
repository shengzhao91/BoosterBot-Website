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
	    // do something…
	    introvideoplayer.stopVideo();
	})
});

var introvideoplayer;
function onYouTubeIframeAPIReady() {
	console.log( "iFrame ready!" );
	introvideoplayer = new YT.Player('introvideo', {
		height: '487',
		width: '800',
		videoId: 'I0JuGvbfIIE',
		playerVars: { 
			'autoplay': 0, // auto start
			'autohide': 1, // auto hide control after play
			'rel': 0, // no related video
			'modestbranding' : 1, // hides YouTube icon
			 },
		events: {
			// 'onReady': onPlayerReady,
			// 'onStateChange': onPlayerStateChange
		}
	});
}

					// <iframe id="player" type="text/html" width="640" height="390"
					//   src="http://www.youtube.com/embed/RDHdkwH2jVs?enablejsapi=1&origin=localhost:3000"
					//   frameborder="0"></iframe>

function onPlayerReady(event) {
	event.target.playVideo();
}

var done = false;
function onPlayerStateChange(event) {
	console.log('state changed: ');

	// if (event.data == YT.PlayerState.PLAYING && !done) {
	// 	setTimeout(stopVideo, 6000);
	// 	done = true;
	// }
}
function stopVideo() {
	introvideoplayer.stopVideo();
}