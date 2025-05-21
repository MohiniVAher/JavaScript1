//Pgm 9
//Merge Two Playlist

const music = [
    {genre:"Pop", songs: ["Blinding Lights", "Shape of You"]},
    {genre:"Rock", songs: ["Bohemian Rhapsody", "Hotel California"]}
]

function mergePlaylist(data)
{
    list =[]
    for(let i =0; i < data.length; i++)
    {
        list[i] = data[i].songs;
    }
    finalList = list[0].concat(list[1]);
    console.log(finalList);
}

mergePlaylist(music);