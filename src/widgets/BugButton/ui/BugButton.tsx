import { useEffect, useState } from 'react';

export const BugButton = () => {
    const [error, setError] = useState(false);

    const onThrowError = () => setError(true);

    useEffect(() => {
        if (error) {
            throw new Error('this is test error.');
        }
    }, [error]);

    return (
        <button type="button"
            onClick={onThrowError}
        >
            throw error
        </button>
    );
};