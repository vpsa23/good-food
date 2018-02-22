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
      $('#img1').click(function(){
        console.log('holi')
        delivery();
      })
      $('#img2').click(function(){
        console.log('holiwi');
        coffe();
      })
      $('#img3').click(function(){
        console.log('holaa');
        breakfast();
      })
      $('#img4').click(function(){
        console.log('holiwi');
        lunch();
      })
      $('#img5').click(function(){
        console.log('holiwi');
        dinner();
      })
      $('#img6').click(function(){
        console.log('holiwi');
        pubs();
      })
    }
  });

//llamamos a la api y nos devuelve solo por categoria en este caso delivery
  function delivery() {
    $.ajax({
      type: "GET", //it's a GET request API
      headers: {
        'X-Zomato-API-Key': '8149c00360df56f4399c2cf208281f7a' //'5e26f0851bb93b15813c1f2b7af9f77a'
      },
      url: 'https://developers.zomato.com/api/v2.1/search?entity_id=94741&entity_type=zone&category=1',
      dataType: 'json',
      processData: true,
      success: (restaurants) => {
        console.log(restaurants);
        for(let i in restaurants) {
          let deli = `
            <div class="row">
              <div class="col-4 col-sm-1 col-md-4 col-lg-4">
                <h4>${restaurants.restaurants[0].restaurant.name}</h4>
                <img src="${restaurants.restaurants[0].restaurant.featured_image}" alt=""/>
                <p>Cost for two: ${restaurants.restaurants[0].restaurant.average_cost_for_two}</p>
                <p>Cuisines: ${restaurants.restaurants[0].restaurant.cuisines}</p>
                <p>Location: ${restaurants.restaurants[0].restaurant.location.address}</p>
                <p>Url: ${restaurants.restaurants[0].restaurant.url}</p>
                <p>Rating: ${restaurants.restaurants[0].restaurant.user_rating.aggregate_rating}</p>
              </div>
            </div>
            <div class="row">
              <h4>${restaurants.restaurants[1].restaurant.name}</h4>
              <img src="${restaurants.restaurants[1].restaurant.featured_image}" alt=""/>
              <p>Cost for two: ${restaurants.restaurants[1].restaurant.average_cost_for_two}</p>
              <p>Cuisines: ${restaurants.restaurants[1].restaurant.cuisines}</p>
              <p>Location: ${restaurants.restaurants[1].restaurant.location.address}</p>
              <p>Url: ${restaurants.restaurants[1].restaurant.url}</p>
              <p>Rating: ${restaurants.restaurants[1].restaurant.user_rating.aggregate_rating}</p>
            </div>
            <div class="row">
              <h4>${restaurants.restaurants[2].restaurant.name}</h4>
              <img src="${restaurants.restaurants[2].restaurant.featured_image}" alt=""/>
              <p>Cost for two: ${restaurants.restaurants[2].restaurant.average_cost_for_two}</p>
              <p>Cuisines: ${restaurants.restaurants[2].restaurant.cuisines}</p>
              <p>Location: ${restaurants.restaurants[2].restaurant.location.address}</p>
              <p>Url: ${restaurants.restaurants[2].restaurant.url}</p>
              <p>Rating: ${restaurants.restaurants[2].restaurant.user_rating.aggregate_rating}</p>
            </div>
            <div class="row">
              <h4>${restaurants.restaurants[4].restaurant.name}</h4>
              <img src="${restaurants.restaurants[4].restaurant.featured_image}" alt=""/>
              <p>Cost for two: ${restaurants.restaurants[4].restaurant.average_cost_for_two}</p>
              <p>Cuisines: ${restaurants.restaurants[4].restaurant.cuisines}</p>
              <p>Location: ${restaurants.restaurants[4].restaurant.location.address}</p>
              <p>Url: ${restaurants.restaurants[4].restaurant.url}</p>
              <p>Rating: ${restaurants.restaurants[4].restaurant.user_rating.aggregate_rating}</p>
            </div>
            <div class="row">
              <h4>${restaurants.restaurants[5].restaurant.name}</h4>
              <img src="${restaurants.restaurants[5].restaurant.featured_image}" alt=""/>
              <p>Cost for two: ${restaurants.restaurants[5].restaurant.average_cost_for_two}</p>
              <p>Cuisines: ${restaurants.restaurants[5].restaurant.cuisines}</p>
              <p>Location: ${restaurants.restaurants[5].restaurant.location.address}</p>
              <p>Url: ${restaurants.restaurants[5].restaurant.url}</p>
              <p>Rating: ${restaurants.restaurants[5].restaurant.user_rating.aggregate_rating}</p>
            </div>
          `;
          //$('#containerModal').append(coffee);
          console.log(deli);
        }
      }
    });
  }

//llamamos a la api y nos devuelve solo por categoria en este caso cafe
  function coffe() {
    $.ajax({
      type: "GET", //it's a GET request API
      headers: {
        'X-Zomato-API-Key': '8149c00360df56f4399c2cf208281f7a' //'5e26f0851bb93b15813c1f2b7af9f77a'
      },
      url: 'https://developers.zomato.com/api/v2.1/search?entity_id=94741&entity_type=zone&establishment_type=1',
      dataType: 'json',
      processData: true,
      success: (restaurants) => {
        console.log(restaurants);
        for(let i in restaurants) {
          let coffee = `
            <div class="row">
              <div class="col-4 col-sm-1 col-md-4 col-lg-4">
                <h4>${restaurants.restaurants[0].restaurant.name}</h4>
                <img src="${restaurants.restaurants[0].restaurant.featured_image}" alt=""/>
                <p>Cost for two: ${restaurants.restaurants[0].restaurant.average_cost_for_two}</p>
                <p>Cuisines: ${restaurants.restaurants[0].restaurant.cuisines}</p>
                <p>Location: ${restaurants.restaurants[0].restaurant.location.address}</p>
                <p>Url: ${restaurants.restaurants[0].restaurant.url}</p>
                <p>Rating: ${restaurants.restaurants[0].restaurant.user_rating.aggregate_rating}</p>
              </div>
            </div>
            <div class="row">
              <h4>${restaurants.restaurants[1].restaurant.name}</h4>
              <img src="${restaurants.restaurants[1].restaurant.featured_image}" alt=""/>
              <p>Cost for two: ${restaurants.restaurants[1].restaurant.average_cost_for_two}</p>
              <p>Cuisines: ${restaurants.restaurants[1].restaurant.cuisines}</p>
              <p>Location: ${restaurants.restaurants[1].restaurant.location.address}</p>
              <p>Url: ${restaurants.restaurants[1].restaurant.url}</p>
              <p>Rating: ${restaurants.restaurants[1].restaurant.user_rating.aggregate_rating}</p>
            </div>
            <div class="row">
              <h4>${restaurants.restaurants[2].restaurant.name}</h4>
              <img src="${restaurants.restaurants[2].restaurant.featured_image}" alt=""/>
              <p>Cost for two: ${restaurants.restaurants[2].restaurant.average_cost_for_two}</p>
              <p>Cuisines: ${restaurants.restaurants[2].restaurant.cuisines}</p>
              <p>Location: ${restaurants.restaurants[2].restaurant.location.address}</p>
              <p>Url: ${restaurants.restaurants[2].restaurant.url}</p>
              <p>Rating: ${restaurants.restaurants[2].restaurant.user_rating.aggregate_rating}</p>
            </div>
            <div class="row">
              <h4>${restaurants.restaurants[3].restaurant.name}</h4>
              <img src="${restaurants.restaurants[3].restaurant.featured_image}" alt=""/>
              <p>Cost for two: ${restaurants.restaurants[3].restaurant.average_cost_for_two}</p>
              <p>Cuisines: ${restaurants.restaurants[3].restaurant.cuisines}</p>
              <p>Location: ${restaurants.restaurants[3].restaurant.location.address}</p>
              <p>Url: ${restaurants.restaurants[3].restaurant.url}</p>
              <p>Rating: ${restaurants.restaurants[3].restaurant.user_rating.aggregate_rating}</p>
            </div>
            <div class="row">
              <h4>${restaurants.restaurants[4].restaurant.name}</h4>
              <img src="${restaurants.restaurants[4].restaurant.featured_image}" alt=""/>
              <p>Cost for two: ${restaurants.restaurants[4].restaurant.average_cost_for_two}</p>
              <p>Cuisines: ${restaurants.restaurants[4].restaurant.cuisines}</p>
              <p>Location: ${restaurants.restaurants[4].restaurant.location.address}</p>
              <p>Url: ${restaurants.restaurants[4].restaurant.url}</p>
              <p>Rating: ${restaurants.restaurants[4].restaurant.user_rating.aggregate_rating}</p>
            </div>
          `;
          //$('#containerModal').append(coffee);
          console.log(coffee);
        }
      }
    });
  }

//llamamos a la api y nos devuelve solo por categoria en este caso desayunos
  function breakfast() {
    $.ajax({
      type: "GET", //it's a GET request API
      headers: {
        'X-Zomato-API-Key': '8149c00360df56f4399c2cf208281f7a' //'5e26f0851bb93b15813c1f2b7af9f77a'
      },
      url: 'https://developers.zomato.com/api/v2.1/search?entity_id=94741&entity_type=zone&category=8',
      dataType: 'json',
      processData: true,
      success: (restaurants) => {
        console.log(restaurants);
        for(let i in restaurants) {
          let desayunos = `
            <div class="row">
              <div class="col-4 col-sm-1 col-md-4 col-lg-4">
                <h4>${restaurants.restaurants[0].restaurant.name}</h4>
                <img src="${restaurants.restaurants[0].restaurant.featured_image}" alt=""/>
                <p>Cost for two: ${restaurants.restaurants[0].restaurant.average_cost_for_two}</p>
                <p>Cuisines: ${restaurants.restaurants[0].restaurant.cuisines}</p>
                <p>Location: ${restaurants.restaurants[0].restaurant.location.address}</p>
                <p>Url: ${restaurants.restaurants[0].restaurant.url}</p>
                <p>Rating: ${restaurants.restaurants[0].restaurant.user_rating.aggregate_rating}</p>
              </div>
            </div>
            <div class="row">
              <h4>${restaurants.restaurants[1].restaurant.name}</h4>
              <img src="${restaurants.restaurants[1].restaurant.featured_image}" alt=""/>
              <p>Cost for two: ${restaurants.restaurants[1].restaurant.average_cost_for_two}</p>
              <p>Cuisines: ${restaurants.restaurants[1].restaurant.cuisines}</p>
              <p>Location: ${restaurants.restaurants[1].restaurant.location.address}</p>
              <p>Url: ${restaurants.restaurants[1].restaurant.url}</p>
              <p>Rating: ${restaurants.restaurants[1].restaurant.user_rating.aggregate_rating}</p>
            </div>
            <div class="row">
              <h4>${restaurants.restaurants[2].restaurant.name}</h4>
              <img src="${restaurants.restaurants[2].restaurant.featured_image}" alt=""/>
              <p>Cost for two: ${restaurants.restaurants[2].restaurant.average_cost_for_two}</p>
              <p>Cuisines: ${restaurants.restaurants[2].restaurant.cuisines}</p>
              <p>Location: ${restaurants.restaurants[2].restaurant.location.address}</p>
              <p>Url: ${restaurants.restaurants[2].restaurant.url}</p>
              <p>Rating: ${restaurants.restaurants[2].restaurant.user_rating.aggregate_rating}</p>
            </div>
            <div class="row">
              <h4>${restaurants.restaurants[3].restaurant.name}</h4>
              <img src="${restaurants.restaurants[3].restaurant.featured_image}" alt=""/>
              <p>Cost for two: ${restaurants.restaurants[3].restaurant.average_cost_for_two}</p>
              <p>Cuisines: ${restaurants.restaurants[3].restaurant.cuisines}</p>
              <p>Location: ${restaurants.restaurants[3].restaurant.location.address}</p>
              <p>Url: ${restaurants.restaurants[3].restaurant.url}</p>
              <p>Rating: ${restaurants.restaurants[3].restaurant.user_rating.aggregate_rating}</p>
            </div>
            <div class="row">
              <h4>${restaurants.restaurants[4].restaurant.name}</h4>
              <img src="${restaurants.restaurants[4].restaurant.featured_image}" alt=""/>
              <p>Cost for two: ${restaurants.restaurants[4].restaurant.average_cost_for_two}</p>
              <p>Cuisines: ${restaurants.restaurants[4].restaurant.cuisines}</p>
              <p>Location: ${restaurants.restaurants[4].restaurant.location.address}</p>
              <p>Url: ${restaurants.restaurants[4].restaurant.url}</p>
              <p>Rating: ${restaurants.restaurants[4].restaurant.user_rating.aggregate_rating}</p>
            </div>
          `;
          //$('#containerModal').append(coffee);
          console.log(desayunos);
        }
      }
    });
  }

  //llamamos a la api y nos devuelve solo por categoria en este caso almiuerzo
  function lunch() {
    $.ajax({
      type: "GET", //it's a GET request API
      headers: {
        'X-Zomato-API-Key': '8149c00360df56f4399c2cf208281f7a' //'5e26f0851bb93b15813c1f2b7af9f77a'
      },
      url: 'https://developers.zomato.com/api/v2.1/search?entity_id=94741&entity_type=zone&category=9',
      dataType: 'json',
      processData: true,
      success: (restaurants) => {
        console.log(restaurants);
        for(let i in restaurants) {
          let almuerzo = `
            <div class="row">
              <div class="col-4 col-sm-1 col-md-4 col-lg-4">
                <h4>${restaurants.restaurants[15].restaurant.name}</h4>
                <img src="${restaurants.restaurants[15].restaurant.featured_image}" alt=""/>
                <p>Cost for two: ${restaurants.restaurants[15].restaurant.average_cost_for_two}</p>
                <p>Cuisines: ${restaurants.restaurants[15].restaurant.cuisines}</p>
                <p>Location: ${restaurants.restaurants[15].restaurant.location.address}</p>
                <p>Url: ${restaurants.restaurants[15].restaurant.url}</p>
                <p>Rating: ${restaurants.restaurants[15].restaurant.user_rating.aggregate_rating}</p>
              </div>
            </div>
            <div class="row">
              <h4>${restaurants.restaurants[16].restaurant.name}</h4>
              <img src="${restaurants.restaurants[16].restaurant.featured_image}" alt=""/>
              <p>Cost for two: ${restaurants.restaurants[16].restaurant.average_cost_for_two}</p>
              <p>Cuisines: ${restaurants.restaurants[16].restaurant.cuisines}</p>
              <p>Location: ${restaurants.restaurants[16].restaurant.location.address}</p>
              <p>Url: ${restaurants.restaurants[16].restaurant.url}</p>
              <p>Rating: ${restaurants.restaurants[16].restaurant.user_rating.aggregate_rating}</p>
            </div>
            <div class="row">
              <h4>${restaurants.restaurants[17].restaurant.name}</h4>
              <img src="${restaurants.restaurants[17].restaurant.featured_image}" alt=""/>
              <p>Cost for two: ${restaurants.restaurants[17].restaurant.average_cost_for_two}</p>
              <p>Cuisines: ${restaurants.restaurants[17].restaurant.cuisines}</p>
              <p>Location: ${restaurants.restaurants[17].restaurant.location.address}</p>
              <p>Url: ${restaurants.restaurants[17].restaurant.url}</p>
              <p>Rating: ${restaurants.restaurants[17].restaurant.user_rating.aggregate_rating}</p>
            </div>
            <div class="row">
              <h4>${restaurants.restaurants[18].restaurant.name}</h4>
              <img src="${restaurants.restaurants[18].restaurant.featured_image}" alt=""/>
              <p>Cost for two: ${restaurants.restaurants[18].restaurant.average_cost_for_two}</p>
              <p>Cuisines: ${restaurants.restaurants[18].restaurant.cuisines}</p>
              <p>Location: ${restaurants.restaurants[18].restaurant.location.address}</p>
              <p>Url: ${restaurants.restaurants[18].restaurant.url}</p>
              <p>Rating: ${restaurants.restaurants[18].restaurant.user_rating.aggregate_rating}</p>
            </div>
            <div class="row">
              <h4>${restaurants.restaurants[19].restaurant.name}</h4>
              <img src="${restaurants.restaurants[19].restaurant.featured_image}" alt=""/>
              <p>Cost for two: ${restaurants.restaurants[19].restaurant.average_cost_for_two}</p>
              <p>Cuisines: ${restaurants.restaurants[19].restaurant.cuisines}</p>
              <p>Location: ${restaurants.restaurants[19].restaurant.location.address}</p>
              <p>Url: ${restaurants.restaurants[19].restaurant.url}</p>
              <p>Rating: ${restaurants.restaurants[19].restaurant.user_rating.aggregate_rating}</p>
            </div>
          `;
          //$('#containerModal').append(coffee);
          console.log(almuerzo);
        }
      }
    });
  }

  //llamamos a la api y nos devuelve solo por categoria en este caso cena
  function dinner() {
    $.ajax({
      type: "GET", //it's a GET request API
      headers: {
        'X-Zomato-API-Key': '8149c00360df56f4399c2cf208281f7a' //'5e26f0851bb93b15813c1f2b7af9f77a'
      },
      url: 'https://developers.zomato.com/api/v2.1/search?entity_id=94741&entity_type=zone&category=10',
      dataType: 'json',
      processData: true,
      success: (restaurants) => {
        console.log(restaurants);
        for(let i in restaurants) {
          let cena = `
            <div class="row">
              <div class="col-4 col-sm-1 col-md-4 col-lg-4">
                <h4>${restaurants.restaurants[19].restaurant.name}</h4>
                <img src="${restaurants.restaurants[19].restaurant.featured_image}" alt=""/>
                <p>Cost for two: ${restaurants.restaurants[19].restaurant.average_cost_for_two}</p>
                <p>Cuisines: ${restaurants.restaurants[19].restaurant.cuisines}</p>
                <p>Location: ${restaurants.restaurants[19].restaurant.location.address}</p>
                <p>Url: ${restaurants.restaurants[19].restaurant.url}</p>
                <p>Rating: ${restaurants.restaurants[19].restaurant.user_rating.aggregate_rating}</p>
              </div>
            </div>
            <div class="row">
              <h4>${restaurants.restaurants[18].restaurant.name}</h4>
              <img src="${restaurants.restaurants[18].restaurant.featured_image}" alt=""/>
              <p>Cost for two: ${restaurants.restaurants[18].restaurant.average_cost_for_two}</p>
              <p>Cuisines: ${restaurants.restaurants[18].restaurant.cuisines}</p>
              <p>Location: ${restaurants.restaurants[18].restaurant.location.address}</p>
              <p>Url: ${restaurants.restaurants[18].restaurant.url}</p>
              <p>Rating: ${restaurants.restaurants[18].restaurant.user_rating.aggregate_rating}</p>
            </div>
            <div class="row">
              <h4>${restaurants.restaurants[17].restaurant.name}</h4>
              <img src="${restaurants.restaurants[17].restaurant.featured_image}" alt=""/>
              <p>Cost for two: ${restaurants.restaurants[17].restaurant.average_cost_for_two}</p>
              <p>Cuisines: ${restaurants.restaurants[17].restaurant.cuisines}</p>
              <p>Location: ${restaurants.restaurants[17].restaurant.location.address}</p>
              <p>Url: ${restaurants.restaurants[17].restaurant.url}</p>
              <p>Rating: ${restaurants.restaurants[17].restaurant.user_rating.aggregate_rating}</p>
            </div>
            <div class="row">
              <h4>${restaurants.restaurants[16].restaurant.name}</h4>
              <img src="${restaurants.restaurants[16].restaurant.featured_image}" alt=""/>
              <p>Cost for two: ${restaurants.restaurants[16].restaurant.average_cost_for_two}</p>
              <p>Cuisines: ${restaurants.restaurants[16].restaurant.cuisines}</p>
              <p>Location: ${restaurants.restaurants[16].restaurant.location.address}</p>
              <p>Url: ${restaurants.restaurants[16].restaurant.url}</p>
              <p>Rating: ${restaurants.restaurants[16].restaurant.user_rating.aggregate_rating}</p>
            </div>
            <div class="row">
              <h4>${restaurants.restaurants[15].restaurant.name}</h4>
              <img src="${restaurants.restaurants[15].restaurant.featured_image}" alt=""/>
              <p>Cost for two: ${restaurants.restaurants[15].restaurant.average_cost_for_two}</p>
              <p>Cuisines: ${restaurants.restaurants[15].restaurant.cuisines}</p>
              <p>Location: ${restaurants.restaurants[15].restaurant.location.address}</p>
              <p>Url: ${restaurants.restaurants[15].restaurant.url}</p>
              <p>Rating: ${restaurants.restaurants[15].restaurant.user_rating.aggregate_rating}</p>
            </div>
          `;
          //$('#containerModal').append(coffee);
          console.log(cena);
        }
      }
    });
  }

  //llamamos a la api y nos devuelve solo por categoria en este caso pubs y bars
  function pubs() {
    $.ajax({
      type: "GET", //it's a GET request API
      headers: {
        'X-Zomato-API-Key': '8149c00360df56f4399c2cf208281f7a' //'5e26f0851bb93b15813c1f2b7af9f77a'
      },
      url: 'https://developers.zomato.com/api/v2.1/search?entity_id=94741&entity_type=zone&category=11',
      dataType: 'json',
      processData: true,
      success: (restaurants) => {
        console.log(restaurants);
        for(let i in restaurants) {
          let pub = `
            <div class="row text-center">
              <div class="col-10 col-sm-10 col-md-10 col-lg-10">
                <img src="${restaurants.restaurants[10].restaurant.featured_image}" class="thumbnail imgModal" alt=""/>
              </div>
              <div class="col-sm-12 col-md-12 col-lg-12">
                <ul class="list-group">
                  <li class="list-group-item">${restaurants.restaurants[10].restaurant.name}</li>
                  <li class="list-group-item">Cost for two: ${restaurants.restaurants[10].restaurant.average_cost_for_two}</li>
                  <li class="list-group-item">Cuisines: ${restaurants.restaurants[10].restaurant.cuisines}</li>
                  <li class="list-group-item">Location: ${restaurants.restaurants[10].restaurant.location.address}</li>
                  <li class="list-group-item">Url: ${restaurants.restaurants[10].restaurant.url}</li>
                  <li class="list-group-item">Rating: ${restaurants.restaurants[10].restaurant.user_rating.aggregate_rating}</li>
                </ul>
              </div>
            </div>
            <div class="row text-center">
              <div class="col-10 col-sm-10 col-md-10 col-lg-10">
                <img src="${restaurants.restaurants[11].restaurant.featured_image}" alt=""/>
              </div>
              <div class="col-sm-12 col-md-12 col-lg-12">
                <ul class="list-group">
                  <li class="list-group-item">${restaurants.restaurants[11].restaurant.name}</li>
                  <li class="list-group-item">Cost for two: ${restaurants.restaurants[11].restaurant.average_cost_for_two}</li>
                  <li class="list-group-item">Cuisines: ${restaurants.restaurants[11].restaurant.cuisines}</li>
                  <li class="list-group-item">Location: ${restaurants.restaurants[11].restaurant.location.address}</li>
                  <li class="list-group-item">Url: ${restaurants.restaurants[11].restaurant.url}</li>
                  <li class="list-group-item">Rating: ${restaurants.restaurants[11].restaurant.user_rating.aggregate_rating}</li>
                </ul>
              </div>
            <div class="row text-center">
              <div class="col-10 col-sm-10 col-md-10 col-lg-10">
                <img src="${restaurants.restaurants[12].restaurant.featured_image}" alt=""/>
              </div>
              <div class="col-sm-12 col-md-12 col-lg-12">
                <ul class="list-group">
                  <li class="list-group-item">${restaurants.restaurants[12].restaurant.name}</li>
                  <li class="list-group-item">Cost for two: ${restaurants.restaurants[12].restaurant.average_cost_for_two}<li>
                  <li class="list-group-item">Cuisines: ${restaurants.restaurants[12].restaurant.cuisines}</li>
                  <li class="list-group-item">Location: ${restaurants.restaurants[12].restaurant.location.address}</li>
                  <li class="list-group-item">Url: ${restaurants.restaurants[12].restaurant.url}</li>
                  <li class="list-group-item">Rating: ${restaurants.restaurants[12].restaurant.user_rating.aggregate_rating}</li>
                </ul>
              </div>
            <div class="row text-center">
              <div class="col-sm-10 col-md-10 col-lg-10">
                <img src="${restaurants.restaurants[13].restaurant.featured_image}" alt=""/>
              </div>
              <div class="col-sm-12 col-md-12 col-lg-12">
                <ul class="list-group">
                  <li class="list-group-item">${restaurants.restaurants[13].restaurant.name}</li>
                  <li class="list-group-item">Cost for two: ${restaurants.restaurants[13].restaurant.average_cost_for_two}<li>
                  <li class="list-group-item">Cuisines: ${restaurants.restaurants[13].restaurant.cuisines}</li>
                  <li class="list-group-item">Location: ${restaurants.restaurants[13].restaurant.location.address}</li>
                  <li class="list-group-item">Url: ${restaurants.restaurants[13].restaurant.url}</li>
                  <li class="list-group-item">Rating: ${restaurants.restaurants[13].restaurant.user_rating.aggregate_rating}</li>
                </ul>
              </div>
            <div class="row text-center">
              <div class="col-sm-10 col-md-10 col-lg-10">
                <img src="${restaurants.restaurants[14].restaurant.featured_image}" alt=""/>
              </div>
              <div class="col-sm-12 col-md-12 col-lg-12">
                <ul class="list-group">
                  <li class="list-group-item">${restaurants.restaurants[14].restaurant.name}</li>
                  <li class="list-group-item">Cost for two: ${restaurants.restaurants[14].restaurant.average_cost_for_two}</li>
                  <li class="list-group-item">Cuisines: ${restaurants.restaurants[14].restaurant.cuisines}</li>
                  <li class="list-group-item">Location: ${restaurants.restaurants[14].restaurant.location.address}</li>
                  <li class="list-group-item">Url: ${restaurants.restaurants[14].restaurant.url}</li>
                  <li class="list-group-item">Rating: ${restaurants.restaurants[14].restaurant.user_rating.aggregate_rating}</li>
                </ul>
              </div>
          `;
          $('.modal-content').append(pub);
          //console.log(pub);
        }
      }
    });
  }


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
/*
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
*/
});

