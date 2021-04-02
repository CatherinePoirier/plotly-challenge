// 1. Use the D3 library to read in samples.json.
// Fetch the JSON data and console log it
// d3.json('../../samples.json').then(data=>{
//     console.log(data)});
d3.json("../../samples.json").then((data)=>
    {
    var names = data.names;
  //  var smp_values = data.samples.otu_id;
 //   console.log(names);
  //  console.log(smp_values);
  var select = document.getElementById("selDataset"); 
     for(var i = 0; i < names.length; i++) {
     var opt = names[i];
     var el = document.createElement("option");
     el.textContent = opt;
     el.value = opt;
     select.appendChild(el);
    }

// 2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
//     
//      Use sample_values as the values for the bar chart.
//     Use otu_ids as the labels for the bar chart.
//     Use otu_labels as the hovertext for the chart.

// Use the first sample from the list to build the initial plots
    
     var otuid = data.samples[0]["otu_ids"].slice(0, 10);

    //convert otuid to strings
    //console.log(otuid);
     var sampleV = data.samples[0]["sample_values"].slice(0, 10);
    //console.log(sampleV);
    var otuLl = data.samples[0]["otu_labels"].slice(0, 10);
    //console.log(otuLl);
    var trace = [{
        type: 'bar',
        x: sampleV,
        y: otuid,
        orientation: 'h',
        text: otuLl
      }];
      
      Plotly.newPlot('bar', trace);
// 3. Create a bubble chart that displays each sample.
//     Use otu_ids for the x values.
//     Use sample_values for the y values.
//     Use sample_values for the marker size.
//     Use otu_ids for the marker colors.
//     Use otu_labels for the text values.

      var trace2 = {
        type: 'bubble',
        x: otuid,
        y: sampleV,
        text: otuLl,
        mode: 'markers',
        marker: {
          color: otuid,
          size: sampleV
        }
      };
        
      var layout = {
        title: 'Samples',
        showlegend: false,
        height: 500,
        width: 500
      };
      
      Plotly.newPlot('bubble', trace2, layout);


    });
    
function optionChanged(optiontag){
    console.log(optiontag);
}

// console.log(sampleNames)
// d3.json(url).then(function(data) {
//     console.log(data);
//   });

// function init() {
//     // Grab a reference to the dropdown select element
//     var selector = d3.select("#selDataset"); // Use the list of sample names to populate the select options
//      d3.json("../../samples.json").then((data) => {
//       var sampleNames = data.names; 
//         sampleNames.forEach((sample) => {
//             selector.append("option").text(sample).property("value", sample);
//         }); 
//      }
    
 
// 2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
//     
//      Use sample_values as the values for the bar chart.
//     Use otu_ids as the labels for the bar chart.
//     Use otu_labels as the hovertext for the chart.

// Use the first sample from the list to build the initial plots

// buildCharts(firstSample);
// buildMetadata(firstSample);

// //Plotly.restyle("bar", "x", [datasets[dataset]['x']]);
// //Plotly.restyle("bar", "y", [datasets[dataset]['y']]);
// //restyle only changes the x axis or the y axis, one at at time
// //}

// init();
// var topotu = data.slice(0,10);
// console.log(topotu);
// 

// 4. Display the sample metadata, i.e., an individual's demographic information.

//5.  Display each key-value pair from the metadata JSON object somewhere on the page.

// 6. Update all of the plots any time that a new sample is selected



// //THis Works
//     d3.json("../../samples.json").then((data)=>
//     {
//     var sampleNames = data.names;
//     console.log(sampleNames);
//     });
