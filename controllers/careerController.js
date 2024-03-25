import *as careerService from "../service/careerService.js"

export const createCareer = async(req,res)=>{
    try{
        console.log(req.body);
        if(!req.body || req.body.name){
        return res.status(400).json({error:"Data is missing in the body",status : false});
         }
          const result = await careerService.createCareer(req.body);

          if(result.status){
            return res.status(200).json({
                response_code: 200,
                result: result,
            });
          }else {
            return res.status(500).json({
                response_code: 500,
                message: "Internet Server Error",
                error : result.error,
            });
          }

}catch(err){
    console.error(err);
    return res.status(500).json({
        response_code:500,
        message: "Internet Server Error",
        error: err.message,
    });
}
};

export const getAllCareer = async(req,res)=>{
    try{
        const result = await careerService.getAllCareer();
        if(result.status){
            res.status(200).json({
                response_code: 200,
                result: result,
            });
        }else{
            res.status(404).json({
                response_code: 404,
                message: "No Career Found",
                error: result.error,
            });
        }
}catch(error){
        return res.status(500).json({
            response_code:500,
            message: "Internet Server Error",
            error: error.message,
        });
    }
};


export const getCareerById = async(req,res)=>{
    try{
        const id = req.params.id;
        const result = await careerService.getCareerById(id);
        if(result.status){
            res.status(200).json({
                response_code : 200,
                result: result,
            })}
            else{
                res.status(404).json({
                    response_code: 404,
                    message: "No Career Found",
                    error: result.error,
                });
            }
        }catch(error){
            console.error(error);
            return res.status(500).json({
                response_code:500,
                message: "Internet Server Error",
                error: error.message,
            });
        }
};

export const updateCareerByID = async(req,res)=>{
    if(!req.params.id){
        return res.status(400).json({error:"ID is missing",status : false});
    }
    const {title, description, location, jobType } = req.body;
    if(!title ||!description ||!location ||!jobType){
        return res.status(400).json({error:"Data is missing in the body",status : false});
    }
    const id = req.params.id;

    const dataToUpdate = [
        title,
        description,
        location,
        jobType,
        id,
    ];
try{
    const result = await careerService.updateCareerByID(dataToUpdate);
    if(result.status){
        res.status(200).json({
            response_code: 200,
            result: result,
            status: true,
        });
    }else{
        res.status(400).json({
            response_code: 400,
            message: result.error,
            status: false,
});
} }catch(err){
    console.error(err);
    return res.status(500).json({
        response_code:500,
        message: "Internet Server Error",
        error: err.message,
    });
}
};

export const deleteCareerByID = async(req,res)=>{
    if(!req.params.id){
        return res.status(400).json({error:"ID is missing",status : false});
    }

    const id = req.params.id;
    try{
        const result = await careerService.deleteCareerByID(id);
        if(result.status){
            res.status(200).json({
                response_code: 200,
                result: result,
                status: true,
            });
        }else{
            res.status(400).json({
                response_code: 400,
                message: result.error,
                status: false,
            });
        }
    }catch(error){
        console.error(err);
        return res.status(400).json({
            status: false, message: error.message
        })

    }
};

// const asyncHandler = require("express-async-handler");
// const Career = require("../models/Career");

// const createCareer = asyncHandler(async (req, res) => {
//   const {title, description, location, jobType } = req.body;

//   if (!title || !description || !location || !jobType) {
//     res.status(400);
//     throw new Error("Please fill in all fields");
//   }

//   // Create Product
//   const Career = await Career.create({
//     career: req.career.id,
//     title,
//     description,
//     location,
//     jobType,
//     price,
//   });

//   res.status(201).json(Career);
// });

// // Get all Careers
// const getCareers = asyncHandler(async (req, res) => {
//   const careers = await careers.find({ career: req.user.id }).sort("-createdAt");
//   res.status(200).json(careers);
// });

// // Get single career
// const getCareer = asyncHandler(async (req, res) => {
//   const career = await career.findById(req.params.id);
//   // if career doesn't exist
//   if (!career) {
//     res.status(404);
//     throw new Error("Career not found");
//   }
//   res.status(200).json(career);
// });

// // Delete career
// const deleteCareer = asyncHandler(async (req, res) => {
//   const career = await career.findById(req.params.id);
//   // if career doesn't exist
//   if (!career) {
//     res.status(404);
//     throw new Error("Job type not found");
//   }
//   await career.remove();
//   res.status(200).json({ message: "Job type deleted." });
// });

// // Update job type
// const updateCareer = asyncHandler(async (req, res) => {
//   const { title, description, location, jobType } = req.body;
//   const { id } = req.params;

//   const career = await career.findById(id);

//   // if job type doesn't exist
//   if (!career) {
//     res.status(404);
//     throw new Error("Job type  not found");
//   }

  
//   // Update Career
//   const updatedCareer = await Career.findByIdAndUpdate(
//     { _id: id },
//     {
//       title,
//       description,
//       location,
//       jobType
//     },
//     {
//       new: true,
//       runValidators: true,
//     }
//   );

//   res.status(200).json(updatedCareer);
// });

// module.exports = {
//   createCareer,
//   getCareers,
//   getCareer,
//   deleteCareer,
//   updateCareer,
// };
