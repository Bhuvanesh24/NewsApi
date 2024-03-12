import news from '../assets/news.jpeg';

// NewsItem component - represents an individual news item
export const NewsItem = ({ title, description, src, url, date }) => {
  return (
    // Card container for the news item
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ maxWidth: '345px' }}>
      {/* News item image, using a default image if src is not available */}
      <img src={src ? src : news} style={{ height: '200px', width: '325px' }} className="card-img-top" alt="News Thumbnail" />
      
      {/* Card body containing news details */}
      <div className="card-body">
        {/* Display the truncated title */}
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        
        {/* Display the truncated description or a default message */}
        <p className="card-text">{description ? description.slice(0, 90) : "Press read More to get the news"}</p>
        
        {/* Display the published date */}
        <p className='cart-text'>Published At: {date}</p>
        
        {/* Button to read more, linking to the full news article */}
        <a href={url} className="btn btn-primary">Read More</a>
      </div>
    </div>
  );
};
