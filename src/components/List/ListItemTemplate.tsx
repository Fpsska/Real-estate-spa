import React from 'react';

// /. imports

interface propTypes {
    text: string;
    link: string;
    isMainLinks?: boolean;
}

// /. interfaces

const ListItemTemplate: React.FC<propTypes> = ({ text, link, isMainLinks }) => {
    return (
        <li className="list__item">
            <a
                className={
                    isMainLinks ? 'list__link list__link--main' : 'list__link'
                }
                href={link}
                onClick={e => e.preventDefault()}
            >
                {text}
            </a>
        </li>
    );
};

export default ListItemTemplate;
