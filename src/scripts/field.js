const field = [];
export const addPlant = (seedObj) => {
    if (Array.isArray(seedObj)) {
        seedObj.forEach(seed => {
            field.push(seed);
        });
    }
    else {
        field.push(seedObj);
    };
};

export const usePlants = () => {
    return [...field];
};