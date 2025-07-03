const express = require('express');
const cors = require('cors');
const fs = require('fs');
const multer = require('multer');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads')); // لعرض ملفات CV

// ⬇️ التخزين للـ CV باستخدام multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // يرفع داخل uploads/
    },
    filename: (req, file, cb) => {
        cb(null, 'resume.pdf'); // دائمًا يحفظه بهذا الاسم
    },
});
const upload = multer({ storage });

// ⬇️ مسار استقبال الرسائل
app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;

    const messages = fs.existsSync('messages.json') ?
        JSON.parse(fs.readFileSync('messages.json')) :
        [];

    messages.push({ name, email, message, date: new Date() });

    fs.writeFileSync('messages.json', JSON.stringify(messages, null, 2));

    res.json({ success: true, message: 'Message saved!' });
});

// ⬇️ مسار رفع السيرة الذاتية
app.post('/upload-cv', upload.single('cv'), (req, res) => {
    res.json({ success: true, url: `/uploads/resume.pdf` });
});

// ⬇️ مسار عرض رابط السيرة الذاتية
app.get('/cv', (req, res) => {
    res.sendFile(path.join(__dirname, 'uploads', 'resume.pdf'));
});

app.listen(5000, () => {
    console.log('🚀 Server running on http://localhost:5000');
});