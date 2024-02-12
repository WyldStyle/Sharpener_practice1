import { useState, useRef, useEffect, } from "react"
import axios from "axios";
import TableRow from "./tableItem";

const Table = ({tableRefresh, updateUserData}) => {
  const [usersArr, setUsersArr] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3001/exp/findAll')
    .then((res) => {
      if (res.data.data) {
        console.log(":::res.data:::", res.data);
        setUsersArr([
          ...res.data.data
        ])
      }
    });
    // fetch('http://localhost:3001/exp/findAll');
}, [tableRefresh])

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {
          usersArr.map(single_user =>{
            return <TableRow singleItem={single_user}
            updateUserData={updateUserData}
             >
            </TableRow>
          })
        }
      </tbody>
    </table>
  )
}

export default Table