import * as React from 'react';
import { useState, useEffect } from 'react';

function MyComponent({name}: {name?: string}) {
    return ( <div className='wow'>Hello world from my component {name}</div> );
}

export default MyComponent;