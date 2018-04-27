import React from 'react';

const Header = ({ handleSearchInput }) => (
    <nav className="navbar navbar-dark bg-dark justify-content-between sticky-top">
        <div className="input-group">
            <div className="input-group-prepend">
                <span className="input-group-text" id="">Search videos:</span>
            </div>
            <input type="text" className="form-control" onChange={handleSearchInput} />
        </div>
    </nav>
)

export default Header

