//stateless functional component
const User=(props)=>{
    return(
        <div>
            <h1>{props.user.name}</h1>
        </div>
    )
}

export default User;