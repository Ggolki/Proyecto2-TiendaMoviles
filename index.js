const iPhones = [
  {
    id: 1,
    name: 'iPhone',
    model: ' 15 ',
    colors: ['#4c4c4e', '#526937', '#756da5'],
    stars: 5,
    reviews: 150,
    storage: 256,
    price: 899,
    percentage: 0,
    image: './Assets/Imagenes/300770_0_uw5hxv.png'
  },
  {
    id: 2,
    name: 'iPhone',
    model: ' 15 Plus ',
    colors: ['white', '#4c4c4e'],
    stars: 4.5,
    reviews: 78,
    storage: 512,
    price: 969,
    percentage: 0,
    image: './Assets/Imagenes/300780_0_puippj.png'
  },
  {
    id: 3,
    name: 'iPhone',
    model: '15 Pro',
    colors: ['#4c4c4e', 'silver', '#335b8b', '#bb983b'],
    stars: 4,
    reviews: 67,
    storage: 512,
    price: 1070,
    percentage: 0,
    image: './Assets/Imagenes/261988_tkknb4.png'
  },
  {
    id: 4,
    name: 'iPhone',
    model: '15 Pro Max',
    colors: ['#4c4c4e', 'silver', 'white'],
    stars: 5,
    reviews: 107,
    storage: 1,
    price: 1119,
    percentage: 0,
    image: './Assets/Imagenes/300819_0_imwvfj.png'
  },
  {
    id: 5,
    name: 'iPhone',
    model: '14',
    colors: ['#a7494c', '#526937', '#756da5'],
    stars: 5,
    reviews: 434,
    storage: 128,
    price: 795,
    percentage: 10,
    image: './Assets/Imagenes/red__03434.1709573263.png'
  },
  {
    id: 6,
    name: 'iPhone',
    model: '14 Plus',
    colors: ['#fae167'],
    stars: 4.5,
    reviews: 403,
    storage: 512,
    price: 899,
    percentage: 15,
    image: './Assets/Imagenes/270411_0_uvcqpt.png'
  },
  {
    id: 7,
    name: 'iPhone',
    model: '14 Pro',
    colors: ['#4c4c4e', 'silver'],
    stars: 4,
    reviews: 23,
    storage: 256,
    price: 1050,
    percentage: 3,
    image: './Assets/Imagenes/300822_0_vy3iid.png'
  },
  {
    id: 8,
    name: 'iPhone ',
    model: '14 Pro Max',
    colors: ['#706678'],
    stars: 4.5,
    reviews: 73,
    storage: 512,
    price: 1049,
    percentage: 0,
    image: './Assets/Imagenes/261979_oq7vjv.png'
  },
  {
    id: 9,
    name: 'iPhone',
    model: '13 Plus',
    colors: ['#335b8b', '#4c4c4e'],
    stars: 3.75,
    reviews: 599,
    storage: 128,
    price: 809,
    percentage: 10,
    image: './Assets/Imagenes/blue__78534.1709573263.png'
  },
  {
    id: 10,
    name: 'iPhone',
    model: '12',
    colors: ['white', '#a7494c', '#756da5'],
    stars: 5,
    reviews: 359,
    storage: 128,
    price: 550,
    percentage: 0,
    image: './Assets/Imagenes/purple__42737.1709573263.png'
  },
  {
    id: 11,
    name: 'iPhone',
    model: 'XR',
    colors: ['#fae167', '#756da5'],
    stars: 4,
    reviews: 125,
    storage: 64,
    price: 425,
    percentage: 0,
    image: './Assets/Imagenes/Yellow2__94358.1709071926.png'
  },
  {
    id: 12,
    name: 'iPhone',
    model: 'X',
    colors: ['#4c4c4e', 'white'],
    stars: 4,
    reviews: 55,
    storage: 128,
    price: 499,
    percentage: 20,
    image: './Assets/Imagenes/klipartz.com.png'
  },
  {
    id: 13,
    name: 'iPhone',
    model: '8 Plus',
    colors: ['#4c4c4e', 'white'],
    stars: 5,
    reviews: 505,
    storage: 64,
    price: 399,
    percentage: 0,
    image: './Assets/Imagenes/Black1__15527.1709071926.png'
  },
  {
    id: 14,
    name: 'iPhone',
    model: '8 Plus',
    colors: ['#a7494c'],
    stars: 5,
    reviews: 205,
    storage: 128,
    price: 420,
    percentage: 0,
    image: './Assets/Imagenes/pngwing.com.png'
  },
  {
    id: 15,
    name: 'iPhone ',
    model: '7 Plus',
    colors: ['white'],
    stars: 3.5,
    reviews: 130,
    storage: 128,
    price: 350,
    percentage: 22,
    image:
      './Assets/Imagenes/kisspng-apple-iphone-8-apple-iphone-7-plus-product-red-iphone-red-5b307dc34bb3e0.3652438915299045793101.png'
  },
  {
    id: 16,
    name: 'iPhone',
    model: '5s',
    colors: ['white', '#4c4c4e'],
    stars: 2.5,
    reviews: 49,
    storage: 16,
    price: 99,
    percentage: 15,
    image:
      './Assets/Imagenes/kisspng-iphone-4s-iphone-5-smartphone-ios-ipone-4-pictures-free-download-5b682330ec5f84.1689530115335514089682.png'
  }
]

const iconos = document.querySelector('.iconos')
const listicon = document.createElement('li')
listicon.className = ' cantidad '
const contador = document.createElement('h5')
contador.className = 'cesta'
contador.textContent = 0
const imagencesta = document.createElement('a')
imagencesta.href = '#'
imagencesta.innerHTML = ` <img
src="./Assets/Imagenes/carrito-de-compras.png"
alt="carrito"
/>`
iconos.appendChild(listicon)
listicon.appendChild(contador)
listicon.appendChild(imagencesta)

const principal = document.querySelector('main')

const titulo = document.createElement('h2')
titulo.textContent = 'iPhones'
principal.appendChild(titulo)

const todoslosmoviles = document.createElement('p')
todoslosmoviles.textContent = 'Todos los iPhones'
principal.appendChild(todoslosmoviles)

const Divsubmenu = document.createElement('div')
Divsubmenu.classList.add('divsubmenu')
const titulosubmenu = document.querySelector('p')
const buscadorsubmenu = document.querySelector('.buscadormovil')
principal.appendChild(Divsubmenu)
Divsubmenu.appendChild(titulosubmenu)

const productos = document.createElement('article')
productos.className = 'todosproductos'
principal.appendChild(productos)

const lista = document.createElement('ul')
lista.classList.add('productos')
productos.appendChild(lista)

function FilterPhones(phones) {
  lista.innerHTML = ''
  for (const phone of phones) {
    const item = document.createElement('li')
    item.classList.add('modelos')
    const divmoviles = document.createElement('div')
    divmoviles.className = 'modelo'
    const aname = document.createElement('a')
    const image = document.createElement('img')
    const colors = document.createElement('div')
    const stars = document.createElement('div')

    //*DESCUENTOS PRECIOS *//

    const Divpercentage = document.createElement('div')
    const prices = document.createElement('div')
    if (phone.percentage <= 0) {
      Divpercentage.classList.add('nodescuento')
      const pricesSinDescuento = document.createElement('h4')
      pricesSinDescuento.classList.add('precioFinalnoDescuento')
      pricesSinDescuento.textContent = `${phone.price}€`
      prices.appendChild(pricesSinDescuento)
    } else {
      Divpercentage.classList.add('descuento')
      const priceConDescuento =
        phone.price - (phone.price * phone.percentage) / 100
      const pricesSinDescuento = document.createElement('del')
      pricesSinDescuento.classList.add('precioAntiguo')
      pricesSinDescuento.textContent = `${phone.price}€`
      const pricesConDescuento = document.createElement('h3')
      pricesConDescuento.classList.add('precioNuevo')
      pricesConDescuento.textContent = ` ${priceConDescuento}€`
      prices.appendChild(pricesSinDescuento)
      prices.appendChild(pricesConDescuento)
    }
    //*DESCUENTOS PORCENTAJE *//
    const descuento = document.createElement('h5')
    descuento.textContent = `${phone.percentage} %`
    Divpercentage.appendChild(descuento)

    //*COLORES *//
    for (let i = 0; i < phone.colors.length; i++) {
      const color = phone.colors[i]

      const colorDiv = document.createElement('div')
      colorDiv.className = 'color'
      colorDiv.style.backgroundColor = color

      colors.appendChild(colorDiv)
    }

    //*ESTRELLAS *//
    for (let i = 1; i <= 5; i++) {
      const estrellas = document.createElement('p')
      estrellas.className = 'estrellas'
      if (i <= phone.stars) {
        estrellas.classList.add('rellena')
      }
      stars.appendChild(estrellas)
    }
    //*ESPACIO*//
    const gb = document.createElement('p')
    gb.classList.add('gb')
    if (phone.storage === 1) {
      gb.textContent = `${phone.storage}TB`
    } else {
      gb.textContent = `${phone.storage}GB`
    }

    //*REVIEWS*//
    const divreview = document.createElement('div')
    divreview.classList.add('review')
    const review = document.createElement('a')
    review.textContent = `${phone.reviews} Reviews`

    review.href = '#'
    aname.href = '#'
    aname.textContent = `${phone.name} ${phone.model}`
    image.src = phone.image

    lista.appendChild(item)
    item.appendChild(Divpercentage)
    item.appendChild(divmoviles)
    divmoviles.appendChild(aname)
    item.appendChild(image)
    item.appendChild(prices)
    item.appendChild(colors)
    item.appendChild(stars)
    item.appendChild(gb)
    item.appendChild(divreview)

    const boton = document.createElement('button')
    boton.classList.add('boton')
    boton.textContent = 'Añadir a la cesta'
    item.appendChild(boton)
    divreview.appendChild(review)
  }
}

function FilterColor() {
  const lista = document.querySelector('.productos')
  lista.innerHTML = ''
  const Divcolor = document.createElement('section')
  Divcolor.classList.add('divcolor')
  const selecColor = document.createElement('select')
  selecColor.classList.add('myselect')
  selecColor.innerHTML = `
    <option value="">COLORES</option>
    <option value="Blanco">Blanco</option>
    <option value="Rojo">Rojo</option>
    <option value="Negro">Negro</option>
    <option value="Verde">Verde</option>
    <option value="Morado">Morado</option>
    <option value="Oro">Oro</option>
    <option value="Platino">Platino</option>
    <option value="Amarillo">Amarillo</option>
  `
  function adjustSelectStyle() {
    if (window.innerWidth < 700) {
      selecColor.size = 1
    } else {
      selecColor.size = selecColor.options.length
    }
  }

  adjustSelectStyle()

  window.addEventListener('resize', adjustSelectStyle)

  FilterPhones(iPhones)

  selecColor.addEventListener('change', (e) => {
    const filtro = e.target.value
    if (filtro === 'Rojo') {
      FilterPhones(iPhones.filter((phone) => phone.colors.includes('#a7494c')))
    } else if (filtro === 'Blanco') {
      FilterPhones(iPhones.filter((phone) => phone.colors.includes('white')))
    } else if (filtro === 'Negro') {
      FilterPhones(iPhones.filter((phone) => phone.colors.includes('#4c4c4e')))
    } else if (filtro === 'Verde') {
      FilterPhones(iPhones.filter((phone) => phone.colors.includes('#526937')))
    } else if (filtro === 'Morado') {
      FilterPhones(iPhones.filter((phone) => phone.colors.includes('#756da5')))
    } else if (filtro === 'Oro') {
      FilterPhones(iPhones.filter((phone) => phone.colors.includes('#bb983b')))
    } else if (filtro === 'Platino') {
      FilterPhones(iPhones.filter((phone) => phone.colors.includes('silver')))
    } else if (filtro === 'Amarillo') {
      FilterPhones(iPhones.filter((phone) => phone.colors.includes('#fae167')))
    } else {
      FilterPhones(iPhones)
    }
  })

  for (var i = 0; i < selecColor.options.length; i++) {
    selecColor.options[i].selected = false
  }

  principal.appendChild(Divcolor)
  Divcolor.appendChild(selecColor)
}

function SubMenu(variedad) {
  const ordenar = document.createElement('label')
  ordenar.classList.add('ordenar')
  const opciones = document.createElement('select')
  opciones.innerHTML = `
    <option value=''>Selecciona Modelo</option>
    <option value='15'>iPhone 15</option>
    <option value='14'>iPhone 14</option>
    <option value='13'>iPhone 13</option>
    <option value='12'>iPhone 12</option>
    <option value='X'>iPhone X & XR</option>
    <option value='8'>iPhone 8</option>
    <option value='7'>iPhone 7</option>
    <option value='5s'>iPhone 5</option>
  `

  const buscadorunico = document.createElement('input')
  buscadorunico.type = 'number'
  buscadorunico.placeholder = '€ € €'
  buscadorunico.classList.add('seleccionmodel')
  const aceptar = document.createElement('button')
  aceptar.classList.add('aceptar')
  aceptar.textContent = 'Buscar'
  const limpiar = document.createElement('button')
  limpiar.classList.add('limpiar')
  limpiar.textContent = 'Limpiar'

  function verificarCampos() {
    if (opciones.value !== '' || buscadorunico.value !== '') {
      aceptar.disabled = false
    } else {
      aceptar.disabled = true
    }
  }

  opciones.addEventListener('change', verificarCampos)
  buscadorunico.addEventListener('input', verificarCampos)

  aceptar.addEventListener('click', buscarporprecio)
  limpiar.addEventListener('click', limpiarbuscador)

  function buscarporprecio() {
    const modeloSeleccionado = opciones.value
    const precioBuscado = parseFloat(buscadorunico.value)

    const resultados = iPhones.filter((phone) => {
      if (
        modeloSeleccionado !== '' &&
        phone.model.includes(modeloSeleccionado)
      ) {
        if (!isNaN(precioBuscado)) {
          if (phone.percentage > 0) {
            const precioBase = Math.floor(precioBuscado / 100) * 100
            return (
              parseFloat(
                phone.price - (phone.price * phone.percentage) / 100
              ) >= precioBase &&
              parseFloat(
                phone.price - (phone.price * phone.percentage) / 100
              ) <=
                precioBase + 100
            )
          } else {
            // return parseFloat(phone.price) === precioBuscado
            const precioBase = Math.floor(precioBuscado / 100) * 100
            if (
              parseFloat(phone.price) >= precioBase &&
              parseFloat(phone.price) <= precioBase + 100
            ) {
              return true
            } else {
              return false
            }
          }
        } else {
          return true
        }
      } else if (modeloSeleccionado === '' && !isNaN(precioBuscado)) {
        if (phone.percentage > 0) {
          const precioBase = Math.floor(precioBuscado / 100) * 100
          return (
            parseFloat(phone.price - (phone.price * phone.percentage) / 100) >=
              precioBase &&
            parseFloat(phone.price - (phone.price * phone.percentage) / 100) <=
              precioBase + 100
          )
        } else {
          const precioBase = Math.floor(precioBuscado / 100) * 100
          if (
            parseFloat(phone.price) >= precioBase &&
            parseFloat(phone.price) <= precioBase + 100
          ) {
            return true
          } else {
            return false
          }
        }
      } else {
        return false
      }
    })

    lista.innerHTML = ''
    if (resultados.length === 0) {
      const error = document.querySelector('.error')
      if (!error) {
        const errorDos = document.createElement('p')
        errorDos.classList.add('error')
        errorDos.textContent =
          'No se ha encontrado ningún teléfono con este precio'
        principal.appendChild(errorDos)
      }
    } else {
      const error = document.querySelector('.error')
      if (error) {
        principal.removeChild(error)
      }
      FilterPhones(resultados)
    }
  }

  function limpiarbuscador() {
    buscadorunico.value = ''
    opciones.value = ''
    FilterPhones(iPhones)
  }

  limpiar.addEventListener('click', () => {
    buscadorunico.value = ''
    opciones.value = ''
    const error = document.querySelector('.error')
    if (error) {
      principal.removeChild(error)
    }
    FilterPhones(iPhones)
  })

  buscadorunico.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      buscarporprecio()
    }
  })

  Divsubmenu.appendChild(buscadorunico)
  Divsubmenu.appendChild(aceptar)
  Divsubmenu.appendChild(limpiar)

  Divsubmenu.appendChild(ordenar)
  ordenar.appendChild(opciones)
}

function FilterPromocion(promos) {
  const promo = document.createElement('button')
  promo.classList.add('promocion')
  promo.textContent = 'Rebajados'

  promo.addEventListener('click', (e) => {
    const descuento = e.target.value
    if (descuento === '') {
      FilterPhones(iPhones.filter((phone) => phone.percentage > 0))
    } else {
      FilterPhones(iPhones)
    }
  })

  principal.appendChild(promo)
}

function compracesta() {
  const productos = document.querySelectorAll('.todosproductos')

  productos.forEach((producto) => {
    producto.addEventListener('click', (e) => {
      if (e.target.classList.contains('boton')) {
        const contador = document.querySelector('.cesta')
        contador.textContent = parseInt(contador.textContent) + 1
      }
    })
  })
}

function Estrellas() {
  const divmen = document.createElement('section')
  divmen.classList.add('menuestrellas')

  const selectmen = document.createElement('select')
  selectmen.classList.add('myselect')
  selectmen.innerHTML = `
  <option value=''>ESTRELLAS</option>
    <option value='5 estrellas'>5 estrellas</option>
    <option value='4 estrellas'>4 estrellas</option>
    <option value='3 estrellas'>3 estrellas</option>
    <option value='2 estrellas'>2 estrellas</option>
  `
  function adjustSelectStyle() {
    if (window.innerWidth < 700) {
      selectmen.size = 1
    } else {
      selectmen.size = selectmen.options.length
    }
  }

  adjustSelectStyle()

  window.addEventListener('resize', adjustSelectStyle)

  selectmen.addEventListener('change', (e) => {
    const selectedValue = e.target.value

    if (selectedValue === '') {
      FilterPhones(iPhones)
    } else if (selectedValue === '5 estrellas') {
      FilterPhones(iPhones.filter((phone) => phone.stars >= 5))
    } else if (selectedValue === '4 estrellas') {
      FilterPhones(
        iPhones.filter((phone) => phone.stars < 5 && phone.stars > 4)
      )
    } else if (selectedValue === '3 estrellas') {
      FilterPhones(
        iPhones.filter((phone) => phone.stars < 4 && phone.stars > 3)
      )
    } else if (selectedValue === '2 estrellas') {
      FilterPhones(iPhones.filter((phone) => phone.stars <= 3))
    }
  })
  for (var i = 0; i < selectmen.options.length; i++) {
    selectmen.options[i].selected = false
  }
  divmen.appendChild(selectmen)
  principal.appendChild(divmen)
}

function Modelos() {
  const divtipos = document.createElement('section')
  divtipos.classList.add('mymenu')

  const selectipos = document.createElement('select')
  selectipos.classList.add('myselect')
  selectipos.innerHTML = `
    <option>MODELOS</option>
      <option value='15'>iPhone 15</option>
      <option value='14'>iPhone 14</option>
      <option value='13'>iPhone 13</option>
      <option value='12'>iPhone 12</option>
      <option value='X'>iPhone X & XR</option>
      <option value='8'>iPhone 8</option>
      <option value='7'>iPhone 7</option>
      <option value='5'>iPhone 5</option>
    `

  function adjustSelectStyle() {
    if (window.innerWidth < 700) {
      selectipos.size = 1
    } else {
      selectipos.size = selectipos.options.length
    }
  }

  adjustSelectStyle()

  window.addEventListener('resize', adjustSelectStyle)

  selectipos.addEventListener('change', (e) => {
    const selectedValue = e.target.value

    if (selectedValue === '') {
      FilterPhones(iPhones)
    } else if (selectedValue === '15') {
      FilterPhones(iPhones.filter((phone) => phone.model.includes('15')))
    } else if (selectedValue === '14') {
      FilterPhones(iPhones.filter((phone) => phone.model.includes('14')))
    } else if (selectedValue === '13') {
      FilterPhones(iPhones.filter((phone) => phone.model.includes('13')))
    } else if (selectedValue === '12') {
      FilterPhones(iPhones.filter((phone) => phone.model.includes('12')))
    } else if (selectedValue === 'X') {
      FilterPhones(iPhones.filter((phone) => phone.model.includes('X')))
    } else if (selectedValue === '8') {
      FilterPhones(iPhones.filter((phone) => phone.model.includes('8')))
    } else if (selectedValue === '7') {
      FilterPhones(iPhones.filter((phone) => phone.model.includes('7')))
    } else if (selectedValue === '5') {
      FilterPhones(iPhones.filter((phone) => phone.model.includes('5s')))
    }
  })

  for (var i = 0; i < selectipos.options.length; i++) {
    selectipos.options[i].selected = false
  }

  divtipos.appendChild(selectipos)
  principal.appendChild(divtipos)
}

function Precios() {
  const divprecios = document.createElement('section')
  divprecios.classList.add('preciosdiv')

  const selectprecios = document.createElement('select')
  selectprecios.classList.add('myselect')
  selectprecios.innerHTML = `
    <option >PRECIOS</option>
    <option value='mas de 1000'>1000€ > </option>
    <option value='entre 700 y 1000'>700€ - 1000€</option>
    <option value='entre 500 y 700'>500€ - 700€</option>
    <option value='menos de 500'>< 500€</option>
  `

  function adjustSelectStyle() {
    if (window.innerWidth < 700) {
      selectprecios.size = 1
    } else {
      selectprecios.size = selectprecios.options.length
    }
  }

  adjustSelectStyle()

  window.addEventListener('resize', adjustSelectStyle)

  selectprecios.addEventListener('change', (e) => {
    const selectedValue = e.target.value

    if (selectedValue === '') {
      FilterPhones(iPhones)
    } else if (selectedValue === 'mas de 1000') {
      FilterPhones(
        iPhones.filter(
          (phone) => phone.price - (phone.percentage * phone.price) / 100 > 1000
        )
      )
    } else if (selectedValue === 'entre 700 y 1000') {
      FilterPhones(
        iPhones.filter(
          (phone) =>
            phone.price - (phone.percentage * phone.price) / 100 >= 700 &&
            phone.price - (phone.percentage * phone.price) / 100 < 1000
        )
      )
    } else if (selectedValue === 'entre 500 y 700') {
      FilterPhones(
        iPhones.filter(
          (phone) =>
            phone.price - (phone.percentage * phone.price) / 100 >= 500 &&
            phone.price - (phone.percentage * phone.price) / 100 < 700
        )
      )
    } else if (selectedValue === 'menos de 500') {
      FilterPhones(
        iPhones.filter(
          (phone) => phone.price - (phone.percentage * phone.price) / 100 < 500
        )
      )
    }
  })

  for (var i = 0; i < selectprecios.options.length; i++) {
    selectprecios.options[i].selected = false
  }

  divprecios.appendChild(selectprecios)
  principal.appendChild(divprecios)
}

function Espacio() {
  const divespacios = document.createElement('section')
  divespacios.classList.add('espaciosdiv')

  const selectespacio = document.createElement('select')
  selectespacio.classList.add('myselect')
  selectespacio.innerHTML = `
    <option>CAPACIDAD</option>
    <option value='1'> 1TB </option>
    <option value='512'>512 GB</option>
    <option value='256'>256 GB</option>
    <option value='128'>128 GB</option>
    <option value='64'>64 GB</option>
    <option value='16'>16 GB</option>
  `

  function adjustSelectStyle() {
    if (window.innerWidth < 700) {
      selectespacio.size = 1
    } else {
      selectespacio.size = selectespacio.options.length
    }
  }

  adjustSelectStyle()

  window.addEventListener('resize', adjustSelectStyle)

  selectespacio.addEventListener('change', (e) => {
    const selectedValue = e.target.value

    if (selectedValue === '') {
      FilterPhones(iPhones)
    } else if (selectedValue === '1') {
      FilterPhones(iPhones.filter((phone) => phone.storage === 1))
    } else if (selectedValue === '512') {
      FilterPhones(iPhones.filter((phone) => phone.storage === 512))
    } else if (selectedValue === '256') {
      FilterPhones(iPhones.filter((phone) => phone.storage === 256))
    } else if (selectedValue === '128') {
      FilterPhones(iPhones.filter((phone) => phone.storage === 128))
    } else if (selectedValue === '64') {
      FilterPhones(iPhones.filter((phone) => phone.storage === 64))
    } else if (selectedValue === '16') {
      FilterPhones(iPhones.filter((phone) => phone.storage === 16))
    }
  })
  for (var i = 0; i < selectespacio.options.length; i++) {
    selectespacio.options[i].selected = false
  }

  divespacios.appendChild(selectespacio)
  principal.appendChild(divespacios)
}

Modelos()
Precios()
Espacio()
FilterColor()
Estrellas()
FilterPromocion()
SubMenu()
compracesta()
FilterPhones(iPhones)

const footer = document.querySelector('footer')
const copy = document.createElement('div')
copy.classList.add('copy')
copy.innerHTML = `
<ul class = "footer">
<li>© 2008-24 Phoneples S.L. Todos los derechos reservados.</li>
<li><a href = "#">Condiciones generales </a></li>
</ul>
`

footer.appendChild(copy)

const productosContainer = document.querySelector('.productos')
const mensajeError = document.querySelector('.error')

if (mensajeError) {
  mensajeError.insertAdjacentElement('afterend', footer)
} else {
  if (productosContainer) {
    productosContainer.insertAdjacentElement('afterend', footer)
  } else {
    document.body.appendChild(footer)
  }
}

const menuDesplegue = document.querySelector('.log_menu')
const opciones = document.querySelector('.categorias')

menuDesplegue.addEventListener('click', () => {
  opciones.classList.toggle('open')
})
