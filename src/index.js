require('./styles.css');
import './styles.scss';
import * as d3 from 'd3';
import enterView from 'enter-view';
import Stickyfill from 'stickyfilljs';



const container = d3.select('#scrolly-side');
const stepSel = container.selectAll('.step');
const imgSel = container.selectAll('.images');

function updateChart(index) {
	const sel = container.select(`[data-index='${index}']`);
  stepSel.classed('is-active', (d, i) => i === index);
	imgSel.classed('is-active', (d, i) => i === index);


    // d3.select("#firstimg")
    // .transition()
    // .duration(750)
    // .style("opacity", 0)
    // .transition()
    // .remove();




}

function init() {
	Stickyfill.add(d3.select('.sticky').node());

	enterView({
		selector: stepSel.nodes(),
		offset: 0.5,
		enter: el => {
      const index = +d3.select(el).attr('data-index');
			updateChart(index);
		},
		exit: el => {
			let index = +d3.select(el).attr('data-index');
			index = Math.max(0, index - 1);
			updateChart(index);
		}
	});
}

init()
