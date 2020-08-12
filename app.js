// document.getElementById('button1').addEventListener('click', loadGraph);
// document.getElementById('button2').addEventListener('click', loadGraphs);

// Graph constructor
function UrlObject(
  graphType,
  xAxis1,
  xAxis2,
  xAxis3,
  graphTitle,
  yAxis1,
  yAxis2,
  yAxis3
) {
  this.type = graphType;
  this.data = {};
  this.data.labels = [xAxis1, xAxis2, xAxis3];
  this.data.datasets = {};
  this.data.datasets.label = graphTitle;
  this.data.datasets.data = [yAxis1, yAxis2, yAxis3];
}

function UI() {}

// Add event listeners
const formData = document.querySelector(".form-data");

formData.addEventListener("submit", function (e) {
  // Get form values
  const graphType = document.getElementById("graph-type").value;
  xAxis1 = document.getElementById("x-axis-1").value;
  xAxis2 = document.getElementById("x-axis-2").value;
  xAxis3 = document.getElementById("x-axis-3").value;
  graphTitle = document.getElementById("graph-title").value;
  yAxis1 = document.getElementById("y-axis-1").value;
  yAxis2 = document.getElementById("y-axis-2").value;
  yAxis3 = document.getElementById("y-axis-3").value;

  // Instatiate new object
  const graph = new UrlObject(
    graphType,
    xAxis1,
    xAxis2,
    xAxis3,
    graphTitle,
    yAxis1,
    yAxis2,
    yAxis3
  );
  console.log(JSON.stringify(graph));
  e.preventDefault();
});

// data: {
//   labels: [xAxis1.value,xAxis2.value,xAxis3.value],
//   datasets: [{
//     label:{graphTitle.value},
//     data: [{yAxis1.value, yAxis2.value, yAxis3.value}]
//   }]
// }

// function UI() {}
// UI.prototype.addGraphToList = function (graph){

// }

// formData.addEventListener('submit', function (e) {
//   const newGraph = new UrlObject(graphType)
//   console.log(newGraph);
//   e.preventDefault();
// })

// Load graph
// function loadGraph(e) {
// const xhr = new XMLHttpRequest();
// xhr.open('GET', 'graph_data.json', true);
// xhr.onload = function () {
//   if (this.status === 200) {
//     const graph = JSON.parse(this.responseText)
//     const output =
//       `<ul>
//       <li>${graph.type}</li>
//       <li>${graph.data.labels}</li>
//       <li>${graph.data.datasets[0].label}</li>
//       <li>${graph.data.datasets[0].data}</li>
//     </ul>`
//     document.getElementById('graph').innerHTML = output;
//   }
// }
// xhr.send();
// }

// Load graphs from strorage
// function loadGraphs() {
//   const xhr = new XMLHttpRequest();

//   xhr.open("GET", "graphs.json", true);

//   xhr.onload = function () {
//     if ((this.status = 200)) {
//       const graphs = JSON.parse(this.responseText);

//       let output = "";

//       graphs.forEach(function (graph) {
//         output += `<ul>
//         <li>${graph.type}</li>
//         <li>${graph.data.labels}</li>
//         <li>${graph.data.datasets[0].label}</li>
//         <li>${graph.data.datasets[0].data}</li>
//       </ul>`;
//       });
//       document.getElementById("graphs").innerHTML = output;
//     }
//   };
//   xhr.send();
// }
