const express= require('express');
const path= require('path');
const port= 3030;


const app= express();

app.use(express.static(path.resolve(__dirname,'public')))

app.get('/',(req,res)=>res.sendFile(path.resolve(__dirname,'views','home.html')))
app.get('/ayuda',(req,res)=>res.sendFile(path.resolve(__dirname,'views','ayuda.html')))
app.get('/ofertas',(req,res)=>res.sendFile(path.resolve(__dirname,'views','ofertas.html')))
app.get('/login',(req,res)=>res.sendFile(path.resolve(__dirname,'views','login.html')))
app.get('/misCompras',(req,res)=>res.sendFile(path.resolve(__dirname,'views','misCompras.html')))
app.get('/register',(req,res)=>res.sendFile(path.resolve(__dirname,'views','register.html')))
app.get('/vender',(req,res)=>res.sendFile(path.resolve(__dirname,'views','vender.html')))
app.get('/tiendasOficiales',(req,res)=>res.sendFile(path.resolve(__dirname,'views','tiendasOficiales.html')))

app.listen(port,() => console.log(`Servidor levantado en http://localhost:${port}`))