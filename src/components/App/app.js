import React from 'react';

import Grid from '../UI/Grid';
import Header from '../UI/Header';

export default function App() {
    return (
        <>
            <div className="mb-8">
                <Header />
            </div>
            <div className="container mx-auto mb-8">
                <Grid />
            </div>
        </>
    )
}
