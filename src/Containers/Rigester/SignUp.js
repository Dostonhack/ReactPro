import React, { Component } from 'react'
const initionState={fullname:'',email:'',password:'' ,type:'',bio:''}

 class SignUp extends Component {
    constructor(props){
        super(props)
        this.state=initionState;
    }

    inputHendler=(e)=>{
        e.preventDefault();
        const {name,value}=e.target;
        this.setState({[name]:value})
    }

    formHandler=(e)=>{
        e.preventDefault()
        console.log('form handler...')
    }
    reserClick=()=>{
        this.setState(initionState)
    }
    render() {
        const {fullname,email,password,type,bio}=this.state;
        return (
            <div>
                <h1>Sign Up</h1>
                <form onSubmit={this.formHandler}>
                <p>
                    <label>FullName</label>
                    <input 
                        type='text'
                        name='fullname'
                        placeholder='Your Name'
                        onChange={this.inputHendler}
                        value={fullname} 

                    ></input>
                </p>
                <h4>{fullname}</h4>
                <p>
                    <label>Email</label>
                    <input 
                    type='email'
                        name='email'
                        placeholder='Your Email'
                        onChange={this.inputHendler}
                        value={email}

                    ></input>
                </p>
                <h4>{email}</h4>
                <p>
                    <label>Password</label>
                    <input
                        type='password'
                        name='password'
                        placeholder='Your Password'
                        onChange={this.inputHendler}
                        value={password} 

                    ></input>
                </p>
                <h4>{password}</h4>

                <p>
                    <select onChange={this.inputHendler} value={type}>
                        <option value='custimers'>Custimers</option>
                        <option value='select'>Select</option>
                        <option value='admin'>Admin</option>

                    </select>
                </p>
                <textarea name='bio' value={bio} onChange={this.inputHendler}></textarea>
                <button type='submit'>Sign Up</button>
                <button type='reset' onClick={this.reserClick}>Clear</button>
                </form>



            </div>
        )
    }
}

export default SignUp;