import React from 'react'

function CreatePerson() {


  return (
    <div className='createPerson'>
      <form>
        <div className="fullname">
            <h2>Full Name</h2>
            <input  
                type="text" 
                // value={fullname}
                placeholder='Full Name'
                
                />
                <h2>Category</h2>
            <input  
                type="text" 
                // value={fullname}
                placeholder='Full Name'
                
                />
        </div>
      </form>
    </div>
  )
}

export default CreatePerson
