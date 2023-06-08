import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Inspiring Minds, Empowering Souls</span>
        <span className="headerTitleLg">Ignite Inspiration</span>
      </div>
      <img
        className="headerImg"
        src="https://assets-global.website-files.com/5ff3926f03b3ba043ed639d1/601f3c73721e170c703545d3_5ea8b3afbff98a5c7663bd91_redesigning-the-blog.png"
        alt=""
      />
    </div>
  );
}
