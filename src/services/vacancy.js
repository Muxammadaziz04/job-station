import api from "./api";

export const postVacancy = async (body) => {
    const {data} = await api.post('/api/vacancies', body)
    return data
}

export const postResume = async (body) => {
    const {data} = await api.post('/api/cvs', body)
    return data 
}