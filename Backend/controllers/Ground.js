const Ground = require ('../models/Ground');

// Add a new ground listing
const addGround = async (req, res) => {
  try {
    const { name, location, facilities, price, contactInfo} = req.body;
    const newGround = await Ground.create({
      name,
      location,
      facilities,
      price,
      contactInfo,
     
        
    });
    
    res.status(201).json({ ground: newGround });
  } catch (error) {
    console.log(error)
    res.status(400).json({ message: error.message });
  }
};



const getAllGrounds= async(req,res)=>{

  try{
    const allGrounds= await Ground.find();
    if(!allGrounds || allGrounds===0){
      res.status(404).json({message:"No ground found"});
    }
    res.status(200).json({Grounds:allGrounds});

  }catch(error){
    console.log("getallgrounds",error)
    res.status(400).json({message:error.message});

  }
}

const getGroundById= async(req,res)=>{

  try{
    const {id}=req.params;
    const ground= await Ground.findById(id);
    if(!ground){
      res.status(404).json({message:'No ground of that id is found'});
    }
    res.status(200).json({ground});
  }
  catch(error){
    console.log('get ground by id',error);
    res.status(400).json({message:error.message});
  }

}





const updateGroundById = async (req, res) => {
    try {
        
        const { id } = req.params;

        
        const updatedGround = await Ground.findByIdAndUpdate(id, req.body, { new: true });

        
        if (!updatedGround) {
            return res.status(404).json({ message: 'Ground not found' });
        }

        
        res.status(200).json({ ground: updatedGround });
    } catch (error) {
        
        console.error('Error updating ground by ID:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};






module.exports={addGround,getAllGrounds,getGroundById,updateGroundById};