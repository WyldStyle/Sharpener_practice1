import axios from "axios";
import { useState, useRef } from "react";
const Form = ({ usernameRef, ageRef, setTableRefresh, editMode }) => {
  let buttonName = 'Getting Started'
  console.log('editMode is ', editMode);

  const handlingFormSubmission = (event)=>{
    event.preventDefault();

  if (editMode.current) {
    buttonName = "Update Me"
  }
  else{
    const addNewUser = () => {
      const newUser = {
        username: usernameRef.current.value,
        age: ageRef.current.value
      }
      axios.post('http://localhost:3001/exp/newExpEntry', newUser, {
        headers: {
          'content-type': 'application/json'
        }
      })
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            // setUsersArr(oldUsersArr => {
            //   const updatedUsersArr = [newUser, ...oldUsersArr];
            //   return updatedUsersArr;
            // })

            usernameRef.current.value = ''
            ageRef.current.value = '';
            setTableRefresh(prev => !prev);
          }
        })
    }
    addNewUser
  }
  }

  return (
    <form action="" onSubmit={handlingFormSubmission}>
      <label htmlFor="username">Username</label>
      <input type="text"
        name="username"
        id="username"
        ref={usernameRef}
      />

      <label htmlFor="age">Age(yrs)</label>
      <input type="number"
        name="age"
        min='0'
        id="age"
        ref={ageRef}
      />
      <button type="submit">{buttonName}</button>
    </form>
  )
}
export default Form