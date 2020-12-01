function criaCard(data){

    data.forEach((data) => {
        //console.log(data)
        //console.log(data.img1)
        
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
        textCardBody.setAttribute('data-target', `#jogo${data.id}`);
        textCardBody.innerText = 'Saiba mais sobre ' + data.titulo;


        textCard.appendChild(textCardBody);

        card.appendChild(imgCard);
        card.appendChild(textCard);

        cardJustify.appendChild(card);
        rowCard.appendChild(cardJustify);
        
    })

    criaModal(data)

}

function criaModal (data){

    data.forEach((data) => {
        let divModal = document.createElement('div')
        divModal.setAttribute('id', `jogo${data.id}`)
        divModal.setAttribute('class', 'modal fade')
        
        let divModalDialog = document.createElement('div')
        divModalDialog.setAttribute('class', 'modal-dialog modal-dialog-centered modal-xl')

        let divModalContent = document.createElement('div')
        divModalContent.setAttribute('class', 'modal-content')

        let divModalHeader = document.createElement('div')
        divModalHeader.setAttribute('class', 'modal-header')

        let modalTitulo = document.createElement('h2')
        modalTitulo.setAttribute('class', 'modal-title')
        modalTitulo.innerText = data.titulo

        let fechaModal = document.createElement('button')
        fechaModal.setAttribute('class', 'close')
        fechaModal.setAttribute('data-dismiss', 'modal')

        let spanModal = document.createElement('span')
        spanModal.innerHTML = '&times;'


        fechaModal.appendChild(spanModal)

        divModalHeader.appendChild(modalTitulo)
        divModalHeader.appendChild(fechaModal)

        divModalContent.appendChild(divModalHeader)

        divModalDialog.appendChild(divModalContent)

        divModal.appendChild(divModalDialog)

        document.getElementById('body').appendChild(divModal)
    })
    
}
