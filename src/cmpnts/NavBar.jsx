import React from 'react'
import './NavBar.css'

function NavBar() {
  return (
    <div>
       <nav>
    <div class="logo">TextUtils</div>
    <label for="menu-toggle" class="menu-icon">&#9776;</label>
    <ul class="menu">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
    </div>
  )
}

export default NavBar
