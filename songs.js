var songs = [];
var songsPlaylist = "";


songs[songs.length] = "Stairway to Heaven by - Led Zeppelin on the album Stairway to Heaven";
songs[songs.length] = "Legs  by - Z ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song  by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall by-Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle  by-Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c  by - Alanis Morisette on the album Jagged Little Pill";
songs[songs.length] = "Helter Skelter by - the Beatles on the album The White Album";

var songsOfMusicHistory = document.getElementById("innerHTMLtxt");
for (i = 0; i < songs.length; i++){
	songsPlaylist += songs[i];
} 
// console.log(songsOfMusicHistory);
console.log(songsPlaylist);

songsOfMusicHistory.innerHTML = songsPlaylist;