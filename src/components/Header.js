import React, { useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Header(props) {

    return (
        <div style={{textAlign:'left'}}>
            <Link to="/"><h1 style={{fontSize:'50pt', color:'black', textDecoration: "underline white"}}>&nbsp;GMS</h1></Link>
        </div>
    );
}

export default Header;
