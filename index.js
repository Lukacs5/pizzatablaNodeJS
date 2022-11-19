const express = require('express');

const app = express();
app.use(express.json());

let pizzatabla =[{nev:'Áfonyás',kategorianev:'király',vegetarianus:0},
{nev:'Babos',kategorianev:'lovag',vegetarianus:0},
{nev:'Barbecue chicken',kategorianev:'lovag',vegetarianus:0},
{nev:'Betyáros',kategorianev:'király',vegetarianus:0},
{nev:'Caribi',kategorianev:'apród',vegetarianus:0},
{nev:'Country',kategorianev:'király',vegetarianus:0},
{nev:'Csabesz',kategorianev:'király',vegetarianus:0},
{nev:'Csupa sajt',kategorianev:'lovag',vegetarianus:1},
{nev:'Erdő kapitánya',kategorianev:'apród',vegetarianus:0},
{nev:'Erős János',kategorianev:'lovag',vegetarianus:0},
{nev:'Excellent',kategorianev:'király',vegetarianus:0},
{nev:'Főnök kedvence',kategorianev:'lovag',vegetarianus:0},
{nev:'Francia',kategorianev:'főnemes',vegetarianus:0},
{nev:'Frankfurti',kategorianev:'király',vegetarianus:0},
{nev:'Füstös',kategorianev:'lovag',vegetarianus:0},
{nev:'Gino',kategorianev:'király',vegetarianus:0},
{nev:'Gombás',kategorianev:'apród',vegetarianus:1},
{nev:'Góré',kategorianev:'lovag',vegetarianus:0},
{nev:'Görög',kategorianev:'király',vegetarianus:0},
{nev:'Gyros pizza',kategorianev:'király',vegetarianus:0},
{nev:'HamAndEggs',kategorianev:'lovag',vegetarianus:0},
{nev:'Hamm',kategorianev:'lovag',vegetarianus:0},
{nev:'Hawaii',kategorianev:'főnemes',vegetarianus:0},
{nev:'Hellas',kategorianev:'király',vegetarianus:0},
{nev:'Hercegnő',kategorianev:'király',vegetarianus:0},
{nev:'Ilike',kategorianev:'lovag',vegetarianus:0},
{nev:'Ínyenc',kategorianev:'lovag',vegetarianus:0},
{nev:'Jázmin álma',kategorianev:'lovag',vegetarianus:0},
{nev:'Jobbágy',kategorianev:'király',vegetarianus:0},
{nev:'Juhtúrós',kategorianev:'lovag',vegetarianus:0},
{nev:'Kagylós',kategorianev:'király',vegetarianus:0},
{nev:'Kétszínű',kategorianev:'lovag',vegetarianus:0},
{nev:'Kiadós',kategorianev:'király',vegetarianus:0},
{nev:'Király pizza',kategorianev:'király',vegetarianus:0},
{nev:'Kívánság',kategorianev:'lovag',vegetarianus:1},
{nev:'Kolbászos',kategorianev:'apród',vegetarianus:0},
{nev:'Lagúna',kategorianev:'király',vegetarianus:1},
{nev:'Lecsó',kategorianev:'király',vegetarianus:0},
{nev:'Maffiózó',kategorianev:'lovag',vegetarianus:0},
{nev:'Magvas',kategorianev:'király',vegetarianus:1},
{nev:'Magyaros',kategorianev:'lovag',vegetarianus:0},
{nev:'Máj Fair Lady',kategorianev:'király',vegetarianus:0},
{nev:'Mamma fia',kategorianev:'király',vegetarianus:0},
{nev:'Mexikói',kategorianev:'főnemes',vegetarianus:0},
{nev:'Mixi',kategorianev:'főnemes',vegetarianus:1},
{nev:'Nikó',kategorianev:'király',vegetarianus:0},
{nev:'Nordic',kategorianev:'király',vegetarianus:0},
{nev:'Nyuszó-Muszó',kategorianev:'király',vegetarianus:0},
{nev:'Pacalos',kategorianev:'lovag',vegetarianus:0},
{nev:'Pástétomos',kategorianev:'király',vegetarianus:0},
{nev:'Pásztor',kategorianev:'lovag',vegetarianus:0},
{nev:'Pipis',kategorianev:'lovag',vegetarianus:0},
{nev:'Popey',kategorianev:'király',vegetarianus:0},
{nev:'Quattro',kategorianev:'király',vegetarianus:0},
{nev:'Ráki',kategorianev:'király',vegetarianus:0},
{nev:'Rettenetes magyar',kategorianev:'lovag',vegetarianus:0},
{nev:'Röfi',kategorianev:'király',vegetarianus:0},
{nev:'Sajtos',kategorianev:'apród',vegetarianus:1},
{nev:'So-ku',kategorianev:'apród',vegetarianus:0},
{nev:'Son-go-ku',kategorianev:'főnemes',vegetarianus:1},
{nev:'Sonkás',kategorianev:'apród',vegetarianus:0},
{nev:'Spanyol',kategorianev:'király',vegetarianus:0},
{nev:'Spencer',kategorianev:'főnemes',vegetarianus:0},
{nev:'Szalámis',kategorianev:'apród',vegetarianus:0},
{nev:'Szardíniás',kategorianev:'lovag',vegetarianus:0},
{nev:'Szerzetes',kategorianev:'király',vegetarianus:0},
{nev:'Szőke kapitány',kategorianev:'király',vegetarianus:0},
{nev:'Tenger gyümölcsei',kategorianev:'király',vegetarianus:0},
{nev:'Tonhalas',kategorianev:'lovag',vegetarianus:0},
{nev:'Törperős',kategorianev:'lovag',vegetarianus:0},
{nev:'Tündi kedvence',kategorianev:'király',vegetarianus:0},
{nev:'Tüzes halál',kategorianev:'király',vegetarianus:0},
{nev:'Vega',kategorianev:'lovag',vegetarianus:1},
{nev:'Zöldike',kategorianev:'főnemes',vegetarianus:1}];


app.get('/',(req,res) =>{
    res.send('Hello Word')
})
app.get('/api',(req,res) =>{
    jsonpizza = JSON.stringify(pizzatabla);
    res.send(jsonpizza)
})
app.get('/api/:nev',(req,res) =>{
    jsonpizza = JSON.stringify(pizzatabla);
  var pizza= pizzatabla.find(c => c.nev === req.params.nev);
  if(!pizza) res.status(404).send('nincs ilyen nev')
  res.send(pizza);
})

app.post('/api/',(req,res) =>{
var onepizza={
    nev: req.body.nev,
    kategorianev: req.body.kategorianev,
    vegetarianus: req.body.vegetarianus
};
    pizzatabla.push(onepizza);
    res.send(onepizza);
})

app.put('/api/:nev',(req,res) =>{
    var onepizza={
        nev: req.body.nev,
        kategorianev: req.body.kategorianev,
        vegetarianus: req.body.vegetarianus
    };
    pizzatabla.find(c => c.nev === req.params.nev).nev = onepizza.nev
    pizzatabla.find(c => c.nev === req.params.nev).kategorianev = onepizza.kategorianev
    pizzatabla.find(c => c.nev === req.params.nev).vegetarianus = onepizza.vegetarianus
        res.send(onepizza);
  })

app.delete('/api/:nev',(req,res) =>{
   
   seged = req.params.nev
   pizzatabla.splice(Indexhelper(pizzatabla,seged),1);
   
   res.send("OK");
})


function Indexhelper(arr,helper){
    for (let i = 0; i < arr.length; i++) {
        if (pizzatabla[i].nev == helper)
        {
            return i;
        }
    }
}

app.listen(8082, ()=> console.log("8082 I lisen you ...."))
