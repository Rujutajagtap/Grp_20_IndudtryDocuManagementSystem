import React, { Component } from 'react';
import EmployeeAttendanceService from './EmployeeAttendanceService';

class CreateEmployeeAttendanceComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            date: '',
            emp_id: '',
            emp_name: '',
            remark: '',
            shift: ''
            
        }
        this.changeDateHandler = this.changeDateHandler.bind(this);
        this.changeEmployeeIDHandler = this.changeEmployeeIDHandler.bind(this);
        this.changeEmployeeNameHandler = this.changeEmployeeNameHandler.bind(this);
        this.changeRemarkHandler = this.changeRemarkHandler.bind(this);
        this.changeShiftkHandler = this.changeShiftHandler.bind(this);
        this.saveOrUpdateAttendance = this.saveOrUpdateAttendance.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            EmployeeAttendanceService.getAttendanceById(this.state.id).then( (res) =>{
                let attendance = res.data;
                this.setState({date: attendance.date,
                    emp_id: attendance.emp_id,
                    emp_name : attendance.emp_name,
                    remark : attendance.remark,
                    shift : attendance.shift,
                });
            });
        }        
    }
    saveOrUpdateAttendance = (e) => {
        e.preventDefault();
        let attendance = {date: this.state.date, emp_id: this.state.emp_id, emp_name: this.state.emp_name,remark: this.state.remark,shift: this.state.shift};
        console.log('attendance => ' + JSON.stringify(attendance));

        // step 5
        if(this.state.id === '_add'){
            EmployeeAttendanceService.createAttendance(attendance).then(res =>{
                this.props.history.push('/attendances');
            });
        }else{
            EmployeeAttendanceService.updateAttendance(attendance, this.state.id).then( res => {
                this.props.history.push('/attendances');
            });
        }
    }
    
    changeDateHandler= (event) => {
        this.setState({date: event.target.value});
    }

    changeEmployeeIDHandler= (event) => {
        this.setState({emp_id: event.target.value});
    }

    changeEmployeeNameHandler= (event) => {
        this.setState({emp_name: event.target.value});
    }

    changeRemarkHandler= (event) => {
        this.setState({remark: event.target.value});
    }

    changeShiftkHandler= (event) => {
        this.setState({shift: event.target.value});
    }

    cancel(){
        this.props.history.push('/attendances');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Attendance</h3>
        }else{
            return <h3 className="text-center">Update Attendance</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> date: </label>
                                            <input placeholder="date" name="date" className="form-control" 
                                                value={this.state.date} onChange={this.changeDateHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> emp_id: </label>
                                            <input placeholder="emp_id" name="emp_id" className="form-control" 
                                                value={this.state.emp_id} onChange={this.changeEmployeeIDHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> emp_name: </label>
                                            <input placeholder="emp_name" name="emp_name" className="form-control" 
                                                value={this.state.emp_name} onChange={this.changeEmployeeNameHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> remark: </label>
                                            <input placeholder="remark" name="remark" className="form-control" 
                                                value={this.state.remark} onChange={this.changeRemarkHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> shift: </label>
                                            <input placeholder="shift" name="shift" className="form-control" 
                                                value={this.state.shift} onChange={this.changeShiftkHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateAttendance}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateEmployeeAttendanceComponent