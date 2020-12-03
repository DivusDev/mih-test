const express = require('express'),
    app       = express(),
    fetch     = require('node-fetch'),
    request   = require('request'),
    axios     = require('axios'),
    cors      = require('cors');


//middleware
app.use(cors());

    //api key 3f35b2ddadbcb04b9bdd89fb3b1a336e

app.get("/", (req, res) => {
    res.send("Yay it works!")
})

app.get("/location", (req, res) => {
    fetch("https://developers.zomato.com/api/v2.1/locations?query=hawaii%20kai", { method:"get", headers: {
        "user-key": "3f35b2ddadbcb04b9bdd89fb3b1a336e",
        "Accept": "application/json"
    }}).then(apiRes => {
        return apiRes.json()
    }).then(json => {
        res.send(json)
    }).catch(() => {
        res.send("Uh oh something went wrong")
    })

    
})

app.get("/search/:query", (req, res) => {
    console.log("hit api")
    //fetch entity type and id from location search api
    fetch("https://developers.zomato.com/api/v2.1/locations?query=" + req.params.query, { method:"get", headers: {
        "user-key": "3f35b2ddadbcb04b9bdd89fb3b1a336e",
        "Accept": "application/json"
    }}).then(apiRes => {
        return apiRes.json()
    }).then(json => {
        //use fetched data to find nearby resturaunts
        fetch(`https://developers.zomato.com/api/v2.1/location_details?entity_id=${json['location_suggestions'][0]['entity_id']}&entity_type=${json['location_suggestions'][0]['entity_type']}`, { method:"get", headers: {
        "user-key": "3f35b2ddadbcb04b9bdd89fb3b1a336e",
        "Accept": "application/json"
        }}).then(apiRes => {
            return apiRes.json()
        }).then(json => {
            //send resturaunt ids back to client
            console.log("sent list back to client")
            console.log(json)
            res.json(json)
        })
    }).catch(() => {
        res.send("Uh oh something went wrong")
    })
})

app.get('/resturaunt/:id', (req,res) => {
    fetch("https://developers.zomato.com/api/v2.1/restaurant?res_id=" + req.params.id, { method:"get", headers: {
        "user-key": "3f35b2ddadbcb04b9bdd89fb3b1a336e",
        "Accept": "application/json"
    }}).then(apiRes => {
        return apiRes.json()
    }).then(json => {
        res.send(json)
    }).catch(() => {
        res.send("Uh oh something went wrong")
    })
})



app.listen(8888, () => {
    console.log("Started")
})