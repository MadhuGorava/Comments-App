// Write your code here
import {formatDistanceToNow} from 'date-fns'

import './index.css'

const CommentItem = props => {
  const {
    commentDetails,
    initialBgColor,
    toggleIsFavorite,
    deleteComment,
  } = props
  const {id, name, description, isLiked} = commentDetails

  const date = formatDistanceToNow(new Date())

  const onChangeLike = () => {
    toggleIsFavorite(id)
  }

  const onDeleteComment = () => {
    deleteComment(id)
  }

  const likeImgUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  return (
    <li className="comment-container">
      <div className="names-card">
        <p className={initialBgColor}>{name[0]}</p>
        <h1 className="heading">{name}</h1>
        <p>{date}</p>
      </div>
      <p className="description">{description}</p>
      <div className="buttons-card">
        <button type="button" className="like-button" onClick={onChangeLike}>
          <img src={likeImgUrl} alt="like" />
        </button>
        <button
          type="button"
          className="delete-button"
          onClick={onDeleteComment}
          testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
