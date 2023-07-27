/* eslint-disable max-len */
import { useSelector, useDispatch } from 'react-redux';
import { joinMission } from '../redux/missions/missionSlice';

const MyProfile = () => {
  const dispatch = useDispatch();
  const missionsStore = useSelector((state) => state.missions);
  const { missions } = missionsStore;
  const myMissions = missions.filter((mission) => mission.joined === true);
  const reservedRockets = useSelector((state) =>
    state.rockets.rockets.filter((rocket) => rocket.reserved === true)
  );

  return (
    <section className="myProfile">
      <div className="container">
        <div className="row justify-content-evenly">
          <div className="col-12">
            <h1 className="p-1">My Missions</h1>
            <div>{!myMissions.length ? 'No Missions Joined' : ' '}</div>
            <div>
              {myMissions.map((mission) => (
                <div
                  className="border p-3 d-flex justify-content-between align-items-center"
                  key={mission.id}
                >
                  <div>{mission.name}</div>
                  <button
                    type="button"
                    className="btn btn-outline-danger"
                    onClick={() => dispatch(joinMission(mission))}
                  >
                    Leave Mission
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="rockets-profile">
        <h2>My Rockets</h2>
        <p>{!reservedRockets.length ? 'No Rockets Reserved' : ''}</p>
        <ul className="borderLi">
          {reservedRockets.map((rocket) => (
            <li key={rocket.id}>{rocket.name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default MyProfile;
