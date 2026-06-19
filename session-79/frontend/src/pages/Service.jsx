import React from 'react'

function Service() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Our Services
        </h1>

        <ul className="space-y-4">
          <li className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500">
            Student Management
          </li>

          <li className="bg-green-50 p-3 rounded-lg border-l-4 border-green-500">
            Attendance Tracking
          </li>

          <li className="bg-yellow-50 p-3 rounded-lg border-l-4 border-yellow-500">
            Course Management
          </li>

          <li className="bg-purple-50 p-3 rounded-lg border-l-4 border-purple-500">
            Placement Support
          </li>
        </ul>

      </div>
    </div>
  );
}



export default Service