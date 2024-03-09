const formRssList = (doc) => {
    const objectNewRss = { 
        title: '',
        description: '',
        items: [],
};

    objectNewRss.title = doc.querySelector('title').innerHTML;
    objectNewRss.description = doc.querySelector('description').innerHTML;
    const listOfItems = doc.querySelectorAll('item');
    listOfItems.forEach((item) => {
        const newItem = {
            title: `${item.querySelector('title').innerHTML}`,
            link: `${item.querySelector('link').innerHTML}`,
            channel: `${objectNewRss.title}`,
        }
        objectNewRss.items.push(newItem);
    });
    return objectNewRss;
} 

export default formRssList;
