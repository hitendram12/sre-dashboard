function drawChart(id, value) {
    const canvas = document.getElementById(id);
    const ctx = canvas.getContext('2d');

    canvas.width = 300;
    canvas.height = 150;

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "lime";
    ctx.fillRect(0, canvas.height - value, 50, value);
}

function loadCharts() {
    fetch('data.json')
        .then(res => res.json())
        .then(data => {
            drawChart('cpuChart', data.cpu);
            drawChart('memoryChart', data.memory);
        });
}

setInterval(loadCharts, 3000);
loadCharts();
