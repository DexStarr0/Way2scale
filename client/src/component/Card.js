import React from "react";

export default function Card(props) {
  const { newsInfo } = props;

  return (
    <div className="card m-2" style={{ width: "18rem" }}>
      <img
        src={newsInfo.urlToImage}
        alt="News Thumbnail"
        className="img-responsive"
        style={{ height: "100%", width: "100%" }}
      />
      <div className="card-body">
        <h5 className="card-title">{newsInfo.title.slice(0, 50)}...</h5>
        <p className="card-text">{newsInfo.description}</p>

        <a
          href={newsInfo.url}
          className="badge badge-success bg-success"
          target="_blank"
          rel="noreferrer"
        >
          Read More..
        </a>
      </div>
      <div className="card-footer">
        <small className="text-muted">
          Published at {newsInfo.publishedAt.substring(0, 10)}
        </small>
      </div>
    </div>
  );
}
