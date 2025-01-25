import React from 'react';

const Specification = ({spec}) => {

    const {key,value} = spec;

    return (
        <div>
            <li>{value}</li>
           
        </div>
    );
};

export default Specification;