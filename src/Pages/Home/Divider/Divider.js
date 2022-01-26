import React from 'react';

const Divider = () => {
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-3 gap-4">
                {/* =================== all blogs ===================== */}
                <div className="col-span-2">
                    <h1>Recent Blogs</h1>
                </div>

                {/* =============== featured destination ============== */}
                <div>
                    <h1>Featured Spots</h1>
                </div>
            </div>
        </div>

    );
};

export default Divider;