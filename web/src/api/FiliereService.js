import axios from 'axios';

const Filiere_API_BASE_URL = "http://localhost:8080/gestion/filiere/rest";

class FiliereService
{

    getFilieres(id)
    {
        return axios.get(Filiere_API_BASE_URL + '/list', { filiereId: id });
    }

    createFiliere(Filiere)
    {
        return axios.post(Filiere_API_BASE_URL + '/save/', Filiere);
    }

    getFiliereById(FiliereId)
    {
        return axios.get(Filiere_API_BASE_URL + '/load/' + FiliereId);
    }

    updateFiliere(Filiere, FiliereId)
    {
        return axios.put(Filiere_API_BASE_URL + '/' + FiliereId, Filiere);
    }

    deleteFiliere(FiliereId)
    {
        return axios.delete(Filiere_API_BASE_URL + '/delete/' + FiliereId);
    }
}

export default new FiliereService()