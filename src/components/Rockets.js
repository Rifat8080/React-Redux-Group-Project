/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import imgSpace from '../assets/space-x1.jpg';

const Rockets = () => {
  const data = [
    {
      id: 1,
      img: imgSpace,
      title: 'Falcon 1',
      text: 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
    },
    {
      id: 2,
      img: imgSpace,
      title: 'Falcon 2',
      text: 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
    },
  ];
  const [reservedStatus, setReservedStatus] = useState({});

  const toggleReserved = (id) => {
    setReservedStatus((prevStatus) => ({
      ...prevStatus,
      [id]: !prevStatus[id],
    }));
  };
  return (
    <section className="container-rocket">
      <ul className="cards">
        {data.map((list) => (
          <li className="card" key={list.id}>
            <img src={list.img} alt={list.title} />
            <div className="card-txt">
              <h3>{list.title}</h3>
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
