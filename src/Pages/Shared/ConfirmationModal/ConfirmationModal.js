import React from 'react';

const ConfirmationModal = ({ title, message, closeModal, modalData, successAction, successButtonName }) => {

    return (
        <div>
            {/* The button to open modal */}
            {/* This open modal button is in manage doctor component */}

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-xl">{title}</h3>
                    <p className="py-4 font-semibold">{message}</p>
                    <div className="modal-action">
                        <label
                            onClick={() => successAction(modalData)}
                            htmlFor="confirmation-modal"
                            className="btn btn-error text-white"
                        >{successButtonName}</label>
                        <label onClick={closeModal} className="btn btn-outline ">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;