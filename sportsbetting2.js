(function(){
  $(document).ready(function(){
    setupChart();
  });
})();
var chart;
var beginningURL = "http://api.sportsdatabase.com/nba/query.json?sdql=";
var beginningQuery1 = 'line%40team%3D';
var team = "Spurs";
var endQuery = "%20and%20season%3D2015";
var endingURL = "&output=json&api_key=guest";
var beginningQuery2 = 'points%2bline%2Do%3Apoints%40team%3D';

  $('#searchSDQL').on("click", function() {
     var teamName = $('#select1 option:selected').text();
     var url = beginningURL + beginningQuery1 + teamName + endQuery + endingURL;
     var options = {
           type: "GET",
           dataType: "jsonp",
           url: url
         }
       $.ajax(options)
  });
  function json_callback(data) {
  var sportsdata = data.groups[0].columns[0];
  sportsdata.unshift('Point Spread');
  var chartData = {
    columns:
      [sportsdata]
  }
  chart.load(chartData)
}
function setupChart (){
  chart = c3.generate({
    bindto: "#outputArea",
    size: {
      height: 250,
      width: 600
    },
    data: {
      columns: []
    }
  });
}

$('#searchSDQL2').on("click", function() {
   var teamName = $('#select1 option:selected').text();
   var url2 = beginningURL + beginningQuery2 + teamName + endQuery + endingURL;
   var options2 = {
         type: "GET",
         dataType: "jsonp",
         url: url2
       }
     $.ajax(options2)
});
function json_callback(data) {
var sportsdata2 = data.groups[0].columns[0];
sportsdata2.unshift('Actual Result');
var chartData = {
  columns:
    [sportsdata2]
}
chart.load(chartData)
}
function setupChart (){
chart = c3.generate({
  bindto: "#outputArea",
  size: {
    height: 250,
    width: 600
  },
  data: {
    columns: []
  }
});
}
