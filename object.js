function Track(name, duration, img, author, link, func) {
    this.name = name;
    this.duration = duration;
    this.img = img;
    this.author = author;
    this.link = link;
    this.createHtml = func;
}

function CreateHtml() {
    var imgLink = document.createElement('img');
    imgLink.setAttribute("src", this.img);

    var link = document.createElement('a');
    link.setAttribute("href", "");
    link.setAttribute("class", "picture")
    link.prepend(imgLink);

    var title = document.createElement('div');
    title.setAttribute("class", "title");
    title.innerHTML = this.name;

    var subtitle = document.createElement('div');
    subtitle.setAttribute("class", "subtitle");
    subtitle.innerHTML = this.author;

    var track = document.createElement('div');
    track.setAttribute("class", "link");
    track.append(link);
    track.append(title);
    track.append(subtitle);

    return track;
}

var track1 = new Track("bounce ch", 200, "https://i1.sndcdn.com/artworks-000421792218-k773jz-t500x500.jpg", 
"NOihkjhkA", "", CreateHtml);
var track2 = new Track("When We Dip", 130, "https://i1.sndcdn.com/artworks-yvms3izMfz5fbHNr-nLFJMA-t500x500.jpg",
"Автор", "", CreateHtml);

// track1.createHtml = function() {
//     var imgLink = document.createElement('img');
//     imgLink.setAttribute("src", this.img);

//     var link = document.createElement('a');
//     link.setAttribute("href", "");
//     link.setAttribute("class", "picture")
//     link.prepend(imgLink);

//     var title = document.createElement('div');
//     title.setAttribute("class", "title");
//     title.innerHTML = this.name;

//     var subtitle = document.createElement('div');
//     subtitle.setAttribute("class", "subtitle");
//     subtitle.innerHTML = this.author;

//     var track = document.createElement('div');
//     track.setAttribute("class", "link");
//     track.append(link);
//     track.append(title);
//     track.append(subtitle);

//     return track;
// }

trackList.prepend(track1.createHtml())
trackList.prepend(track2.createHtml())
trackList.prepend(track1.createHtml())
trackList.prepend(track2.createHtml())
trackList.prepend(track2.createHtml())

