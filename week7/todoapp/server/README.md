## To start an express js server
1) Initialize an express server inside index.js
```
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

```
2) Add a custom route 
3) Add a custom html file when the route is loaded