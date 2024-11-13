const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Enable CORS
app.use(cors());

// Sample data
const weatherData = {
    suhumax: 36,
    suhumin: 21,
    suhurata: 28.35,
    nilai_suhu_max_humid_max: [
        {
            idx: 101,
            suhun: 36,
            humid: 36,
            kecerahan: 25,
            timestamp: "2010-09-18 07:23:48"
        },
        {
            idx: 226,
            suhun: 36,
            humid: 36,
            kecerahan: 27,
            timestamp: "2011-05-02 12:29:34"
        }
    ],
    month_year_max: [
        {
            month_year: "9-2010"
        },
        {
            month_year: "5-2011"
        }
    ]
};

// API endpoint
app.get('/api/weather', (req, res) => {
    res.json(weatherData);
});

// Error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        error: 'Something went wrong!',
        message: err.message
    });
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});