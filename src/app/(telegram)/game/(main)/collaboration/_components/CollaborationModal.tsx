'use client'
import ModalCollaborator from '@app/app/(telegram)/game/(main)/collaboration/_components/ModalCollaborator'
import React from 'react'

interface props {
  open: boolean
  close: React.Dispatch<React.SetStateAction<boolean>>
}
export default function CollaborationModal({ open, close }: props) {
  return (
    <div>
      <dialog
        open={open}
        className="modal modal-bottom sm:modal-middle backdrop-blur-sm"
        onClick={() => close(false)} // Click outside closes the modal
      >
        <div
          className="modal-box bg-[#383535] text-white relative"
          onClick={(e) => e.stopPropagation()} // Prevent click event from bubbling up
        >
          <div className="w-10 h-1 bg-white rounded-full fixed top-2 left-[50%] -translate-x-[50%]"></div>
          <p className="font-montserrat text-2xl font-bold text-center">
            Collaborator tasks
          </p>
          <p className="text-center font-montserrat text-sm text-white text-opacity-70">
            Crypto King Keyur stands among the top influencers, bringing the
            Rats Kingdom project to the attention of audiences around the world.
          </p>

          <div className="flex flex-col gap-2 my-5">
            <ModalCollaborator />
            <ModalCollaborator />
            <ModalCollaborator />
            <ModalCollaborator />
            <ModalCollaborator />
          </div>
        </div>
      </dialog>
    </div>
  )
}
