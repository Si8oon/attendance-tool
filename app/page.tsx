"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Home, QrCode, User, Flame, Swords, ShieldCheck, CalendarDays, Bell,
  CheckCircle2, Clock, TrendingUp, Sparkles, MessageCircle, Zap
} from "lucide-react";

type SessionData = { course: string; time: string; hall: string } | null;

export default function AdvancedDashboard() {
  const student = {
    name: "Abinbire Simon",
    classGroup: "Class C",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Simon&backgroundColor=b6e3f4",
    mainStreak: 8,
    marksTarget: 10,
    teamStreak: 6,
    bonusQuestions: 3,
    
    // Toggle this between null and the object to see the button change!
    // activeSession: null as SessionData, 
    activeSession: { course: "CS101", time: "10:00 AM", hall: "Main Hall" } as SessionData, 
    
    rival: {
      name: "John",
      streak: 7,
    },
    schedule: [
      { id: 1, course: "CS101", time: "10:00 AM", hall: "Main Hall", status: "next" },
      { id: 2, course: "MATH201", time: "01:00 PM", hall: "Lab 2", status: "upcoming" },
      { id: 3, course: "ENG101", time: "03:30 PM", hall: "Hall B", status: "upcoming" },
    ],
    recentActivity: [
      { id: 1, course: "CS101", date: "Today, 09:59 AM", status: "Present" },
      { id: 2, course: "CS101", date: "Yesterday, 10:02 AM", status: "Late" },
      { id: 3, course: "MATH201", date: "Mon, 08:00 AM", status: "Present" },
    ]
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-24 md:pb-0">
      
      {/* TOP NAVIGATION (Desktop only) */}
      <header className="hidden md:flex bg-white border-b border-slate-200 px-8 py-4 justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-2 text-indigo-600 font-bold text-xl">
          <ShieldCheck size={28} />
          AttendTrack
        </div>
        <div className="flex items-center gap-6">
          <Link href="/dashboard" className="text-indigo-600 font-semibold border-b-2 border-indigo-600 pb-1">Dashboard</Link>
          <Link href="/scan" className="text-slate-500 hover:text-indigo-600 font-medium">Scan</Link>
          <Link href="/profile" className="text-slate-500 hover:text-indigo-600 font-medium">Profile</Link>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 text-slate-400 hover:bg-slate-100 rounded-full"><Bell size={20} /></button>
          <Link href="/profile" className="h-10 w-10 rounded-full overflow-hidden border-2 border-indigo-100 hover:border-indigo-300 transition-colors bg-slate-50">
            <img src={student.avatar} alt="Profile" className="w-full h-full object-cover" />
          </Link>
        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="max-w-7xl mx-auto p-5 md:p-8">
        
        {/* Mobile Header */}
        <div className="md:hidden flex justify-between items-center mb-6 pt-4">
          <div>
            <p className="text-slate-500 text-sm font-medium">Welcome back,</p>
            <h1 className="text-2xl font-bold text-slate-800">{student.name.split(' ')[1]}</h1>
          </div>
          <Link href="/profile" className="h-10 w-10 rounded-full overflow-hidden border-2 border-indigo-100 bg-slate-50">
             <img src={student.avatar} alt="Profile" className="w-full h-full object-cover" />
          </Link>
        </div>

        {/* Desktop Page Title */}
        <div className="hidden md:block mb-8">
          <h1 className="text-3xl font-bold text-slate-800">Welcome back, {student.name.split(' ')[1]} 👋</h1>
          <p className="text-slate-500 mt-1">Here is your attendance summary for {student.classGroup}.</p>
        </div>

        {/* RESPONSIVE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* LEFT COLUMN */}
          <div className="md:col-span-2 space-y-6">
            
            {/* Main Streak Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl p-6 md:p-8 text-white shadow-xl shadow-orange-500/20 relative overflow-hidden"
            >
              <div className="absolute -right-6 -top-6 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
              
              <div className="flex justify-between items-start mb-6">
                <div>
                  <p className="text-orange-100 font-medium text-sm md:text-base uppercase tracking-wider mb-1">Current Attendance Streak</p>
                  <div className="flex items-end gap-3">
                    <motion.h2 
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.2 }}
                      className="text-7xl font-black"
                    >
                      {student.mainStreak}
                    </motion.h2>
                    <span className="text-xl font-medium mb-2 text-orange-100">sessions</span>
                  </div>
                </div>
                
                <motion.div 
                  animate={{ y: [0, -8, 0] }} 
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  className="bg-white/20 p-4 rounded-3xl backdrop-blur-md"
                >
                  <Flame size={40} className="text-white fill-white drop-shadow-md" />
                </motion.div>
              </div>
              
              <div className="space-y-3 mt-8">
                <div className="flex justify-between text-sm text-orange-100 font-bold uppercase tracking-wider">
                  <span>Progress to Marks</span>
                  <span>{student.mainStreak} / {student.marksTarget}</span>
                </div>
                <div className="h-4 w-full bg-black/20 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${(student.mainStreak / student.marksTarget) * 100}%` }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                    className="h-full bg-white rounded-full relative" 
                  >
                    <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                  </motion.div>
                </div>
                <p className="text-sm text-orange-100 mt-2 font-medium">
                  {student.marksTarget - student.mainStreak} more sessions to lock in your marks!
                </p>
              </div>
            </motion.div>

            {/* Quick Actions Grid */}
            <div className="grid grid-cols-2 gap-4">
              
              {/* DYNAMIC SCAN BUTTON */}
              <Link href="/scan" className="block h-full">
                {student.activeSession ? (
                  <div className="bg-orange-500 hover:bg-orange-600 transition-all rounded-3xl p-6 flex flex-col items-center justify-center shadow-lg shadow-orange-500/40 text-white h-full animate-pulse">
                    <Zap size={32} className="mb-3 fill-white" />
                    <span className="font-bold text-lg text-center leading-tight">Scan Now<br/><span className="text-xs font-normal">Live: {student.activeSession.course}</span></span>
                  </div>
                ) : (
                  <div className="bg-indigo-600 hover:bg-indigo-700 transition-all rounded-3xl p-6 flex flex-col items-center justify-center shadow-lg shadow-indigo-600/20 text-white h-full">
                    <QrCode size={32} className="mb-3" />
                    <span className="font-bold text-lg">Scan Now</span>
                  </div>
                )}
              </Link>
              
              <div className="bg-white border border-slate-200 rounded-3xl p-5 flex flex-col justify-between shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Swords size={20} className="text-indigo-500" />
                    <span className="font-bold text-slate-700">Rivalry</span>
                  </div>
                  <button className="bg-indigo-50 text-indigo-600 p-1.5 rounded-lg hover:bg-indigo-100 transition-colors" title="Send Nudge">
                    <MessageCircle size={16} />
                  </button>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div>
                    <p className="text-xs text-slate-500">You</p>
                    <p className="text-2xl font-black text-orange-500">{student.mainStreak}</p>
                  </div>
                  <div className="text-slate-400 font-black italic px-2">VS</div>
                  <div>
                    <p className="text-xs text-slate-500">{student.rival.name}</p>
                    <p className="text-2xl font-black text-slate-700">{student.rival.streak}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-slate-800 text-lg">Recent Activity</h3>
                <button className="text-sm text-indigo-600 font-bold hover:underline">View All</button>
              </div>
              <div className="space-y-4">
                {student.recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-2xl transition-colors">
                    <div className="flex items-center gap-4">
                      <div className={`p-2 rounded-xl ${activity.status === 'Present' ? 'bg-emerald-100 text-emerald-600' : 'bg-orange-100 text-orange-600'}`}>
                        {activity.status === 'Present' ? <CheckCircle2 size={20} /> : <Clock size={20} />}
                      </div>
                      <div>
                        <p className="font-bold text-sm text-slate-800">{activity.course}</p>
                        <p className="text-xs text-slate-500">{activity.date}</p>
                      </div>
                    </div>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${activity.status === 'Present' ? 'bg-emerald-50 text-emerald-700' : 'bg-orange-50 text-orange-700'}`}>
                      {activity.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-6">
            
            {/* Bonus Questions Widget */}
            {student.bonusQuestions > 0 && (
              <div className="bg-gradient-to-br from-yellow-400 to-orange-400 rounded-3xl p-6 shadow-lg shadow-orange-400/20 text-white relative overflow-hidden">
                <Sparkles className="absolute -right-4 -top-4 text-white/20" size={80} />
                <h3 className="font-bold text-lg mb-1 flex items-center gap-2">
                  <Sparkles size={20} /> Bonus Questions!
                </h3>
                <p className="text-orange-50 text-sm mb-4">Answer {student.bonusQuestions} questions to earn extra marks.</p>
                <button className="w-full bg-white text-orange-500 font-bold py-2.5 rounded-xl hover:bg-orange-50 transition-colors shadow-sm">
                  Answer Now
                </button>
              </div>
            )}

            {/* Daily Schedule */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
              <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                <CalendarDays size={18} className="text-blue-500"/> Today's Classes
              </h3>
              <div className="space-y-4 relative before:absolute before:inset-0 before:ml-2.5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
                {student.schedule.map((item) => (
                  <div key={item.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className={`flex items-center justify-center w-6 h-6 rounded-full border-2 border-white bg-slate-200 text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 ${item.status === 'next' ? '!bg-indigo-500 !text-white shadow-indigo-500/50' : ''}`}>
                      {item.status === 'next' ? <Zap size={12} /> : <div className="w-2 h-2 bg-slate-400 rounded-full"></div>}
                    </div>
                    <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] ml-4 md:ml-0">
                      <div className={`p-3 rounded-2xl border ${item.status === 'next' ? 'border-indigo-100 bg-indigo-50/50' : 'border-slate-100 bg-white'}`}>
                        <p className={`font-bold text-sm ${item.status === 'next' ? 'text-indigo-700' : 'text-slate-700'}`}>{item.course}</p>
                        <p className="text-xs text-slate-500 mt-0.5">{item.time} • {item.hall}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Team Streak */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
              <div className="flex items-center justify-between mb-4">
                 <h3 className="font-bold text-slate-800 flex items-center gap-2">
                   <ShieldCheck size={18} className="text-emerald-500"/> Team Streak
                 </h3>
                 <span className="bg-emerald-100 text-emerald-700 text-[10px] uppercase font-bold px-2 py-1 rounded-md">Safe</span>
              </div>
              <p className="text-sm text-slate-500 mb-4">Class {student.classGroup} is on fire!</p>
              <div className="flex items-end gap-2">
                <p className="text-4xl font-black text-slate-800">{student.teamStreak}</p>
                <p className="text-sm font-medium text-slate-500 mb-1">sessions</p>
              </div>
              <div className="mt-4 flex items-center gap-2 text-xs font-medium text-emerald-600 bg-emerald-50 p-2 rounded-lg">
                <TrendingUp size={14} /> 88% checked in last time.
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* BOTTOM NAVIGATION (Mobile only) */}
      <nav className="md:hidden fixed bottom-0 w-full bg-white border-t border-slate-200 pb-safe z-50">
        <div className="flex justify-around items-center h-16">
          <Link href="/dashboard" className="flex flex-col items-center text-indigo-600">
            <Home size={22} className="mb-1" />
            <span className="text-[10px] font-bold">Home</span>
          </Link>
          <Link href="/scan" className="flex flex-col items-center text-slate-400 hover:text-indigo-600 transition-colors">
            <QrCode size={22} className="mb-1" />
            <span className="text-[10px] font-medium">Scan</span>
          </Link>
          <Link href="/profile" className="flex flex-col items-center text-slate-400 hover:text-indigo-600 transition-colors">
            <User size={22} className="mb-1" />
            <span className="text-[10px] font-medium">Profile</span>
          </Link>
        </div>
      </nav>

    </div>
  );
}