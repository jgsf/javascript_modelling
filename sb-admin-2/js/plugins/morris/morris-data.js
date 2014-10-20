$(function() {

    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2010 Q1',
            CIN: 2666,
            CP: null,
            LAC: 2647
        }, {
            period: '2010 Q2',
            CIN: 2778,
            CP: 2294,
            LAC: 2441
        }, {
            period: '2010 Q3',
            CIN: 4912,
            CP: 1969,
            LAC: 2501
        }, {
            period: '2010 Q4',
            CIN: 3767,
            CP: 3597,
            LAC: 5689
        }, {
            period: '2011 Q1',
            CIN: 6810,
            CP: 1914,
            LAC: 2293
        }, {
            period: '2011 Q2',
            CIN: 5670,
            CP: 4293,
            LAC: 1881
        }, {
            period: '2011 Q3',
            CIN: 4820,
            CP: 3795,
            LAC: 1588
        }, {
            period: '2011 Q4',
            CIN: 15073,
            CP: 5967,
            LAC: 5175
        }, {
            period: '2012 Q1',
            CIN: 10687,
            CP: 4460,
            LAC: 2028
        }, {
            period: '2012 Q2',
            CIN: 8432,
            CP: 5713,
            LAC: 1791
        }],
        xkey: 'period',
        ykeys: ['CIN', 'CP', 'LAC'],
        labels: ['CIN', 'CP', 'LAC'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Chid In Need",
            value: 1200
        }, {
            label: "Child Protection",
            value: 500
        }, {
            label: "Looked After Children",
            value: 700
        }],
        resize: true
    });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '2006',
            a: 100,
            b: 90
        }, {
            y: '2007',
            a: 75,
            b: 65
        }, {
            y: '2008',
            a: 50,
            b: 40
        }, {
            y: '2009',
            a: 75,
            b: 65
        }, {
            y: '2010',
            a: 50,
            b: 40
        }, {
            y: '2011',
            a: 75,
            b: 65
        }, {
            y: '2012',
            a: 100,
            b: 90
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        hideHover: 'auto',
        resize: true
    });

});
