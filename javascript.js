$(document).ready(function(){

var playlist = []
$('#cover').click(function(){
	playlist.push('http://eatandsleep.net/billboard/1967/1967-12.mp3');
	$('#music').attr('src',playlist[0])

})

$('#play').click(function(){
	$('#music')[0].play();
})

$('#pause').click(function(){
	$('#music')[0].pause();
})

$('#stop').click(function(){
	$('#music')[0].pause();
	$('#music')[0].currentTime=0;
})

input.onchange = function(e){
	$('#music').src = URL.createObjectURL(this.files[0]);
  	$('#music').onend = function(e) {
    URL.revokeObjectURL(this.src);
  }
  	playlist.push('http://eatandsleep.net/billboard/1967/1967-12.mp3');
}




})