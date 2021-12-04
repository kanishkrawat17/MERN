import React from 'react'

const UserItem = (props) => {
    
    return (
        <div>
            <div>
                <img src = {props.image}/>
            </div>
              
            <div>
                ID  : - {props.id}
            </div>
            <div>
                Name  : - {props.name}
            </div>
            <div>
                Places  : - {props.placeCount}
            </div>
        </div>
    )
}
export default UserItem;
