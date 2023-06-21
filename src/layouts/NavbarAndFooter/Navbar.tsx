export const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark main-color py-3'>
            <div className='container-fluid'>
                <span className='navbar-brand'>Love To Read</span>
                <button className='navbar-toggler' type='button'
                    // ARIA generally provides additional metadata and semantics to HTML elements
                    // 'collapse' is typically used with Bootstrap's collapse functionality
                    // target element or component that should be affected by the toggle action
                    // ARIA attribute associates an element with the ID of the element it controls
                    // 'false' suggests that the element controlled by the button (identified by aria-controls) 
                    // is initially in a collapsed state
                    // aria-label provides an accessible label 
                    data-bs-toggle='collapse' data-bs-target='#navbarNavDropdown'
                    aria-controls='navbarNavDropdown' aria-expanded='false'
                    aria-label='Toggle Navigation'
                >
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarNavDropdown'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <a className='nav-link' href='#'>Home</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#'>Search Books</a>
                        </li>
                    </ul>
                    <ul className='navbar-nav ms-auto'>
                        <li className='nav-item m1'>
                            <a type='button' className='btn btn-outline-light' href='#'>Sign in</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
