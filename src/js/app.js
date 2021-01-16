const row = document.getElementById("row-anuncios");
      var anuncios;

      carregadados();

      function carregadados(){

        fetch("https://dry-cliffs-94979.herokuapp.com/").
        then(response => response.json()).
        then(data => {
          anuncios = data;

          row.innerHTML = createAnuncio();
        }).
        catch(err => console.log(err));

      }

      function createAnuncio(){
        var anuncio = "";

        anuncios.forEach(function(item){
          anuncio += `
            <div class="anuncio-col">
              <img class="imganuncio" src="${item.photo}"/>
              <h2 class="description">${item.name}</h2>
              <p class="typeanuncio">${item.property_type}</p>
              <p class="price">R$ ${item.price.toFixed(2).replace(".", ",")}/noite</p>
            </div>
            `;
        })
        return anuncio;

    }