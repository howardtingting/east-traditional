import {useEffect, useState} from 'react';

export interface Size {
    width: number | undefined;
    height: number | undefined;
}
  
export function useWindowSize(): Size {  
    const [windowSize, setWindowSize] = useState({
        width: 0 || undefined,
        height: 0 || undefined
    });

    useEffect(() => {
        function handleResize() {
        setWindowSize({
            width: undefined,
            height: undefined
        });
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
}