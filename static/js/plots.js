
// console.log(data)
// var indivguy = "940";
// // Individual 904 will be default 
// function defaultIndividual(indiv){
//   return indiv.id === indivguy;
// }

// // Initialize page
// function init() {
  
//   let samples1 = data.samples;
//   let defau = samples1.filter(defaultIndividual);
//    console.log(defau.slice(0));
//   let topTenDefOTU = defau.slice(0)[0]
//  // console.log(topTenDefOTU);
//   slicedx = topTenDefOTU.sample_values.slice(0,10).reverse();
//   //console.log(slicedx);

//   slicedy = (topTenDefOTU.otu_ids.slice(0,10)).map(String).reverse();
//   slicedz = topTenDefOTU.otu_labels.slice(0,10).reverse();
//   let meep = slicedx.map((x,i) => ({x, y: 'OTU ' + slicedy[i], z:slicedz[i]}));

//  // console.log(meep)
//   let trace1 = {
//     x: meep.map(object => object.x),
//     y: meep.map(object => object.y),
//     text: meep.map(object => object.z),
//     name: "OTUs",
//     type: "bar",
//     orientation: "h"
//   };

//   let traceData = [trace1];

//   let layout = {
//     title: "Top 10 OTUs by Individual",
//     width: 500,
//     height: 600,
//     margin: {
//     l: 150,
//     r: 100,
//     t: 50,
//     b: 50
//     }
//   };
  
//   Plotly.newPlot("plot", traceData, layout);
  
// }


// // update plot when there is change to DOM
// d3.selectAll("#selDataset").on("change", updatePlotly);

// function updatePlotly(){
//   var dropdwn = d3.select("#selDataset");
//   var dataset = dropdwn.property("value");

//   let samples1 = data.samples;
//   indivguy = dataset;
//   let defau = samples1.filter(defaultIndividual, dataset);
//   // console.log(defau.slice(0));
//   let topTenDefOTU = defau.slice(0)[0]
//  // console.log(topTenDefOTU);
//   slicedx = topTenDefOTU.sample_values.slice(0,10).reverse();
//   //console.log(slicedx);

//   slicedy = (topTenDefOTU.otu_ids.slice(0,10)).map(String).reverse();
//   slicedz = topTenDefOTU.otu_labels.slice(0,10).reverse();
// //   let meep = slicedx.map((x,i) => ({x, y: 'OTU ' + slicedy[i], z:slicedz[i]}));

// //  // console.log(meep)
// //   let trace1 = {
// //     x: meep.map(object => object.x),
// //     y: meep.map(object => object.y),
// //     text: meep.map(object => object.z),
// //     name: "OTUs",
// //     type: "bar",
// //     orientation: "h"
// //   };

// //   let traceData = [trace1];

// //   let layout = {
// //     title: "Top 10 OTUs by Individual",
// //     width: 500,
// //     height: 600,
// //     margin: {
// //     l: 150,
// //     r: 100,
// //     t: 50,
// //     b: 50


//     // }

//     Plotly.restyle("plot", "x", [slicedx]);
//     Plotly.restyle("plot", "y", [slicedy]);
//     Plotly.restyle("plot", "text", [slicedz]);
//   // };



// }

// init();


// Start with bar chart
function barGraph(individual){
  let samples1 = data.samples;
  let defau = samples1.filter(indiv => indiv.id === individual);
  //console.log(defau);
  //console.log(defau[0].sample_values);
  let otuids = defau[0].otu_ids.slice(0,10).reverse();
  let otulabels = defau[0].otu_labels.slice(0,10).reverse();
  let samps = defau[0].sample_values.slice(0,10).reverse();

  let meep = samps.map((x,i) => ({x, y: 'OTU ' + otuids[i], z:otulabels[i]}));
  console.log(meep);

  let trace1 = {
        x: meep.map(object => object.x),
        y: meep.map(object => object.y),
        text: meep.map(object => object.z),
        name: "OTUs",
        type: "bar",
        orientation: "h"
      };
    
  let traceData = [trace1];
    
  let layout = {
        title: "Top 10 OTUs by Individual",
        width: 600,
        height: 600
    };
      
  Plotly.newPlot("plot", traceData, layout);
      
}

// Make bubble chart
function bubble(individual){
  let samples1 = data.samples;
  let defau = samples1.filter(indiv => indiv.id === individual);
  let otuids = defau[0].otu_ids;
  let otulabels = defau[0].otu_labels;
  let samps = defau[0].sample_values;

  let trace1 = {
    x: otuids,
    y: samps,
    text: otulabels,
    mode: 'markers',
    marker: {
      color: otuids,
      size: samps
    }
  };

  let traceData = [trace1];
    
  let layout = {
       showlegend:false,
        width: 1100,
        height: 600,
        xaxis: {title: "OTU ID"}
  };

  Plotly.newPlot('bubble', traceData, layout);
}


// fill in demo card
function demoCard(individual){
  let meta = data.metadata;
  let meta1 = meta.filter(indiv => indiv.id == individual);
  console.log(meta1);

  tofill = d3.select("#sample-metadata");
  // Clear it
  tofill.html("");
  console.log(meta1[0]);
  // https://stackoverflow.com/questions/684672/how-do-i-loop-through-or-enumerate-a-javascript-object
  for (var key of Object.keys(meta1[0])){
    console.log(key)
    console.log(meta1[0][key]);
    tofill.append("h6").text(key + ": " + String(meta1[0][key]));
  }
}


bubble("940");
barGraph("940");
demoCard("940");