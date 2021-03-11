// from data.js
var tableData = data;

// use tbody which is empty now
// add an id to this section in the index.
var tbody_section = d3.select("#table1");

var filter_btn = d3.select("#filter-btn")
var form1 = d3.select("form")

// Use data and go through each row
tableData.forEach(function(ufo_sights){
    var row = tbody_section.append("tr")

    Object.entries(ufo_sights).forEach(function([key, value]){
    
        var cell = row.append("td");
        cell.text(value);
    });
});

form1.on("submit", filter_tbl);
filter_btn.on("click", filter_tbl);

function filter_tbl() {

    //do not let the page to refresh automatically with this command
    d3.event.preventDefault();

    var dateToFilter = d3.select("#datetime");
    var dt_value = dateToFilter.property("value");

    //var filteredData = people.filter(person => person.bloodType === inputValue);
    var filteredData = tableData.filter( x => x.datetime === dt_value);
    
    //clean tbody section to enter the new filtered data
    tbody_section.html('');

    // this section only removes the tbody_section 
    // tableData.forEach(function() {
    //     d3.select("#table1").remove();
    // });
    
    filteredData.forEach(function(tbl){
        var row = tbody_section.append("tr")
        Object.entries(tbl).forEach(function([key, value]){

            var col = row.append("td");
            col.text(value);
        } );
    });

};