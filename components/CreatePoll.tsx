import React from 'react'
import { FaRegCalendarAlt, FaTimes } from 'react-icons/fa'

const CreatePoll = () => {
  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center
    bg-black bg-opacity-50 transform z-50 transition-transform duration-300 scale-100`}
    >
      <div className="bg-[#0c0c10] text-[#BBBBBB] shadow-lg shadow-[#1B5CFE] rounded-xl w-11/12 md:w-2/5 h-7/12 p-6">
        <div className="flex flex-col">
          <div className="flex flex-row justify-between items-center">
            <p className="font-semibold">Add Poll</p>
            <button className="border-0 bg-transparent focus:outline-none">
              <FaTimes />
            </button>
          </div>

          <form className="flex flex-col justify-center items-start rounded-xl mt-5 mb-5">
            <div className="py-4 w-full border border-[#212D4A] rounded-full flex items-center px-4 mb-3 mt-2">
              <input
                placeholder="Poll Name"
                className="bg-transparent outline-none w-full placeholder-[#929292] text-sm"
                name="name"
                required
              />
            </div>

            <div
              className="py-4 w-full border border-[#212D4A] rounded-full
              flex items-center px-4 mb-3 mt-2 space-x-2 relative"
            >
              <span
                className="bg-[#1B5CFE] bg-opacity-20 text-[#4C6AD7]
                absolute left-[2.5px] py-3 rounded-full px-5 w-48"
              >
                .
              </span>
              <input
                className="bg-transparent outline-none w-full placeholder-transparent text-sm"
                name="starts"
                type="datetime-local"
                placeholder="Start Date and Time"
                required
              />
            </div>

            <div
              className="py-4 w-full border border-[#212D4A] rounded-full
              flex items-center px-4 mb-3 mt-2 space-x-2 relative"
            >
              <span
                className="bg-[#1B5CFE] bg-opacity-20 text-[#4C6AD7]
                absolute left-[2.5px] py-3 rounded-full px-5 w-48"
              >
                .
              </span>
              <input
                className="bg-transparent outline-none w-full placeholder-[#929292] text-sm"
                name="ends"
                type="datetime-local"
                required
              />
            </div>

            <div className="py-4 w-full border border-[#212D4A] rounded-full flex items-center px-4 mb-3 mt-2">
              <input
                placeholder="Banner URL"
                type="url"
                className="bg-transparent outline-none w-full placeholder-[#929292] text-sm"
                name="banner"
                required
              />
            </div>

            <div className="py-4 w-full border border-[#212D4A] rounded-xl flex items-center px-4 h-20 mt-2">
              <textarea
                placeholder="Poll Description"
                className="bg-transparent outline-none w-full placeholder-[#929292] text-sm"
                name="banner"
                required
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CreatePoll
