import career from '../models/careerModel.js';

export const createCareer = async(values)=>{
    try{
        const result = await career.create(
            {
                title: values.title,
                description: values.description,
                location: values.location,
                jobType: values.jobType
            });
        return result;

    }catch(err){
        throw err;
    }
};

export const getAllCareer = async()=>{
    try{
        const result = await career.findAll({});
        return result;
    }catch(err){
        throw err;
    }
};

export const updateCareerByID = async(data)=>{
    try{
        const[
            title,description ,location, jobType, id,
        ]=data;
        const result = await career.update(
            {
                title: title,
                description: description,
                location: location,
                jobType: jobType,
            },
            {
                where: {
                    id,
                },
            }
        );
        return result;
    }catch(err){
        throw err;
    }
    
};

export const getCareerById = async(id)=>{
    try{
        const result = await career.findOne({
            where: {
                id,
            },
        });
        return result;
    }catch(err){
        throw err;
    }
};

export const deleteCareerByID = async(id)=>{
    try{
        const result = await career.destroy({
            where: {
                id,
            },
        });
        return result;
    }catch(err){
        throw err;
    }
}