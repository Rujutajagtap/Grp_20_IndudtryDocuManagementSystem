import React, { Component } from 'react'
import EmployeeAttendanceService from './EmployeeAttendanceService'
class ViewEmployeeAttendanceComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
           attendance: {}
        }
    }

    componentDidMount(){
        EmployeeAttendanceService.getAttendanceById(this.state.id).then( res => {
            this.setState({attendance: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Employee Attendance</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> date: </label>
                            <div> { this.state.attendance.date }</div>
                        </div>
                        <div className = "row">
                            <label> emp_id: </label>
                            <div> { this.state.attendance.emp_id }</div>
                        </div>
                        <div className = "row">
                            <label> emp_name: </label>
                            <div> { this.state.attendance.emp_name }</div>
                        </div>

                        <div className = "row">
                            <label> remark: </label>
                            <div> { this.state.attendance.remark}</div>
                        </div>

                        <div className = "row">
                            <label> shift: </label>
                            <div> { this.state.attendance.shift }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewEmployeeAttendanceComponent