
const cards = document.querySelectorAll('.arrastar')

cards.forEach(arrasta => {
    arrasta.addEventListener('dragstart', dragstart)
    arrasta.addEventListener('drag', drag)
    arrasta.addEventListener('dragend', dragend)
})

function dragstart() {
    this.classList.add('is-dragging')
}

function drag() {
    //enquanto esta segurando
}

function dragend() {
    this.classList.remove('is-dragging')

}

const soltar = document.querySelectorAll('.soltar')

soltar.forEach(solta => {
    solta.addEventListener('dragenter', dragenter)
    solta.addEventListener('dragover', dragover)
    solta.addEventListener('dragleave', dragleave)
    solta.addEventListener('drop', drop)
})

//funcao que entra na zona
function dragenter() {
    // log('DROPZONE: Enter in zone ')

}

//funcao que fica da zona
function dragover() {  
    //Salvador os dados do card na Constante cardBeingDragged
    const cardBeingDragged = document.querySelector('.is-dragging')
    //Verifica se o data-value do card é igual ao id da zona
    if (cardBeingDragged.getAttribute('data-value') == this.id) {
        this.appendChild(cardBeingDragged)
    }
}

//funcao que solta na zona
function dragleave() {

    const cardBeingDragged = document.querySelector('.is-dragging')
    //Verifica se o data-value do card é igual ao id da zona
    if (cardBeingDragged.getAttribute('data-value') == this.id) {
        //Revovendo e adicionando algumas classes para o card ficar branco e maior
        cardBeingDragged.classList.remove('col-2')
        cardBeingDragged.classList.add('bg-light')
    }
}

// Enquanto esta segurando
function drop() {
    console.log('soltou');
    
    
}
