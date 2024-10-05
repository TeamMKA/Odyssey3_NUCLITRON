const Home = () => {
  return (
    <div className="bg-white min-h-screen">
      <header className="bg-blue-500 p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-white">
          Student Management Website
        </h1>
        <div className="space-x-4">
          <button className="bg-blue-700 px-3 py-1 rounded text-white">
            <a href="/dash"> Your Dashboard </a>
          </button>
          <button className="bg-blue-700 px-3 py-1 rounded text-white">
            <a href="/prog"> Program Overview </a>
          </button>
          <button className="bg-blue-700 px-3 py-1 rounded text-white">
            Sign In
          </button>
          <button className="bg-blue-700 px-3 py-1 rounded text-white">
            Log In
          </button>
        </div>
      </header>

      <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Sidebar */}
        <div className="bg-blue-400 p-4 rounded h-[100vh] flex flex-col justify-start items-center">
          <div className="flex items-center space-x-2 mb-4">
            <img
              src="https://via.placeholder.com/50"
              alt="Profile"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h2 className="font-bold text-white">Studify</h2>
              <p className="text-sm text-blue-200">
                Student Management Platform
              </p>
            </div>
          </div>
          <nav className="space-y-2">
            <button className="w-full text-left py-2 px-3 hover:bg-blue-700 rounded text-white">
              <a href="/dash">Dashboard</a>
            </button>
            <button className="w-full text-left py-2 px-3 hover:bg-blue-700 rounded text-white">
              <a href="/stud">Students</a>
            </button>
            <button className="w-full text-left py-2 px-3 hover:bg-blue-700 rounded text-white">
              Batch
            </button>
            <button className="w-full text-left py-2 px-3 hover:bg-blue-700 rounded text-white">
              <a href="/prog">Program</a>
            </button>
            <button className="w-full text-left py-2 px-3 hover:bg-blue-700 rounded text-white">
              <a href="/notice"></a>
            </button>
            <button className="w-full text-left py-2 px-3 hover:bg-blue-700 rounded text-white">
              <a href="/prof">Profile</a>
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="col-span-2">
          <div className="bg-blue-200 p-4 rounded mb-4">
            <h2 className="text-center font-bold text-2xl text-blue-900">
              Student Management Platform
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-blue-100 p-4 rounded text-center">
              <div className="text-4xl mb-2 text-blue-900">74</div>
              <h3 className="font-bold text-blue-900">TOTAL STUDENTS</h3>
            </div>
            <div className="bg-blue-100 p-4 rounded text-center">
              <div className="text-4xl mb-2 text-blue-900">10</div>
              <h3 className="font-bold text-blue-900">TOTAL TEACHER</h3>
            </div>
            <div className="bg-blue-100 p-4 rounded text-center">
              <div className="text-4xl mb-2 text-blue-900">9</div>
              <h3 className="font-bold text-blue-900">SMS BALANCE</h3>
            </div>
            <div className="bg-blue-100 p-4 rounded text-center">
              <div className="text-4xl mb-2 text-blue-900">22</div>
              <h3 className="font-bold text-blue-900">TOTAL NOTICE</h3>
            </div>
          </div>

          <div className="bg-blue-200 p-4 rounded mt-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-bold text-blue-900">
                  Last 7 Days Site Activity Graph
                </h3>
                {/* Placeholder for graph */}
                <div className="h-40 bg-blue-100 mt-2 rounded"></div>
              </div>
              <div>
                <h3 className="font-bold text-blue-900">
                  Last 7 Days SMS Send Performance Graph
                </h3>
                {/* Placeholder for graph */}
                <div className="h-40 bg-blue-100 mt-2 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
