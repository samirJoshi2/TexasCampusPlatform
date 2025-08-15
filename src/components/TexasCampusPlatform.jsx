import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Calendar, 
  MessageCircle, 
  BookOpen, 
  GraduationCap,
  Bell,
  Search,
  Plus,
  Heart,
  Share2,
  Star,
  MapPin,
  Clock,
  Video,
  FileText,
  User,
  Settings,
  TrendingUp,
  Award,
  Coffee,
  Music,
  Camera,
  Zap
} from 'lucide-react';

const TexasCampusPlatform = () => {
  const [activeTab, setActiveTab] = useState('social');
  const [selectedPost, setSelectedPost] = useState(null);
  const [notifications, setNotifications] = useState(3);
  const [isOnline, setIsOnline] = useState(true);

  // Mock data
  const socialPosts = [
    {
      id: 1,
      user: { name: "Sarah Johnson", avatar: "SJ", year: "Junior", major: "Computer Science" },
      content: "Just aced my Data Structures exam! 🎉 Anyone up for celebrating at the student center?",
      timestamp: "2 hours ago",
      likes: 24,
      comments: 8,
      type: "celebration"
    },
    {
      id: 2,
      user: { name: "Mike Chen", avatar: "MC", year: "Senior", major: "Engineering" },
      content: "Looking for study partners for Advanced Calculus. Let's form a group!",
      timestamp: "4 hours ago",
      likes: 12,
      comments: 15,
      type: "study"
    },
    {
      id: 3,
      user: { name: "Texas Photography Club", avatar: "TC", year: "Club", major: "Photography" },
      content: "Golden hour shots from today's campus tour. The autumn colors are incredible! 📸",
      timestamp: "6 hours ago",
      likes: 89,
      comments: 23,
      type: "club",
      image: true
    }
  ];

  const studyGroups = [
    { id: 1, name: "Calculus III Study Group", members: 8, subject: "Mathematics", nextSession: "Today 6PM", location: "Library Room 204" },
    { id: 2, name: "Organic Chemistry Lab", members: 12, subject: "Chemistry", nextSession: "Tomorrow 2PM", location: "Science Building" },
    { id: 3, name: "Data Science Project Team", members: 6, subject: "Computer Science", nextSession: "Friday 4PM", location: "Tech Center" }
  ];

  const courses = [
    { id: 1, name: "Advanced Web Development", instructor: "Dr. Smith", progress: 75, nextClass: "Mon 10AM", assignment: "React Project Due" },
    { id: 2, name: "Database Systems", instructor: "Prof. Johnson", progress: 60, nextClass: "Tue 2PM", assignment: "SQL Quiz Tomorrow" },
    { id: 3, name: "Machine Learning", instructor: "Dr. Williams", progress: 40, nextClass: "Wed 11AM", assignment: "Model Training Lab" }
  ];

  const events = [
    { id: 1, name: "Texas Tech Fair 2025", date: "Aug 20", time: "10AM-4PM", location: "Main Quad", attendees: 234 },
    { id: 2, name: "Study Abroad Info Session", date: "Aug 22", time: "6PM", location: "Student Center", attendees: 45 },
    { id: 3, name: "Career Networking Night", date: "Aug 25", time: "7PM", location: "Business Building", attendees: 156 }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsOnline(prev => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const SocialFeed = () => (
    <div className="space-y-6">
      {/* Create Post */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold">
            You
          </div>
          <div className="flex-1">
            <input 
              type="text" 
              placeholder="Share something with your Texas community..."
              className="w-full p-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
        </div>
        <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
          <div className="flex space-x-4">
            <button className="flex items-center space-x-2 text-gray-600 hover:text-orange-500 transition-colors">
              <Camera size={20} />
              <span>Photo</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-600 hover:text-orange-500 transition-colors">
              <Calendar size={20} />
              <span>Event</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-600 hover:text-orange-500 transition-colors">
              <Users size={20} />
              <span>Study Group</span>
            </button>
          </div>
          <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all transform hover:scale-105">
            Post
          </button>
        </div>
      </div>

      {/* Posts */}
      {socialPosts.map((post) => (
        <div key={post.id} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
              {post.user.avatar}
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <h4 className="font-semibold text-gray-900">{post.user.name}</h4>
                <span className="text-orange-500 text-sm">•</span>
                <span className="text-gray-500 text-sm">{post.user.year} {post.user.major}</span>
                <span className="text-gray-400 text-sm">•</span>
                <span className="text-gray-400 text-sm">{post.timestamp}</span>
              </div>
              <p className="text-gray-700 mt-2 leading-relaxed">{post.content}</p>
              
              {post.image && (
                <div className="mt-4 rounded-xl h-64 bg-gradient-to-r from-orange-100 to-red-100 flex items-center justify-center">
                  <Camera size={48} className="text-orange-400" />
                </div>
              )}

              <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                <div className="flex space-x-6">
                  <button className="flex items-center space-x-2 text-gray-500 hover:text-red-500 transition-colors">
                    <Heart size={20} />
                    <span>{post.likes}</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 transition-colors">
                    <MessageCircle size={20} />
                    <span>{post.comments}</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-500 hover:text-green-500 transition-colors">
                    <Share2 size={20} />
                    <span>Share</span>
                  </button>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  post.type === 'celebration' ? 'bg-yellow-100 text-yellow-800' :
                  post.type === 'study' ? 'bg-blue-100 text-blue-800' :
                  'bg-purple-100 text-purple-800'
                }`}>
                  {post.type}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const LearningHub = () => (
    <div className="space-y-6">
      {/* Quick Actions */}
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

      {/* Current Courses */}
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

      {/* Study Groups */}
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                <GraduationCap className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Texas Campus
                </h1>
                <p className="text-xs text-gray-500">Connect • Learn • Grow</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search campus..."
                  className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
              </div>
              
              <button className="relative p-2 text-gray-600 hover:text-orange-500 transition-colors">
                <Bell size={24} />
                {notifications > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                    {notifications}
                  </span>
                )}
              </button>

              <div className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full ${isOnline ? 'bg-green-500' : 'bg-gray-400'} transition-colors`}></div>
                <span className="text-sm text-gray-600">{isOnline ? 'Online' : 'Offline'}</span>
              </div>

              <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold cursor-pointer hover:shadow-lg transition-shadow">
                J
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab('social')}
              className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'social'
                  ? 'border-orange-500 text-orange-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center space-x-2">
                <Users size={20} />
                <span>Social Hub</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('learning')}
              className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'learning'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center space-x-2">
                <BookOpen size={20} />
                <span>Learning Hub</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('events')}
              className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'events'
                  ? 'border-purple-500 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center space-x-2">
                <Calendar size={20} />
                <span>Events</span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar */}
          <div className="lg:w-64 space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-4">Quick Stats</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm">Active Students</span>
                  <span className="font-bold text-orange-600">2,847</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm">Study Groups</span>
                  <span className="font-bold text-blue-600">156</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm">Events Today</span>
                  <span className="font-bold text-purple-600">8</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-4">Trending Topics</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <TrendingUp size={16} className="text-green-500" />
                  <span className="text-sm text-gray-700">#MidtermPrep</span>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingUp size={16} className="text-blue-500" />
                  <span className="text-sm text-gray-700">#TechFair2025</span>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingUp size={16} className="text-purple-500" />
                  <span className="text-sm text-gray-700">#StudyAbroad</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1">
            {activeTab === 'social' && <SocialFeed />}
            {activeTab === 'learning' && <LearningHub />}
            {activeTab === 'events' && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Events</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {events.map((event) => (
                      <div key={event.id} className="border border-gray-200 rounded-xl p-6 hover:border-purple-300 transition-colors hover:shadow-lg">
                        <h3 className="font-semibold text-gray-900 text-lg mb-2">{event.name}</h3>
                        <div className="space-y-2 text-gray-600 mb-4">
                          <div className="flex items-center space-x-2">
                            <Calendar size={16} />
                            <span>{event.date} at {event.time}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin size={16} />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Users size={16} />
                            <span>{event.attendees} attending</span>
                          </div>
                        </div>
                        <button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-2 rounded-lg hover:shadow-lg transition-all transform hover:scale-105">
                          Join Event
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Sidebar */}
          <div className="lg:w-64 space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-4">Active Now</h3>
              <div className="space-y-3">
                {['Emma Wilson', 'Jake Miller', 'Sophia Davis'].map((name, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      {name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900">{name}</div>
                      <div className="text-xs text-gray-500">Online now</div>
                    </div>
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-6 text-white">
              <Award size={32} className="mb-3" />
              <h3 className="font-bold text-lg mb-2">Achievement Unlocked!</h3>
              <p className="text-sm opacity-90">Study Streak: 7 days</p>
              <p className="text-xs mt-2 opacity-75">Keep it up, Texas Longhorn! 🤘</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TexasCampusPlatform;