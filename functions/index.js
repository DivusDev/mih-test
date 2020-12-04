const functions = require('firebase-functions'),
      express   = require('express'),
      app       = express(),
      fetch     = require('node-fetch'),
      cors      = require('cors');


//middleware
app.use(cors());

    //api key 3f35b2ddadbcb04b9bdd89fb3b1a336e
    //2ND API KEY 495cb450c57d7bf3c5ea5ea58ca98552

const key = "495cb450c57d7bf3c5ea5ea58ca98552"

app.get("/", (req, res) => {
    res.send("Yay it works!")
})

app.get("/location", (req, res) => {
    fetch("https://developers.zomato.com/api/v2.1/locations?query=hawaii%20kai", { method:"get", headers: {
        "user-key": key,
        "Accept": "application/json"
    }}).then(apiRes => {
        return apiRes.json()
    }).then(json => {
        return res.send(json)
    }).catch(() => {
        res.send("Uh oh something went wrong")
    })

    
})

app.get("/search/:query", (req, res) => {
    console.log("hit api")
    //fetch entity type and id from location search api
    fetch("https://developers.zomato.com/api/v2.1/locations?query=" + req.params.query, { method:"get", headers: {
        "user-key": key,
        "Accept": "application/json"
    }}).then(apiRes => {
        return apiRes.json()
    }).then(json => {
        if (json['location_suggestions'].length < 1) res.json({})
        //use fetched data to find nearby resturaunts
        fetch(`https://developers.zomato.com/api/v2.1/location_details?entity_id=${json['location_suggestions'][0]['entity_id']}&entity_type=${json['location_suggestions'][0]['entity_type']}`, { method:"get", headers: {
        "user-key": key,
        "Accept": "application/json"
        }}).then(apiRes => {
            return apiRes.json()
        }).then(json => {
            //send resturaunt ids back to client
            console.log("sent list back to client")
            console.log(json)
            return res.json(json)
        }).catch(() => {
            res.send("Uh oh something went wrong")
        })
        throw Error
    }).catch(() => {
        res.send("Uh oh something went wrong")
    })
})

app.get('/resturaunt/:id', (req,res) => {
    fetch("https://developers.zomato.com/api/v2.1/restaurant?res_id=" + req.params.id, { method:"get", headers: {
        "user-key": key,
        "Accept": "application/json"
    }}).then(apiRes => {
        return apiRes.json()
    }).then(json => {
        return res.send(json)
    }).catch(() => {
        res.send("Uh oh something went wrong")
    })
})


exports.api = functions.https.onRequest(app)