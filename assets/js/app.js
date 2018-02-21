$(document).ready(() => {

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














