/*Pegar o elemento com a classe item;
- Ouvir o evento de click no elemento que acabamo de pegar,
quando o usuario clicar nós queremos ver um texto no console.

-Trocar o console log pelo comportamento de add a class active no momento
que sofreu o click

- pegar todos os elementos que tem a class item e que está dentro do
elemento que tem a class navigation-component.

- Variaveis com um $ no inicio significam que guardam um elemento da pag*/


const $navigationComponent = document.querySelector('.navigation-component')
const $items = document.querySelectorAll('.navigation-component .item')
let $itemActive = document.querySelector('.navigation-component .item.-active')

$navigationComponent.addEventListener('click', function(event) {
    const $origin = event.target

    if($origin.classList.contains('action')) {
        const idItem = $origin.getAttribute('href')
        const $item = $origin.parentNode

        event.preventDefault()

        $itemActive.classList.remove('-active')
        $item.classList.add('-active')
        $itemActive = $item

    }
})



// $items.forEach(function($item){
//     $item.addEventListener('click', function(event){

//         event.preventDefault(); /*Previne o carregamento da pagina*/

//         $items.forEach(function($item){
//             $item.classList.remove('-active');
//         })

//         this.classList.add('-active'); /* Adiciona a class '-active'*/
//     });
// });




