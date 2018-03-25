let element = document.getElementById('display');
let g = new GraphHandler(element);
var seriesID = 0;
g.setup();
g.dynamicUpdate(generate2DDataSeries);


let opt = {
	series: {
		"random": {
			color: "rgb(0,0,128)"
		}
	}
}

let newOpt = {
	colors: ['#000000', '#00ff00', '#0000ff', '#ff0000'],
	labels: ['time', 'random', 'another', 'last']
};

function generate2DDataSeries() {
	let x = seriesID++;
	let y = Math.random();
	let z = Math.random();
	this.data.push([x, y, z]);
}

function generate3DDataSeries() {
	let x = seriesID++;
	let y = Math.random();
	let z = Math.random();
	let w = Math.random();
	this.updateOptions(newOpt);
	this.data.push([x, y, z, w]);
}