import { useState } from "react";
import { Grid, List } from "lucide-react";
const Sidebar = ({setFeedback , viewType, setViewType}) => {
 

  return (
    <div className="">
      <div className="flex items-center gap-4 mb-8 bg-white p-4 rounded-lg shadow-sm">
        <img
          src="https://static.vecteezy.com/system/resources/previews/004/607/791/non_2x/man-face-emotive-icon-smiling-male-character-in-blue-shirt-flat-illustration-isolated-on-white-happy-human-psychological-portrait-positive-emotions-user-avatar-for-app-web-design-vector.jpg"
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <h1 className="font-semibold text-gray-800">Hi Reader,</h1>
          <p className="text-gray-600 text-sm">Here&apos;s your News!</p>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-sm mb-8">
        <h2 className="font-semibold text-gray-800 mb-4">View Toggle</h2>
        <div className="flex gap-4">
          <button
            onClick={() => setViewType("grid")}
            className={`flex items-center gap-2 px-4 py-2 rounded-md ${
              viewType === "grid"
                ? "bg-emerald-100 text-emerald-700"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            <Grid className="w-4 h-4" />
            Grid
          </button>
          <button
            onClick={() => setViewType("list")}
            className={`flex items-center gap-2 px-4 py-2 rounded-md ${
              viewType === "list"
                ? "bg-emerald-100 text-emerald-700"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            <List className="w-4 h-4" />
            List
          </button>
        </div>
      </div>

      {/* Feedback Section */}
      <div className="bg-white p-4 rounded-lg shadow-sm mb-8">
        <h2 className="font-semibold text-gray-800 mb-4">Have a Feedback?</h2>
        <button type="button" onClick={() => setFeedback(true)} className="bg-emerald-400 text-white px-6 py-2 rounded-md hover:bg-emerald-500 transition-colors">
          We&apos;re Listening!
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
