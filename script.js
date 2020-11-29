function criaCard(data){

    data.forEach((data) => {
        console.log(data)
        console.log(data.img1)
        
        let rowCard =  document.getElementById('rowCard');

        let cardJustify = document.createElement('div');
        cardJustify.setAttribute('class', 'col d-flex justify-content-between');
        
        let card = document.createElement('div');
        card.setAttribute('class', 'card bg-secondary tamanhoCard');

        let imgCard = document.createElement('img');
        imgCard.setAttribute('class', 'card-img-top');
        imgCard.setAttribute('src', data.imgCard);

        let textCard = document.createElement('div');
        textCard.setAttribute('class', 'text-center card-body p-2');

        let textCardBody = document.createElement('a');
        textCardBody.setAttribute('class', 'btn btn-custom btn-branco btn-block');
        textCardBody.setAttribute('data-toggle', 'modal');
        textCardBody.setAttribute('data-target', '#dmc');
        textCardBody.innerText = 'Saiba mais sobre ' + data.titulo;


        textCard.appendChild(textCardBody);

        card.appendChild(imgCard);
        card.appendChild(textCard);

        cardJustify.appendChild(card);
        rowCard.appendChild(cardJustify);
        
    })

}
