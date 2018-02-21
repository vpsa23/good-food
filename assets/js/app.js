$(document).ready(() => {

$.ajax({
  type: "GET", //it's a GET request API
  headers: {
    'X-Zomato-API-Key': '5e26f0851bb93b15813c1f2b7af9f77a'
  },
  url: 'https://developers.zomato.com/api/v2.1/restaurant?res_id=${data}',
  dataType: 'json',
  data: {
     res_id: '16774318',
     res_id: '16782899',
  },
  processData: true,
  success: function(data) {
    console.log(data);
  }
});


})














