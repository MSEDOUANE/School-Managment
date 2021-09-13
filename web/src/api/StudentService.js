import axios from 'axios';

const Student_API_BASE_URL = "http://localhost:8080/gestion/etudiant/rest";

class StudentService
{

    getStudents(id)
    {
        return axios.get(Student_API_BASE_URL + '/list', { groupId: id });
    }

    createStudent(Student)
    {
        return axios.post(Student_API_BASE_URL + '/save/', Student);
    }

    getStudentById(StudentId)
    {
        return axios.get(Student_API_BASE_URL + '/load/' + StudentId);
    }

    updateStudent(Student)
    {
        return axios.post(Student_API_BASE_URL + '/save/', Student);
    }

    deleteStudent(StudentId)
    {
        return axios.get(Student_API_BASE_URL + '/delete/' + StudentId);
    }
}

export default new StudentService()