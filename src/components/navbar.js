import React from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends React.Component {
    render() {
        return (

            <nav className='navbar'>
                <h1><Link to='/'>ReactNotes</Link></h1>
                <div>
                    <Link to='/new' className='btn'>New Notes</Link>
                </div>
            </nav>
        );
    }
}