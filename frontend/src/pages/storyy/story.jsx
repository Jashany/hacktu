import React, {Fragment, useEffect, useState} from "react";
import styles from './story.module.css';
import axios from 'axios';

const Story = () => {
	const[stories, setStory] = useState([]);
	const fetchstory = async () => {
	axios.get('/api/story')
    .then(response => {
        setStory(response.data);
    })
    .catch(error => {
        console.error('Error fetching data: ', error);
    });
}


useEffect(() => {
	fetchstory();
}, []);

	return(
		<div className={styles.container}>
			<div className={styles.backimage}>
				<div className={styles.overlay}>
					<h2>Good Touch <br /> Baad Touch</h2>
					<p>By Siddhant</p>
				</div>
			</div>
			<div className={styles.desc}>
				{stories.map((story,index) => {
					return (
						<div key={index}>
							<div>
								<p>{story.title}</p>
							</div>
							<div>
								<p>{story.content}</p>
							</div>
						</div>
					)
				})
				}
			</div>
		</div>
	)
};

export default Story;