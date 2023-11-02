// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Be Vietnam Pro', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var ctxTongTienDoMinhChungCacTinh = document.getElementById("TongTienDoMinhChungCacTinh");
var TongTienDoMinhChungCacTinh = new Chart(ctxTongTienDoMinhChungCacTinh, {
  type: 'pie',
  data: {
    labels: ["Các tỉnh đã hoàn thành", "Các tỉnh chưa hoàn thành"],
    datasets: [{
      data: [67, 33],
      backgroundColor: ['#55C381', '#FF3A29'],
      hoverBackgroundColor: ['#55C381', '#FF3A29'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
    },
    legend: {
      display: false
    },
    events: false,
    animation: {
      duration: 500,
      easing: "easeOutQuart",
      onComplete: function () {
        var ctx = this.chart.ctx;
        ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontFamily, 'normal', Chart.defaults.global.defaultFontFamily);
        ctx.textAlign = 'center';
        ctx.textBaseline = 'bottom';

        this.data.datasets.forEach(function (dataset) {

          for (var i = 0; i < dataset.data.length; i++) {
            var model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model,
                total = dataset._meta[Object.keys(dataset._meta)[0]].total,
                mid_radius = model.innerRadius + (model.outerRadius - model.innerRadius)/2,
                start_angle = model.startAngle,
                end_angle = model.endAngle,
                mid_angle = start_angle + (end_angle - start_angle)/2;

            var x = mid_radius * Math.cos(mid_angle);
            var y = mid_radius * Math.sin(mid_angle);

            ctx.font = 1.2 + "em sans-serif";
            ctx.fillStyle = '#fff';
            if (i == 3){ // Darker text color for lighter background
              ctx.fillStyle = '#444';
            }
            var percent = String(Math.round(dataset.data[i]/total*100)) + "%";      
            //Don't Display If Legend is hide or value is 0
            if(dataset.data[i] != 0 && dataset._meta[0].data[i].hidden != true) {
              //ctx.fillText(dataset.data[i], model.x + x, model.y + y);
              // Display percent in another line, line break doesn't work for fillText
              ctx.fillText(percent, model.x + x, model.y + y + 15); 
            }
          }
        });               
      }
    }
  },
});

var ctxHoanThanh = document.getElementById("HoanThanh");
var HoanThanh = new Chart(ctxHoanThanh, {
  type: 'doughnut',
  data: {
    labels: ["Hoàn thành", ""],
    datasets: [{
      data: [67, 33],
      backgroundColor: ['#55C381','#E2FBD7'],
      hoverBackgroundColor: ['#55C381','#E2FBD7'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    cutoutPercentage: 80,
    tooltips: {
    	filter: function(item, data) {
        var label = data.labels[item.index];
        if (label) return item;
      }
    },
    animation: {
      duration: 500,
      easing: "easeOutQuart",
      onComplete: function () {
        var width = this.chart.chart.width,
          height = this.chart.chart.height,
          ctx = this.chart.ctx

        ctx.restore();
        var fontSize = (height / 114).toFixed(2);
        ctx.font = fontSize + "em sans-serif";
        ctx.textBaseline = "middle";

        var text = 67+"%",
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2;

        ctx.fillText(text, textX, textY);
      }
    }
  }
});


var ctxChuaHoanThanh = document.getElementById("ChuaHoanThanh");
var ChuaHoanThanh = new Chart(ctxChuaHoanThanh, {
  type: 'doughnut',
  data: {
    labels: ["Chưa hoàn thành", ""],
    datasets: [{
      data: [33, 67],
      backgroundColor: ['#FF3A29', "#FFE5D3"],
      hoverBackgroundColor: ['#FF3A29', "#FFE5D3"],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    cutoutPercentage: 80,
    tooltips: {
    	filter: function(item, data) {
        var label = data.labels[item.index];
        if (label) return item;
      }
    },
    animation: {
      duration: 500,
      easing: "easeOutQuart",
      onComplete: function () {
        var width = this.chart.chart.width,
          height = this.chart.chart.height,
          ctx = this.chart.ctx

        ctx.restore();
        var fontSize = (height / 114).toFixed(2);
        ctx.font = fontSize + "em sans-serif";
        ctx.textBaseline = "middle";

        var text = 33+"%",
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2;
        ctx.fillText(text, textX, textY);
      }
    }
  }
});


function textCenter(val, myctx) {
  Chart.pluginService.register({
    beforeDraw: function(chart) {
      var width = chart.chart.width,
          height = chart.chart.height,
          ctx = myctx;

      ctx.restore();
      var fontSize = (height / 114).toFixed(2);
      ctx.font = fontSize + "em sans-serif";
      ctx.textBaseline = "middle";

      var text = val+"%",
          textX = Math.round((width - ctx.measureText(text).width) / 2),
          textY = height / 2;

      ctx.fillText(text, textX, textY);
      ctx.save();
    }
  });
}