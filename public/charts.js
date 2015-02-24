
$(document).ready(function()
{
    // Apply Sparklines
    makeSparkline();
});



// Convert the span of measures into the sparkline
function makeSparkline()
{
    $('.sparkline').sparkline(openVals,
    {
        enableTagOptions: true,

        type: 'bar',
        tagValuesAttribute: 'Open',
        chartRangeMin: 'sparkChartRangeMin',
        chartRangeMax: 'sparkChartRangeMax',
        height: '45px',
        barColor: '#C8C8C8',
        barWidth: 10,
        barSpacing: 0,
        disableInteraction: false
    }
  );

    $('.sparkline').sparkline(highVals,
    {
        composite: true,

        enableTagOptions: true,

        type: 'bar',
        tagValuesAttribute: 'High',
        chartRangeMin: 'sparkChartRangeMin',
        chartRangeMax: 'sparkChartRangeMax',
        height: '45px',
        barColor: '#00FF00',
        barWidth: 10,
        barSpacing: 0,
        disableInteraction: false
    }
  );

    $('.sparkline').sparkline(lowVals,
    {
        composite: true,

        enableTagOptions: true,

        type: 'line',
        tagValuesAttribute: 'Low',
        chartRangeMin: 'sparkChartRangeMin',
        chartRangeMax: 'sparkChartRangeMax',
        height: '45px',
        lineWidth: 2,
        lineColor: '#007fc0',
        fillColor: false,
        spotRadius: 2,
        spotColor: false,
        minSpotColor: '#ff0000',
        maxSpotColor: '#0000ff',
        disableInteraction: false
    }
  );
   $('.sparkline').sparkline(closeVlas,
    {
        composite: true,

        enableTagOptions: true,

        type: 'line',
        tagValuesAttribute: 'Close',
        chartRangeMin: 'sparkChartRangeMin',
        chartRangeMax: 'sparkChartRangeMax',
        height: '45px',
        lineWidth: 2,
        lineColor: '#007fc0',
        fillColor: false,
        spotRadius: 2,
        spotColor: false,
        minSpotColor: '#ff0000',
        maxSpotColor: '#0000ff',
        disableInteraction: false
    }
  );
 

};