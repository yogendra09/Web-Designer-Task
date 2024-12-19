import Sidebar from "../components/Sidebar";
import Feedback from "../components/Feedback";
import { useState } from "react";
import CardContainer from "../components/CardContainer";

const Home = () => {
  const [feedback, setFeedback] = useState(false);
  const [viewType, setViewType] = useState("grid");

  return (
    <>
      <div className="flex flex-col md:flex-row">
        <Sidebar
          viewType={viewType}
          setViewType={setViewType}
          setFeedback={setFeedback}
          className="md:w-1/4 w-full"
        />
        <CardContainer viewType={viewType} className="md:w-3/4 w-full" />
      </div>
      {feedback && <Feedback setFeedback={setFeedback} />}
    </>
  );
};

export default Home;
