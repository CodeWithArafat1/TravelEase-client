import React, { memo } from "react";
import { IoClose } from "react-icons/io5";
import { GrAlert } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { closeConfirmModal } from "../redux/features/ConfirmModalSlice";
const ConfirmModal = ({
  selectProd,
  fetchData,
  message = "Delete this Vehicle",
}) => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((store) => store.confirmModal);
  return (
    <div
      className={`fixed ${
        isOpen ? "flex" : "hidden"
      }  inset-0 z-50  items-center justify-center`}
    >
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => dispatch(closeConfirmModal())}
      ></div>

      <div className="relative bg-white rounded-xl shadow-2xl max-w-md w-full mx-4">
        <button
          onClick={() => dispatch(closeConfirmModal())}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors p-1"
        >
          <IoClose size={24} />
        </button>

        <div className="p-6 md:p-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
              <span className="h-8 w-8 flex items-center justify-center text-red-600">
                <GrAlert size={25} />
              </span>
            </div>
          </div>

          <div className="text-center mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
              Are You Sure?
            </h2>
            <p className="text-gray-600">{message}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => dispatch(closeConfirmModal())}
              className="w-full sm:w-auto px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                fetchData(selectProd);
                dispatch(closeConfirmModal());
              }}
              className="w-full sm:w-auto cursor-pointer py-3 px-6 bg-linear-to-r from-emerald-500 to-sky-500 text-white font-semibold rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ConfirmModal);
