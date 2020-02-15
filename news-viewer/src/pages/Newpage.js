import React from 'react';
import Countries from '../components/Countries';
import NewsList from '../components/NewsList';

const NewPage = ({match}) => {
    const country = match.params.country || 'original';

    return (
    <>
        <Countries />
        <NewsList country = {country} />
    </>
    )
}

export default NewPage;