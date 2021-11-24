const input = document.querySelector('input')
const TareaNueva = document.querySelector('.TareaNueva')
const ul = document.querySelector('ul')

TareaNueva.addEventListener('click', (e) =>{
    e.preventDefault()
    const li = document.createElement('li')
    li.textContent = input.value
    li.appendChild(addDelete())
    ul.appendChild(li)

    input.value = ''
})

function addDelete() {

    const deletess = document.createElement('button');
    
    deletess.className = "bts-delete"

    deletess.addEventListener("click", (e)=>{
        const deleteli = e.target.parentElement;
        ul.removeChild(deleteli)
    })
    return deletess
}