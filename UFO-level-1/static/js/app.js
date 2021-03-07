// from data.js
var tableData = data;

// use tbody which is empty now
// add an id to this section in the index.
var tbody_section = d3.select("tbody");

tableData.forEach(function(ufo_sights){
    var row = tbody_section.append("tr")

    Object.entries(ufo_sights).forEach(function([key, value]){
    
        var cell = row.append("td");
        cell.text(value);
    });
});



