
google.charts.load('current', {
       'packages':['geochart','corechart', 'bar','corechart'],
       // Note: you will need to get a mapsApiKey for your project.
       // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
       'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
     });
     google.charts.setOnLoadCallback(drawRegionsMap);



     function drawRegionsMap() {
       var data = google.visualization.arrayToDataTable([
         ['Country'],
         ['South Korea'],
         ['United States'],
         ['Brazil'],
         ['Singapore'],
         ['Bolivia'],
         ['Vietnam'],
         ['Kyrgyzstan'],
         ['Kazakhstan'],
         ['France'],
         ['Croatia'],
         ['Greece'],
         ['Poland'],
         ['Australia'],
         ['Monaco'],
         ['Peru'],
         ['Czech Republic'],
         ['Japan'],
         ['China'],
         ['Italy'],
         ['Romania'],
         ['Netherlands'],
         ['Chile'],
         ['United Arab Emirates']
       ]);

       var options = {};

       var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
       chart.draw(data, options);
     }

google.charts.setOnLoadCallback(drawMultSeries);
       function drawMultSeries() {
      var data = new google.visualization.DataTable();
      data.addColumn('timeofday', 'Time of Day');
      data.addColumn('number', 'Motivation Level');
      data.addColumn('number', 'Energy Level');

      data.addRows([
        [{v: [8, 0, 0], f: '8 am'}, 10, 10],
        [{v: [9, 0, 0], f: '9 am'}, 9, 5],
        [{v: [10, 0, 0], f:'10 am'}, 8, 5],
        [{v: [11, 0, 0], f: '11 am'}, 7, 5],
        [{v: [12, 0, 0], f: '12 pm'}, 6, 10],
        [{v: [13, 0, 0], f: '1 pm'}, 5, 5],
        [{v: [14, 0, 0], f: '2 pm'}, 4, 1],
        [{v: [15, 0, 0], f: '3 pm'}, 3, 0.5],
        [{v: [16, 0, 0], f: '4 pm'}, 2, 5],
        [{v: [17, 0, 0], f: '5 pm'}, 1, 10],
      ]);

      var options = {
        title: '',
        hAxis: {
          title: 'Time of Day',
          format: 'h:mm a',
          viewWindow: {
            min: [7, 30, 0],
            max: [17, 30, 0]
          }
        },
        vAxis: {
          title: 'Rating (scale of 1-100)'
        }
      };

      var chart = new google.visualization.ColumnChart(
        document.getElementById('chart_div'));



       chart.draw(data, options);
     }


     google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Taste', 'Percentage'],
          ['Sweet',     1],
          ['Salty',      1],
          ['Savoury',  5]

        ]);

        var options = {
          title: 'Taste we like..',
          pieHole: 0.4,
          height: 300,
        };

        var chart = new google.visualization.PieChart(document.getElementById('lunch_div'));
        chart.draw(data, options);
      }
      google.charts.setOnLoadCallback(drawChart);
       function drawChart2() {
         var data2 = google.visualization.arrayToDataTable([
           ['Age', 'number'],
           ['35-44',  1],
           ['25-34',  4],
           ['18-24',  2]

         ]);

         var options2 = {
           title: 'Taste we like..',
           pieHole: 0.4,
           height: 300,
         };

         var chart2 = new google.visualization.PieChart(document.getElementById('age_div'));
         chart.draw(data2, options2);
       }
