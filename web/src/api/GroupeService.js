import axios from 'axios';

const Groupe_API_BASE_URL = "http://localhost:8080/gestion/groupe/rest";

class GroupeService
{

    getGroupes(id)
    {
        return axios.get(Groupe_API_BASE_URL + '/list', { GroupeId: id });
    }

    createGroupe(Groupe)
    {
        return axios.post(Groupe_API_BASE_URL + '/save/', Groupe);
    }

    getGroupeById(GroupeId)
    {
        return axios.get(Groupe_API_BASE_URL + '/load/' + GroupeId);
    }

    updateGroupe(Groupe)
    {
        return axios.put(Groupe_API_BASE_URL + '/save/', Groupe);
    }

    deleteGroupe(GroupeId)
    {
        return axios.delete(Groupe_API_BASE_URL + '/delete/' + GroupeId);
    }
}

export default new GroupeService()