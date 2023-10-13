import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import VideoPlayImage from '../../public/icons/play_circle.svg';
import Image from 'next/image'


const videos = [
  {
    id: 'S4plMxPsShA',
    title: 'Video 1',
    thumbnail: 'https://i.ytimg.com/vi/S4plMxPsShA/maxresdefault.jpg',
  },
  {
    id: 'Tfzgs0s5bIw',
    title: 'Video 2',
    thumbnail: 'https://i.ytimg.com/vi/Tfzgs0s5bIw/maxresdefault.jpg',
  },
  {
    id: 'kfsRc3rVpOM',
    title: 'Video 3',
    thumbnail: 'https://i.ytimg.com/vi/kfsRc3rVpOM/maxresdefault.jpg',
  },
  {
    id: '9v8YJybSWFw',
    title: 'Video 4',
    thumbnail: 'https://i.ytimg.com/vi/9v8YJybSWFw/maxresdefault.jpg',
  },
  {
   id: 'KJ4r2Nc1sxk',
   title: 'Video 4',
   thumbnail: 'https://i.ytimg.com/vi/cBTyzvwSXo0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD56chcj91f4YTxY_3_r9iGOndxKQ',
 },
];

const YouTubeCarousel = () => {
  const [showModal, setShowModal] = useState(false);
  const [videoId, setVideoId] = useState('');

  const openModal = (id) => {
    setVideoId(id);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <div id="youtubeCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className={`carousel-item${index === 0 ? ' active' : ''}`}
            >
              <a
                onClick={() => openModal(video.id)}
              >
               <div className='playVideoImage'>
                  <Image
                  src={VideoPlayImage}
                  />
               </div>
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  width="380"
                  height="225"
                />
                
              </a>
            </div>
          ))}
        </div>
        <a
          className="carousel-control-prev"
          href="#youtubeCarousel"
          role="button"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#youtubeCarousel"
          role="button"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" ariahidden="true"></span>
          <span className="visually-hidden">Next</span>
        </a>
      </div>

      <div id="thumbnails">
        {videos.map((video) => (
          <a
            key={video.id}
            onClick={() => openModal(video.id)}
          >
            
            <img
              src={video.thumbnail}
              alt={video.title}
              width="63"
              height="50"
            />
          </a>
        ))}
      </div>

      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <iframe
            width="100%"
            height="460"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video"
            allowFullScreen
          ></iframe>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default YouTubeCarousel;
