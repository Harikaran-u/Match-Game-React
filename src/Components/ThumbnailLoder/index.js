import './index.css'

const ThumbnailLoader = props => {
  const {thumbnail, getScoreResult} = props
  const {thumbnailUrl, id} = thumbnail

  const giveImageId = () => {
    getScoreResult(id)
  }

  const thumbnails = (
    <li className="thumbnail-list">
      <button className="thumb-btn" type="button" onClick={giveImageId}>
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-img" />
      </button>
    </li>
  )
  return thumbnails
}

export default ThumbnailLoader
