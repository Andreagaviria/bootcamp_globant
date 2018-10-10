

let e = fetch('https://randomuser.me/api/?results=10');
let sisas = e.then(function (resultados) {
	return resultados.json();
}).then(here => {
    const authors = here.results;
    const miSection = document.querySelector('section');
    authors.forEach((author) => {
        const figCapt = document.createElement('figcaption');
        const img = document.createElement('img');
        const article = document.createElement('article');

        const imagenUrl = author.picture.large
        const nombreAutor = author.name.first +
            ' ' + author.name.last
        img.src = imagenUrl;
        figCapt.innerHTML = nombreAutor;
        article.append(figCapt);
        article.append(img);

        // Creo un id para cada article que sea el email
        article.setAttribute('id', author.email);

        miSection.append(article);

        article.addEventListener('click', () => {
            crearFavorito(author.email, nombreAutor, imagenUrl)
            removerElemento(author.email)
        })
    });
});

// En esta funcion creo un article dentro del elemento aside
crearFavorito = (email, nombreAutor, imagenUrl) => {
    const aside = document.querySelector('aside');
    const article = document.createElement('article');
    const figCapt = document.createElement('figcaption');
    const img = document.createElement('img');

    img.src = imagenUrl;
    figCapt.innerHTML = nombreAutor;
    article.append(figCapt);
    article.append(img);
    
    aside.append(article);
}

// Elimino el article de la lista
removerElemento = (email) => {
    var article = document.getElementById(email);
    article.remove()
}


    

