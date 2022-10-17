import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NewsCard from "../screens/newscard";
import Data from "../screens/newsdata";
export default function AppRouter() {
    return (
        <Router>
            <Routes>
            <Route path="/" element={<Data />} />
            <Route path="newscard" element={<NewsCard />} />
            </Routes>
        </Router>
    );
}