"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Home, QrCode, User, Settings, LogOut, 
  GraduationCap, Shield, BellRing, ChevronRight,
  UserPlus, Swords, Check, X, Shuffle, Camera
} from "lucide-react";

const prefixes = ["Swift", "Mighty", "Clever", "Silent", "Brave", "Cosmic"];
const suffixes = ["Fox", "Panda", "Tiger", "Wolf", "Owl", "Dragon"];

export default function ProfilePage() {
  const [student, setStudent] = useState({
    realName: "Abinbire Simon",
    username: "Loading...",
    index: "21153709",
    classGroup: "Class C",
    programme: "BSC. Information Technology",
    level: "300",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Simon&backgroundColor=b6e3f4",
    totalPresent: 45,
    totalLate: 2,
    totalAbsent: 3,
    badges: [
      { id: 1, name: "First Streak", icon: "🔥" },
      { id: 2, name: "Perfect Week", icon: "🏆" },
      { id: 3, name: "Early Bird", icon: "🌅" },
    ]
  });

  useEffect(() => {
    const randomName = `${prefixes[Math.floor(Math.random() * prefixes.length)]}${suffixes[Math.floor(Math.random() * suffixes.length)]}${Math.floor(Math.random() * 99)}`;
    setStudent(prev => ({
      ...prev,
      username: randomName,
      avatar: `https://api.dicebear.com/7.x/adventurer/svg?seed=${randomName}&backgroundColor=b6e3f4`
    }));
  }, []);

  const [inviteUsername, setInviteUsername] = useState("");
  const [inviteStatus, setInviteStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSendInvite = () => {
    if (!inviteUsername.trim()) return;
    if (inviteUsername.toLowerCase() === "john") {
      setInviteStatus("error");
    } else {
      setInviteStatus("success");
      setInviteUsername(""); 
    }
    setTimeout(() => setInviteStatus("idle"), 3000);
  };

  const generateNewName = () => {
    const randomName = `${prefixes[Math.floor(Math.random() * prefixes.length)]}${suffixes[Math.floor(Math.random() * suffixes.length)]}${Math.floor(Math.random() * 99)}`;
    setStudent(prev => ({
      ...prev,
      username: randomName,
      avatar: `https://api.dicebear.com/7.x/adventurer/svg?seed=${randomName}&backgroundColor=b6e3f4`
    }));
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-24 md:pb-0">
      
      {/* Desktop Header */}
      <header className="hidden md:flex bg-white border-b border-slate-200 px-8 py-4 justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-2 text-indigo-600 font-bold text-xl">
          <Shield size={28} />
          AttendTrack
        </div>
        <div className="flex items-center gap-6">
          <Link href="/dashboard" className="text-slate-500 hover:text-indigo-600 font-medium">Dashboard</Link>
          <Link href="/scan" className="text-slate-500 hover:text-indigo-600 font-medium">Scan</Link>
          <Link href="/profile" className="text-indigo-600 font-semibold border-b-2 border-indigo-600 pb-1">Profile</Link>
        </div>
        <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-indigo-200 bg-slate-50">
          <img src={student.avatar} alt="Profile" className="w-full h-full object-cover" />
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-5 md:p-8">
        
        {/* Profile Header Card */}
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200 flex flex-col md:flex-row items-center gap-6 mb-6">
          
          <div className="h-28 w-28 bg-indigo-50 rounded-full flex items-center justify-center overflow-hidden border-4 border-white shadow-lg relative">
            <img src={student.avatar} alt="Avatar" className="w-full h-full object-cover" />
            <div className="absolute bottom-1 right-1 h-5 w-5 bg-green-500 border-2 border-white rounded-full"></div>
          </div>

          <div className="text-center md:text-left flex-1">
            <h1 className="text-2xl md:text-3xl font-bold text-slate-800">{student.realName}</h1>
            <div className="flex items-center justify-center md:justify-start gap-2 mt-1">
              <p className="text-indigo-600 font-bold text-lg">@{student.username}</p>
              <button 
                onClick={generateNewName}
                className="text-slate-400 hover:text-indigo-600 transition-colors p-1"
                title="Generate new username"
              >
                <Shuffle size={16} />
              </button>
            </div>
            <p className="text-slate-500 font-medium text-sm mt-1">{student.index} • {student.classGroup}</p>
            <div className="mt-3 inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-bold border border-blue-100">
              <GraduationCap size={16} />
              {student.programme}
            </div>
          </div>
          <button className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-6 py-2.5 rounded-xl font-bold transition-colors">
            Edit Profile
          </button>
        </div>

        {/* Avatar Selector */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 mb-6">
           <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
             <Camera size={18} className="text-slate-500"/> Select Profile Picture
           </h3>
           <div className="flex gap-4 overflow-x-auto pb-2">
             {["Milo", "Luna", "Leo", "Zoe", "Max"].map((seed) => {
               const url = `https://api.dicebear.com/7.x/adventurer/svg?seed=${seed}&backgroundColor=b6e3f4`;
               return (
                 <button 
                   key={seed} 
                   onClick={() => setStudent({...student, avatar: url})}
                   className={`h-16 w-16 rounded-full overflow-hidden border-2 transition-all flex-shrink-0 bg-slate-50 ${student.avatar === url ? 'border-indigo-600 scale-110 shadow-md' : 'border-transparent hover:border-indigo-300'}`}
                 >
                   <img src={url} alt="Avatar option" className="w-full h-full object-cover" />
                 </button>
               )
             })}
           </div>
        </div>

        {/* Rivalry Invite System */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Swords size={22} className="text-indigo-500" />
            <h2 className="text-lg font-bold text-slate-800">Invite a Rival</h2>
          </div>
          <p className="text-sm text-slate-500 mb-4">Type a classmate's username to challenge them to an attendance rivalry!</p>
          
          <div className="flex flex-col md:flex-row gap-3">
            <div className="relative flex-1">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold">@</span>
              <input 
                type="text" 
                placeholder="Enter username (try 'john')" 
                value={inviteUsername}
                onChange={(e) => setInviteUsername(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-8 pr-4 text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
              />
            </div>
            <button 
              onClick={handleSendInvite}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-6 py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <UserPlus size={20} />
              Send Invite
            </button>
          </div>

          {inviteStatus === "success" && (
            <div className="mt-3 flex items-center gap-2 text-emerald-600 bg-emerald-50 p-3 rounded-xl font-medium text-sm">
              <Check size={18} /> Invite sent to @{inviteUsername}!
            </div>
          )}
          {inviteStatus === "error" && (
            <div className="mt-3 flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-xl font-medium text-sm">
              <X size={18} /> Username @{inviteUsername} is already taken or already a rival.
            </div>
          )}
        </div>

        {/* Stats Grid */}
        <h2 className="text-lg font-bold text-slate-800 mb-3 ml-2">Attendance Overview</h2>
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-4 rounded-3xl border border-slate-200 text-center shadow-sm">
            <p className="text-emerald-500 font-bold text-3xl">{student.totalPresent}</p>
            <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">Present</p>
          </div>
          <div className="bg-white p-4 rounded-3xl border border-slate-200 text-center shadow-sm">
            <p className="text-orange-500 font-bold text-3xl">{student.totalLate}</p>
            <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">Late</p>
          </div>
          <div className="bg-white p-4 rounded-3xl border border-slate-200 text-center shadow-sm">
            <p className="text-red-500 font-bold text-3xl">{student.totalAbsent}</p>
            <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">Absent</p>
          </div>
        </div>

        {/* Badges */}
        <h2 className="text-lg font-bold text-slate-800 mb-3 ml-2">Your Badges</h2>
        <div className="flex gap-4 overflow-x-auto pb-4 mb-8">
          {student.badges.map((badge) => (
            <div key={badge.id} className="min-w-[120px] bg-white border border-slate-200 rounded-3xl p-4 flex flex-col items-center justify-center shadow-sm">
              <span className="text-4xl mb-2">{badge.icon}</span>
              <p className="text-xs font-bold text-slate-700 text-center">{badge.name}</p>
            </div>
          ))}
        </div>

        {/* Settings List */}
        <h2 className="text-lg font-bold text-slate-800 mb-3 ml-2">Settings</h2>
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden mb-6">
          
          <button className="w-full flex items-center justify-between p-5 border-b border-slate-100 hover:bg-slate-50 transition-colors">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-slate-100 rounded-xl text-slate-600"><BellRing size={20} /></div>
              <span className="font-bold text-slate-700">Notifications</span>
            </div>
            <ChevronRight size={20} className="text-slate-400" />
          </button>

          <button className="w-full flex items-center justify-between p-5 border-b border-slate-100 hover:bg-slate-50 transition-colors">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-slate-100 rounded-xl text-slate-600"><Settings size={20} /></div>
              <span className="font-bold text-slate-700">Account Settings</span>
            </div>
            <ChevronRight size={20} className="text-slate-400" />
          </button>

          <button className="w-full flex items-center justify-between p-5 hover:bg-red-50 transition-colors group">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-red-100 rounded-xl text-red-600 group-hover:bg-red-200 transition-colors"><LogOut size={20} /></div>
              <span className="font-bold text-red-600">Log Out</span>
            </div>
          </button>

        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 w-full bg-white border-t border-slate-200 pb-safe z-50">
        <div className="flex justify-around items-center h-16">
          <Link href="/dashboard" className="flex flex-col items-center text-slate-400 hover:text-indigo-600 transition-colors">
            <Home size={22} className="mb-1" />
            <span className="text-[10px] font-medium">Home</span>
          </Link>
          <Link href="/scan" className="flex flex-col items-center text-slate-400 hover:text-indigo-600 transition-colors">
            <QrCode size={22} className="mb-1" />
            <span className="text-[10px] font-medium">Scan</span>
          </Link>
          <Link href="/profile" className="flex flex-col items-center text-indigo-600">
            <User size={22} className="mb-1" />
            <span className="text-[10px] font-bold">Profile</span>
          </Link>
        </div>
      </nav>

    </div>
  );
}