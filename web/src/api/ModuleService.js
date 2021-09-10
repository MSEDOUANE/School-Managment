import axios from 'axios';

const Module_API_BASE_URL = "http://localhost:8080/gestion/module/rest";

class ModuleService
{

    getModules(id)
    {
        return axios.get(Module_API_BASE_URL + '/list', { filiereId: id });
    }

    createModule(Module)
    {
        return axios.post(Module_API_BASE_URL + '/save/', Module);
    }

    getModuleById(ModuleId)
    {
        return axios.get(Module_API_BASE_URL + '/load/' + ModuleId);
    }

    updateModule(Module, ModuleId)
    {
        return axios.put(Module_API_BASE_URL + 'save/', Module);
    }

    deleteModule(ModuleId)
    {
        return axios.delete(Module_API_BASE_URL + '/delete/' + ModuleId);
    }
}

export default new ModuleService()