import React from 'react'
import UserItem from "./UserItem.js"
import "./UsersList"

const UsersList = (props) => {

  if(props.items.length == 0){
      return <div>
          <h2>NO USERS FOUND</h2>
      </div>
  }

  return <ul>
      {props.items.map((user)=>
        <UserItem 
            key = {user.id}
            id= {user.id}
            name = {user.name}
            image ={user.image}
            placeCount = {user.places}
        />
      )}
  </ul>
}

export default UsersList;