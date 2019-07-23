import React from 'react'
import BookList from './BookList';
import Wishlist from './Wishlist';

class Library extends React.Component{
    constructor(){
        super();

        this.state={
            books:[],
            wishlist:[]
        }
    }

    componentDidMount(){
        var url='https://gist.githubusercontent.com/Bachmann1234/a2b4207caa29dbc23e29/raw/37825725807d087455200801ccbb03c16448efc6/gistfile1.txt'

        fetch(url)
        .then((response)=>response.json())
        .then((data)=>{
            console.log(JSON.stringify(data))
            this.setState({
                books:data.items
            })
        })
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