import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import ReactToPdf from "react-to-pdf";
import QRCode from "react-qr-code";
const MyPrescription = () => {
  const { user } = useContext(AuthContext);

  //fetch prescription data from database

  const url1 = `http://localhost:5000/prescriptions?email=${user?.email}`;

  const { data: prescriptions = [] } = useQuery({
    queryKey: ["prescriptions", user?.email],
    queryFn: async () => {
      const res = await fetch(url1, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  console.log(prescriptions);

  const ref = React.createRef();

  return (
    <div className="bg-white py-48">
      

      {/* <div style={{width: 500, height: 500, margin:'auto'}} ref={ref} className="flex justify-center mt-48">
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Your Prescription</h2>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Download PDF</button>
            </div>
          </div>
        </div>
      </div>  */}

      {
        prescriptions[0]?.patientEmail ? 

        <>
         <div
        ref={ref}
        style={{
            width: 300, height: 300, margin:'0 auto',
        }}
      >
        <QRCode
          size={256}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          value={`Name: ${prescriptions[0]?.patientName}, Email: ${prescriptions[0]?.patientEmail}, Category: ${prescriptions[0]?.category}, Medicine: ${prescriptions[0]?.medicine}, Day: ${prescriptions[0]?.day}, TakePill: ${prescriptions[0]?.take} Times`}
          viewBox={`0 0 256 256`}
        />
      </div>


      <div className="flex justify-center mt-10">
        <ReactToPdf targetRef={ref} filename="Prescription.pdf">
          {({ toPdf }) => <button className="btn" onClick={toPdf}>Generate pdf</button>}
        </ReactToPdf>
      </div>
        
        
        </>

        :

        <>
        
        <div className="text-center text-4xl font-bold">
          Doctor do not prescribe you.  
        </div>
        
        
        </>
      }


     
    </div>
  );
};

export default MyPrescription;
