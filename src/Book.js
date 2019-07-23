import React from 'react'

class Book extends React.Component{
    constructor(props){
        super(props);

        this.state={
            book:props.book
        }
    }

    add=()=>{
        this.props.addToWishlist(this.state.book);
    }

    

    render(){
        console.log('rendering Book')
        return(
            <React.Fragment>
                <h1>{this.state.book.title}</h1>
                <button onClick={this.add}>Add to wishlist</button>
            </React.Fragment>
        )
    }
}

export default Book;