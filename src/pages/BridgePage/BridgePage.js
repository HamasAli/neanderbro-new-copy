import React, { useEffect, useState } from 'react'
import Loader from '../../components/Loader/Loader'

const BridgePage = () => {

    const [loading, setLoading] = useState(true);

    const handleIframeLoad = () => {
        setLoading(false);
    };

    useEffect(() => {
        // Set loading to false after 3 seconds
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        // Clean up the timer to prevent memory leaks
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='max-w-[1440px] mx-auto h-[85vh]'>
            {loading ? <Loader /> :
                <iframe className={`pt-20 pb-4 md:pb-0 ${loading ? 'hidden' : 'block'}`} title='Bridge Widget' src="https://umbria.network/widgetv2/?ref=oKx09huj8yufQS1R" width="100%" height="100%" scrolling="no" onLoad={handleIframeLoad}></iframe>
            }
        </div>
    )
}

export default BridgePage
