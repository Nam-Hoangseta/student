import { Dialog, Transition } from "@headlessui/react";
import { bool, func } from "prop-types";
import React, { Fragment, useRef } from "react";
import { IoClose } from "react-icons/io5";

function MainModal({ modalOpen, setModalOpen, children }) {
  const cancelButtonRef = useRef();
  return (
    <Transition show={modalOpen} as={Fragment} appear>
      <Dialog
        as="div"
        className="fixed inset-0  overflow-y-auto text-center"
        initialFocus={cancelButtonRef}
        onClose={() => setModalOpen(false)}
      >
        <div className="min-h-screen px-4">
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#B203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-60" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {children}
          </Transition.Child>
          <div className="absolute right-5 top-5">
            <button
              onClick={() => setModalOpen(false)}
              type="button"
              className="transitions  w-10 h-10  flex-colo px-4 py-2 text-base font-medium transitions text-subMain bg-white rounded-full hover:bg-subMain hover:text-white"
            >
              <IoClose />
            </button>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
MainModal.propTypes = {
  setModalOpen: func,
  modalOpen: bool,
};

export default MainModal;
