const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000
//cors()의 괄호안에 작성해서 조건에 따라서 요청에 따라서 허용여부가 갈리지만
//지금은 모든 요청에 대해서 허용을 해준다
app.use(cors())
//HTTP.메소드('라우팅', 콜백함수)
//HTTP 메소드 : 요청의 목적, 종류를 알리는 수단 ex>get, post
//라우팅(routing) : asdf.com/xxxxx.xxxx => 여기서 xxx를 라우팅이라고 한다.
//라우팅에 따라서 보여지는 페이지가 달라진다.
//콜백함수 : 함수(끝나고 실행할 함수)
//req : request , res : response

// '/' 는 라우팅의 위치이다. /는 root이고 /dog는 root밑의 dog라는 주소이다.
// express는 받은 data를 front에 돌려주는 역할이다.
// axios는 server에 data를 요청해서 받아오는 기능이다.

//query는 key : value로 이루어져 있다.
// 대

app.get('/', (req, res) => {
    res.send('Hello World')
})
app.get('/dog', (req, res) => {
    res.send(
        {'sound' : '멍멍'} +
        '<p>' +
        //위가 json 형태의 자료형이다.
        //json형태만 있을때는 res.send가 아니라 res.json으로 명시적으로 해도 되기는하다.
        "<a href = 'https://www.youtube.com/watch?v=Tt_tKhhhJqY'>학습한 영상</a>"
    );
    //res.send()
})
app.get('/cat', (req, res) => {
    res.json({'sound' : '야옹'})
})
app.get('/user/:id', (req, res) => {
    const q = req.params
    console.log(q.id)

    res.json({'userid' : q.id})
})
app.get('/query/:id', (req, res) => {
    const q = req.query
    console.log(q.q)
    console.log(q.name)

    res.json({'userid' : q.name})
})
app.get('/sound/:name', (req, res) => {
    const { name } = req.params
    if(name =="dog"){
        res.json({'sound' : '멍멍'})
    }else if(name == "cat"){
        res.json({'sound' : '야옹'})
    }else if(name == "pig"){
        res.json({'sound' : '꿀꿀'})
    }else{
        res.json({'sound' : '알수없음'})
    }

    
})

// ip(주소)의 특정 port(문)를 정해서 들음 port마다 정해진 규격이 있음
// ip는 053과 같은 지역번호, port는 그 외 번호
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})