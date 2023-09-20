import React from 'react'
import { Rating } from 'react-simple-star-rating'
export default function StarRate(props) {
     const {stars}= props
      const [rating, setRating] = React.useState(parseInt(stars) || 0);
      const [selection, setSelection] = React.useState(rating);

      const Star = ({ marked, starId }) => {
        return (
          <span data-star-id={starId} className="star" role="button">
            {marked ? '\u2B50' : '\u2606'}
          </span>
        );
      };
      
  return (
    <div>
      {rating}:{Array.from({ length: 5 }, (v, i) => (
        <Star
          starId={i + 1}
          key={`star_${i + 1}`}
          marked={selection ? selection >= i + 1 : rating >= i + 1}
        />
      ))}
      {/* <Rating initialValue={rating} readonly={true} /> */}
    </div>
  )
}
