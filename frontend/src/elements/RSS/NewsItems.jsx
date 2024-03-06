import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './RSSResult.css';

const NewsItems = () => {
    const rssList = useSelector((state) => state.rss.rssList);
    const itemsList = rssList.map((channel) => channel.items).flat();

    return (
        <div className="news-list">
           {itemsList.map((item) => {
            return (
                <div className='one-new'>
                    <div> <Link to={item.link}>{item.title}</Link></div>
                </div>
            )
           })}
            
        </div>
    )
};

export default NewsItems;
