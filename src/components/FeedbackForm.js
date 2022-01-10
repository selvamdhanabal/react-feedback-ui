import React from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import { useState, useContext, useEffect } from "react"
import FeedbackContext from './context/FeedbackContext'

function FeedbackForm() {
    const [text, setText] = useState('')
    const [btn, setIsBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
    const [rating, setrating] = useState(10)
    
    const {addFeedback, editFeedbackItem, updateFeedback} = useContext(FeedbackContext)

    useEffect(() => {
        if(editFeedbackItem.edit === true) {
            setIsBtnDisabled(false)
            setText(editFeedbackItem.item.text)
        }
     }, [editFeedbackItem])

    const handleTextChange = (e) => {
        if(text == '' || e.target.value.length == 0) {
            setMessage(null)
            setIsBtnDisabled(true)
        } else if(text !== '' && text.trim().length <= 10) {
            setMessage('Enter more than 10 characters to submit')
            setIsBtnDisabled(true)
        } else {
            setMessage(null)
            setIsBtnDisabled(false)
        }
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(text.trim().length > 10) {
            let newFeedback = {
                text,
                rating
            }
            if (editFeedbackItem.edit === true) {
                updateFeedback(editFeedbackItem.item.id, newFeedback)
            } else {
                addFeedback(newFeedback)
            }
        }
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us?</h2>
                <RatingSelect select={(rating) => setrating(rating)} />
                <div className='input-group'>
                    <input type='' placeholder='Please leave your comments' onChange={handleTextChange} value={text} />
                    <Button type='submit' isDisabled={btn}>Send</Button>
                </div>
                {message && <div className='message'>{message}</div>}
            </form>
        </Card>
    )
}

export default FeedbackForm
