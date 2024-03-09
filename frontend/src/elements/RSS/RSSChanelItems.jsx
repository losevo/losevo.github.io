import { useSelector } from "react-redux";
import "./RSSResult.css";

// todo #5 Добавить смену активных каналов rss

const RSSChannelItems = () => {
  const channels = useSelector((state) => state.rss.rssList);
  const channelsOnlyNameAndDescription = channels.map((rssChannel) => {
    return {
      title: rssChannel.title,
      description: rssChannel.description,
    };
  });

  return (
    <div className="channels-list">
      <ul>
        {channelsOnlyNameAndDescription.map((channel, index) => {
          return (
            <li key={index}>
              <button className="channel">
                <h3>{channel.title}</h3>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RSSChannelItems;
