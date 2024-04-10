import MainContent from "./components/mainContent/MainContent";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <>
      <div className="flex w-[1280px] h-[892px] shadow-lg p-2">
        <Sidebar />
        <MainContent />
      </div>
    </>
  );
}

export default App;
