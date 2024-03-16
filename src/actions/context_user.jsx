
import { createContext, useState, useEffect } from "react"
import axios from "axios"

export const UserFeedbackContext = createContext({
  userInput: {}
})

const UserFeedbackContextProvider = ({ children }) => {
  const url = 'http://localhost:3001/exp/'

  const [userInput, setUserInput] = useState({
    username: '',
    rating: '1',
    comment: ''
  })

  const [repaint, setRepaint] = useState(false);

  const [feedBacksTable, setFeedBacksTable] = useState([]);
  useEffect(() => {
    axios.get(`${url}findAll`)
      .then((response) => {
        if ((response.data.data)) {
          setFeedBacksTable(() => response.data.data);
        }
      })
  }, [repaint])

  const [editMode, setEditMode] = useState({
    mode: false,
    id: ''
  });

  const handleOnChange = (e) => {
    if (e.target.value != null) {
      setUserInput((prevUserInput) => (
        {
          ...prevUserInput,
          [e.target.id]: e.target.value
        }
      ))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('handleSubmit Edit mode', editMode);
    try {
    if (!editMode.mode) {
      await axios.post(`${url}newExpEntry`, { ...userInput })
      window.alert('YaY! Thanks for yr Feedback.')
    }
    else {
      await axios.put(`${url}updateExpEntry/${editMode.id}`, { ...userInput })
        .then(() => {
          setEditMode({
            mode: false,
            id: ''
          })
          window.alert(`${userInput.username}, you're Edited`)
        }
        )
    }
    setUserInput(()=>{
      return {
        username:"",
        rating:"1",
        comment:""
      }
    })
    setRepaint((prevVal)=> !prevVal)
    } catch (error) {
     console.log(error);
    }
  }
  return (
    <UserFeedbackContext.Provider
      value={{
        url,
        userInput,
        setUserInput,
        feedBacksTable,
        setFeedBacksTable,
        editMode,
        setEditMode,
        repaint,
        setRepaint,
        handleOnChange,
        handleSubmit

      }}>
      {children}
    </UserFeedbackContext.Provider>
  )
}
export default UserFeedbackContextProvider