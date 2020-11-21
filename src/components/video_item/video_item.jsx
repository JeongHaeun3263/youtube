import React from 'react';
import styles from './video_item.module.css';

// props안에 있는 video 안에 있는 snippet에 접근하기
// deconstructing
const VideoItem = ({ video, video: { snippet }, onVideoClick, display }) => {
	const displayType = display === 'list' ? styles.list : styles.grid;
	return (
		<li
			className={`${styles.container} ${displayType}`}
			onClick={() => onVideoClick(video)}
		>
			<div className={styles.video}>
				<img
					src={snippet.thumbnails.medium.url}
					alt='video thumbnail'
					className={styles.thumbnails}
				></img>
				<div className={styles.metadata}>
					<p className={styles.title}>{snippet.title}</p>
					<p className={styles.channel}>{snippet.channelTitle}</p>
				</div>
			</div>
		</li>
	);
};

export default VideoItem;
