function loadInfra() {
    const infra = `
        <div>
            🌐 AWS VPC
            <ul>
                <li>EC2 - App Server</li>
                <li>EC2 - DB Server</li>
                <li>S3 - Storage</li>
                <li>Route53 - DNS</li>
            </ul>
        </div>
    `;
    document.getElementById('infraView').innerHTML = infra;
}

loadInfra();
