/** fcts defs **/
var charts = ["EURUSD","USDJPY","AUDUSD","GBPUSD","USDCAD","BITCOIN",
    "NZDUSD","AUDCAD","AUDCHF","AUDJPY","AUDNZD","CADCHF", 
    "CADJPY","CHFJPY","EURAUD","EURCAD","EURCHF","EURGBP"];

var symboles = $(".tableRow");
var chartCanvas = $(".ratesChart")[0];

function chartsLoader(){
    for (let i = 0; i < symboles.length ; i++) {
        $(symboles[i]).on('click', e => {
            e.stopPropagation();
            for (let j = 0; j < symboles.length ; j++){
                chartCanvas.classList.remove(charts[j]);
                symboles[j].classList.remove('activeTableRow');
            }
            chartCanvas.classList.add(charts[i]);
            symboles[i].classList.add('activeTableRow');
        })
    }
}

function firstRatesLoad() {
    chartCanvas.classList.add(charts[0]);
    symboles[0].classList.add('activeTableRow');
}

/** fcts calls **/
firstRatesLoad();
chartsLoader();