// on window lload run a function
window.onload = function() {
    // get input value for id januaryIncome to decemberIncome
    function getIncomeValues() {
    var months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
    var defaultValues = [2000, 2000, 3000, 4000, 1000, 1000, 3000, 4000, 1000, 5000, 2000, 3000];
    var incomeValues = [];

    for (var i = 0; i < months.length; i++) {
        var income = document.getElementById(months[i] + "Income").value || defaultValues[i];
        incomeValues.push(Number(income));
    }

    return incomeValues;
}

    // get input value for id januaryExpenses to decemberExpenses
    function getExpenseValues() {
    var months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
    //default values for expenses
    var defaultValues = [1000, 1000, 2000, 3000, 500, 500, 2000, 3000, 500, 4000, 1000, 2000];
    var expenseValues = [];

    for (var i = 0; i < months.length; i++) {
        var expense = document.getElementById(months[i] + "Expenses").value || defaultValues[i];
        expenseValues.push(Number(expense));
    }

    return expenseValues;
}
    // get content of canvas for id myChart
    var canvas = document.getElementById("myChart");
    // create new chart object
    var ctx = canvas.getContext("2d");
    // type of chart
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            // labels for x-axis
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 
            'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [{
                label: 'Income', // label of data
                // data for chart
                data: getIncomeValues(), // y-axis data
                backgroundColor: [ // background color of bars
                'rgba(0, 255, 127, 0.2)', // spring green
                'rgba(0, 255, 127, 0.2)', // spring green
                'rgba(0, 255, 127, 0.2)', // spring green
                'rgba(0, 255, 127, 0.2)', // spring green
                'rgba(0, 255, 127, 0.2)', // spring green
                'rgba(0, 255, 127, 0.2)', // spring green
                'rgba(0, 255, 127, 0.2)', // spring green
                'rgba(0, 255, 127, 0.2)', // spring green
                'rgba(0, 255, 127, 0.2)', // spring green
                'rgba(0, 255, 127, 0.2)', // spring green
                'rgba(0, 255, 127, 0.2)', // spring green
                'rgba(0, 255, 127, 0.2)', // spring green
                ],
                borderColor: [ // border color of bars
                    'rgba(255, 99, 132, 1)', // red
                    'rgba(54, 162, 235, 1)', // blue
                    'rgba(255, 206, 86, 1)', // yellow
                    'rgba(75, 192, 192, 1)', // green
                    'rgba(153, 102, 255, 1)', // purple
                    'rgba(255, 159, 64, 1)', // orange
                    'rgba(255, 99, 71, 0.2)', // pink
                    'rgba(106, 90, 205, 0.2)', // indigo
                    'rgba(191, 122, 234, 0.2)', // ube
                    'rgba(255, 215, 0, 0.2)', // gold
                    'rgba(255, 127, 80, 0.2)', // coral
                    'rgba(0, 255, 127, 0.2)' // spring green
                ],
                borderWidth: 1 // border width of bars
            },
            {
                label: 'Expenses', // label of data
                // data for chart  
                data: getExpenseValues(), // y-axis data
                backgroundColor: [ // background color of bars
                'rgba(255, 99, 80, 0.2)', // rust red
                'rgba(255, 99, 80, 0.2)', // rust red
                'rgba(255, 99, 80, 0.2)', // rust red
                'rgba(255, 99, 80, 0.2)', // rust red
                'rgba(255, 99, 80, 0.2)', // rust red
                'rgba(255, 99, 80, 0.2)', // rust red
                'rgba(255, 99, 80, 0.2)', // rust red
                'rgba(255, 99, 80, 0.2)', // rust red
                'rgba(255, 99, 80, 0.2)', // rust red
                'rgba(255, 99, 80, 0.2)', // rust red
                'rgba(255, 99, 80, 0.2)', // rust red
                'rgba(255, 99, 80, 0.2)', // rust red
                ],
                borderColor: [ // border color of bars
                    'rgba(255, 99, 132, 1)', // red
                    'rgba(54, 162, 235, 1)', // blue
                    'rgba(255, 206, 86, 1)', // yellow
                    'rgba(75, 192, 192, 1)', // green
                    'rgba(153, 102, 255, 1)', // purple
                    'rgba(255, 159, 64, 1)', // orange
                    'rgba(255, 99, 71, 0.2)', // pink
                    'rgba(106, 90, 205, 0.2)', // indigo
                    'rgba(191, 122, 234, 0.2)', // ube
                    'rgba(255, 215, 0, 0.2)', // gold
                    'rgba(255, 127, 80, 0.2)', // coral
                    'rgba(0, 255, 127, 0.2)' // spring green
                ],
                borderWidth: 1 // border width of bars
            },
        ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true // start y-axis from 0
                    }
                }]
            }
        }
    });
    // get element for id chart-tab
    var chartTab = document.getElementById("chart-tab");
    // add event listener for click
    chartTab.addEventListener("click", function() {
        myChart.data.datasets[0].data = getIncomeValues();
        myChart.data.datasets[1].data = getExpenseValues();
        myChart.update();
    });
}
// 'rgba(255, 99, 80, 0.2)' // rust red
// 'rgba(0, 255, 127, 0.2)' // spring green