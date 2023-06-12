import React, {MutableRefObject, useEffect, useRef} from 'react';
import Box from './components/Box';

function App() {
    const refBox = useRef(null);

    return (
        <div className="app">
            <Box margin='20px' background='red' color='green' refBox={refBox}>Test</Box>
        </div>
    );
}

export default App;
