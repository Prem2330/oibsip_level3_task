const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');

const app=express();
app.use(express.json())
app.use(cors())



app.get('/', (req, res) => {
    res.send("GET Request Called")
  })

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const User=new mongoose.model("User",userSchema)

const VeggiesSchema=new mongoose.Schema({
    Tomato:Number,
    Corn:Number,
    BellPeppers:Number,
    Broccoli:Number,
    BabySpinach:Number,
    BuffaloSauce:Number,
    GarlicRanchSauce:Number,
    Hummus:Number,
    ManiranaSauce:Number,
    Pesto:Number,
    WhiteGarlicSauce:Number,
    Chicken:Number,
    Mutton:Number,
    Pork:Number,
    GoatCheese:Number,
    GoudaCheese:Number,
    MozarellaCheese:Number,
    ParmesanCheese:Number,
    RicottaChesse:Number,
    CheeseStuffed:Number,
    PanPizza:Number,
    Stuffed:Number,
    ThinCrust:Number
})

const User2=new mongoose.model("User2",VeggiesSchema)



mongoose.connect('mongodb://localhost:27017/myLoginRegisterDB',{   
},()=>{
    console.log("DB Connected")
}
);

app.post('/success',(req,res)=>{
    const info=req.body
    console.log(info[1].sauces)
    console.log(info[0].bases)
    console.log(info)
    if(info[0].bases=="Thin crust")
    {
        updateDocumentThinCrust('62dec6caa7ae21e406967eb8');
    } 
    if(info[0].bases=="Pan Pizza")
    {
        updateDocumentPanPizza('62dec6caa7ae21e406967eb8');
    }
    if(info[0].bases=="Stuffed")
    {
        updateDocumentStuffed('62dec6caa7ae21e406967eb8');
    }
    if(info[2].cheeses=="Cheese Stuffed")
    {
        updateDocumentCheeseStuffed('62dec6caa7ae21e406967eb8');
    }
    if(info[2].cheeses=="Ricotta Cheese")
    {
        updateDocumentRicottaChesse('62dec6caa7ae21e406967eb8');
    }
    if(info[1].sauces=="Pesto")
    {
        updateDocumentPesto('62dec6caa7ae21e406967eb8');
    }

    if(info[1].sauces=="White Garlid Sauce")
    {
        updateDocumentWhiteGarlidSauce('62dec6caa7ae21e406967eb8');
    }

    if(info[1].sauces=="Manirana Sauce")
    {
        updateDocumentManiranaSauce('62dec6caa7ae21e406967eb8');
    }
    if(info[4].veggiess=="Tomato")
    {
        updateDocumentTomato('62dec6caa7ae21e406967eb8');
    }
    if(info[4].veggiess=="Corn")
    {
        updateDocumentCorn('62dec6caa7ae21e406967eb8');
    }
    
})

//////////////////////////////////////////////////

const updateDocumentThinCrust=async(_id)=>{
    try {
        const result=await User2.updateOne({_id},

            {$inc:{
                ThinCrust:-1
            }})
    } catch (err) {
        console.log(err)
    }}

const updateDocumentStuffed=async(_id)=>{
    try {
        const result=await User2.updateOne({_id},

            {$inc:{
                Stuffed:-1
            }})
    } catch (err) {
        console.log(err)
    }}

 const updateDocumentPanPizza=async(_id)=>{
    try {
        const result=await User2.updateOne({_id},

            {$inc:{
                PanPizza:-1
            }})
    } catch (err) {
        console.log(err)
    }}

const updateDocumentCheeseStuffed=async(_id)=>{
    try {
        const result=await User2.updateOne({_id},

            {$inc:{
                CheeseStuffed:-1
            }})
    } catch (err) {
        console.log(err)
    }}

    const updateDocumentRicottaChesse=async(_id)=>{
        try {
            const result=await User2.updateOne({_id},
    
                {$inc:{
                    RicottaChesse:-1
                }})
        } catch (err) {
            console.log(err)
        }}
        
        const updateDocumentParmesanCheese=async(_id)=>{
            try {
                const result=await User2.updateOne({_id},
        
                    {$inc:{
                        ParmesanCheese:-1
                    }})
            } catch (err) {
                console.log(err)
            }}    

            const updateDocumentManiranaSauce=async(_id)=>{
                try {
                    const result=await User2.updateOne({_id},
            
                        {$inc:{
                            ManiranaSauce:-1
                        }})
                } catch (err) {
                    console.log(err)
                }}  
                
                const updateDocumentPesto=async(_id)=>{
                    try {
                        const result=await User2.updateOne({_id},
                
                            {$inc:{
                                Pesto:-1
                            }})
                    } catch (err) {
                        console.log(err)
                    }}      

                const updateDocumentMozarellaCheese=async(_id)=>{
                    try {
                        const result=await User2.updateOne({_id},
                
                            {$inc:{
                                MozarellaCheese:-1
                            }})
                    } catch (err) {
                        console.log(err)
                    }}      


                    const updateDocumentWhiteGarlidSauce=async(_id)=>{
                        try {
                            const result=await User2.updateOne({_id},
                    
                                {$inc:{
                                    WhiteGarlidSauce:-1
                                }})
                        } catch (err) {
                            console.log(err)
                        }}   
                    
                        const updateDocumentTomato=async(_id)=>{
                            try {
                                const result=await User2.updateOne({_id},
                        
                                    {$inc:{
                                        Tomato:-1
                                    }})
                            } catch (err) {
                                console.log(err)
                            }}    

                            const updateDocumentCorn=async(_id)=>{
                                try {
                                    const result=await User2.updateOne({_id},
                            
                                        {$inc:{
                                            Corn:-1
                                        }})
                                } catch (err) {
                                    console.log(err)
                                }}    


////////////////////////////////////////////


app.post('/login',(req,res)=>{
    const {email,password}=req.body
    User.findOne({email:email},(err,user)=>{
        if(user){
            if(password===user.password)
            {
                res.send({message:"Login Successful",user:user})
                
            }else{
                res.send({message:"Password didnt match"})
            }
        }else{
            res.send("User not registered")
        }
    })
})

app.post('/register',(req,res)=>{
    const {name,email,password}=req.body
    User.findOne({email:email},(err,user)=>{
        if(user){
            res.send({message:"User already registered"})
            console.log("User registered")
        }else{
            const user=new User({
                name,
                email,
                password
                })
                user.save(err=>{
                    if(err)
                    {
                    res.send(err)
                    }
                    else{
                        res.send({message:"Successfully Registered"})
                    }
                });
    }
})})

app.get('/get',(req,res)=>
{
    fetchid=req.params.id;
    User2.find(({id:fetchid}),function(err,value){
        if(err)
        {
            res.send("Error")
        }
        else
        {
            res.send(value)
        }
    })
})


const port=process.env.PORT || 8080

app.listen(8080,()=>{
    console.log(`Server running on 8080 mode on port no `);
})