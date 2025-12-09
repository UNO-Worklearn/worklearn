import React, { useEffect, useState } from "react";
import axios from "axios";
import MUIDataTable from "mui-datatables";
import { CircularProgress, Box, Typography } from "@mui/material";
import "./QuizAnalytics.css";

const StudentScores = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quizTotals, setQuizTotals] = useState({});

  //  Correct Mapping Based on Given Quiz Types
  const quizNameMapping = {
    intro: "intro",
    decomposition: "decomposition",
    pattern:"pattern-recognition",
    abstraction: "abstraction",
    algorithm: "algorithms",
    review: "review",
    beyond: "beyond",
    pythonone: "python1",
    pythontwo: "python2",
    pythonthree: "python3",
    pythonfive: "python5",
    pythonsix: "python6",
    pythonseven: "python7",
    mainframeone: "mainframe1",
    mainframetwo: "mainframe2",
    mainframethree: "mainframe3",
    mainframefour: "mainframe4",
    mainframefive: "mainframe5",
    mainframesix: "mainframe6",
    coboltwo: "cobol2",
    cobolthree: "cobol3",
    cobolfour: "cobol4",
    cobolsix: "cobol6",
  };

  const fetchQuestions = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/questions`, {
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Failed to fetch questions");
      }

      const questions = await response.json();

      // Log raw quiz types received from backend

      // Normalize and store correct quiz types
      const quizQuestionCounts = questions.reduce((acc, question) => {
        let quizType = question.type?.trim().toLowerCase();
        if (!quizType) return acc; // Skip if type is missing

        if (!acc[quizType]) {
          acc[quizType] = 0;
        }
        acc[quizType] += 1;
        return acc;
      }, {});

      setQuizTotals(quizQuestionCounts);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/users`)
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setLoading(false);
      });

    fetchQuestions();
  }, []);

  useEffect(() => {
  }, [quizTotals]);

  const replaceNegativeScores = (score) => (score < 0 || score === null || score === undefined ? 0 : score);

  const calculatePercentage = (score, quizType) => {
    if (score == null || isNaN(score) || score < 0) score = 0;

    let normalizedQuizType = quizType.trim().toLowerCase();

    // Map quiz name if it exists in our known mapping
    if (quizNameMapping[normalizedQuizType]) {
      normalizedQuizType = quizNameMapping[normalizedQuizType];
    }

    const totalQuestions = quizTotals[normalizedQuizType];

    if (!totalQuestions || totalQuestions <= 0) {
      return "0%";
    }

    let percentage = (score * 100) / totalQuestions;
    percentage = Math.min(100, Math.max(0, percentage));


    return percentage.toFixed(2) + "%";
  };

  const columns = [
    { name: "username", label: "Username" },
    { name: "firstName", label: "First Name" },
    { name: "lastName", label: "Last Name" },
    { name: "introScore", label: "Intro Score" },
    { name: "introPercentage", label: "Intro Percentage" },
    { name: "decompositionScore", label: "Decomposition Score" },
    { name: "decompositionPercentage", label: "Decomposition Percentage" },
    { name: "patternScore", label: "PatternRecognition Score" },
    { name: "patternScorePercentage", label: "PatternRecognition Percentage" },
    { name: "abstractionScore", label: "Abstraction Score" },
    { name: "abstractionPercentage", label: "Abstraction Percentage" },
    { name: "algorithmScore", label: "Algorithm Score" },
    { name: "algorithmPercentage", label: "Algorithm Percentage" },
    { name: "reviewScore", label: "Review Score" },
    { name: "reviewPercentage", label: "Review Percentage" },
    { name: "pythonOneScore", label: "Python One Score" },
    { name: "pythonOnePercentage", label: "Python One Percentage" },
    { name: "pythonTwoScore", label: "Python Two Score" },
    { name: "pythonTwoPercentage", label: "Python Two Percentage" },
    { name: "pythonThreeScore", label: "Python Three Score" },
    { name: "pythonThreePercentage", label: "Python Three Percentage" },
    { name: "pythonFiveScore", label: "Python Five Score" },
    { name: "pythonFivePercentage", label: "Python Five Percentage" },
    { name: "pythonSixScore", label: "Python Six Score" },
    { name: "pythonSixPercentage", label: "Python Six Percentage" },
    { name: "pythonSevenScore", label: "Python Seven Score" },
    { name: "pythonSevenPercentage", label: "Python Seven Percentage" },
    { name: "mainframeOneScore", label: "Mainframe One Score"},
    { name: "mainframeOnePercentage", label: "Mainframe One Percentage"},
    { name: "mainframeTwoScore", label: "Mainframe Two Score"},
    { name: "mainframeTwoPercentage", label: "Mainframe Two Percentage"},
    { name: "mainframeThreeScore", label: "Mainframe Three Score"},
    { name: "mainframeThreePercentage", label: "Mainframe Three Percentage"},
    { name: "mainframeFourScore", label: "Mainframe Four Score"},
    { name: "mainframeFourPercentage", label: "Mainframe Four Percentage"},
    { name: "mainframeFiveScore", label: "Mainframe Five Score"},
    { name: "mainframeFivePercentage", label: "Mainframe Five Percentage"},
    { name: "mainframeSixScore", label: "Mainframe Six Score"},
    { name: "mainframeSixPercentage", label: "Mainframe Six Percentage"},
    { name: "cobolTwoScore", label: "Cobol Two Score"},
    { name: "cobolTwoPercentage", label: "Cobol Two Percentage"},
    { name: "cobolThreeScore", label: "Cobol Three Score"},
    { name: "cobolThreePercentage", label: "Cobol Three Percentage"},
    { name: "cobolFourScore", label: "Cobol Four Score"},
    { name: "cobolFourPercentage", label: "Cobol Four Percentage"},
    { name: "cobolSixScore", label: "Cobol Six Score"},
    { name: "cobolSixPercentage", label: "Cobol Six Percentage"},
  ];

  const options = {
    filterType: "checkbox",
    responsive: "standard",
    rowsPerPage: 10,
    pagination: true,
    selectableRows: "none",
    customTableBodyStyle: { textAlign: "center", padding: "12px" },
    setTableProps: () => ({
      style: { borderCollapse: "separate", borderSpacing: "10px 5px" },
    }),
  };

  const data = users.map((user) => ({
    username: user.username,
    firstName: user.firstName,
    lastName: user.lastName,
    introScore: replaceNegativeScores(user.introScore),
    introPercentage: calculatePercentage(user.introScore, "intro"),
    decompositionScore: replaceNegativeScores(user.decompositionScore),
    decompositionPercentage: calculatePercentage(user.decompositionScore, "decomposition"),
    patternScore: replaceNegativeScores(user.patternScore),
    patternScorePercentage: calculatePercentage(user.patternScore, "pattern-recognition"),
    abstractionScore: replaceNegativeScores(user.abstractionScore),
    abstractionPercentage: calculatePercentage(user.abstractionScore, "abstraction"),
    reviewScore: replaceNegativeScores(user.reviewScore),
    reviewPercentage: calculatePercentage(user.reviewScore, "review"),
    beyondScore: replaceNegativeScores(user.beyondScore),
    beyondPercentage: calculatePercentage(user.beyondScore, "beyond"),
    algorithmScore: replaceNegativeScores(user.algorithmScore),
    algorithmPercentage: calculatePercentage(user.algorithmScore, "algorithm"),
    pythonOneScore: replaceNegativeScores(user.pythonOneScore),
    pythonOnePercentage: calculatePercentage(user.pythonOneScore, "pythonone"),
    pythonTwoScore: replaceNegativeScores(user.pythonTwoScore),
    pythonTwoPercentage: calculatePercentage(user.pythonTwoScore, "pythontwo"),
    pythonThreeScore: replaceNegativeScores(user.pythonThreeScore),
    pythonThreePercentage: calculatePercentage(user.pythonThreeScore, "pythonthree"),
    pythonFiveScore: replaceNegativeScores(user.pythonFiveScore),
    pythonFivePercentage: calculatePercentage(user.pythonFiveScore, "pythonfive"),
    pythonSixScore: replaceNegativeScores(user.pythonSixScore),
    pythonSixPercentage: calculatePercentage(user.pythonSixScore, "pythonsix"),
    pythonSevenScore: replaceNegativeScores(user.pythonSevenScore),
    pythonSevenPercentage: calculatePercentage(user.pythonSevenScore, "pythonseven"),
    mainframeOneScore: replaceNegativeScores(user.mainframeOneScore),
    mainframeOnePercentage: calculatePercentage(user.mainframeOneScore, "mainframeOne"),
    mainframeTwoScore: replaceNegativeScores(user.mainframeTwoScore),
    mainframeTwoPercentage: calculatePercentage(user.mainframeTwoScore, "mainframeTwo"),
    mainframeThreeScore: replaceNegativeScores(user.mainframeThreeScore),
    mainframeThreePercentage: calculatePercentage(user.mainframeThreeScore, "mainframeThree"),
    mainframeFourScore: replaceNegativeScores(user.mainframeFourScore),
    mainframeFourPercentage: calculatePercentage(user.mainframeFourScore, "mainframeFour"),
    mainframeFiveScore: replaceNegativeScores(user.mainframeFiveScore),
    mainframeFivePercentage: calculatePercentage(user.mainframeFiveScore, "mainframeFive"),
    mainframeSixScore: replaceNegativeScores(user.mainframeSixScore),
    mainframeSixPercentage: calculatePercentage(user.mainframeSixScore, "mainframeSix"),
    cobolTwoScore: replaceNegativeScores(user.cobolTwoScore),
    cobolTwoPercentage: calculatePercentage(user.cobolTwoScore, "cobolTwo"),
    cobolThreeScore: replaceNegativeScores(user.cobolThreeScore),
    cobolThreePercentage: calculatePercentage(user.cobolThreeScore, "cobolThree"),
    cobolFourScore: replaceNegativeScores(user.cobolFourScore),
    cobolFourPercentage: calculatePercentage(user.cobolFourScore, "cobolFour"),
    cobolSixScore: replaceNegativeScores(user.cobolSixScore),
    cobolSixPercentage: calculatePercentage(user.cobolSixScore, "cobolSix"),
  }));

  return <MUIDataTable title="Student Scores and Percentages" data={data} columns={columns} options={options} />;
};

export default StudentScores;
