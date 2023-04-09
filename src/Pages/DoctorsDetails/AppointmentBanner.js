import React from "react";
import { DayPicker } from "react-day-picker";
const AppointmentBanner = ({ selectedDate, setSelectedDate, doctor }) => {


  const disabledDays = [
    { from: new Date(2000, 1, 1), to: new Date(2023, 3, 2) }
  ];


  return (

    <div className="hero">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse gap-12">
        <div>
          <div className="card lg:mx-0 border px-10">
            <div className="card-body text-center">
              <h2 className="text-2xl font-bold text-green-600 text-center">
                {doctor.name}
              </h2>
              <p>
                {doctor.slots.length > 0 ? doctor.slots[0] : "Try another day"}
              </p>
              <p>
                {doctor.slots.length}{" "}
                {doctor.slots.length > 1 ? "spaces" : "space"} available
              </p>
              <p>
                <small>Price: {doctor.price} Taka</small>
              </p>

              <div className="">
                <label
                  disabled={doctor.slots.length === 0}
                  htmlFor="booking-modal" className="btn btn-primary">Book Appointment</label>
              </div>

            </div>
          </div>
        </div>

        <div className="mb-0">
          <DayPicker
            mode='single'
            selected={selectedDate}
            onSelect={(selectedDate) => {
              if (selectedDate) {
                setSelectedDate(selectedDate)
              }
            }}
            disabled={disabledDays}
          />
        </div>


      </div>
    </div>
  );
};

export default AppointmentBanner;
