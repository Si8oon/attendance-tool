"use client";

export default function ProjectorScreen() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center font-sans p-10">
      
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl text-slate-400 font-medium mb-2 uppercase tracking-widest">CS101 • Classes A, B, C</h1>
        <h2 className="text-6xl font-bold tracking-tight">Scan to Check-In</h2>
      </div>

      {/* Massive QR and Code Grid */}
      <div className="flex flex-col md:flex-row items-center gap-12 bg-slate-900 p-10 rounded-[3rem] border border-slate-800 shadow-2xl">
        
        {/* QR Code Placeholder */}
        <div className="w-72 h-72 bg-white rounded-3xl p-4 flex items-center justify-center">
           <div className="w-full h-full border-4 border-dashed border-slate-300 flex items-center justify-center text-slate-400 text-xl font-bold">
             [ QR CODE ]
           </div>
        </div>

        {/* Divider */}
        <div className="hidden md:block h-64 w-px bg-slate-700"></div>

        {/* The 6-Digit Fallback */}
        <div className="flex flex-col items-center">
          <p className="text-lg text-slate-400 mb-4 uppercase tracking-widest font-bold">Or enter code</p>
          <div className="text-8xl font-mono font-black text-blue-400 tracking-widest drop-shadow-[0_0_20px_rgba(96,165,250,0.6)]">
            482913
          </div>
        </div>
      </div>

      {/* Live Attendance Ticker */}
      <div className="mt-16 bg-slate-900 border border-slate-800 px-10 py-5 rounded-full flex items-center gap-6 shadow-lg">
        <span className="flex h-4 w-4 rounded-full bg-green-500 animate-pulse"></span>
        <span className="text-2xl text-slate-300 font-medium">Live Attendance:</span>
        <span className="text-4xl font-black text-green-400">142 / 160</span>
      </div>

    </div>
  );
}