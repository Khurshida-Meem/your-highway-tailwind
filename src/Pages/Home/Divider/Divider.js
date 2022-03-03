import React from 'react';
import Blogs from '../Blogs/Blogs/Blogs';
import Places from '../Places/Places';

const Divider = () => {
    return (
        <div className="container mx-auto">
            <div className="grid md:grid-cols-3 gap-4">
                {/* =================== all blogs ===================== */}
                <div className="col-span-2">
                    <Places></Places>
                </div>

                {/* =============== featured destination ============== */}
                <div>
                    <Blogs></Blogs>
                </div>
            </div>
        </div>

    );
};

export default Divider;