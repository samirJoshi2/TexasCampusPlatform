import React, { useState, useEffect } from 'react';
import Header from './Header.jsx';
import Navigation from './Navigation.jsx';
import SocialFeed from './SocialFeed.jsx';
import LearningHub from './LearningHub.jsx';
import Events from './Events.jsx';
import LeftSidebar from './LeftSidebar.jsx';
import RightSidebar from './RightSidebar.jsx';

const TexasCampusPlatform = () => {
  const [activeTab, setActiveTab] = useState('social');
  const [notifications, setNotifications] = useState(3);
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsOnline(prev => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
      <Header notifications={notifications} isOnline={isOnline} />
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <LeftSidebar />
          <div className="flex-1">
            {activeTab === 'social' && <SocialFeed />}
            {activeTab === 'learning' && <LearningHub />}
            {activeTab === 'events' && <Events />}
          </div>
          <RightSidebar />
        </div>
      </main>
    </div>
  );
};

export default TexasCampusPlatform;