/**
* @preserve HTML5 Shiv 3.7.3 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
*/
!function(a,b){function c(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function d(){var a=t.elements;return"string"==typeof a?a.split(" "):a}function e(a,b){var c=t.elements;"string"!=typeof c&&(c=c.join(" ")),"string"!=typeof a&&(a=a.join(" ")),t.elements=c+" "+a,j(b)}function f(a){var b=s[a[q]];return b||(b={},r++,a[q]=r,s[r]=b),b}function g(a,c,d){if(c||(c=b),l)return c.createElement(a);d||(d=f(c));var e;return e=d.cache[a]?d.cache[a].cloneNode():p.test(a)?(d.cache[a]=d.createElem(a)).cloneNode():d.createElem(a),!e.canHaveChildren||o.test(a)||e.tagUrn?e:d.frag.appendChild(e)}function h(a,c){if(a||(a=b),l)return a.createDocumentFragment();c=c||f(a);for(var e=c.frag.cloneNode(),g=0,h=d(),i=h.length;i>g;g++)e.createElement(h[g]);return e}function i(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return t.shivMethods?g(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+d().join().replace(/[\w\-:]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(t,b.frag)}function j(a){a||(a=b);var d=f(a);return!t.shivCSS||k||d.hasCSS||(d.hasCSS=!!c(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),l||i(a,d),a}var k,l,m="3.7.3",n=a.html5||{},o=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,p=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,q="_html5shiv",r=0,s={};!function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",k="hidden"in a,l=1==a.childNodes.length||function(){b.createElement("a");var a=b.createDocumentFragment();return"undefined"==typeof a.cloneNode||"undefined"==typeof a.createDocumentFragment||"undefined"==typeof a.createElement}()}catch(c){k=!0,l=!0}}();var t={elements:n.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:m,shivCSS:n.shivCSS!==!1,supportsUnknownElements:l,shivMethods:n.shivMethods!==!1,type:"default",shivDocument:j,createElement:g,createDocumentFragment:h,addElements:e};a.html5=t,j(b),"object"==typeof module&&module.exports&&(module.exports=t)}("undefined"!=typeof window?window:this,document);
/***************************************/
//DADOS DO ESTABELECIMENTO
const telefone = '00000000000'
const instagram = ''
/***************************************/
const telefoneFormatado = `(`+telefone.substring(0, 2)+`) `+telefone.substring(2, 7)+`-`+telefone.substring(7)+``
const whatsLink = 'https://wa.me/55' + telefone
const instaLink = 'https://www.instagram.com/' + instagram
//Função de rolagem menu superior
document.addEventListener('DOMContentLoaded', function(){
  const textAndImgHome = document.getElementById('textAndImgHome')
  const mainServicos = document.getElementById('mainServicos')
  const mainSobre = document.getElementById('mainSobre')
  const agendamentoAgora = document.getElementById('agendamentoAgora')

  const idHome = document.getElementById('home')
  const idServicos = document.getElementById('servicos')
  const idAgendamento = document.getElementById('agendamento')
  const idSobre = document.getElementById('sobre')
  const buttonHome = document.getElementById('buttonHome')
  const buttonHome2 = document.getElementById('buttonHome2')
  idHome.addEventListener('click', function(){
    const targetPosition = textAndImgHome.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = targetPosition - 64
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  })
  idServicos.addEventListener('click', function(){
    const targetPosition = mainServicos.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = targetPosition - 236
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  })
  buttonHome.addEventListener('click', function(){
    const targetPosition = mainServicos.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = targetPosition - 236
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  })
  idSobre.addEventListener('click', function(){
    const targetPosition = mainSobre.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = targetPosition - 0
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  })
  idAgendamento.addEventListener('click', function(){
    const targetPosition = agendamentoAgora.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = targetPosition - 96
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  })
  buttonHome2.addEventListener('click', function(){
    const targetPosition = agendamentoAgora.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = targetPosition - 96
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  })

  const idHome2 = document.getElementById('home2')
  const idServicos2 = document.getElementById('servicos2')
  const idAgendamento2 = document.getElementById('agendamento2')
  const idSobre2 = document.getElementById('sobre2')
  idHome2.addEventListener('click', function(){
    const targetPosition = textAndImgHome.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = targetPosition - 64
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  })
  idServicos2.addEventListener('click', function(){
    const targetPosition = mainServicos.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = targetPosition - 384
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  })
  idSobre2.addEventListener('click', function(){
    const targetPosition = mainSobre.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = targetPosition - 192
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  })
  idAgendamento2.addEventListener('click', function(){
    const targetPosition = agendamentoAgora.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = targetPosition - 256
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  })
})
//Menu bar superior
const botaoMenu = document.querySelector('.threeBar')
const botaoMenuX = document.querySelector('.xBar')
const dropdownMenu = document.querySelector('.menu2Header')
botaoMenu.addEventListener('click', function(){
  dropdownMenu.classList.remove('menu2HeaderNone')
  botaoMenu.classList.add('displayNone')
  botaoMenuX.classList.remove('displayNone')
})
botaoMenuX.addEventListener('click', function(){
  dropdownMenu.classList.add('menu2HeaderNone')
  botaoMenu.classList.remove('displayNone')
  botaoMenuX.classList.add('displayNone')
})
//Aparecimento texto e imagem página principal
document.addEventListener('DOMContentLoaded', function(){
  var animationStart = document.querySelectorAll('.animationStart')
  animationStart.forEach((div, time) => {
    setTimeout(() => {
      div.classList.add('visible')
    }, time * 250);
  });
})
//Serviços
let cardsServicos = [
  {
    id: 1,
    image: 'Harmonização Facial.png',
    name: 'Harmonização Facial',
    description: 'Procedimentos estéticos que visam realçar a beleza natural do rosto, promovendo equilíbrio e harmonia entre os seus diferentes elementos.',
  },
  {
    id: 2,
    image: 'Cuidados Capilares.png',
    name: 'Cuidados Capilares',
    description: 'Cabelos saudáveis, hidratados e radiantes com tratamentos personalizados.',
  },
  {
    id: 3,
    image: 'Manicure e Pedicure Unhas de Gel.png',
    name: 'Manicure e Pedicure Unhas de Gel',
    description: 'Mãos e pés impecáveis com manicure e pedicure clássicas ou modernas. Unhas de gel resistentes e duradouras com esmaltação impecável.',
  },
  {
    id: 4,
    image: 'Extensão de Cílios.png',
    name: 'Extensão de Cílios',
    description: 'Realce o charme do seu olhar com alongamento e volume dos cílios.',
  },
  {
    id: 5,
    image: 'Massagens Relaxantes e Drenagens.png',
    name: 'Massagens Relaxantes e Drenagens',
    description: 'Alívio do estresse, tensão muscular e melhora da circulação sanguínea. Drenagem linfática para desinchar o corpo e eliminar toxinas.',
  },
  {
    id: 6,
    image: 'Epilação.png',
    name: 'Epilação',
    description: 'Pele macia e livre de pelos indesejáveis com diversos métodos de epilação.',
  }
]
function servicos(){
  const cards = document.getElementById('mainServicos')

  cardsServicos.forEach(value => {
    cards.innerHTML += `
      <div id="cardServicosMain" class="cardServicosMain observerNone">
        <img class="imgCardServicosMain" src="assets/images/`+value.image+`">
        <div class="textCardServicosMain">
          <h1 class="h1ServicosMain">
            `+value.name+`
          </h1>
          <p>
            `+value.description+`
          </p>
          <a class="buttonCardServicosMain" href="">Agendar</a>
        </div>
      </div>
    `
  });
}
servicos()
//Profissionais
let cardsProfissionais = [
  {
    id: 1,
    image: 'Karla Beiral.png',
    name: 'Karla Beiral',
    description: 'Cuidados Capilares',
  },
  {
    id: 2,
    image: 'Rejane Veroneze.png',
    name: 'Rejane Veroneze',
    description: 'Manicure e Pedicure Unhas de Gel',
  },
  {
    id: 3,
    image: 'Gilza Rodrigues.png',
    name: 'Gilza Rodrigues',
    description: 'Extensão de Cílios',
  },
  {
    id: 4,
    image: 'Isa Freitas.png',
    name: 'Isa Freitas',
    description: 'Massagens Relaxantes e Drenagens',
  },
  {
    id: 5,
    image: 'Valquiria Regina.png',
    name: 'Valquiria Regina',
    description: 'Epilação',
  },
]
function profissionais(){
  const cards = document.getElementById('profissionais')

  cardsProfissionais.forEach(value => {
    cards.innerHTML += `
      <div class="cardProfissional">
        <div class="imgCardProfissional">
          <img src="assets/images/`+value.image+`" alt="">
        </div>
        <div class="textCardProfissional">
          <h1>
            `+value.name+`
          </h1>
          <i>
            `+value.description+`
          </i>
        </div>
      </div>
    `
  });
}
profissionais()
//função para shadow Header (Cabeçalho)
var shadowHeader = document.querySelector('#header')
window.addEventListener('scroll', function(){
  if (window.scrollY > 64) {
    shadowHeader.classList.add('headerShadow')
  } else {
    shadowHeader.classList.remove('headerShadow')
  }
})
//Observar menu activeLink
//Observar Home
const textHome = document.getElementById('textHome')
const menuHome = document.getElementById('home')
const menuHome2 = document.getElementById('home2')
const observerMainHome = new IntersectionObserver((value) =>{
  value.forEach(element => {
    if (element.isIntersecting) {
      menuHome.classList.add('activeLink')
      menuHome2.classList.add('activeLink')
    }else{
      menuHome.classList.remove('activeLink')
      menuHome2.classList.remove('activeLink')
    }
  });
})
observerMainHome.observe(textHome)
//Observar Cards serviços
const cardServicosMain = document.querySelectorAll('.cardServicosMain')
const menuServicos = document.getElementById('servicos')
const menuServicos2 = document.getElementById('servicos2')
const observerCardServicosMain = new IntersectionObserver((value) =>{
  value.forEach(element => {
    if (element.isIntersecting) {
      element.target.classList.remove('observerNone')
    }
  });
})
cardServicosMain.forEach(element => {
  observerCardServicosMain.observe(element)
});
//Observar serviços
const mainServicos = document.getElementById('mainServicos')
const observerServicosMain = new IntersectionObserver((value) =>{
  value.forEach(element => {
    if (element.isIntersecting) {
      menuServicos.classList.add('activeLink')
      menuServicos2.classList.add('activeLink')
    }else{
      menuServicos.classList.remove('activeLink')
      menuServicos2.classList.remove('activeLink')
    }
  });
})
observerServicosMain.observe(mainServicos)
//Observar Agendamento
const agendamentoAgora = document.getElementById('agendamentoAgora')
const idAgendamento = document.getElementById('agendamento')
const idAgendamento2 = document.getElementById('agendamento2')
const observerAgendamento = new IntersectionObserver((value) => {
  value.forEach(element => {
    if(element.isIntersecting) {
      idAgendamento.classList.add('activeLink')
      idAgendamento2.classList.add('activeLink')
      element.target.classList.remove('observerNone')
    }else{
      idAgendamento.classList.remove('activeLink')
      idAgendamento2.classList.remove('activeLink')
    }
  });
})
observerAgendamento.observe(agendamentoAgora)
//Observar Sobre
const mainSobre = document.getElementById('mainSobre')
const idSobre = document.getElementById('sobre')
const idSobre2 = document.getElementById('sobre2')
const observerSobre = new IntersectionObserver((value) => {
  value.forEach(element => {
    if(element.isIntersecting) {
      idSobre.classList.add('activeLink')
      idSobre2.classList.add('activeLink')
      element.target.classList.remove('observerNone')
    }else{
      idSobre.classList.remove('activeLink')
      idSobre2.classList.remove('activeLink')
    }
  });
})
observerSobre.observe(mainSobre)
//Adicionando links do site
document.addEventListener('DOMContentLoaded', function(){
  //WhatsApp
  var linkWhats = document.querySelectorAll('#whatsLink')
  linkWhats.forEach(element => {
    element.href = whatsLink
  });
  //Instagram
  var linkInsta = document.querySelectorAll('#instaLink')
  linkInsta.forEach(element => {
    element.href = instaLink
  });
})
//Telefone
const fone = document.getElementById('fone')
fone.textContent = telefoneFormatado