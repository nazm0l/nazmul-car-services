import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className='w-100 d-flex justify-content-center align-items-center mt-5 p-5'>
            <Spinner animation="border" variant="danger" />
        </div>
    );
};

export default Loading;