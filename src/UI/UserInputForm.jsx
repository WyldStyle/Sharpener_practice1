import { useContext } from "react"
import { UserFeedbackContext } from "../actions/context_user"

const UserInputForm = () => {
  const {userInput,handleOnChange, handleSubmit, editMode} = useContext(UserFeedbackContext)
  return (
    <form action="" className="form-control"
    onSubmit={handleSubmit}
    >
      <input type="text"
        className="form-control form-control-log"
        id="username"
        placeholder="UserName"
        required 
        onChange={handleOnChange}
        value={userInput.username}
        />
        <br />

<label htmlFor="rating">Give a Rating</label>
      <select name="" id="rating"
        className="form-control form-control-lg"
        onChange={handleOnChange}
        value={userInput.rating}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <br />

      <input type="text"
        className="form-control form-control-lg"
        id= "comment"
        placeholder="Could you tell how can we improve?"
        onChange={handleOnChange}
        value={userInput.comment}
        />
        <br />

        <button className="btn btn-primary">{editMode.mode?"Update":"Submit"}</button>
    </form>
  )
}
export default UserInputForm
