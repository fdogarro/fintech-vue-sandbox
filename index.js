const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');
const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT);

console.log("Server Running on 3000");

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('dist'));
  app.use(express.static('src')); 
  app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname,  'dist', 'index.html'));
  })
}
