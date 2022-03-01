import React from 'react';
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
                    <h1>Featured Spots</h1>
                </div>
            </div>
        </div>

    );
};

export default Divider;