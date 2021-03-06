import React, { Component } from 'react';



class ReviewComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userReview: this.props.review,
      editMode: false,
      reviewSubmitted: false,
      currentInput: this.props.review
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      userReview: nextProps.review,
      editMode: false
    });
  }

  handleEdit() {
    this.setState({
      editMode: true,
      reviewSubmitted: false
    });
  }

  closeEdit() {
    this.setState({
      editMode: false,
      currentInput: this.state.userReview
    });
  }

  handleSubmit() {
    this.setState({
      editMode: false,
      userReview: this.state.currentInput
    });
    this.updateReview(this.state.currentInput);
  }

  handleChange(event) {
    this.setState({
      currentInput: event.target.value
    });
  }

  updateReview(review) {
    var movieObj = {
      title: this.props.title, 
      id: this.props.id,
      review: review
    };
    $.post(Url + '/ratemovie', movieObj)
    .done(response => {
      // console.log('movie rating updated');
      this.setState({
        reviewSubmitted: true
      })
    })
  }

  render() {
    if (this.state.editMode) {
  		return (
        <div className='review'>
          Enter your review
           <textarea cols="40" rows="5" value={this.state.currentInput} onChange={this.handleChange.bind(this)} maxlength="255"></textarea>
           <button onClick={this.handleSubmit.bind(this)}>submit review</button>
           <button onClick={this.closeEdit.bind(this)}>cancel</button>
        </div>);
    } else {
      return (
        <div className='userReview'>
          <div className='review'>Your Review:<button className='editReviewButton' onClick={this.handleEdit.bind(this)}>Edit Review</button></div>
          <div className='theReview'>{(this.state.userReview === '' || this.state.userReview === null) ? 'You have not reviewed the movie yet' : this.state.userReview}</div>
          {(this.state.reviewSubmitted) ? <div className="updateMsg">review submitted</div> : ''}
        </div>);
    }
	}
}

export default ReviewComponent;