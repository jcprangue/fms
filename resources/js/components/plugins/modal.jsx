import React, { Component } from 'react';

class modal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            emai: '',
            confirmemail: '',
            password: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const name = target.name;
        this.setState({ [name]: event.target.value });
    }

    render() {
        return (<React.Fragment>
            <div className="modal fade" id="modalUser" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header bg-darkslategray text-white">
                            <h5 className="modal-title" id="exampleModalCenterTitle">{this.props.userData.modified}</h5>
                            <button type="button" className="close text-white" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label className="font-weight-bold">Name</label>
                                    <input type="text" className="form-control" id="userName" placeholder="Enter fullname" value={this.state.name} onChange={this.handleChange} />
                                </div>

                                <div className="form-group">
                                    <label className="font-weight-bold">Email</label>
                                    <input type="email" className="form-control" id="userEmail" placeholder="Enter email" />
                                </div>

                                <div className="form-group">
                                    <label className="font-weight-bold">Confirm Email</label>
                                    <input type="email" className="form-control" id="userConfirmEmail" placeholder="Re-enter email" />
                                </div>

                                <div className="form-group">
                                    <label className="font-weight-bold">Password</label>
                                    <input type="password" className="form-control" id="userPassword" placeholder="Enter password" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={this.props.onSave(this.state)}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>);
    }
}

export default modal;