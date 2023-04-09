import React from "react";
import { format } from "date-fns";

const AvailableAppointment = ({ selectedDate, doctor }) => {
  console.log(doctor);

  return (
    <div>
      <div>
        <p  className="text-center mt-20 text-2xl font-semibold">Available Appointment on <span className="font-bold"> {format(selectedDate, "PP")}</span></p>
      </div>

      
    </div>
  );
};

export default AvailableAppointment;
