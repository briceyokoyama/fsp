import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => (
  <li>
    <div className='album-index-item'>
      <Link to={`/albums/${props.album.id}`}>
        <img className='album-image' src={props.album.coverUrl} alt="album"/>
      </Link>
      <Link to={`/albums/${props.album.id}`}>
        <span className='album-name'>{props.album.title}</span>
      </Link>
      <Link to={`/albums/${props.album.id}`}>
        <span className='artist-name'>{props.album.artist}</span>
      </Link>
    </div>
  </li>
)