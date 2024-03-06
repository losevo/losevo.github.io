import { useSelector } from "react-redux";
import "./RSSResult.css";

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
        {channelsOnlyNameAndDescription.map((channel) => {
          return (
            <li>
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
