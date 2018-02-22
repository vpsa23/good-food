$(document).ready(() => {
  //buscador 
  inputSearch = $('#search');
  inputSearch.click(function() {
    let list = `
    <div class="row">
      <div class="col-sm-12" id="imagenes">
        <ul class="list-group">
          <li class="label">Busquedas Recomendadas</li>
          <li class="list-group-item">
            <img class="imgLi" src="https://b.zmtcdn.com/images/search_tokens/app_icons/category_8.png?fit=around%7C88%3A88&amp;crop=88%3A88%3B%2A%2C%2A" alt="" />
            <span>Desayuno</span>
          </li>
          <li class="list-group-item">
            <img class="imgLi" src="https://b.zmtcdn.com/images/search_tokens/app_icons/category_9.png?fit=around%7C88%3A88&amp;crop=88%3A88%3B%2A%2C%2A" alt="" />
            <span>Almuerzo</span>
          </li>
          <li class="list-group-item">
            <img class="imgLi" src="https://b.zmtcdn.com/images/search_tokens/app_icons/category_10.png?fit=around%7C88%3A88&crop=88%3A88%3B%2A%2C%2A" alt="" />
            <span>Cena</span>
          </li>
          <li class="list-group-item">
            <img class="imgLi" src="https://b.zmtcdn.com/images/search_tokens/app_icons/category_1.png?fit=around%7C88%3A88&crop=88%3A88%3B%2A%2C%2A" alt="" />
            <span>Restaurantes con Delivery</span>
          </li>
          <li class="list-group-item">
            <img class="imgLi" src="https://b.zmtcdn.com/images/search_tokens/app_icons/category_3.png?fit=around%7C88%3A88&crop=88%3A88%3B%2A%2C%2A" alt="" />
            <span>Tragos y Vida Nocturna</span>
          </li>
          <li class="list-group-item">
            <img class="imgLi" src="https://b.zmtcdn.com/images/search_tokens/app_icons/category_5.png?fit=around%7C88%3A88&crop=88%3A88%3B%2A%2C%2A" alt="" />
            <span>Para llevar</span>
          </li>
          <li class="list-group-item">
            <img class="imgLi" src="https://b.zmtcdn.com/images/search_tokens/app_icons/category_6.png?fit=around%7C88%3A88&crop=88%3A88%3B%2A%2C%2A" alt="" />
            <span>Cafés</span>
          </li>
        </ul>
      </div>
    </div>
    `
    $('#containerUL').append(list);
  })


//traemos 6 categorias de la api
  $.ajax({
    type: "GET", //it's a GET request API
    headers: {
      'X-Zomato-API-Key': '8149c00360df56f4399c2cf208281f7a' //'5e26f0851bb93b15813c1f2b7af9f77a'
    },
    url: 'https://developers.zomato.com/api/v2.1/categories',
    dataType: 'json',
    processData: true,
    success: (categories) => {
      console.log(categories);
      for (let i in categories) {
        let categorias = `
          <div class="row" id="row1">
            <div class="col-4 col-sm-1 col-md-4 col-lg-4">
              <h4>${categories[i][0].categories.name}</h4>
              <img id="img1" src="assets/img/delivery.jpg" alt="" />
            </div>
            <div class="col-4 col-sm-1 col-md-4 col-lg-4">
              <h4>${categories[i][5].categories.name}</h4>
              <img id="img2" src="assets/img/café.png" alt="" />
            </div>
            <div class="col-4 col-sm-1 col-md-4 col-lg-4">
              <h4>${categories[i][7].categories.name}</h4>
              <img id="img3" src="assets/img/breakfast.png" alt="" />
            </div>
          </div>
          <div class="row" id="row2">
            <div class="col-4 col-sm-1 col-md-4 col-lg-4">
              <h4>${categories[i][8].categories.name}</h4>
              <img id="img4" src="assets/img/lunch.png" alt="" />
            </div>
            <div class="col-4 col-sm-1 col-md-4 col-lg-4">
              <h4>${categories[i][9].categories.name}</h4>
              <img id="img5" src="assets/img/dinner.jpg" alt="" />
            </div>
            <div class="col-4 col-sm-1 col-md-4 col-lg-4">
              <h4>${categories[i][10].categories.name}</h4>
              <img id="img6" src="assets/img/pubs.png" alt="" />
            </div>
          </div>
        `;
        $('#containerCategories').append(categorias);
        }
        /*evento click img delivery*/
        $('#img2').click(function(){
          
        })
      }
  });


//traemos los tipos de comida
  $.ajax({
    type: "GET", //it's a GET request API
    headers: {
      'X-Zomato-API-Key': '8149c00360df56f4399c2cf208281f7a' //'5e26f0851bb93b15813c1f2b7af9f77a'
    },
    url: 'https://developers.zomato.com/api/v2.1/cuisines?city_id=280&lat=-36.85235938460808&lon=174.76295471191406=${data}',
    dataType: 'json',
    processData: true,
    success: (cuisines) => {
      console.log(cuisines);
      for (let i in cuisines) {
        //let italian = cuisines[i][67].cuisine.cuisine_name;
        //console.log(italian);
//categories[i][8].categories.name
        
        let comidas = `
          <div class="row">
            <div class="col-sm-3 col-md-3 col-lg-3">
              <h4>${cuisines[i][2].cuisine.cuisine_name}</h4>
              <img src="assets/img/american.jpg" alt="" />
            </div>
            <div class="col-sm-3 col-md-3 col-lg-3">
              <h4>${cuisines[i][4].cuisine.cuisine_name}</h4>
              <img src="assets/img/argentina.jpg" alt="" />
            </div>
            <div class="col-sm-3 col-md-3 col-lg-3">
              <h4>${cuisines[i][6].cuisine.cuisine_name}</h4>
              <img src="assets/img/delivery.jpg" alt="" />
            </div>
            <div class="col-sm-3 col-md-3 col-lg-3">
              <h4>${cuisines[i][9].cuisine.cuisine_name}</h4>
              <img src="assets/img/delivery.jpg" alt="" />
            </div>
          </div>
          <div class="row">
            <div class="col-sm-3 col-md-3 col-lg-3">
              <h4>${cuisines[i][12].cuisine.cuisine_name}</h4>
              <img src="assets/img/delivery.jpg" alt="" />
            </div>
            <div class="col-sm-3 col-md-3 col-lg-3">
              <h4>${cuisines[i][16].cuisine.cuisine_name}</h4>
              <img src="assets/img/delivery.jpg" alt="" />
            </div>
            <div class="col-sm-3 col-md-3 col-lg-3">
              <h4>${cuisines[i][67].cuisine.cuisine_name}</h4>
              <img src="assets/img/delivery.jpg" alt="" />
            </div>
            <div class="col-sm-3 col-md-3 col-lg-3">
              <h4>${cuisines[i][15].cuisine.cuisine_name}</h4>
              <img src="assets/img/delivery.jpg" alt="" />
            </div>
          </div>
          <div class="row">
            <div class="col-sm-3 col-md-3 col-lg-3">
              <h4>${cuisines[i][19].cuisine.cuisine_name}</h4>
              <img src="assets/img/delivery.jpg" alt="" />
            </div>
            <div class="col-sm-3 col-md-3 col-lg-3">
              <h4>${cuisines[i][21].cuisine.cuisine_name}</h4>
              <img src="assets/img/delivery.jpg" alt="" />
            </div>
            <div class="col-sm-3 col-md-3 col-lg-3">
              <h4>${cuisines[i][29].cuisine.cuisine_name}</h4>
              <img src="assets/img/delivery.jpg" alt="" />
            </div>
            <div class="col-sm-3 col-md-3 col-lg-3">
              <h4>${cuisines[i][31].cuisine.cuisine_name}</h4>
              <img src="assets/img/delivery.jpg" alt="" />
            </div>
          </div>
          <div class="row">
            <div class="col-sm-3 col-md-3 col-lg-3">
              <h4>${cuisines[i][40].cuisine.cuisine_name}</h4>
              <img src="assets/img/delivery.jpg" alt="" />
            </div>
            <div class="col-sm-3 col-md-3 col-lg-3">
              <h4>${cuisines[i][43].cuisine.cuisine_name}</h4>
              <img src="assets/img/delivery.jpg" alt="" />
            </div>
            <div class="col-sm-3 col-md-3 col-lg-3">
              <h4>${cuisines[i][48].cuisine.cuisine_name}</h4>
              <img src="assets/img/delivery.jpg" alt="" />
            </div>
            <div class="col-sm-3 col-md-3 col-lg-3">
              <h4>${cuisines[i][61].cuisine.cuisine_name}</h4>
              <img src="assets/img/delivery.jpg" alt="" />
            </div>
          </div>
        `;
        $('#containerCuisines').append(comidas);
      }
    }
  });





//trae un restaurant en particular
$.ajax({
    type: "GET", //it's a GET request API
    headers: {
      'X-Zomato-API-Key': '8149c00360df56f4399c2cf208281f7a' //'5e26f0851bb93b15813c1f2b7af9f77a'
    },
    url: 'https://developers.zomato.com/api/v2.1/restaurant?res_id=${data}',
    dataType: 'json',
    data: {
      res_id: '16774318',
      //res_id: '16782899',
    },
    processData: true,
    success: (data) => {
      console.log(data);
    }
  });


//se supone que arroja los restaurant de comida italiana
  $.ajax({
    type: "GET", //it's a GET request API
    headers: {
      'X-Zomato-API-Key': '8149c00360df56f4399c2cf208281f7a' //'5e26f0851bb93b15813c1f2b7af9f77a'
    },
    url: 'https://developers.zomato.com/api/v2.1/search?entity_id=94741&entity_type=zone&cuisines=55=${data}',
    dataType: 'json',
    data: {
      res_id: '16793301',
      //res_id: '16788789',
      //res_id: '16793056',
      //res_id: '16781429',
    },
    processData: true,
    success: (data) => {
      console.log(data);
    }
  });


//deberia arrojar cafe
  $.ajax({
    type: "GET", //it's a GET request API
    headers: {
      'X-Zomato-API-Key': '8149c00360df56f4399c2cf208281f7a' //'5e26f0851bb93b15813c1f2b7af9f77a'
    },
    url: 'https://developers.zomato.com/api/v2.1/search?entity_id=280&entity_type=city&collection_id=1=${data}',
    dataType: 'json',
    data: {
      res_id: '16786233',
      //res_id: '16788789',
      //res_id: '16793056',
      //res_id: '16781429',
    },
    processData: true,
    success: (data) => {
      console.log(data);
    }
  });

});

