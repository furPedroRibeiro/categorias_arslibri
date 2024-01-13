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
