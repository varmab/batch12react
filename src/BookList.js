import React from 'react'
import Book from './Book';

class BookList extends React.Component{
    constructor(props){
        super(props);

        this.state={
            books:props.books
        }
    }

    addToWishlist=(book)=>{
        console.log(JSON.stringify(book))
        this.props.addToWishlist(book);
    }

    componentWillReceiveProps(newProps){
        this.setState({
            books:newProps.books
        })
    }

    shouldComponentUpdate(newProps,newState){
        if(newState.books.length!=this.state.books.length){
            return true;
        }
        return false;
    }
    
    render(){
        console.log('rendering BookList')
        return(
            <React.Fragment>
                <h1>BookList</h1>
                {
                    this.state.books.map((book)=>{
                        return <Book key={book.id} book={book} addToWishlist={this.addToWishlist}/>
                    })
                }
            </React.Fragment>
        )
    }
}

export default BookList;