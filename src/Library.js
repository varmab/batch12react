import React from 'react'
import BookList from './BookList';
import Wishlist from './Wishlist';

class Library extends React.Component{
    constructor(){
        super();

        var myBooks=[
            {
                id:1,
                title:"HTML/CSS Fundamentals"
            },
            {
                id:2,
                title:"JavaScript Pro"
            },
            {
                id:3,
                title:"React Fundamentals"
            }
        ]

        this.state={
            books:myBooks,
            wishlist:[]
        }
    }

    addToWishlist=(book)=>{
        console.log(JSON.stringify(book))
        this.setState({
            wishlist:[
                ...this.state.wishlist,
                book
            ]
        })
    }

    render(){
        console.log('rendering Library')
        return(
            <React.Fragment>
                <h1>Library</h1>
                <Wishlist books={this.state.wishlist}/>
                <BookList books={this.state.books} addToWishlist={this.addToWishlist}/>
            </React.Fragment>
        )
    }
}

export default Library;