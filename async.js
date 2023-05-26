
// Creo cont div
const divImg = document.createElement("div");
divImg.id = "img";
document.body.appendChild(divImg);

//Funct async 
async function fetchAndDisplayImages(){
    try{
        //Fetch a la API
        const response = await fetch("https://rickandmortyapi.com/api/character")
        const data = await response.json();
        //Itero result
        for(const result of data.results){
        //Obt la URL de la img
        const imageUrl = result.image;

        //creo nuevo elem de img
        const imgElement= document.createElement("img");
        imgElement.src = imageUrl;
        
        //agregar la img al div
        divImg.appendChild(imgElement);
        }
    } catch (error){
        console.log(error, "no se puedo completar");
    }
}

// Llamar a la función asincrónica
fetchAndDisplayImages();