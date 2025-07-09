import Stars from '../stars/Stars'
import user from '../../../public/assets/user.png'

const Review = ({review}) => {

  return (
    <div className='store-review d-flex'>
      <div className="user-image h-100 d-flex">
        <img src={user} alt="" />
      </div>
      <div className="r-content d-flex flex-column w-100">
        <div className="r-top d-flex ">
            <div className="user-n-date d-flex">
                <span>{review.customer}</span>
                <span>|</span>
                <span>{review.date}</span>
            </div>
        <Stars numb={review.rating}/>
        </div>
        <div className="r-text">
            <p>{review.text}</p>
        </div>
      </div>
    </div>
  )
}

export default Review
