let playlist = ["Dua lipa - Dance The Night", "The Weeknd - Blinding Lights", "Candy Shop", "In da Club"]

playlist.push("Candy Shop");
playlist.push("In da Club");
let removido = playlist.pop();

playlist.forEach((playlisty,index) => {

  console.log(`${index + 1}. ${playlist} `);
 
});