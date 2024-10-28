//Yêu cầu module express
const express = require('express');

//tạo 1 ứng dụng express
const app = express();

//thiết lập cổng cho server, ở đây là cổng 3000
const port = 3000;

//Middlweare để phân tích dl từ require
app.use(express.urlencoded({ extended: true}));

//Middlweare để phân tích dl json từ body của yêu cầu
//điều này cho phép express hiểu và xử lý dl json từ request
app.use(express.json());

//middeleare 
app.use(express.static('public'));

//
app.use(express.urlencoded({extended: true}));
//định nghĩa route chính trẩ về trang chào mưng khi người dùng truy cập
app.get('/', (req, res) => {
    res.send('Chào mừng bạn đến với ứng dụng web động!');
});

//Router Post nhận dl từ client và trả về phản hồi

app.post('/submit', (req, res) => {
    //lấy thuôc tính name từ body của request
    const {name} = req.body;

    //nếu name tồn tại , trả về phản hồi chào mừng với tên đã đăng nhập
    if (name){
        res.json({message: `Chao mừng ${name}!`});
    } else {
        //nếu name không tồn tại 
        res.status(400).json({message: 'Vui lòng cung cấp tên của bạn.'});
    }
})

//server lắng nghe tại cổng 3000
//khi servẻ bắt đầu chạy , nó sẽ lắng nghe các yêu cầu từ coongr đã chỉ 
app.listen(port, () => {
    console.log(`Ứng dụng đang chạy tại http://localhost:${port}`);
});
