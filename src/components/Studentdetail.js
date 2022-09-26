import React from 'react'

const Studentdetail = (props) => {
    const {name,email,website,imgurl,gender,skills}=props
    return (
        <div className='flex flex-row'>
            <div className="w200 border">
                <p className='break-all'>{name}</p>
                <p className='break-all'>{gender}</p>
                <p className='break-all'>{email}</p>
                <p className='break-all'>{website}</p>
                <p className='break-all'>{skills}</p>
            </div>
            <div className="w100 border">
                <img src={imgurl} alt="" height="100px" width="100px" />
            </div>
        </div>
    )
}

export default Studentdetail
