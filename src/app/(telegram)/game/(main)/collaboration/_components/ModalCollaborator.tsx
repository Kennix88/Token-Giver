import { FaYoutube } from 'react-icons/fa'
export default function ModalCollaborator() {
  return (
    <div>
      <div className="flex justify-between items-center gap-3">
        <div className="bg-black bg-opacity-60 rounded-full p-2">
          <FaYoutube className="text-3xl" />
        </div>
        <p className="line-clamp-2 font-montserrat text-sm font-medium">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur,
          molestiae!
        </p>
        <button className="bg-black bg-opacity-70 px-3 py-1 rounded-full font-montserrat text-xl">
          Start
        </button>
      </div>
    </div>
  )
}
