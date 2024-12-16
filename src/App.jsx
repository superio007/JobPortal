import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homapage from "./pages/Homapage";
import Jobs from "./pages/Jobs";
import Addjob from "./pages/AddJob";
import MainLayout from "./Layouts/MainLayouts";
import NotFound from "./pages/notFound";
import Job , {jobLoader} from "./pages/JobPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route path="/" element={<Homapage />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/add-job" element={<Addjob />} />
          <Route path="/jobs/:id" element={<Job />} loader={jobLoader} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

