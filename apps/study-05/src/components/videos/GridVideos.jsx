 
/* eslint-disable no-unused-vars */
import React from "react";
import "./PageVideos.css";
 
// Lista de URLs de vídeos de receitas brasileiras no YouTube
const videoUrls = [
  "https://www.youtube.com/embed/44XYEeD1A1U",
  "https://www.youtube.com/embed/e7q5HTXZyi4",
  "https://www.youtube.com/embed/0xLEvB5LHsQ",
  "https://www.youtube.com/embed/4f6gUYFbxyE",
  "https://www.youtube.com/embed/7hx4gdlfamo",
  "https://www.youtube.com/embed/6F7qTbJGdy8",
  "https://www.youtube.com/embed/7blXB1zEYko",
  "https://www.youtube.com/embed/8CS9O5QSEHE",
  "https://www.youtube.com/embed/9H2KkjGnAxQ",
  "https://www.youtube.com/embed/1A8oh8SDeRA",
  "https://www.youtube.com/embed/2B4YFzFZsJw",
  "https://www.youtube.com/embed/3C2nQ6-wADo",
  "https://www.youtube.com/embed/4D4SLt9tGJ8",
  "https://www.youtube.com/embed/5ET0K6JZjko",
  "https://www.youtube.com/embed/6FW5H1GuzLQ",
  "https://www.youtube.com/embed/7GSYFZJlJXg",
  "https://www.youtube.com/embed/8H6Rm7vj1PQ",
  "https://www.youtube.com/embed/9I7plbVzFKM",
  "https://www.youtube.com/embed/1JL9_AmBhbo",
  "https://www.youtube.com/embed/2KT0YVfboGY",
  "https://www.youtube.com/embed/3L09Weib5oI",
  "https://www.youtube.com/embed/4M11O7QO4zA",
  "https://www.youtube.com/embed/5N0ojESgZog",
  "https://www.youtube.com/embed/6P0qZpXT1Lo",
  "https://www.youtube.com/embed/7Q1qzQFEKfE",
  "https://www.youtube.com/embed/8R2rzRN5kfg",
  "https://www.youtube.com/embed/9S3qBSQUnow",
  "https://www.youtube.com/embed/1T4rcXJItPQ",
  "https://www.youtube.com/embed/2U5tXeUJocI",
  "https://www.youtube.com/embed/3V6ubfZc1TA",
];
 
function GridVideos() {
  return (
    <div className="video-grid">
      {videoUrls.map((url, index) => (
        <div key={index} className="video-item">
          <iframe
            src={url}
            title={`video ${index + 1}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>
  );
}
 
export default GridVideos;