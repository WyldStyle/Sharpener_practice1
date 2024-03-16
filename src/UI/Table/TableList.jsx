 import { useContext } from "react"
 import axios from 'axios'
import UserFeedbackContextProvider from "../../actions/context_user"
import { UserFeedbackContext } from "../../actions/context_user"
import TableCell from "./TableCell"
import TableRow from "./TableRow"
 const TableList = ()=>{

  const {url, feedBacksTable, setUserInput, setRepaint, setEditMode}= useContext(UserFeedbackContext)

  const editRow = (singleUser) =>{
    setUserInput(()=>{
      return {
        username: singleUser.username,
        rating: singleUser.rating,
        comment: singleUser.comment
      }
    })
    
    setEditMode(()=> ({
      mode: true,
      id: singleUser._id
    }))
  }

  const deleteRow = async (_id)=>{
    // console.log(typeof _id);
    await axios.delete(`${url}delExpEntry/${_id}`)
    .then((response)=>{
      setRepaint((prev)=>(!prev))
      window.alert('We lost your valuable input!')
      console.log(response)
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  return (
    <table className="table table-striped">
      <thead>
        <th>Username👩</th>
        <th>Rating⭐</th>
        <th>Comment📝</th>
      </thead>
      <tbody>
        {
          feedBacksTable.map((singleUser)=>(
            <TableRow 
            singleUser={singleUser}
            editRow = {editRow}
            deleteRow={deleteRow}
            ></TableRow>
          ))
        }
      </tbody>
    </table>
  )
}

export default TableList