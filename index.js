const vetRooms = [
    '/assets/room1.png',
    '/assets/room2.jpg'
];

function trocaImagem(newImage) {
    const element = document.getElementById('img-room');
    if (element) {
        element.src = newImage;
    }
}
//trocaImagem(vetRooms[1]);

document.addEventListener("click", getXYOnMouseClick);

function getXYOnMouseClick(e) {
    if (e.clientX >= 240 && e.clientX <= 420 && 
       e.clientY >= 60 && e.clientY <= 160){
        trocaImagem(vetRooms[1]);
        
       }
    // se precisar; console.log(`Key: ${e.key} ${e.screenX} ${e.screenY}`);
    console.log(`X: ${e.clientX}, Y: ${e.clientY}`);
}