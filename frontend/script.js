document.addEventListener('DOMContentLoaded', function() {
    const loading = document.getElementById('loading');
    const readingsContainer = document.getElementById('readings-container');

    // Show loading
    loading.style.display = 'block';

    // Fetch data from API
    fetch('http://localhost:3000/api/weather')
        .then(response => response.json())
        .then(data => {
            // Update summary
            document.getElementById('max-temp').textContent = `${data.suhumax}°C`;
            document.getElementById('min-temp').textContent = `${data.suhumin}°C`;
            document.getElementById('avg-temp').textContent = `${data.suhurata}°C`;

            // Create reading cards
            data.nilai_suhu_max_humid_max.forEach(reading => {
                const card = document.createElement('div');
                card.className = 'reading-card';
                card.innerHTML = `
                    <h3>Reading #${reading.idx}</h3>
                    <div class="reading-item">
                        <div class="reading-label">Temperature</div>
                        <div class="reading-value">${reading.suhun}°C</div>
                    </div>
                    <div class="reading-item">
                        <div class="reading-label">Humidity</div>
                        <div class="reading-value">${reading.humid}%</div>
                    </div>
                    <div class="reading-item">
                        <div class="reading-label">Speed</div>
                        <div class="reading-value">${reading.kecerahan} km/h</div>
                    </div>
                    <div class="reading-item">
                        <div class="reading-label">Timestamp</div>
                        <div class="reading-value">${reading.timestamp}</div>
                    </div>
                `;
                readingsContainer.appendChild(card);
            });

            // Hide loading
            loading.style.display = 'none';
        })
        .catch(error => {
            console.error('Error:', error);
            loading.textContent = 'Error loading data';
        });
});