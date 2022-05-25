import React from 'react';

const Spinner = () => {
    return (
        <div>
            <div class="flex items-center justify-center h-screen">
                <div className="w-24 h-24 border-l-4 border-gray-900 rounded-full animate-spin"></div>
            </div>
        </div>
    );
};

export default Spinner;