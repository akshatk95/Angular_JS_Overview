Highcharts.chart('container12', {
    title: {
        text: 'Combination chart'
    },
    xAxis: {
        categories: ['Apples', 'Oranges', 'Mangoes', 'Bananas']
    },
    labels: {
        items: [{
            html: 'Total fruit consumption',
            style: {
                left: '50px',
                top: '18px',
                color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
            }
        }]
    },
    series: [{
        "type": "column",
        "name": "A",
        "data": [3, 2, 1, 3]
    }, {
        "type": "column",
        "name": "B",
        "data": [2, 3, 5, 7]
    }, {
        "type": "column",
        "name": "C",
        "data": [4, 3, 3, 9]
    }, {
        "type": "spline",
        "name": "Average",
        "data": [3, 2.67, 3, 6.33],
        "marker": {
            "lineWidth": 2,
            "lineColor": Highcharts.getOptions().colors[3],
            "fillColor": "white"
        }
    }, {
        "type": "pie",
        "name": "Total consumption",
        "data": [{
            "name": "A",
            "y": 9,
            "color": Highcharts.getOptions().colors[0] // Jane's color
        }, {
            "name": "B",
            "y": 17,
            "color": Highcharts.getOptions().colors[1] // John's color
        }, {
            "name": "C",
            "y": 19,
            "color": Highcharts.getOptions().colors[2] // Joe's color
        }],
        center: [100, 80],
        size: 100,
        showInLegend: false,
        dataLabels: {
            enabled: false
        }
    }]
});
var chart = Highcharts.chart('container13', {

    chart: {
        type: 'column'
    },

    title: {
        text: 'Responsive chart'
    },

    subtitle: {
        text: 'Resize the frame or click buttons to change appearance'
    },

    legend: {
            align: 'right',
                  verticalAlign: 'middle',
                             layout: 'vertical'
    },

    xAxis: {
        categories: ['Apples', 'Oranges', 'Bananas','Mangoes'],
        labels: {
            x: -10
        }
    },

    yAxis: {
        allowDecimals: false,
        title: {
            text: 'Amount'
        }
    },

    series: [{
        "name": "A",
        "data": [1, 4, 3, 2]
    }, {
        "name": "B",
        "data": [6, 4, 2, 5]
    }, {
        "name": "C",
        "data": [8, 4, 3, 2]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    align: 'center',
                    verticalAlign: 'bottom',
                    layout: 'horizontal'
                },
                yAxis: {
                    labels: {
                        align: 'left',
                        x: 0,
                        y: -5
                    },
                    title: {
                        text: null
                    }
                },
                subtitle: {
                    text: null
                },
                credits: {
                    enabled: false
                }
            }
        }]
    }
});
Highcharts.chart('container14', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Stacked bar chart'
    },
    xAxis: {
        categories: ['Apples', 'Oranges', 'Mangoes', 'Bananas']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Total fruit consumption'
        }
    },
    legend: {
        reversed: true
    },
    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },
    series: [{
        "name": "A",
        "data": [5, 3, 4, 7]
    }, {
        "name": "B",
        "data": [2, 2, 3, 2]
    }, {
        "name": "C",
        "data": [3, 4, 4, 2]
    }]
});