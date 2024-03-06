const formRssList = (doc) => {
    const objectNewRss = { 
        title: '',
        description: '',
        items: [],
};

console.log(doc);
    objectNewRss.title = doc.querySelector('title').innerHTML;
    objectNewRss.description = doc.querySelector('description').innerHTML;
    const listOfItems = doc.querySelectorAll('item');
    listOfItems.forEach((item) => {
        const newItem = {
            title: `${item.querySelector('title').innerHTML}`,
            link: `${item.querySelector('link').innerHTML}`,
        }
        objectNewRss.items.push(newItem);
    });
    return objectNewRss;
} 

export default formRssList;
