const TableRow = ({ singleItem, updateUserData}) => {
  const editDetails = ()=>{
    console.log('editButton is clicked in tableItem');
    updateUserData(singleItem)
  }
  const deleteUser = ()=>{
    console.log('trying to delete');
  }
  return (
    <tr>
      <td>{singleItem.username}</td>
      <td>{singleItem.age}</td>
      <td>
        <button onClick={editDetails}>Edit</button>
      </td>
      <td>
        <button onClick={deleteUser}>Delete</button>
      </td>
    </tr>
  )
}
export default TableRow