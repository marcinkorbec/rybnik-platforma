import React from 'react';
import CouncillorsInfoHeader from './CouncillorsInfoHeader';
import CouncillorsTable from './CouncillorsTable';

const CouncillorsView = () => {
    return (
        <div>
            <h1>Wykaz radnych aktualnej kadencji:</h1>
            <CouncillorsInfoHeader />
            <CouncillorsTable />
        </div>
    );
};

export default CouncillorsView;
