import react, { useEffect, useState } from 'react';
import { YOUTUBE_API_KEY } from './config/youtube.js';
import './app.css';
import VideoList from './components/video_list/video_list.jsx';

function App() {
	const [videos, setVideos] = useState([]);

	//컴포넌트가 마운트 되었거나 업데이트 되었을 때 호출되는 것
	useEffect(() => {
		const requestOptions = {
			method: 'GET',
			redirect: 'follow',
		};

		fetch(
			`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${YOUTUBE_API_KEY}`,
			requestOptions
		)
			.then((response) => response.json())
			.then((result) => setVideos(result.items))
			.catch((error) => console.log('error', error));
	}, []);
	return <VideoList videos={videos} />;
}

export default App;
