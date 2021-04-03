// 1. Use the D3 library to read in samples.json.
// Fetch the JSON data and console log it
// d3.json('../../samples.json').then(data=>{
//     console.log(data)});
function init(){
  d3.json("../../samples.json").then((data)=>
  {
      var names = data.names;
  //   console.log(names);
      var samples_array=data.samples;
      console.log(samples_array);
        // var samples_current=samples_array.filter((picked)=>picked.id==optiontag);
        // console.log(samples_current);
      var metadata_array=data.metadata;
      console.log(metadata_array);

  //creates elements for dropdown menu
    var select = document.getElementById("selDataset"); 
      for(var i = 0; i < names.length; i++) {
      var opt = names[i];
      var el = document.createElement("option");
      el.textContent = opt;
      el.value = opt;
      select.appendChild(el);
      }

    buildgraph(names[0]);

    });
  }
// 2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
// Use the first sample from the list to build the initial plots

//FUNCTION INIT?
function buildgraph(selectedid){
  d3.json("../../samples.json").then((data)=>{

    // var selectedid=samples_array.filter(filterBBdata);
    var otuidarray = data.samples.filter(eachelement=>eachelement.id===selectedid);
    var selected_person=otuidarray[0];

    // var otuidstring = otuid.toString();  // console.log(otuid);  //  console.log(otuidstring);
    var otuid =selected_person["otu_id"];  //console.log(otuLl);
    var sampleV = selected_person["sample_values"].slice(0, 10);   //console.log(sampleV);
    var otuLl =selected_person["otu_labels"].slice(0, 10);  //console.log(otuLl);
    
    var trace = [{
        type: 'bar',
        x: sampleV,
        //y: otuidstring,
        y: otuid,
        orientation: 'h',
        text: otuLl
      }];
           
      Plotly.newPlot('bar', trace);
  }) //end of d3 then statement
} //end of build graph function

init();
   
   
    
// // 3. Create a bubble chart that displays each sample.
// //     *Use otu_ids for the x values.*Use sample_values for the y values.Use sample_values for the marker size.
// //     Use otu_ids for the marker colors. *Use otu_labels for the text values.

//       var trace2 = {
//         type: 'bubble',
//         //x: otuidstring,
//         x: otuid,
//         y: sampleV,
//         text: otuLl,
//         mode: 'markers',
//         marker: {
//           color: otuid,
//           colorscale: [[0, 'rgb(0, 50, 75'], [1, 'rgb(76, 100, 250']],
//           size: sampleV
//         }
//       };
      
//       var layout = {
//         title: 'Samples',
//         showlegend: false,
//         height: 500,
//         width: 1000,
//         xaxis: {title: {text: 'OTU ID'}}
//       };
//       Plotly.newPlot('bubble', [trace2], layout);
// //4. Display the sample metadata, i.e., an individual's demographic information.
// //5.  Display each key-value pair from the metadata JSON object somewhere on the page.
// //         var traceP = [{
// //           type: 'panel',
// //           x: sampleV,
// //           //y: otuidstring,
// //           y: otuidstring,
// //           orientation: 'h',
// //           text: otuLl
// //         }];

// // Plotly.newPlot('sample-metadata', traceP);
//       // function optionChange(){
//       //   var chosen_dataset=de.select('#selDataset').property('value')
//       //   switch(chosen_dataset){
//       //     case;
//       //   };
//       //   Plotly.restyle('bar', trace);
//       // }
// //BONUS -Adapt the Gauge Chart from https://plot.ly/javascript/gauge-charts/ to plot the weekly washing frequency of the individual.
// //You will need to modify the example gauge code to account for values ranging from 0 through 9.
// //Update the chart whenever a new sample is selected.   

//      var mdid = data.metadata[0]["id"];
//      var mdwfeq= data.metadata[0]["wfeq"]; 
      
//      var trace3 = [
//       {
//         domain: { x: [0, 9], y: [0, 9]  },
//         value: mdwfeq,
//         title: { text: "Belly Button Washing Frequency, Scrubs per Week" },
//         type: "indicator",
//         mode: "gauge+number"
//       }
//     ];
//         var layout2 = { width: 400, height: 300, margin: { t: 0, b: 0 } };
//     Plotly.newPlot('gauge', trace3, layout2); 

//     // 6. Update all of the plots any time that a new sample is selected

//  function buildgraph(id)

//     var selectedid=samples_array.filter(filterBBdata);
//     var sample_otu_id=selectedid.map(oneElement=>oneElement['otu_ids']);
//     var sample_otu_id_string=sample_otu_id.toString();
//     var sample_V_info=selectedid.map(oneElement=>oneElement['sample_values']);
//     var sample_otu_labels=selectedid.map(oneElement=>oneElement['otu_labels']);
    
//     console.log(selectedid);

//     }); //closes
//  // function optionChanged(optiontag){
// //   console.log(optiontag);
// // }

// // var selectedid=samples_array.filter(filterBBdata);
// // var sample_otu_id=selectedid.map(oneElement=>oneElement['otu_ids']);
// // var sample_otu_id_string=sample_otu_id.toString();
// // var sample_V_info=selectedid.map(oneElement=>oneElement['sample_values']);
// // var sample_otu_labels=selectedid.map(oneElement=>oneElement['otu_labels']);

// //console.log(selectedid);

//   //var otuids =data.samples.one_id.map(one_id=>one_id[i] // not what i want

// // var otuid = data.samples[0]["otu_ids"].slice(0, 10);
// //     var otuidstring = otuid.toString();  // console.log(otuid);  //  console.log(otuidstring);
// //     var sampleV = data.samples[0]["sample_values"].slice(0, 10);   //console.log(sampleV);
// //     var otuLl = data.samples[0]["otu_labels"].slice(0, 10);  //console.log(otuLl);
    
// // 
// // function buildMetadata(sample) {
// //   d3.json("../../samples.json").then((data) => {
// //     var metadata = data.metadata;
// //     console.log(metadata)
// //   })};

// // function init() {
// //     // Grab a reference to the dropdown select element
// //     var selector = d3.select("#selDataset"); // Use the list of sample names to populate the select options
// //      d3.json("../../samples.json").then((data) => {
// //       var sampleNames = data.names; 
// //         sampleNames.forEach((sample) => {
// //             selector.append("option").text(sample).property("value", sample);
// //         }); 
// //      }
    

// // //Plotly.restyle("bar", "x", [datasets[dataset]['x']]);
// // //Plotly.restyle("bar", "y", [datasets[dataset]['y']]);
// // //restyle only changes the x axis or the y axis, one at at time
// // //}


// // 4. Display the sample metadata, i.e., an individual's demographic information.
// // function buildMetadata(sample) {
// //   d3.json("samples.json").then((data) => {
// //     var metadata = data.metadata;
 
// //     demo_info.html("");  //Clears the entries from previous entry



//     // var mdid = data.metadata[0]["id"];
//     // var mdethnicity = data.metadata[0]["ethnicity"];
//     // var mdgender = data.metadata[0]["gender"];
//     // var mdage= data.metadata[0]["age"];
//     // var mdlocation= data.metadata[0]["location"];
//     // var mdbbtype= data.metadata[0]["bbtype"];
//     // var mdwfeq= data.metadata[0]["wfeq"];
//     // console.log(mdid);
//     // console.log(mdethnicity);
//     // console.log(mdgender);
//     // console.log(mdlocation);
//     // console.log(mdage);
//     // console.log(mdbbtype);
//     // console.log(mdwfeq);

//     // function optionChanged(optiontag){
// //     console.log(optiontag);
// // }