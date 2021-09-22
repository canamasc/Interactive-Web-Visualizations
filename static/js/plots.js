
// q: how to make prettier
// q: how to deploy

// Start with bar chart
function barGraph(individual){
  let samples1 = data.samples;
  // filter data for specific individual id
  let defau = samples1.filter(indiv => indiv.id === individual);
  //console.log(defau);
  //console.log(defau[0].sample_values);

  // get needed fields
  let otuids = defau[0].otu_ids.slice(0,10).reverse();
  let otulabels = defau[0].otu_labels.slice(0,10).reverse();
  let samps = defau[0].sample_values.slice(0,10).reverse();

  // map into dictionary object so we can plot
  let meep = samps.map((x,i) => ({x, y: 'OTU ' + otuids[i], z:otulabels[i]}));
 // console.log(meep);

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

  // filter for individual 
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
        width: 1100,
        height: 600,
        xaxis: {title: "OTU ID"}
  };

  Plotly.newPlot('bubble', traceData, layout);
}


// fill in demo card
function demoCard(individual){

  // filter for individual
  let meta = data.metadata;
  let meta1 = meta.filter(indiv => indiv.id == individual);
 // console.log(meta1);

 // fill in sample-metadata id from HTML
  tofill = d3.select("#sample-metadata");
  // Clear it
  tofill.html("");
  console.log(meta1[0]);

  // loop through array
  // https://stackoverflow.com/questions/684672/how-do-i-loop-through-or-enumerate-a-javascript-object
  for (var key of Object.keys(meta1[0])){
   // console.log(key)
    //console.log(meta1[0][key]);

    // append all desired metadata fields to HTML 
    tofill.append("h5").text(key + ": " + String(meta1[0][key]));
  }
}

// initialize
function init(){
  names = data.names;
 // console.log(names);

 // fill in dropdown object with names
  var choice = d3.select("#selDataset");

  for (var key of Object.keys(names)){
    console.log(names[key]);
    choice.append("option").text(names[key]);
  }

  // initialize with first id
  bubble(names[0]);
  barGraph(names[0]);
  demoCard(names[0]);
}

function optionChanged(individual){
  // can pass id from dropdown directly to chart functions
  bubble(individual);
  barGraph(individual);
  demoCard(individual);
}


init();