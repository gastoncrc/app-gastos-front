import Bills from "./components/Bills";
import Users from "./components/Users";

function App() {
  return (
    <div
      className="flex flex-col gap-2 h-screen bg-black
     items-center"
    >
      <Bills />
      <Users />
    </div>
  );
}

export default App;
