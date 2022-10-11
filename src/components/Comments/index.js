import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
const initialCommentsList = []

class Comments extends Component {
  state = {commentsList: initialCommentsList, name: '', description: ''}

  toggleIsFavorite = id => {
    this.setState(prevState => ({
      contactsList: prevState.contactsList.map(eachContact => {
        if (id === eachContact.id) {
          return {...eachContact, isFavorite: !eachContact.isFavorite}
        }
        return eachContact
      }),
    }))
  }

  deleteComment = id => {
    const {commentsList} = this.state
    const filteredCommentsList = commentsList.filter(
      eachComment => eachComment.id !== id,
    )
    this.setState({commentsList: filteredCommentsList})
    this.setState(prevState => ({count: prevState.count - 1}))
  }

  onAddComment = event => {
    event.preventDefault()
    const {name, description} = this.state
    const initialBackgroundColorClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`
    const newComment = {
      id: uuidv4,
      name,
      description,
      isFavorite: false,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      description: '',
    }))

    this.setState(prevState => ({count: prevState.count + 1}))
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({description: event.target.value})
  }

  render() {
    const {commentsList, name, description, count} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Comments</h1>
        <div className="form-container">
          <div className="image-card">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="comment-image"
            />
          </div>
          <div className="form-item-container">
            <form>
              <p className="sub-heading">
                Say something about 4.0 Technologies
              </p>
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                className="name-input"
                onChange={this.onChangeName}
              />
              <br />
              <textarea
                rows="8"
                cols="20"
                placeholder="Your Comment"
                className="desc-text"
                value={description}
                onChange={this.onChangeComment}
              />
              <br />
              <button
                type="button"
                onClick={this.onAddComment}
                className="add-button"
              >
                Add Comment
              </button>
            </form>
          </div>
          <hr />
          <div>
            <p className="count-text">{count}Comments</p>
            <ul>
              {commentsList.map(eachComment => (
                <CommentItem
                  key={eachComment.id}
                  commentDetails={eachComment}
                  toggleIsFavorite={this.toggleIsFavorite}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Comments
