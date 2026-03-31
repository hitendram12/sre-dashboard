function loadServices() {
    const services = [
        "MySQL (Replication, Backup - Percona)",
        "MongoDB (Replica Set, Sharding)",
        "Mail Server (iRedMail, Postfix, DKIM, DMARC)",
        "Nginx (Load Balancer, SSL, Reverse Proxy)",
        "Apache Tomcat (Java Middleware)",
        "On-Prem Infrastructure Management"
    ];

    let html = "";
    services.forEach(s => {
        html += `<li>${s}</li>`;
    });

    document.getElementById('servicesList').innerHTML = html;
}

loadServices();
