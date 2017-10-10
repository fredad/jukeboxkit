$(document).ready(function(){

var jukebox = {
	'play': function(){
		$('#music')[0].play();},
 	'pause':function(){
		$('#music')[0].pause();},
	'stop':function(){
		$('#music')[0].pause();
		$('#music')[0].currentTime=0;},
	'upload':function(){
		$('#music').attr('src',URL.createObjectURL(input.files[0]));
  		$('#music').onend = function() {
    		URL.revokeObjectURL(input.attr);
 		 }
	},

	'load':function(n){
		$('#music').attr('src',jukebox.songs[n]);
		$('#music')[0].play();
	},

	'next':function(){
		var i = $('#music').attr('src');
		var p = jukebox.songs.indexOf(i);
		if (p < jukebox.songs.length - 1) {
			$('#music').attr('src',jukebox.songs[(p+1)]);
			$('#music')[0].play();}
		else {
			$('#music').attr('src',jukebox.songs[(0)]);
			$('#music')[0].play();
		}
	},
	'songs':['http://eatandsleep.net/billboard/1967/1967-12.mp3', 
	'http://czechmyjugs.com/dannyboy/19%20Catgroove.mp3',
	'http://mp3-128.cdn107.com/music/01/12/51/0112517108.mp3',
	'http://www.flooco.net/public/music_playlist_song/1000000/5000/4895/3900.mp3'],

}

$('#music').attr('src',jukebox.songs[0]);

$('.song').click(function(){
	var n = $(this).attr("alt");
	jukebox.load(n);
})

$('#play').click(function(){
	jukebox.play();
})

$('#pause').click(function(){
	jukebox.pause();
})

$('#stop').click(function(){
	jukebox.stop();
})

input.onchange = function(){
	jukebox.upload();
}

$('#next').click(function(){
	jukebox.next();
})
$('#shuffle').click(function(){
	jukebox.load(Math.floor(Math.random() * jukebox.songs.length));
})

})