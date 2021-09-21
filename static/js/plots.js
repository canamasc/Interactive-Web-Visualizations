
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
