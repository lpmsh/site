import React, { useState, useEffect } from 'react';


export function useIsVisible(ref, scrollCounter) {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) =>
            setIntersecting(entry.isIntersecting)
        );

        observer.observe(ref.current);
        return () => {
            observer.disconnect();
        };
    }, [ref, scrollCounter]);

    return isIntersecting;
}
