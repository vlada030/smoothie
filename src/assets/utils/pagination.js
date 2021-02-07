const pagination = (arr) => {
    const itemsPerPage = 6;
    const pages = Math.ceil(arr.length / itemsPerPage);
    // na ovaj nacin se formira novi array sa brojem elemenata pages i svi imaju vrednost undefined, sa callback popunjavamo vrednosti, bitan je index , item je undefined
    const renderedArr = Array.from({length: pages}, (item, index) => {
        const start = index * itemsPerPage;
        return arr.slice(start, start + itemsPerPage)
    })

    return renderedArr;
}

export default pagination;