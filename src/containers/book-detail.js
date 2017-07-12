import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component{
  render(){
    if(! this.props.book){
      return<div>Select a name to check details.</div>;
    }

    return (

      <div>
        <h3>Detail for:</h3>
        {/* <img src='/src/components/shot.png'></img> */}
        <div>Name: {this.props.book.title}</div>
        <div>Position and Reputation: {this.props.book.pages}</div>
        <img src={"/src/components/"+this.props.book.image}></img>

      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
