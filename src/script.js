//acessando json hospedado pelo ars libri
// var requestURL = "https://arslibri.com.br/api/categorias";
// var request = new XMLHttpRequest();
// request.open("GET", requestURL);
// request.responseType = "json";
// request.send();

// request.onload = function () {
//     var jsonCategorias = request.response;
//     addData(jsonCategorias);
// };

fetch("https://arslibri.com.br/api/categorias").then(response => response.json()).then(data =>{
    addDataToCard(data)
    console.log(data)
})

function addDataToCard(data){
    const divCards = document.getElementById('cards')
    alert('chegou')
    for(let i = 0; i < data.length; i++){
        alert('chegou')
        divCards.innerHTML += '<a href="" class="card" style="background-image: url(https://arslibri.com.br/'+data[i].image+');" aria-label="'+data[i].name+'"><footer class="footer-card"><p class="title">'+data[i].name+'</p></footer></a>'
    }
}




// divCards.textContent += '<a href="" class="card" style="background-image: url("https://ipinimg.com/originals/a7/49/76/a749767fd1f020936f0f0520150e5c2c.jpg");"><footer class="footer-card"><p class="title">Noite estrelada sobre o ródano</p></footer></a>'
