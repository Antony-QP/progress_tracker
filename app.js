document.getElementById('button1').addEventListener('click', loadGraph);
// document.getElementById('button2').addEventListener('click', loadGraphs);

// Load graph
function loadGraph(e) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'graph_data.json', true);

  xhr.onload = function () {
    if (this.status === 200) {

      const graph = JSON.parse(this.responseText)

      const output =

        `<ul>
        <li>${graph.type}</li>
        <li>${graph.data.labels}</li>
        <li>${graph.data.datasets[0].label}</li>
        <li>${graph.data.datasets[0].data}</li>
      </ul>`

      document.getElementById('graph').innerHTML = output;
    }
  }
  xhr.send();
}