import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header/Header";

import Student from "./Student/Student";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";
import Quiz from "./Quiz/Quiz";
import Results from "./Quiz/Result/ResultForAll";
import IndividualResult from "./Quiz/Result/ResultForIndividualStudent";
import QuizAccess from "./Quiz/Question/QuizAccess";
import Gallery from "./Gallary/Gallary";
import ArticlesPage from "./Knowledge Hub/Makala/ArticlesPage";
import Videos from "./Knowledge Hub/Videos/Videos";
import Majalis from "./Knowledge Hub/Majalis/Majalis";
import KidsStories from "./Knowledge Hub/Kids Corner/KidsStories";

const App = () => {
  const currentDate = new Date();
  const today = currentDate.getUTCDate();
  const currentHour = currentDate.getUTCHours() + 5;
  // test date and time

  const targetDate = 8;
  const EnglishMonth = "April";
  const UrduMonth = "اپریل";

  // jobs need to be done
  // need to add view more button

  const from = 9;
  const to = 21;
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path="/" exact element={<Home />}></Route>

          <Route path="/student" exact element={<Student />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/results" element={<Results />} />
          <Route path="/resultcheck" element={<IndividualResult />} />
          <Route path="/salma" element={<Quiz />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/majalis" element={<Majalis />} />
          <Route path="/BachaParty" element={<KidsStories />} />
          <Route path="/kidsstories" element={<KidsStories />} />
          <Route path="/makalajaat" element={<ArticlesPage />} />
          <Route
            path="/quiz"
            element={
              today === targetDate &&
              currentHour >= from &&
              currentHour < to ? (
                <Quiz />
              ) : (
                <QuizAccess
                  date={targetDate}
                  from={from}
                  to={to}
                  EnglishMonth={EnglishMonth}
                  UrduMonth={UrduMonth}
                />
              )
            }
          ></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
