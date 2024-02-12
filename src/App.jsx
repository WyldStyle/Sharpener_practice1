import { useState, useRef, useEffect } from "react";
import axios from "axios";
import AddNewUser from "./components/NewUser/Form";
import Table from "./components/table/table";
export default function App() {
  // const formRefs = useRef({
  //   username: '',
  //   age: ''
  // })
  //won't work because useRef returns an obj
  // with single property so you'll lose 
  // usename in this case
  const usernameRef = useRef('');
  const ageRef = useRef(0);

  // const [usersArr, setUsersArr] = useState([
  //   {
  //     username: 'testing1',
  //     age: 1,
  //     id: 1
  //   }
  // ])
  const editMode = useRef(false);
  const [tableRefresh, setTableRefresh] = useState(true);

  const updateUserData = (userDetail) => {
    console.log('updating in app');
    usernameRef.current = userDetail.username;
    ageRef.current = userDetail.age
    editMode.current = true;
    console.log(usernameRef.current, ageRef.current);
  }


  return (
    <div>
      <AddNewUser
        usernameRef={usernameRef}
        ageRef={ageRef}
        setTableRefresh={setTableRefresh}
      >
      </AddNewUser>
      <Table tableRefresh={tableRefresh}
        updateUserData={updateUserData}
      ></Table>
    </div>
  )
}
