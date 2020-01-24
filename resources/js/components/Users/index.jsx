import React, { Component } from "react";
import Modal from '../plugins/modal';


class index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tableResponsiveData: [],
            modified: "aaaa"
        }
    }

    componentDidMount() {
        this.getUserList();
    }

    getUserList = () => {
        axios.get('fms/users')
            .then(data => {
                this.setState({ tableResponsiveData: data.data });

            });
    }

    deleteUser = (id) => {
        console.log(`fms/delete/${id}`)
        axios.get(`fms/delete/${id}`)
            .then(data => {

                this.getUserList();
            });

    }

    setRole(val) {
        return (val === 1) ? "Administrator" : "Guest";
    }

    getVerified(val) {
        return (val === null) ? "Not Verified" : val;
    }


    paramModal = () => {
        this.setState({ modified: "New User (Guest Only)" });

        $('#modalUser').modal('show')
    }

    handleUserSave = userData => {
        console.log(userData)
    }


    render() {
        return (
            <React.Fragment>
                <h2 className="mt-2">List of Users and Roles&nbsp;
                    <button type="button" className="btn btn-light border btn-sm mr-2 font-weight-bold" onClick={() => this.paramModal()}><i className="fas fa-plus-square"></i> ADD</button>
                    <Modal userData={this.state} onSave={this.handleUserSave} />
                </h2>
                <div className="table-responsive">
                    <table className="table table-hover table-sm ">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>System Role</th>
                                <th>Verified</th>
                                <th>Action</th>
                            </tr>

                        </thead>
                        <tbody>
                            {this.state.tableResponsiveData.map((user, counter) =>
                                <tr key={user.id}>
                                    <td>{counter = counter + 1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{this.setRole(user.role)}</td>
                                    <td className={`font-weight-bold ${(user.email_verified_at === null) ? "text-danger" : "text-success"}`}>{this.getVerified(user.email_verified_at)}</td>
                                    <td>
                                        <button type="button" className="btn btn-primary btn-sm mr-2"><i className="fas fa-pencil-alt"></i></button>
                                        <button type="button" className="btn btn-danger btn-sm" onClick={() => { this.deleteUser(user.id) }}><i className="fas fa-trash-alt"></i></button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </React.Fragment>
        );
    }
}

export default index;
