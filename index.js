const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/download', (req, res) => {
    let filePath = path.join(__dirname, 'public', 'Myfile.pdf');
    if (!fs.existsSync(filePath)) {
        filePath = path.join(__dirname, 'public', 'myfile.pdf');
    }

    if (fs.existsSync(filePath)) {
        res.download(filePath);
    } else {
        res.status(404).send('الملف غير موجود داخل مجلد public');
    }
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});
