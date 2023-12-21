import React, { Children } from 'react'

export default function Container({children}) {
    return (
        <div className='container '>
            <div className="card" style={{width: "70%"}}>
             {children}
              
            </div>

        </div>
    )
}
