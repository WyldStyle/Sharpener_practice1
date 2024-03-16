import { useContext } from "react";
import TableCell from "./TableCell"
import { UserFeedbackContext } from "../../actions/context_user";

function getFields(obj) {
  const res = [];
  for (let key of Object.keys(obj)) {
    if (key != '_id' && obj[key]) {
      res.push(obj[key])
    }
  }
  return res;
}
export default function TableRow({singleUser, editRow, deleteRow}) {
  let singleUserField = getFields(singleUser)
  // const {editRow, deleteRow} = useContext(UserFeedbackContext)
  return (
    <tr>
      {
        singleUserField.map((eachInput)=>(
          <TableCell eachInput={eachInput}></TableCell>
        ))
      }
      <td>
        <button className="button" onClick={() => editRow(singleUser)}>Edit</button>
        <button className="button" onClick={() => deleteRow(singleUser._id)}>Delete</button>
      </td>
    </tr>
  )
}
