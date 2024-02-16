const express =  require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/api/login',(req,res)=>{
    console.log(req.body);
    res.redirect('https://clothingboutiques-98562.web.app/userdashboard')
});

app.listen(port,()=>{
    console.log(`server listening at http://localhost:${port}`)
}
)