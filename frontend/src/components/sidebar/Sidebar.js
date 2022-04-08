import React from 'react'

export const Sidebar = () => {
  return (
    <div className='container-fluid'>
      <div className='row justify-content-center mt-2 mb-2'>
      <div className='col justify-content-center align-content-center align-items-center sect-1'> <img src='https://cdn.pixabay.com/photo/2022/03/27/12/46/china-7094961_960_720.jpg' alt='blog1' style={{width:'100%' , height:'30vh'}}/></div>
      </div>
      <div className='row'>
		<div className='col justify-content-center mb-2 '>hello , my name is deepak kumar sharma , i a am good boy </div>
    </div>
    <div className='row'>
		<div className='col d-flex border-top border-bottom border-info justify-content-center align-content-center'> catgories </div>
    </div>
			<div className='row'>
			<div className='col-6 d-flex flex-row justify-content-center'>
				<a href='#'>start</a>
			</div>
			<div className='col-6 d-flex flex-row justify-content-center'>
				<a href='#'>start</a>
			</div>
			<div className='col-6 d-flex flex-row justify-content-center'>
				<a href='#'>start</a>
			</div>
			<div className='col-6 d-flex flex-row justify-content-center'>
				<a href='#'>start</a>
			</div>
			
      </div>
      </div>
  )
}
