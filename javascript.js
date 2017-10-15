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
		$('#music').attr('src','music/'+ $('#input').val().split('\\').pop());
		songn = new Song ($('#songName').val(),'music/'+ $('#input').val().split('\\').pop(),$('#songArtist').val(),'img/cover.png');
		playlist.push(songn);
		$('span').html($('#songName').val() + " by " + $('#songArtist').val());
		$('#cover').attr('src', 'img/cover.png');
		$('#music')[0].play();
		// append to the DOM
		var d = playlist.length - 1;
		$('#playlist').append("<button type='button' alt='" + d + "' class='song'>" + $('#songName').val() + "</button>");
		songClick();
		linkList.push(songn.link);
	},
	'load':function(n){
		$('#music').attr('src',playlist[n].link);
		$('#music')[0].play();
		$('span').html(playlist[n].name + " by " + playlist[n].artist); 
		$('#cover').attr('src', playlist[n].cover);
	},
	'next':function(){// ATTENTION

		var i = $('#music').attr('src');
		var p = linkList.indexOf(i); 
		if (p < linkList.length - 1) {
			$('#music').attr('src',playlist[(p+1)].link);
			$('#music')[0].play();
			$('span').html(playlist[p+1].name + " by " + playlist[p+1].artist); 
			$('#cover').attr('src', playlist[p+1].cover);}
		else {
			$('#music').attr('src',playlist[0].link);
			$('#music')[0].play()
			$('span').html(playlist[0].name + " by " + playlist[0].artist); 
			$('#cover').attr('src', playlist[0].cover);;
		}
	}}

function Song (name, link, artist, cover){
	this.name = name;
	this.link = link;
	this.artist = artist;
	this.cover = cover;
}

song1 = new Song ("Can't Take My Eyes Off You", 'http://eatandsleep.net/billboard/1967/1967-12.mp3', 'Frankie Valli', 'img/cant.jpg')
song2 = new Song ('Catgroove', 'http://czechmyjugs.com/dannyboy/19%20Catgroove.mp3', 'Parov Stelar', 'img/cat.jpeg')
song3 = new Song ('Hey Jude', 'http://mp3-128.cdn107.com/music/01/12/51/0112517108.mp3','Beatles', 'img/jude.jpg')
song4 = new Song ("I'm Yours", 'http://www.flooco.net/public/music_playlist_song/1000000/5000/4895/3900.mp3','Jason Mraz','img/yours.jpeg')

var playlist = [song1, song2, song3, song4];

var linkList = [];
$.each(playlist, function (index, value) {
	linkList.push(value.link);
});


$('#music').attr('src',playlist[0].link);



var songClick = function(){
	$('.song').click(function(){
	var n = $(this).attr('alt');
	jukebox.load(n);
})
}

songClick();


$('#play').click(function(){
	jukebox.play();
})

$('#pause').click(function(){
	jukebox.pause();
})

$('#stop').click(function(){
	jukebox.stop();
})

$('#submit').click(function(){// ATTENTION
	jukebox.upload();
})

$('#next').click(function(){
	jukebox.next();
})
$('#shuffle').click(function(){
	jukebox.load(Math.floor(Math.random() * playlist.length));
})

})