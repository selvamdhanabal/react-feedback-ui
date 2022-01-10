import { createContext, useState, useEffect} from 'react'
import { v4 as uuid4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const [editFeedbackItem, seteditFeedbackItem] = useState({
        item : {},
        edit : false
    })

    useEffect(() => {
        fetchFeedbackFromServer()
    }, [])

    const fetchFeedbackFromServer = async () => {
        const response = await fetch("/feedback?_sort=id&_order=desc")
        const data = await response.json();
        setFeedback(data)
        setIsLoading(false)
    }

    const deleteFeedback = async (id) => {
        if(window.confirm('Are you sure want to delete')) {
            await fetch(`/feedback/${id}`, {method: 'DELETE'})
            setFeedback(feedback.filter((item) => item.id != id))
        }
    }

    const addFeedback = async (newFeedback) => {
        const response = await fetch("/feedback", {
            method: 'POST',
            headers: { 'Content-Type' : 'application/json'},
            body: JSON.stringify(newFeedback)
        })
        const data = await response.json()
        // newFeedback.id = uuid4()
        setFeedback([data, ...feedback])
    }

    const editFeedback = (item) => {
        seteditFeedbackItem({
            item,
            edit: true
        })
    }

    const updateFeedback = async (id, updateItem) => {
        const response = await fetch(`/feedback/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(updateItem)
        })
        const data = await response.json();
        setFeedback(feedback.map((item) => (item.id == id ? {...item, ...data} : item)))
    }

    return <FeedbackContext.Provider value={{feedback, editFeedbackItem, isLoading, deleteFeedback, addFeedback, editFeedback, updateFeedback}}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext