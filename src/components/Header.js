import React from 'react'
import '../App.css'; 

const header = () =>{
    return (
      <header className='header'>
        <nav class="navbar bg-body-tertiary">
  <form class="container-fluid">
    <div class="input-group">
      <span class="input-group-text" id="basic-addon1">@</span>
      <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
    </div>
  </form>
</nav>
</header>
    );
}

export default header ; 