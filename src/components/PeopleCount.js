import React, { useState } from 'react';

const PeopleCount = props => {
    return (
        <h2 className="mt-4 text-center">
            { props.peopleCount }
        </h2>
    )
};

export default PeopleCount;
