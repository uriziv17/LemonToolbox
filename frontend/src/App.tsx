import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import YoutubeDownloadPage from "./components/youtubeDownload/YoutubeDownloadPage";
import MainPage from "./components/MainPage";
import AppLayout from "./Layout"; // Import your layout

const App = () => {
	return (
		<Router>
			<React.Suspense fallback={<div>Loading...</div>}>
				<AppLayout>
					<Routes>
						<Route path="/" element={<MainPage />} />
						<Route path="/youtube-download" element={<YoutubeDownloadPage />} />
					</Routes>
				</AppLayout>
			</React.Suspense>
		</Router>
	);
};

export default App;
