
import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
        Top workout sessions help improve strength, stamina, and overall fitness. 💪 They include exercises like cardio, strength training, and flexibility workouts that keep the body active and healthy. Regular workout sessions also boost energy levels and support a balanced lifestyle. 🏋️‍♂️
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
        Featured Bootcamps are high-energy workout sessions designed to improve strength, endurance, and overall fitness. They combine exercises like cardio, strength training, and interval workouts in a motivating group environment. These sessions push participants to challenge their limits while building discipline and teamwork
        </p>
        <div className="bootcamps">
          <div>
            <h4>Paradise GYM Levels.</h4>
            <p>
              Level 1.
            </p>
          </div>
          <div>
            <h4>Floors.</h4>
            <p>
              Max 4
            </p>
          </div>
          <div>
            <h4>Address.</h4>
            <p>
             Gwalior Mp
            </p>
          </div>
          <div>
            <h4>Nice Place.</h4>
            <p>
             Enviroment is good
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
