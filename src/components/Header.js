import React from 'react';

function Header() {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-primary justify-content-between'>
            <div className='container'>
                <h1>CRUD con React, Redux, REST API y Axios</h1>
            </div>

            <a
                href='/productos/nuevo'
                className='btn btn-danger nuevo-post d-block d-md-inline-block'
            >
                Agregar producto &#43;
            </a>
        </nav>
    );
}

export default Header;
