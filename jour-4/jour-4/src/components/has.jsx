import React from 'react';



class ClssHas extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            emailValid: false,
            passwordValid: false,
            password: '',
            email: '',
            rememberMe: false,
            submitClick: false
        }
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }


    onChangeEmail(event) {
        const newEmail = event.target.value;
        const reg = /^\S+@\S+\.\S+$/g;
        const isEmail = reg.test(newEmail);

        this.setState({
            email: newEmail,
            emailValid: isEmail
        })
    }

    onChangePassword(event) {
        let newPasswordValid = false;
        if (event.target.value.length >= 6) {
            newPasswordValid = true;
        } else {
            newPasswordValid = false;
        }

        this.setState({
            password: event.target.value,
            passwordValid: newPasswordValid
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            submitClick: true
        })
    }
    render() {
        if (this.state.submitClick === true) {
            return (<div className="div1">Validation Succses Bravo !! </div>)
        } 
            return (
                <div >
                    <form className="form-group needs-validation container-fluid">
                        <h1 className="col-12 ">LogIn</h1>

                        <div className="form-group col-12  col-sm-12">
                            <label className="col-12">Email</label><br />
                            <input type="email"
                                className={this.state.emailValid ? 'form-control is-valid ' : 'form-control is-invalid'}
                                onChange={this.onChangeEmail}
                                name="email"
                                placeholder="Enter email" />
                        </div>
                        <div className="form-group col-12  col-sm-12">
                            <label className="col-12">Password</label><br />
                            <input type="password"
                                className={this.state.passwordValid ? 'form-control  is-valid' : 'form-control is-invalid'}
                                onChange={this.onChangePassword}
                                name="password"
                                placeholder="Password"  />
                        </div>
                        {/* <div className="form-check col-12  col-sm-12  " >
                            <input type="checkbox" className="form-check-input col-6 " />
                            <label className="form-check-label col-6" >Check me out</label>
                        </div> */}
                        <button type="submit" 
                        disabled={!this.state.emailValid || !this.state.passwordValid}
                         className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>


                    </form>
                </div>

            );
        
    }
}

export default ClssHas;