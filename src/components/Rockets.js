/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets, toggleReservation } from '../redux/rockets/rocketsSlice';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets.rockets);
  const reservedStatus = useSelector((state) => {
    const status = {};
    state.rockets.rockets.forEach((rocket) => {
      status[rocket.id] = rocket.reserved || false;
    });
    return status;
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  const toggleReserved = (id) => {
    dispatch(
      toggleReservation({ rocketId: id, isReserved: !reservedStatus[id] }),
    );
  };
  return (
    <section className="container-rocket">
      <ul className="cards">
        {rockets.map((list) => (
          <li className="card" key={list.id}>
            <img src={list.flickr_images[0]} alt={list.name} />
            <div className="card-txt">
              <h3>{list.name}</h3>
              <p>
                {reservedStatus[list.id] && (
                  <span className="reserved">Reserved</span>
                )}
                {list.text}
              </p>
              <button
                type="button"
                className="btn"
                onClick={() => toggleReserved(list.id)}
              >
                {reservedStatus[list.id] ? (
                  <span className="cancel">Cancel Reserved</span>
                ) : (
                  <span className="reserve">Reserved Rocket</span>
                )}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Rockets;
