import React, { Component } from 'react';
import EmployeeAttendanceService from './EmployeeAttendanceService';
class EmployeeAttendance extends Component {
    constructor(props) {
        super(props)

        this.state = {
                attendances: []
        }
        this.addAttendance = this.addAttendance.bind(this);
        this.editAttendance = this.editAttendance.bind(this);
        this.deleteAttendance = this.deleteAttendance.bind(this);
    }

    deleteAttendance(id){
        EmployeeAttendanceService.deleteAttendance(id).then( res => {
            this.setState({attendances: this.state.attendances.filter(attendance => attendance.id !== id)});
        });
    }
    viewAttendance(id){
        this.props.history.push(`/view-attendance/${id}`);
    }
    editAttendance(id){
        this.props.history.push(`/add-attendance/${id}`);
    }

    componentDidMount(){
        EmployeeAttendanceService.getAttendances().then((res) => {
            this.setState({ employees: res.data});
        });
    }

    addAttendance(){
        this.props.history.push('/add-Attendance/_add');
    }

    render() {
        return (
            <h1> hello</h1>
            // <div>
            //      <h2 className="text-center">Employees Attendance</h2>
            //      <div className = "row">
            //         <button className="btn btn-primary" onClick={this.addAttendance}> Add Attendance</button>
            //      </div>
            //      <br></br>
            //      <div className = "row">
            //             <table className = "table table-striped table-bordered">

            //                 <thead>
            //                     <tr>
            //                         <th> id</th>
            //                         <th> date</th>
            //                         <th> emp_id</th>
            //                         <th> emp_name</th>
            //                         <th> remark</th>
            //                         <th> shift</th>
            //                     </tr>
            //                 </thead>
            //                 <tbody>
            //                     {
            //                         this.state.attendances.map(
            //                             attendance => 
            //                             <tr key = {attendance.id}>
            //                                  <td> { attendance.date} </td>   
            //                                  <td> {attendance.emp_id}</td>
            //                                  <td> {attendance.emp_name}</td>
            //                                  <td> {attendance.remark}</td>
            //                                  <td> {attendance.shift}</td>
            //                                  <td>
            //                                      <button onClick={ () => this.editAttendance(attendance.id)} className="btn btn-info">Update </button>
            //                                      <button style={{marginLeft: "10px"}} onClick={ () => this.deleteAttendance(attendance.id)} className="btn btn-danger">Delete </button>
            //                                      <button style={{marginLeft: "10px"}} onClick={ () => this.viewAttendance(attendance.id)} className="btn btn-info">View </button>
            //                                  </td>
            //                             </tr>
            //                         )
            //                     }
            //                 </tbody>
            //             </table>

            //      </div>

            // </div>
        )

    }
}

export default EmployeeAttendance;