

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
        img.src = author.picture.large;
        figCapt.innerHTML = author.name.first + ' ' + author.name.last;
        article.append(figCapt);
        article.append(img);
        miSection.append(article);
        article.setAttribute('id', author.email)
        
        article.addEventListener('click', (e)=> {
            removerElemento(author.email)
        })

    });      
    
}); 

        const aside = document.querySelector(‘aside’);
        var article = document.getElementById(email);
        aside.append(article);
            }
    
    const favorites =[node];
     favorites.push (); 


    
    //console.log("le di click", e);
            // Aqui hacen la logica
            // para desaparecerlo de la lista estandar 
            // y llevarlo a la lista de favoritos
            // Hints: var favoritos = [];
            //favoritos.push()
        
    

