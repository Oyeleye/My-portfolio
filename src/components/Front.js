import React from 'react';

export default function Front( {children, front} ) {
    return <header className={front}>{children}</header>;
}
