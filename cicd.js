function runPipeline() {
    const stages = ["Build", "Test", "Deploy"];
    let html = "";

    stages.forEach((stage, i) => {
        setTimeout(() => {
            html += `<p>✅ ${stage} completed</p>`;
            document.getElementById('pipeline').innerHTML = html;
        }, i * 2000);
    });
}
