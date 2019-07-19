import React from 'react'

import User from './User'

class Users extends React.Component{
    constructor(){
        super();

        this.state={
            users:[],
            loading:true,
            error:false
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response)=>response.json())
        .then((users)=>{
            this.setState({
                users:users,
                loading:false
            })
        })
        .catch((err)=>{
            console.log("Failed to get users")
            this.setState({
                error:true,
                loading:false
            })
        })
    }

    render(){
        if(this.state.loading==true){
            return(
                <React.Fragment>
                    <h1>Users</h1>
                    <p>Loading.. Please wait</p>
                </React.Fragment>
            )
        }

        if(this.state.error==true){
            return(
                <React.Fragment>
                    <h1>Users</h1>
                    <p>Sorry.. Failed to load data. Please try again later.</p>
                </React.Fragment>
            )
        }
        return(
            <React.Fragment>
                <h1>Users</h1>

                {
                    this.state.users.map((user)=>{
                        return <User key={user.id} user={user}/>
                    })
                }
            </React.Fragment>
        )
    }
}

export default Users;