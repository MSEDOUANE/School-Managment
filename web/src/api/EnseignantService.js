import axios from 'axios';

const Enseignant_API_BASE_URL = "http://localhost:8080/gestion/enseignant/rest";

class EnseignantService
{

    getEnseignants(id)
    {
        return axios.get(Enseignant_API_BASE_URL + '/list', { groupId: id });
    }

    createEnseignant(Enseignant)
    {
        return axios.post(Enseignant_API_BASE_URL + '/save/', Enseignant);
    }

    getEnseignantById(EnseignantId)
    {
        return axios.get(Enseignant_API_BASE_URL + '/load/' + EnseignantId);
    }

    updateEnseignant(Enseignant)
    {
        return axios.put(Enseignant_API_BASE_URL + '/save', Enseignant);
    }

    deleteEnseignant(EnseignantId)
    {
        return axios.delete(Enseignant_API_BASE_URL + '/delete/' + EnseignantId);
    }
}

export default new EnseignantService()