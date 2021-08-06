const fs = require('fs');
const path = require('path');
const menu = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','menu.json'),'utf-8'));

module.exports = {
    index : (req,res) => res.render('index',{
        menu
    }),
}