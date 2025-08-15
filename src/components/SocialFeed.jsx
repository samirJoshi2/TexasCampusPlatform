import React from 'react';
import { Camera, Calendar, Users, Heart, MessageCircle, Share2 } from 'lucide-react';

const socialPosts = [
  {
    id: 1,
    user: { name: "Sarah Johnson", avatar: "SJ", year: "Junior", major: "Computer Science" },
    content: "Just aced my Data Structures exam! 🎉 Anyone up for celebrating at the student center?",
    timestamp: "2 hours ago",
    likes: 24,
    comments: 8,
    type: "celebration",
    image: false
  },
  {
    id: 2,
    user: { name: "Mike Chen", avatar: "MC", year: "Senior", major: "Engineering" },
    content: "Looking for study partners for Advanced Calculus. Let's form a group!",
    timestamp: "4 hours ago",
    likes: 12,
    comments: 15,
    type: "study",
    image: false
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

const SocialFeed = () => (
  <div className="space-y-6">
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

export default SocialFeed;