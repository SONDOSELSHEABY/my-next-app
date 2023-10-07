import React from 'react'
 interface Props{
    params:{id:number}
 }
 const Users = ({params:{id}}:Props) => {
   return (
     <div>Users {id}</div>
   )
 }
 
 export default Users
 