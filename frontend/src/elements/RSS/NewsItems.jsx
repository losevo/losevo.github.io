import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './RSSResult.css';

// todo #19 Сделать смену активного канала по нажатию на тег

const NewsItems = () => {
    const rssList = useSelector((state) => state.rss.rssList);
    const itemsList = rssList.map((channel) => channel.items).flat();

    return (
        <div className="news-list">
           {itemsList.map((item, index) => {
            return (
                <div className='one-new' key={index}>
                    <div> <Link to={item.link}>{item.title}</Link></div>
                    <div className='tag-channel'>{item.channel}</div>
                </div>
            )
           })}
            
        </div>
    )
};

export default NewsItems;
