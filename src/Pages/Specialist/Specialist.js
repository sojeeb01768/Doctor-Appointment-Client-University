import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';


const Specialist = () => {

  const doctors = useLoaderData();
  console.log(doctors);

  return (
    <div className='mt-20'>
      {
        doctors.map(doctor =>
          <div key={doctor._id}
            className="  py-5 mx-auto sm:max-w-xl md:max-w-full lg:w-8/12 md:px-24 lg:px-8 lg:py-5">
            <Link to={`/doctorsDetails/${doctor?._id}`}>
              <div className="p-5 rounded shadow-lg border w-full hover:shadow-xl">
                <div className='flex gap-5 justify-between items-center'>
                  <div className='flex gap-3'>
                    <img className='w-28 rounded' src={doctor?.image} alt="" />
                    <div className="flex flex-col ">
                      <div className="mb-2 lg:mb-0  lg:pr-5">
                        <h2 className="font-sans text-xl font-bold tracking-tight text-gray-900  sm:leading-none">
                          {doctor?.name}
                        </h2>
                      </div>
                      <div className="">
                        <p className="mb-2 text-base text-gray-700">
                          {doctor?.designation}
                        </p>
                        <p className="mb-4 text-base flex flex-col text-gray-700">
                          Specialities <br /> {doctor?.specialities}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className=''>
                    <p> Working in <br /> <span>{doctor?.hospital}</span> </p>
                    <p>Total Experience <br /> <span>{doctor?.TotalExperience} Years</span></p>
                  </div>
                </div>
              </div>
            </Link>
          </div>)
      }
    </div>
  );
};

export default Specialist;