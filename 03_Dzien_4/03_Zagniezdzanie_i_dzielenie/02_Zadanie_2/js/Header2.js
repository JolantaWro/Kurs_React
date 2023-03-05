import React from 'react';

const Header2 = ({ logo, searchPlaceholder }) => {
    return (
        <header>
            <a href="#">{logo}</a>
            <form>
                <input placeholder={searchPlaceholder} name="s" />
                <button>Search</button>
            </form>
        </header>
    );
};

export default Header2;