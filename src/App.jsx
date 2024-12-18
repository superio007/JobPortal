import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import Homapage from "./pages/Homapage";
import Jobs from "./pages/Jobs";
import Addjob from "./pages/AddJob";
import MainLayout from "./Layouts/MainLayouts";
import NotFound from "./pages/notFound";
import TryPage from "./pages/TryPage"
// import Job , {jobLoader} from "./pages/JobPage";
import Job from "./pages/JobPage";
import EditJob from './pages/EditJob';
function addJob(newJob){
  const res = fetch("/api/jobs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newJob),
  })
  return;
}
const updateJob = async (job) => {
  console.log(job.id);
  const res = await fetch(`/api/jobs/${job.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(job),
  });
  return;
};
function App() {
    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path="/" element={<MainLayout/>}>
          <Route path="/" element={<Homapage />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/add-job" element={<Addjob addJob={addJob}/>} />
          {/* <Route path="/jobs/:id" element={<Job />} loader={jobLoader} /> */}
          <Route path="/jobs/:id" element={<Job />} />
          <Route path="/edit-job/:id" element={<EditJob updateJob={updateJob} />}  />
          <Route path="*" element={<NotFound />} />
          <Route path="/try" element={<TryPage />} />
        </Route>
      )
    );

    return (
      <RouterProvider router={router} />
    );
}

export default App;

