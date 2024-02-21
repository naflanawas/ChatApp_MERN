const express = require("express"); //runs http server
const cors = require("cors"); //can call from anywhere
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));



app.post("/authenticate", async (req, res) => {
  const { username } = req.body; //getting the username from the body of the request

  try{
    const r=await axios.put(
      "https://api.chatengine.io/users/", //checking and getting the user
      {username:username,secret:username,first_name:username,last_name:username},
      //initialize headers to authenticate apis
      {headers:{"private-key":"8274553b-9505-4610-b1f7-85e5be24989e"}}
    )
    return res.status(r.status).json(r.data); //taking the data and status of r and returning it
  }catch(e){
    return res.status(e.response.status).json(e.response.data)
  }
});

app.listen(3001);
