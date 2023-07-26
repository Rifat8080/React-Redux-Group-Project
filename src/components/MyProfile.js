/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux';

// eslint-disable-next-line padded-blocks
const MyProfile = () => {
  const rockets = useSelector((state) => state.rockets.rockets.filter((rocket) => rocket.reserved === true));

  return (
    <section className="myProfile">
      <div className="rockets-profile">
        <h2>My Rockets</h2>
        <ul className="table">
          {rockets.map((rocket) => (
            <li key={rocket.id}>{rocket.name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default MyProfile;
