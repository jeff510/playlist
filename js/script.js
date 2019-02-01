var songs = [
    "on Me",
    "Lifestyle",
    "Can't",
    "No Discussion"
];

var artists = [
    "SOB RBE",
    "SOB RBE",
    "SOB RBE",
    "SOB RBE"
];

var images = [
    "https://media.pitchfork.com/photos/5a834ab0aed392225cc0d9fb/1:1/w_320/SOBxRBE_Gangin.jpg",
    "https://media.pitchfork.com/photos/5a834ab0aed392225cc0d9fb/1:1/w_320/SOBxRBE_Gangin.jpg",
    "https://media.pitchfork.com/photos/5a834ab0aed392225cc0d9fb/1:1/w_320/SOBxRBE_Gangin.jpg",
    "https://media.pitchfork.com/photos/5a834ab0aed392225cc0d9fb/1:1/w_320/SOBxRBE_Gangin.jpg"
];

var links = [
    "https://www.youtube.com/watch?v=hrAAscPsYsI",
    "https://www.youtube.com/watch?v=KjUNuvVeP7I",
    "https://www.youtube.com/watch?v=G2NaDv015jQ",
    "https://www.youtube.com/watch?v=bS7y2lEMbJc"
];

var lengths = [
    150,
    309,
    324,
    324
];

function displaySongInfo(){
    images.forEach(function(image) {
        $("#images").append("<img src='" + image + "'>");   
    });

    songs.forEach(function(song) {
        $("#songs").append("<p>" + song + "</p>"); 
    });

    artists.forEach(function(artist) {
        $("#artists").append("<p> By: " + artist + "</p>");   
    });

    lengths.forEach(function(length) {
        $("#lengths").append("<p>" + length + "</p>"); 
    });

    links.forEach(function(link) {
        $("#links").append("<a href='" + link + "'> Listen </a>"); 
    });
}

function emptySongInfo(){
    $("#images").empty();
    $("#songs").empty();
    $("#artists").empty();
    $("#lengths").empty();
    $("#links").empty();
}

$("#add").click(function() {
    var songName = $("#song").val();
    var imageUrl = $("#image").val();
    var artistName = $("#artist").val();
    var songLength = $("#length").val();
    var link = $("#links").val();

    songs.push(songName);
    artists.push(artistName);
    images.push(imageUrl);
    lengths.push(songLength);
    links.push(link);

    emptySongInfo()
    displaySongInfo();
});

displaySongInfo();
