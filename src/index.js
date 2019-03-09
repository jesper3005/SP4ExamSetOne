import "bootstrap/dist/css/bootstrap.css";

const root = document.getElementById("root");
var svg = document.getElementById("svg");

const country = "https://restcountries.eu/rest/v1/alpha?codes=";

svg.addEventListener("load", function() {
  var svgDoc = svg.contentDocument;

  [...svgDoc.querySelectorAll("path")].forEach(path => {
    path.addEventListener("click", e => {
      getCountryInfo(path.id);
      path.style.fill = "#ff9900";
    });
  });
});

function getCountryInfo(landCode) {
  fetch(country + landCode)
    .then(res => res.json()) //.then(res=>{ return res.json()})
    .then(data => {
      var table = "";
      table +=
        '<table border="1" style="border-spacing: 5px; table-layout: auto; width: 45%;">';
      table += "<tr>";
      table += "<th>Name</th>";
      table += "<th>Capital</th>";
      table += "<th>Also known as</th>";
      table += "<th>Region</th>";
      table += "<th>Population</th>";
      table += "<th>Languages</th>";
      table += "</tr>";
      data.forEach(country => {
        table += "<tr>";
        table += "<td>" + country.name + "</td>";
        table += "<td>" + country.capital + "</td>";
        table += "<td>" + country.altSpellings + "</td>";
        table += "<td>" + country.region + "</td>";
        table += "<td>" + country.population + "</td>";
        table += "<td>" + country.languages + "</td>";
        table += "</tr>";
      });
      table += "</table>";
      root.innerHTML = table;
    });
}
