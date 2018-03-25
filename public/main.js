class GraphHandler {

	constructor(domElement) {
		this.data = [];
		this.defaults = {
			colors: ['#000000', '#00ff00', '#0000ff'],
			labels: ['time', 'random', 'another'],
		};
		this.counter = 0;
		this.domElement = domElement;
	}

	setDataSource(dataSource) {
		this.data = dataSource;
	}

	setup() {
		this.graph = new Dygraph(this.domElement, "0" /*dummy value*/, this.defaults);
	}

	dynamicUpdate(fn) {
		this.numberGenerator = fn;
		this.intervalid = setInterval(() => {
			this.numberGenerator();
			this.graph.updateOptions({ 'file': this.data }, this.options);
		}, 500);
	}

	updateNumbergenerator(fn) {
		this.resetData();
		this.numberGenerator = fn;
	}

	resetData() {
		this.data = [];
	}

	cancelUpdate() {
		clearInterval(this.intervalid);
	}

	getSeries() {
		return this.graph.getLabels();
	}

	getPropertiesForSeries(series) {
		return this.graph.getPropertiesForSeries(series);
	}

	getColorsForSeries(series) {
		return this.getPropertiesForSeries(series).color;
	}

	updateOptions(opt) {
		this.graph.updateOptions(opt);
	}

}