import { format } from "date-fns";
import React, { useContext } from "react";
import { AuthContext } from "./../../../contexts/AuthProvider";

const BookingModal = ({ doctor, selectedDate }) => {
  const { specialities, user } = useContext(AuthContext);

  console.log(specialities);
  console.log(doctor);
  console.log(user);
  const date = format(selectedDate, 'PP')


  const handleBooking = event => {
    event.preventDefault()
    const form = event.target;
    const slot = form.slot.value;
    const patientName = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;

    console.log(slot, patientName, phone, email);

}





  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-3xl font-bold text-green-700">{doctor.specialities} Specialist</h3> 

          <h3 className="text-2xl mt-3">Dr. {doctor.name}</h3>
          <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-8'>
                        <input type="text" disabled value={date} className="input w-full input-bordered" />
                        <select name='slot' className="select select-bordered w-full">
                            {
                                doctor.slots.map((slot, id) => <option
                                    key={id}
                                    value={slot}
                                >{slot}</option>)
                            }
                        </select>
                        <input defaultValue={user?.displayName}  name='name' type="text" placeholder="Your Name" className="input w-full input-bordered" />
                        <input defaultValue={user?.email} disabled name='email' type="email" placeholder="Email Address" className="input w-full input-bordered" />
                        <input name='phone' type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <input className='w-full btn btn-accent' type="submit" value="Submit" />
                    </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
