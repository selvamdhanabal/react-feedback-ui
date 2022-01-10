import React from 'react'
// import propsType from 'prop-types'
import { useContext} from 'react'
import FeedbackContext from './context/FeedbackContext'

function FeedbackStats() {
    const {feedback} = useContext(FeedbackContext)
    let averge = feedback.reduce((acc, curr) => {
        return acc + curr.rating
    }, 0) / feedback.length

    averge = averge.toFixed(1).replace(/[.,]0$/, '')
    return (
        <div className='feedback-stats'>
            <h4>{feedback.length} Reviews</h4>
            <h4>Averge Rating: {isNaN(averge) ? 0 : averge}</h4>
        </div>
    )
}

// FeedbackStats.propsType = {
//     feedback: propsType.array
// }

export default FeedbackStats
