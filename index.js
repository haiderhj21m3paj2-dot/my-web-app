const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/download', (req, res) => {
    const filePath = path.join(__dirname, 'public', 'my-file.pdf');
    res.download(filePath, 'downloaded-file.pdf', (err) => {
        if (err) {
            res.status(404).send("الملف غير موجود حالياً!");
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
