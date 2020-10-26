import React from 'react';
import WithSearch from './WithSearch';

const pList = [
    {
        'name': 'Akshay',
        'zone': 'test'
    },
    {
        'name': 'Vikas',
        'zone': 'test'
    },
    {
        'name': 'Asha',
        'zone': 'zio'
    }, {
        'name': 'Vishal',
        'zone': 'test'
    },
    {
        'name': 'Amruta',
        'zone': 'test'
    },
    {
        'name': 'Sjhri',
        'zone': 'zio'
    }
];

const List = ({ searchTerm }) => {
    return (
        <>
            { searchTerm === '' ?
                pList
                    .map(location1 => <>
                        <div>
                            {location1.name}
                        </div>
                    </>) :
                pList.filter(element => element.name.includes(searchTerm))
                    .map(location1 => <>
                        <div>
                            {location1.name}
                        </div>
                    </>)
            }
        </>
    )
}

export default WithSearch(List);