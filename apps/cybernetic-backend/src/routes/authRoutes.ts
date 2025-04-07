import {Router} from "express";


const authRouter = Router();

authRouter.get("/users", (req, res)=>{
    res.send("this is users from auth routers")
    
})

authRouter.post("/register", (req, res)=>{
    console.log("post request from authlog");
    const data = req.body;
    res.send(data);
    
})

authRouter.post("login", (req,res)=>{
    res.send("somethisng")
})

authRouter.post('/logout', (req,res)=>{
    res.send('slfjldkljflds')
})

export default authRouter;