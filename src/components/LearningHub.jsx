import React from 'react';
import { Video, Plus, FileText, Users, Clock, MapPin } from 'lucide-react';

const courses = [
  { id: 1, name: "Advanced Web Development", instructor: "Dr. Smith", progress: 75, nextClass: "Mon 10AM", assignment: "React Project Due" },
  { id: 2, name: "Database Systems", instructor: "Prof. Johnson", progress: 60, nextClass: "Tue 2PM", assignment: "SQL Quiz Tomorrow" },
  { id: 3, name: "Machine Learning", instructor: "Dr. Williams", progress: 40, nextClass: "Wed 11AM", assignment: "Model Training Lab" }
];

const studyGroups = [
  { id: 1, name: "Calculus III Study Group", members: 8, subject: "Mathematics", nextSession: "Today 6PM", location: "Library Room 204" },
  { id: 2, name: "Organic Chemistry Lab", members: 12, subject: "Chemistry", nextSession: "Tomorrow 2PM", location: "Science Building" },
  { id: 3, name: "Data Science Project Team", members: 6, subject: "Computer Science", nextSession: "Friday 4PM", location: "Tech Center" }
];

const LearningHub = () => (
  <div className="space-y-6">
    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 rounded-2xl p-6 text-white">
      <h2 className="text-2xl font-bold mb-4">Smart Learning Hub</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <button className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4 hover:bg-opacity-30 transition-all transform hover:scale-105">
          <Video size={24} className="mb-2" />
          <div className="text-sm font-medium">Join Study Room</div>
        </button>
        <button className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4 hover:bg-opacity-30 transition-all transform hover:scale-105">
          <Plus size={24} className="mb-2" />
          <div className="text-sm font-medium">Create Group</div>
        </button>
        <button className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4 hover:bg-opacity-30 transition-all transform hover:scale-105">
          <FileText size={24} className="mb-2" />
          <div className="text-sm font-medium">Share Notes</div>
        </button>
      </div>
    </div>
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Your Courses</h3>
      <div className="space-y-4">
        {courses.map((course) => (
          <div key={course.id} className="border border-gray-200 rounded-xl p-4 hover:border-blue-300 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold text-gray-900">{course.name}</h4>
              <span className="text-sm text-gray-500">{course.instructor}</span>
            </div>
            <div className="mb-3">
              <div className="flex items-center justify-between text-sm text-gray-600 mb-1">
                <span>Progress</span>
                <span>{course.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-2 text-gray-600">
                <Clock size={16} />
                <span>Next: {course.nextClass}</span>
              </div>
              <div className="text-orange-600 font-medium">{course.assignment}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Active Study Groups</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {studyGroups.map((group) => (
          <div key={group.id} className="border border-gray-200 rounded-xl p-4 hover:border-purple-300 transition-colors">
            <h4 className="font-semibold text-gray-900 mb-2">{group.name}</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Users size={16} />
                <span>{group.members} members</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={16} />
                <span>{group.nextSession}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>{group.location}</span>
              </div>
            </div>
            <button className="w-full mt-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white py-2 rounded-lg hover:shadow-lg transition-all transform hover:scale-105">
              Join Session
            </button>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default LearningHub;