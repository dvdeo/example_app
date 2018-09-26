import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import {Glyphicon} from 'react-bootstrap';

export default class Navbar extends React.Component {
    render() {
        return (
            
            <nav className='navbar'>
                <h1><Link to='/'>React Notes</Link></h1>
                <div className="navbar-new">
                    <Button className="btn-success"><Glyphicon glyph="star" /><Link to='/new'>New Notes</Link></Button>
                </div>
            </nav>
        );
    }
}