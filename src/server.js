const app = require(".");
const { connectDb } = require("./config/db");
const PORT = 4444;


app.listen(PORT, async () =>{
    await connectDb();
    console.log(`http://localhost:` + PORT);
});