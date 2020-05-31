
const cards = document.querySelectorAll('.arrastar')
 
cards.forEach(arrasta  => {
    arrasta.addEventListener('dragstart', dragstart)
    arrasta.addEventListener('drag', drag)
    arrasta.addEventListener('dragend', dragend)
})

function dragstart(){
    this.classList.add('is-dragging')
    console.log(this.classList);
    console.log(this.getAttribute('data-value'));
    
    
}

function drag(){
    //enquanto esta segurando
}

function dragend(){
    this.classList.remove('is-dragging')

}

const soltar = document.querySelectorAll('.soltar')

soltar.forEach( solta => {
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
    console.log(this.id);
    
    // get dragging card
    const cardBeingDragged = document.querySelector('.is-dragging')

    // this = dropzone
    this.appendChild(cardBeingDragged)
}

//funcao que solta na zona
function dragleave() {
    //comando para remover o col-2 e colocar no padrao de tamanho da zona
    const cardBeingDragged = document.querySelector('.is-dragging')  
    cardBeingDragged.classList.remove('col-2')
    cardBeingDragged.classList.add('bg-light')

}


function drop() {
    
}
