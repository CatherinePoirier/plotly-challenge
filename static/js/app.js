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
      // var metadata_array=data.metadata;
      // console.log(metadata_array);

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

function buildgraph(selectedid){
  d3.json("../../samples.json").then((data)=>{

    // var selectedid=samples_array.filter(filterBBdata);
    var otuidarray = data.samples.filter(eachelement=>eachelement.id===selectedid);
    var selected_person=otuidarray[0];
    

    // var otuidstring = otuid.toString();  // console.log(otuid);  //  console.log(otuidstring);
   //     var sample_otu_id=selectedid.map(oneElement=>oneElement['otu_ids']);
//     var sample_otu_id_string=sample_otu_id.toString();  
    
    var otuid =selected_person["otu_ids"]; 
    var sample_otu_id=otuid.map(oneElement=>oneElement.toString()); 
    //console.log(sample_otu_id);
    var string_otu_id=sample_otu_id.slice(0, 10).reverse();
    
    console.log(string_otu_id);
    var sampleV = selected_person["sample_values"].slice(0, 10).reverse();   
    console.log(sampleV);
    var otuLl =selected_person["otu_labels"].slice(0, 10).reverse();  //console.log(otuLl);
    
    var trace = [{
        type: 'bar',
        x: sampleV,
        y: string_otu_id,
        orientation: 'h',
        text: otuLl
      }];
           
      Plotly.newPlot('bar', trace);

      var trace2 = {
        type: 'bubble',
        x: otuid,
        y: sampleV,
        text: otuLl,
        mode: 'markers',
        marker: {
          color: otuid,
          colorscale: [[0, 'rgb(0, 50, 75'], [1, 'rgb(76, 100, 250']],
          size: sampleV
        }
      };
      
      var layout = {
        title: 'Samples',
        showlegend: false,
        height: 500,
        width: 1000,
        xaxis: {title: {text: 'OTU ID'}}
      };
      Plotly.newPlot('bubble', [trace2], layout);

// demographic data
      var demo_row = d3.select("#sample-metadata");
      demo_row.html("");
      var metadata1=data.metadata;
      console.log(metadata1)
      var metadata_array=metadata1.filter(each_element=>each_element.id==selectedid);
      var selected_metadata=metadata_array[0];
      console.log(selected_metadata);
    
     
      Object.entries(selected_metadata).forEach(([key, val]) => {
      let demotable = demo_row.append("div");
      demotable.text(`${key}: ${val}`);
          }
        );
    



      // for (var i=0; i<data.length; i++){   
      //     var rowrow=demorow.append('tr');
      //     current_data=data[i];
      //     value_list=Object.values(current_data);
      //     for (var x=0; x<value_list.length; x++){
      //         rowrow.append('td').text(value_list[x]);
      //     };
      // };


      
// ==========================================

  }) //end of d3 then statement
} //end of build graph function

// function runEnter() {
//   tbody.html("");
//   d3.event.preventDefault();    //Prevent the page from refreshing
//   var inputElement = d3.select("#datetime");   //Select the input element and get the raw HTML node

//   var inputValue = inputElement.property("value");   //Get the value property of the input element

//   console.log(inputValue);
// //  console.log(tableData);
//   var filteredData = tableData.filter(day => day.datetime === inputValue);
  
//   for (var i=0; i<filteredData.length; i++){   
//   var rowrow=tbody.append('tr');
//   current_data2=filteredData[i];
//   value_list=Object.values(current_data2);
//   for (var x=0; x<value_list.length; x++){
//       rowrow.append('td').text(value_list[x]);
//   };
// };
//   console.log(filteredData);
// }





init();
   
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

// var tbody=d3.select("tbody");
//       tbody.html("")
//       object.entries(selected_metadata).forEach(([k, v])=>{
//         var row=tbody.append("tr");
//         row.text(`${k}: ${v}`);
//       });