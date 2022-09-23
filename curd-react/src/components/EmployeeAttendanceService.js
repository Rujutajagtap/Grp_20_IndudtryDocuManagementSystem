import axios from 'axios';

const Employee_Attendance_API_BASE_URL = "http://localhost:7575/Attendances";

class EmployeeAttendanceService {

    getAttendance(){
        return axios.get(Employee_Attendance_API_BASE_URL);
    }

    createAttendance(attendance){
        return axios.post(Employee_Attendance_API_BASE_URL);
    }

    getAttendanceId(attendanceId){
        return axios.get(Employee_Attendance_API_BASE_URL + '/' + attendanceId);
    }

    updateAttendance(attendance, attendanceId){
        return axios.put(Employee_Attendance_API_BASE_URL + '/' + attendanceId, attendance);
    }

    deleteAttendance(attendanceId){
        return axios.delete(Employee_Attendance_API_BASE_URL + '/' + attendanceId);
    }
}

export default new EmployeeAttendanceService()