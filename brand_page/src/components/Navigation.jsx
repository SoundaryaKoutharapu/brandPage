const Navigation = () => {
  return (
    <nav>
    <div className="logo">
     <img src="./images/brand_logo.png" alt="logo"/>
    </div>

    <ul>
      <li href = '#' >MENU</li>
      <li href='#'>LOCATION</li>
      <li href='#'>ABOUT</li>
      <li href='#'>CONTACT</li>
    </ul>

    <div>
      <button className="button">Login</button>
    </div>
</nav>
  )
}
export default Navigation