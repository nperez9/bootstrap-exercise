function dibujarPeliculas(peliculas) {
  let resultadosHtml = '';
  peliculas.forEach(element => {
    resultadosHtml += `
      <article class="item-pelicula"> 
        <img src="${element.cover}" alt="${element.title}" width="250" />
        <span> ${element.title} </span>
        <span> ${element.score} </span>
      </article>    `
  });

  document.getElementById('resultados').innerHTML = resultadosHtml;
}

algo();
dibujarPeliculas(datos);

function buscarPelicula() {
  const titulo = document.getElementById('buscar').value.toLowerCase();
  const peliculasFiltradas = [];

  for (let i = 0; i < datos.length; i++) {
    if (datos[i].title.toLowerCase().includes(titulo)) {
      peliculasFiltradas.push(datos[i]);
    }
  }

  const peliculasConFilter = datos.filter(function (elements) {
    return elements.title.toLowerCase().includes(titulo);
  });

  console.log(peliculasConFilter, peliculasFiltradas)

  dibujarPeliculas(peliculasFiltradas);
}



function ordenarPelicula() {
  const orden = document.getElementById('orden').value;
  let arrayOrdenados;

  if (orden ===  'titulo') {
    arrayOrdenados = datos.sort(function (peli1, peli2) {
      return peli1.title - peli2.title;
    });
  } else if (orden === 'puntuacion-asc') {
    arrayOrdenados = datos.sort(function (peli1, peli2) {
      return  peli2.score - peli1.score;
    });
  } 
  else if (orden === 'puntuacion-desc') {
    arrayOrdenados = datos.sort(function (peli1, peli2) {
      return  peli1.score - peli2.score;
    });
  }

  dibujarPeliculas(arrayOrdenados);
}