import React from 'react'
import { motion, AnimatePresence} from 'framer-motion'
import FeedbackItem from './FeedbackItem'
// import propsType from 'prop-types'
import {useContext} from 'react'
import FeedbackContext from './context/FeedbackContext'
import Spinner from './shared/Spinner'

function FeedbackList() {
    const {feedback, isLoading } = useContext(FeedbackContext)
    if(!isLoading && (!feedback || feedback.length == 0)) {
        return <p>No feedback yet..</p>
    }

    return isLoading == true ? (<Spinner/>) : (<div className='feedback-list'>
    <AnimatePresence>
        {feedback.map((item) => (
        <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <FeedbackItem key={item.id} item={item} />
        </motion.div>
        ))}
    </AnimatePresence>
    </div>)

    // return <div className='feedback-list'>
    //     {feedback.map((item) => (
    //         <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
    //     ))}
    // </div>
}

// FeedbackList.propsType = {
//     feedback: propsType.arrayOf(propsType.shape({
//                 id: propsType.number.isRequired,
//                 text: propsType.string.isRequired,
//                 rating: propsType.number.isRequired,
//             }
//         )
//     )
// }
export default FeedbackList
