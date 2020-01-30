const Axios = require('axios')

Axios.get("http://gateway.marvel.com/v1/public/comics?ts=1&apikey=2fc90cdd040a3c4cc0318977ecab8684&hash=5e3d141ca033881b19d05e43321b8952")
.then(res => {
    console.log(res)
})