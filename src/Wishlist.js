import React from 'react'

class Wishlist extends React.Component{
    constructor(props){
        super(props);

        this.state={
            books:props.books
        }
    }

    componentWillReceiveProps(newProps){
        this.setState({
            books:newProps.books
        })
    }

    render(){
        return(
            <div>
                <p>My Wishlist: {this.state.books.length}</p>
            </div>
        )
    }
}

export default Wishlist;