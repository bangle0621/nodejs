const express = require('express');
const app = express();
const port = 3000;

// JSON 데이터를 받을 수 있도록 설정
app.use(express.json()); 


// 기본 루트
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// about 페이지
app.get('/about', (req, res) => {
  res.send('This is the About page!');
});

// contact 페이지
app.get('/contact', (req, res) => {
  res.send('Contact us at contact@myapp.com');
});

// POST 요청을 처리하는 라우트
app.post('/send', (req, res) => {
  const { name, message } = req.body;  // 클라이언트에서 보낸 데이터 받기
  res.send(`Received your message: ${message}, from ${name}`);  // 클라이언트에게 응답 보내기
});



// 포트 리스닝
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

