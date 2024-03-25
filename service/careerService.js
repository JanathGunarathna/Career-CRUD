import * as careerRepository from "../repositories/careerRepository.js";

export const createCareer = async (values) => {
    try {
        const result = await careerRepository.createCareer(values);
        if (result == null){
            return {
                status: false,
                error: "Career not created",
            };
        } else { 
            return { status: true, message:"Career created", result: result };
        }
    } catch (error) {
        throw error;
    }
};

export const getAllCareer = async () => {
    try {
        const result = await careerRepository.getAllCareer();
        if (result.length == 0){
            return {
                status: false,
                message: "No careers found",
            };
        } else { 
            return { status: true, message:"Careers found", data: result };
        }
    } catch (error) {
        throw error;
    }
};

export const getCareerById = async (id) => {
    try{
        const result = await careerRepository.getCareerById(id);
        if(result.length == 0){
            return{status: false, error: "Career not found"};
        }else{
            return{status: true, message: "Career found", data: result};
        }
    }catch(error){
        throw error;
    }
}

export const updateCareerByID = async (values) => {
    try{
        cont[
            title,
            description,
            location,
            jobType,
            id
        ] = data;
        const exCareer = await careerRepository.getCareerById(id);
        if(exCareer == null){
            return{status: false,result:exCareer, error: "Career not found"};
        }

        const  dataToUpdate = [
            title,
            description,
            location,
            jobType,
            id,
        ];
        const result = await careerRepository.updateCareerByID(dataToUpdate);

        if(result){
            return{status: true, message: "Career updated", result: result};
        }else{
            return{status: false, error: "Career not updated"};
        }
    }catch(error){
        throw error;
    }
}


export const deleteCareerByID = async (id) => {
    try{
        const exCareer = await careerRepository.getCareerById(id);
        if(exCareer != null) {
            const result = await careerRepository.deleteCareerByID(id);
            if(result){
                return{status: true, message: "Career deleted", result: result};
            }else{
                return{status: false, error: "Career not deleted"};
            }
        }
    }catch(error){
        return{status: false, error: error};
    }

}
