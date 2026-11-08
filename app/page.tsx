"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Home, QrCode, User, Flame, Swords, ShieldCheck, CalendarDays, Bell,
  CheckCircle2, Clock, TrendingUp, Sparkles, Zap,
  LogOut, UserPlus, Check, X, Shuffle, Camera, Palette, 
  Keyboard, Loader2, Lock, Trophy, GraduationCap, ChevronRight
} from "lucide-react";

const prefixes = ["Swift", "Mighty", "Clever", "Silent", "Brave", "Cosmic"];
const suffixes = ["Fox", "Panda", "Tiger", "Wolf", "Owl", "Dragon"];

export default function App() {
  const [currentTab, setCurrentTab] = useState<"dashboard" | "profile" | "scan">("dashboard");
  const [theme, setTheme] = useState("indigo");
  const [isSessionLive, setIsSessionLive] = useState(false);

  const themeColors: Record<string, { bg: string, text: string, hover: string, border: string }> = {
    indigo: { bg: "bg-indigo-600", text: "text-indigo-700", hover: "hover:bg-indigo-700", border: "border-indigo-700" },
    emerald: { bg: "bg-emerald-600", text: "text-emerald-700", hover: "hover:bg-emerald-700", border: "border-emerald-700" },
    rose: { bg: "bg-rose-600", text: "text-rose-700", hover: "hover:bg-rose-700", border: "border-rose-700" },
    blue: { bg: "bg-blue-600", text: "text-blue-700", hover: "hover:bg-blue-700", border: "border-blue-700" },
    orange: { bg: "bg-orange-600", text: "text-orange-700", hover: "hover:bg-orange-700", border: "border-orange-700" },
  };
  const activeTheme = themeColors[theme];

  const [student, setStudent] = useState({
    name: "Abinbire Simon",
    index: "21153709",
    classGroup: "Class C",
    programme: "BSC. Information Technology",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Simon&backgroundColor=b6e3f4",
    mainStreak: 8,
    marksTarget: 10,
    teamStreak: 6,
    bonusQuestions: 3,
    rival: { name: "John", streak: 7 },
    schedule: [
      { id: 1, course: "CS101", time: "10:00 AM", hall: "Main Hall", status: "next" },
      { id: 2, course: "MATH201", time: "01:00 PM", hall: "Lab 2", status: "upcoming" },
      { id: 3, course: "ENG101", time: "03:30 PM", hall: "Hall B", status: "upcoming" },
    ],
    recentActivity: [
      { id: 1, course: "CS101", date: "Today, 09:59 AM", status: "Present" },
      { id: 2, course: "CS101", date: "Yesterday, 10:02 AM", status: "Late" },
      { id: 3, course: "MATH201", date: "Mon, 08:00 AM", status: "Present" },
    ],
    totalPresent: 45,
    totalLate: 2,
    totalAbsent: 3,
    badges: [
      { id: 1, name: "First Streak", icon: "🔥", unlocked: true },
      { id: 2, name: "Perfect Week", icon: "🏆", unlocked: true },
      { id: 3, name: "Early Bird", icon: "🌅", unlocked: true },
      { id: 4, name: "10 Streak", icon: "⚡", unlocked: false, req: "10 Sessions in a row" },
      { id: 5, name: "Class MVP", icon: "👑", unlocked: false, req: "Top 3 in class" },
    ],
  });

  const [username, setUsername] = useState("SimonTheGreat");

  useEffect(() => {
    const randomName = `${prefixes[Math.floor(Math.random() * prefixes.length)]}${suffixes[Math.floor(Math.random() * suffixes.length)]}${Math.floor(Math.random() * 99)}`;
    setUsername(randomName);
  }, []);

  const generateNewName = () => {
    const randomName = `${prefixes[Math.floor(Math.random() * prefixes.length)]}${suffixes[Math.floor(Math.random() * suffixes.length)]}${Math.floor(Math.random() * 99)}`;
    setUsername(randomName);
  };

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

  const [code, setCode] = useState("");
  const [isScanning, setIsScanning] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const simulateScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setShowConfirm(true);
    }, 1500);
  };

  const handleCodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.length === 6) setShowConfirm(true);
    else alert("Please enter a 6-digit code.");
  };

  const handleConfirm = () => {
    setShowConfirm(false);
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setCurrentTab("dashboard");
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-24 md:pb-0">
      
      {/* TOP NAVIGATION */}
      <header className="hidden md:flex bg-white border-b border-slate-200 px-8 py-4 justify-between items-center sticky top-0 z-50 shadow-sm">
        <div className={`flex items-center gap-2 ${activeTheme.text} font-bold text-xl cursor-pointer`} onClick={() => setCurrentTab("dashboard")}>
          <ShieldCheck size={28} />
          AttendTrack
        </div>
        <div className="flex items-center gap-6">
          <button onClick={() => setCurrentTab("dashboard")} className={`${currentTab === "dashboard" ? `${activeTheme.text} font-semibold border-b-2 ${activeTheme.border} pb-1` : "text-slate-600 hover:text-slate-900 font-medium"}`}>Dashboard</button>
          <button onClick={() => setCurrentTab("scan")} className={`${currentTab === "scan" ? `${activeTheme.text} font-semibold border-b-2 ${activeTheme.border} pb-1` : "text-slate-600 hover:text-slate-900 font-medium"}`}>Scan</button>
          <button onClick={() => setCurrentTab("profile")} className={`${currentTab === "profile" ? `${activeTheme.text} font-semibold border-b-2 ${activeTheme.border} pb-1` : "text-slate-600 hover:text-slate-900 font-medium"}`}>Profile</button>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-full"><Bell size={20} /></button>
          <button onClick={() => setCurrentTab("profile")} className="h-10 w-10 rounded-full overflow-hidden border-2 border-slate-200 bg-slate-50">
            <img src={student.avatar} alt="Profile" className="w-full h-full object-cover" />
          </button>
        </div>
      </header>

      {/* --- DASHBOARD TAB --- */}
      {currentTab === "dashboard" && (
        <main className="max-w-6xl mx-auto p-5 md:p-8">
          <div className="md:hidden flex justify-between items-center mb-6 pt-4">
            <div>
              <p className="text-slate-600 text-sm font-medium">Welcome back,</p>
              <h1 className="text-2xl font-bold text-slate-900">{student.name.split(' ')[1]}</h1>
            </div>
            <button onClick={() => setCurrentTab("profile")} className="h-10 w-10 rounded-full overflow-hidden border-2 border-slate-200 bg-slate-50">
              <img src={student.avatar} alt="Profile" className="w-full h-full object-cover" />
            </button>
          </div>

          <div className="hidden md:flex justify-between items-end mb-8">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Welcome back, {student.name.split(' ')[1]} 👋</h1>
              <p className="text-slate-600 mt-1">Here is your attendance summary for {student.classGroup}.</p>
            </div>
            <p className="text-sm font-bold text-slate-400">Tuesday, Nov 7</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-gradient-to-br from-orange-500 to-red-600 rounded-[2rem] p-6 md:p-8 text-white shadow-2xl shadow-orange-500/30 relative overflow-hidden">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <p className="text-orange-100 font-bold text-xs md:text-sm uppercase tracking-widest mb-1">Current Streak</p>
                    <div className="flex items-end gap-3">
                      <h2 className="text-7xl md:text-8xl font-black text-white drop-shadow-lg leading-none">{student.mainStreak}</h2>
                      <span className="text-lg font-medium mb-2 text-orange-100">sessions</span>
                    </div>
                  </div>
                  <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} className="bg-white/20 p-4 rounded-3xl backdrop-blur-md border border-white/20 shadow-inner">
                    <Flame size={44} className="text-white fill-white drop-shadow-md" />
                  </motion.div>
                </div>
                <div className="space-y-2 mt-8">
                  <div className="flex justify-between text-xs text-orange-100 font-bold uppercase tracking-wider">
                    <span>Progress to Marks</span>
                    <span>{student.mainStreak} / {student.marksTarget}</span>
                  </div>
                  <div className="h-5 w-full bg-black/20 rounded-full overflow-hidden shadow-inner">
                    <motion.div initial={{ width: 0 }} animate={{ width: `${(student.mainStreak / student.marksTarget) * 100}%` }} transition={{ duration: 1.5 }} className="h-full bg-white rounded-full relative">
                      <div className="absolute inset-0 bg-white/40 animate-pulse"></div>
                    </motion.div>
                  </div>
                  <p className="text-xs text-orange-100 font-medium pt-1">
                    {student.marksTarget - student.mainStreak} more sessions to lock in your marks!
                  </p>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button onClick={() => isSessionLive ? setCurrentTab("scan") : alert("No active session right now!")} className="text-left h-full group">
                  {isSessionLive ? (
                    <div className="bg-gradient-to-br from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500 transition-all duration-300 rounded-[2rem] p-6 flex items-center gap-5 shadow-xl shadow-orange-600/30 text-white h-full relative overflow-hidden animate-pulse">
                      <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm group-hover:scale-110 transition-transform">
                        <Zap size={32} className="fill-white" />
                      </div>
                      <div>
                        <span className="font-black text-2xl block leading-tight">Scan Now</span>
                        <span className="text-orange-100 text-sm font-bold flex items-center gap-2">
                          <span className="h-2 w-2 bg-white rounded-full animate-ping"></span>
                          LIVE: CS101
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-slate-200 hover:bg-slate-300 transition-all duration-300 rounded-[2rem] p-6 flex items-center gap-5 shadow-sm text-slate-500 h-full relative overflow-hidden">
                      <div className="bg-white p-4 rounded-2xl">
                        <QrCode size={32} className="text-slate-400" />
                      </div>
                      <div>
                        <span className="font-black text-2xl block leading-tight text-slate-600">Scan Now</span>
                        <span className="text-slate-500 text-sm font-medium flex items-center gap-2">
                          No active session
                        </span>
                      </div>
                    </div>
                  )}
                </button>

                <div className="bg-white border border-slate-200 rounded-[2rem] p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Swords size={22} className={activeTheme.text} />
                      <span className="font-bold text-slate-900 text-lg">Rivalry</span>
                    </div>
                    <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider">Winning</span>
                  </div>
                  <div className="flex items-center justify-between bg-slate-50 rounded-2xl p-4 border border-slate-100">
                    <div>
                      <p className="text-xs text-slate-500 font-bold uppercase">You</p>
                      <p className="text-3xl font-black text-orange-600">{student.mainStreak}</p>
                    </div>
                    <div className="text-slate-300 font-black italic text-xl">VS</div>
                    <div className="text-right">
                      <p className="text-xs text-slate-500 font-bold uppercase">{student.rival.name}</p>
                      <p className="text-3xl font-black text-slate-700">{student.rival.streak}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-200">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-slate-900 text-lg">Recent Activity</h3>
                  <button className="text-sm text-indigo-700 font-bold hover:underline">View All</button>
                </div>
                <div className="space-y-4">
                  {student.recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-2xl transition-colors">
                      <div className="flex items-center gap-4">
                        <div className={`p-2 rounded-xl ${activity.status === 'Present' ? 'bg-emerald-100 text-emerald-700' : 'bg-orange-100 text-orange-700'}`}>
                          {activity.status === 'Present' ? <CheckCircle2 size={20} /> : <Clock size={20} />}
                        </div>
                        <div>
                          <p className="font-bold text-sm text-slate-900">{activity.course}</p>
                          <p className="text-xs text-slate-600 font-medium">{activity.date}</p>
                        </div>
                      </div>
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${activity.status === 'Present' ? 'bg-emerald-100 text-emerald-800' : 'bg-orange-100 text-orange-800'}`}>
                        {activity.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {student.bonusQuestions > 0 && (
                <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-[2rem] p-6 shadow-xl shadow-orange-500/20 text-white relative overflow-hidden">
                  <Sparkles className="absolute -right-4 -top-4 text-white/20" size={80} />
                  <h3 className="font-bold text-lg mb-1 flex items-center gap-2 text-white">
                    <Sparkles size={20} /> Bonus Questions!
                  </h3>
                  <p className="text-orange-50 text-sm mb-4 font-medium">Answer {student.bonusQuestions} questions to earn extra marks.</p>
                  <button className="w-full bg-white text-orange-700 font-bold py-3 rounded-xl hover:bg-orange-50 transition-colors shadow-sm">
                    Answer Now
                  </button>
                </div>
              )}

              <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-200">
                <div className="flex items-center justify-between mb-6">
                   <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2">
                     <CalendarDays size={20} className="text-blue-600"/> Today's Classes
                   </h3>
                </div>
                <div className="space-y-4">
                  {student.schedule.map((item) => (
                    <div key={item.id} className={`p-4 rounded-2xl border ${item.status === 'next' ? 'border-indigo-200 bg-indigo-50/50' : 'border-slate-100 bg-slate-50'}`}>
                      <div className="flex justify-between items-start mb-1">
                        <p className={`font-bold ${item.status === 'next' ? 'text-indigo-800' : 'text-slate-800'}`}>{item.course}</p>
                        {item.status === 'next' && <span className="bg-indigo-600 text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase">Next</span>}
                      </div>
                      <p className="text-sm text-slate-600 font-medium">{item.time} • {item.hall}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-200">
                <div className="flex items-center justify-between mb-4">
                   <h3 className="font-bold text-slate-900 flex items-center gap-2">
                     <ShieldCheck size={18} className="text-emerald-600"/> Team Streak
                   </h3>
                   <span className="bg-emerald-100 text-emerald-800 text-[10px] uppercase font-bold px-2 py-1 rounded-md">Safe</span>
                </div>
                <p className="text-sm text-slate-600 font-medium mb-4">Class {student.classGroup} is on fire!</p>
                <div className="flex items-end gap-2">
                  <p className="text-4xl font-black text-slate-900">{student.teamStreak}</p>
                  <p className="text-sm font-medium text-slate-600 mb-1">sessions</p>
                </div>
                <div className="mt-4 flex items-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-50 p-2 rounded-lg">
                  <TrendingUp size={14} /> 88% checked in last time.
                </div>
              </div>
            </div>
          </div>
        </main>
      )}

      {/* --- PROFILE TAB --- */}
      {currentTab === "profile" && (
        <main className="max-w-4xl mx-auto p-5 md:p-8">
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200 flex flex-col md:flex-row items-center gap-6 mb-8">
            <div className="h-28 w-28 bg-slate-50 rounded-full flex items-center justify-center overflow-hidden border-4 border-white shadow-lg relative">
              <img src={student.avatar} alt="Avatar" className="w-full h-full object-cover" />
              <div className="absolute bottom-1 right-1 h-5 w-5 bg-emerald-500 border-2 border-white rounded-full"></div>
            </div>
            <div className="text-center md:text-left flex-1">
              <h1 className="text-2xl md:text-3xl font-bold text-slate-900">{student.name}</h1>
              <div className="flex items-center justify-center md:justify-start gap-2 mt-1">
                <p className={`${activeTheme.text} font-bold text-lg`}>@{username}</p>
                <button onClick={generateNewName} className="text-slate-500 hover:text-slate-900 p-1" title="Generate new username">
                  <Shuffle size={16} />
                </button>
              </div>
              <p className="text-slate-600 font-medium text-sm mt-1">{student.index} • {student.classGroup}</p>
              <div className="mt-3 inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-bold border border-blue-200">
                <GraduationCap size={16} />
                {student.programme}
              </div>
            </div>
            <button className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-6 py-2.5 rounded-xl font-bold transition-colors">
              Edit Profile
            </button>
          </div>

          <h2 className="text-lg font-bold text-slate-900 mb-3 ml-2">Attendance Overview</h2>
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-white p-4 rounded-3xl border border-slate-200 text-center shadow-sm">
              <p className="text-emerald-600 font-black text-3xl">{student.totalPresent}</p>
              <p className="text-xs text-slate-600 font-bold uppercase tracking-wider mt-1">Present</p>
            </div>
            <div className="bg-white p-4 rounded-3xl border border-slate-200 text-center shadow-sm">
              <p className="text-orange-600 font-black text-3xl">{student.totalLate}</p>
              <p className="text-xs text-slate-600 font-bold uppercase tracking-wider mt-1">Late</p>
            </div>
            <div className="bg-white p-4 rounded-3xl border border-slate-200 text-center shadow-sm">
              <p className="text-red-600 font-black text-3xl">{student.totalAbsent}</p>
              <p className="text-xs text-slate-600 font-bold uppercase tracking-wider mt-1">Absent</p>
            </div>
          </div>

          <h2 className="text-lg font-bold text-slate-900 mb-3 ml-2 flex items-center gap-2">
            <Trophy size={20} className="text-yellow-500" /> Achievements
          </h2>
          <div className="flex gap-4 overflow-x-auto pb-4 mb-8">
            {student.badges.map((badge) => (
              <div 
                key={badge.id} 
                className={`min-w-[120px] rounded-3xl p-4 flex flex-col items-center justify-center border shadow-sm relative overflow-hidden ${
                  badge.unlocked 
                    ? 'bg-white border-slate-200' 
                    : 'bg-slate-50 border-dashed border-slate-300 opacity-60 grayscale'
                }`}
              >
                {badge.unlocked ? (
                  <span className="text-4xl mb-2">{badge.icon}</span>
                ) : (
                  <div className="h-10 w-10 bg-slate-200 rounded-full flex items-center justify-center mb-2">
                    <Lock size={20} className="text-slate-400" />
                  </div>
                )}
                <p className={`text-xs font-bold text-center ${badge.unlocked ? 'text-slate-800' : 'text-slate-500'}`}>
                  {badge.name}
                </p>
                {!badge.unlocked && (
                  <p className="text-[9px] text-center text-slate-400 mt-1 font-medium">{badge.req}</p>
                )}
              </div>
            ))}
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 mb-6">
             <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2"><Camera size={18} className="text-slate-600"/> Select Picture</h3>
             <div className="flex gap-4 overflow-x-auto pb-2">
               {["Milo", "Luna", "Leo", "Zoe", "Max"].map(seed => {
                 const url = `https://api.dicebear.com/7.x/adventurer/svg?seed=${seed}&backgroundColor=b6e3f4`;
                 return (
                   <button 
                     key={seed} 
                     onClick={() => setStudent({...student, avatar: url})}
                     className={`h-16 w-16 rounded-full overflow-hidden border-2 transition-all flex-shrink-0 bg-slate-50 ${student.avatar === url ? `${activeTheme.border} scale-110 shadow-md` : 'border-transparent hover:border-slate-300'}`}
                   >
                     <img src={url} alt="Avatar option" className="w-full h-full object-cover" />
                   </button>
                 )
               })}
             </div>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 mb-6">
            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2"><Swords size={22} className={activeTheme.text} /> Invite a Rival</h2>
            <p className="text-sm text-slate-600 font-medium mb-4">Type a classmate's username to challenge them to an attendance rivalry!</p>
            <div className="flex flex-col md:flex-row gap-3">
              <div className="relative flex-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 font-bold">@</span>
                <input type="text" placeholder="Enter username (try 'john')" value={inviteUsername} onChange={e => setInviteUsername(e.target.value)} className="w-full bg-slate-50 border border-slate-300 rounded-xl py-3 pl-8 pr-4 text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-slate-400" />
              </div>
              <button onClick={handleSendInvite} className={`${activeTheme.bg} text-white font-bold px-6 py-3 rounded-xl flex items-center gap-2 hover:opacity-90 transition-opacity`}><UserPlus size={20} /> Send Invite</button>
            </div>
            {inviteStatus === "success" && <div className="mt-3 flex items-center gap-2 text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl font-bold text-sm"><Check size={18} /> Invite sent to @{inviteUsername}!</div>}
            {inviteStatus === "error" && <div className="mt-3 flex items-center gap-2 text-red-800 bg-red-50 border border-red-200 p-3 rounded-xl font-bold text-sm"><X size={18} /> Username @{inviteUsername} is already taken or already a rival.</div>}
          </div>

          <h2 className="text-lg font-bold text-slate-900 mb-3 ml-2">Settings</h2>
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm mb-6">
            <div className="p-5 border-b border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-slate-100 rounded-xl text-slate-700"><Palette size={20} /></div>
                <div>
                  <span className="font-bold text-slate-800 block">App Theme</span>
                  <span className="text-xs text-slate-500 font-medium">Pick your accent color</span>
                </div>
              </div>
              <div className="flex gap-2">
                {Object.keys(themeColors).map(color => (
                  <button key={color} onClick={() => setTheme(color)} className={`w-8 h-8 rounded-full ${themeColors[color].bg} ${theme === color ? 'scale-110 ring-2 ring-offset-2 ring-slate-900' : 'opacity-70 hover:opacity-100 transition-all'}`} />
                ))}
              </div>
            </div>
            
            <button className="w-full flex items-center justify-between p-5 border-b border-slate-100 hover:bg-slate-50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-slate-100 rounded-xl text-slate-700"><Bell size={20} /></div>
                <span className="font-bold text-slate-800">Notifications</span>
              </div>
              <ChevronRight size={20} className="text-slate-500" />
            </button>

            <button className="w-full flex items-center justify-between p-5 text-red-700 hover:bg-red-50 transition-colors">
              <span className="font-bold flex items-center gap-4"><LogOut size={20}/> Log Out</span>
            </button>
          </div>
        </main>
      )}

      {/* --- SCAN TAB --- */}
      {currentTab === "scan" && (
        <main className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center p-5 relative overflow-hidden">
          <div className="w-full max-w-md z-10">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-slate-900 mb-2">Scan to Check-In</h1>
              <p className="text-slate-600 text-sm">Point your camera at the projector screen</p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xl mb-8 relative aspect-square flex flex-col items-center justify-center overflow-hidden">
              {isScanning ? (
                <div className="flex flex-col items-center text-indigo-600">
                  <Loader2 size={48} className="animate-spin mb-4" />
                  <p className="font-bold animate-pulse">Scanning...</p>
                </div>
              ) : (
                <div className="relative w-full h-full border-2 border-dashed border-slate-300 rounded-2xl flex flex-col items-center justify-center bg-slate-50">
                   <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-indigo-600 rounded-tl-lg"></div>
                   <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-indigo-600 rounded-tr-lg"></div>
                   <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-indigo-600 rounded-bl-lg"></div>
                   <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-indigo-600 rounded-br-lg"></div>
                   
                   <Camera size={48} className="text-slate-400 mb-4" />
                   <p className="text-slate-500 text-sm font-medium">Camera preview</p>
                   
                   <button onClick={simulateScan} className="absolute bottom-6 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-xl font-bold transition-colors shadow-lg">
                     Simulate Scan
                   </button>
                </div>
              )}
            </div>

            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-2 mb-4 text-slate-800">
                <Keyboard size={20} />
                <h3 className="font-bold">Camera not working?</h3>
              </div>
              <form onSubmit={handleCodeSubmit} className="flex gap-3">
                <input 
                  type="text" 
                  maxLength={6}
                  placeholder="Enter 6-digit code"
                  value={code}
                  onChange={(e) => setCode(e.target.value.replace(/\D/g, ''))}
                  className="flex-1 bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 font-mono text-lg tracking-widest focus:outline-none focus:border-indigo-500 transition-colors"
                />
                <button type="submit" className="bg-slate-900 hover:bg-slate-800 text-white px-5 rounded-xl font-bold transition-colors">
                  Enter
                </button>
              </form>
            </div>
          </div>
        </main>
      )}

      {/* BOTTOM NAVIGATION (Mobile) */}
      <nav className="md:hidden fixed bottom-0 w-full bg-white border-t border-slate-200 pb-safe z-50">
        <div className="flex justify-around items-center h-16">
          <button onClick={() => setCurrentTab("dashboard")} className={`flex flex-col items-center ${currentTab === "dashboard" ? activeTheme.text : "text-slate-500"}`}>
            <Home size={22} className="mb-1" />
            <span className="text-[10px] font-bold">Home</span>
          </button>
          <button onClick={() => setCurrentTab("scan")} className={`flex flex-col items-center ${currentTab === "scan" ? activeTheme.text : "text-slate-500"}`}>
            <QrCode size={22} className="mb-1" />
            <span className="text-[10px] font-bold">Scan</span>
          </button>
          <button onClick={() => setCurrentTab("profile")} className={`flex flex-col items-center ${currentTab === "profile" ? activeTheme.text : "text-slate-500"}`}>
            <User size={22} className="mb-1" />
            <span className="text-[10px] font-bold">Profile</span>
          </button>
        </div>
      </nav>

      {/* --- MODALS --- */}
      <AnimatePresence>
        {showConfirm && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center p-5 bg-black/60 backdrop-blur-sm">
            <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} className="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl">
              <div className="h-12 w-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <ShieldCheck size={24} className="text-indigo-600" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 text-center mb-1">Confirm Check-In</h2>
              <p className="text-slate-500 text-sm text-center mb-6">Please verify your class details</p>
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 mb-6 space-y-3">
                <div className="flex justify-between"><span className="text-slate-500 text-sm">Course</span><span className="font-bold text-slate-800 text-sm">CS101</span></div>
                <div className="flex justify-between"><span className="text-slate-500 text-sm">Class</span><span className="font-bold text-slate-800 text-sm">{student.classGroup}</span></div>
                <div className="flex justify-between"><span className="text-slate-500 text-sm">Time</span><span className="font-bold text-slate-800 text-sm">10:00 AM</span></div>
              </div>
              <div className="flex gap-3">
                <button onClick={() => setShowConfirm(false)} className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 rounded-xl transition-colors">Cancel</button>
                <button onClick={handleConfirm} className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl transition-colors">Confirm</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isSuccess && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 z-[100] flex flex-col items-center justify-center p-5 bg-white">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200, damping: 15 }} className="h-24 w-24 bg-emerald-500 rounded-full flex items-center justify-center mb-6 shadow-xl shadow-emerald-500/30">
              <CheckCircle2 size={48} className="text-white" />
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-3xl font-bold text-slate-900 mb-2">Boom. You're in.</motion.h1>
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-orange-500 font-bold text-lg mb-8 flex items-center gap-2">🔥 8-session streak!</motion.p>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-slate-500 text-sm">Redirecting to dashboard...</motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* DEMO TOGGLE - Remove this when Django is connected */}
      <button 
        onClick={() => setIsSessionLive(!isSessionLive)}
        className="fixed bottom-24 right-5 md:bottom-8 md:right-8 bg-slate-900 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg z-50 border border-slate-700 hover:bg-slate-800"
      >
        {isSessionLive ? "🔴 End Lecture (Demo)" : "🟢 Start Lecture (Demo)"}
      </button>

    </div>
  );
}