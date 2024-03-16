import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import UserFeedbackContextProvider from './actions/context_user'
import UserInputForm from './UI/UserInputForm'
import TableList from './UI/Table/TableList'
const App = () => {

  return (
    <UserFeedbackContextProvider>
      <UserInputForm></UserInputForm>
      <TableList></TableList>
    </UserFeedbackContextProvider>
  )
}
export default App