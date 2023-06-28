import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
export default function NavHider({ children }) {
    const loc = useLocation();
    const [nav, setnav] = useState(false);
    useEffect(() => {
        if (loc.pathname === "/login" || loc.pathname === "/register") {
            setnav(false);
        }
        else {
            setnav(true);
        }

    }, [loc]);
    return (
        <div>
            {nav && children};
        </div>
    )
}
