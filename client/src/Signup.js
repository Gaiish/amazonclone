import React from 'react'

export default ()=>(
  <div className='row'>
    <div className='col-md-6 offset-md-3'>
      <form action='/create-user' method='post'>
        <h1 className='text-center'>Signup</h1>
        <div className='form-group'>
          <label for='name'>Name: </label>
          <input type='text' className='form-control' name='name' />
        </div>
        <div className='form-group'>
          <label for='name'>Email:</label>
          <input type='email' className='form-control' name='email' />
        </div>
        <div className='form-group'>
          <label for='name'>Password:</label>
          <input type='password' className='form-control' name='password' />
        </div>
        <button type='submit' className='btn btn-success'>Submit</button>
      </form>
    </div>
  </div>
)
