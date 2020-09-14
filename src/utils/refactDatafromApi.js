const refactData = (data, nanoid) => {
    return data.map(elem => {
        elem.userId = nanoid(8);
        return elem;
    })
}

export default refactData;