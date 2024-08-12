const colors = {
  black: 'navbar-inverse',
  white: 'navbar-default'
}

function NavBar() {
  return (
    <nav>
      <div className="navtext">
        <h1>Giphy Search</h1>
      </div>
    </nav>
    // <nav className={`navbar ${colors[color]}`}>
    //   <div className='container-fluid'>
    //     <div className='navbar-header'>
    //       <div className='navbar-brand'>
    //         {title}
    //       </div>
    //     </div>
    //   </div>
    // </nav> { color, title }
  )
}

export default NavBar
