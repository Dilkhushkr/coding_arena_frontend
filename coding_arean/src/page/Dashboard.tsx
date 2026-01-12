import {useState } from 'react';
import { LogOut, User } from 'lucide-react';
import { useDispatch, } from 'react-redux';
import { logoutRequest } from '../redux/slice/authSlice';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const [showProfile, setShowProfile] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Dummy user data
  const user = {
    name: 'Dilkhush Kumar',
    email: 'dilkhush@example.com',
    role: 'Student',
    
  };

  // Dummy questions data
  const questions = [
    {
      id: 1,
      title: 'What is React?',
      difficulty: 'Easy',
    },
    {
      id: 2,
      title: 'Explain JWT Authentication',
      difficulty: 'Medium',
    },
    {
      id: 3,
      title: 'Optimize an array rotation algorithm',
      difficulty: 'Hard',
    },
  ];

  const handleLogout = () => {
    dispatch(logoutRequest());
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>

        {/* Profile Section */}
        <div className="relative">
          <button
            onClick={() => setShowProfile(!showProfile)}
            className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-xl hover:bg-slate-700"
          >
            <User size={18} />
            <span>{user.name}</span>
          </button>

          {showProfile && (
            <div className="absolute right-0 mt-3 w-64 bg-slate-800 rounded-2xl shadow-lg p-4">
              <h3 className="font-semibold text-lg mb-2">Profile</h3>
              <p className="text-sm text-slate-300">Name: {user.name}</p>
              <p className="text-sm text-slate-300">Email: {user.email}</p>
              <p className="text-sm text-slate-300 mb-4">Role: {user.role}</p>

              <button
                onClick={handleLogout}
                className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 py-2 rounded-xl"
              >
                <LogOut size={16} /> Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Questions Section */}
      <div className="grid gap-4">
        {questions.map((q) => (
          <div
            key={q.id}
            className="bg-slate-800 p-4 rounded-2xl shadow-md"
          >
            <h2 className="text-lg font-semibold">{q.title}</h2>
            <span
              className={`inline-block mt-2 px-3 py-1 rounded-full text-sm ${
                q.difficulty === 'Easy'
                  ? 'bg-green-600'
                  : q.difficulty === 'Medium'
                  ? 'bg-yellow-600'
                  : 'bg-red-600'
              }`}
            >
              {q.difficulty}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
