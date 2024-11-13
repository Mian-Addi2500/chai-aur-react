import React from "react";

function Card({ username, footer = "Click me!" }) {
  return (
    <>
      <div className="max-w-sm rounded  overflow-hidden shadow-lg">
        <img
          className="w-full"
          src="https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-in-headphones-showing-programming-process-on-a-laptop.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{username}</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block btn bg-blue-600 rounded-full px-3 py-1 text-sm font-semibold text-white-700 mr-2 mb-2 cursor-pointer">
            {footer}
          </span>
        </div>
      </div>
    </>
  );
}

export default Card;
