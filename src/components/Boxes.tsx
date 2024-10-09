import { useEffect, useState } from 'react'
import axios from 'axios';

const imgUrl = 'https://image.tmdb.org/t/p/w500/';
const bearer = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MzRhYTk5NzI2YjJlZjA4MmRlYTEwNWQ4MTkxYWU3NCIsIm5iZiI6MTcyODM5MzMzMi43NjI0ODUsInN1YiI6IjY3MDUyOWZjYmQ3Y2Q4NmRhNTFkNTExNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KLDRvNUQ6sJ2yf8I0Y3C6AqPsbwPgLrB-pAzVJs-PHw';

type Title = {
    title: string
    imgUrl: string
    voteAverage: number
    voteCount: number
}

interface BoxesProps {
    searchVal: string;
}
export default function Boxes({ searchVal }: BoxesProps) {

    const [titles, setTitles] = useState<Title[] | []>([]);
    const [error, setError] = useState('');


    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/search/movie?query=${searchVal}&include_adult=false&language=en-US&page=1`, {
            headers: {
                Authorization: 'Bearer ' + bearer
            }
        }).then(
            res => setTitlesFromRawData(res.data['results'])
        ).catch(e => setError(e));
    }, [searchVal]);

    const setTitlesFromRawData = (rawData: []) => {
        const titles: Title[] = rawData.map((item: any) => {
            const titleItem: Title = {
                title: item.title,
                imgUrl: item.poster_path,
                voteAverage: item.vote_average,
                voteCount: item.vote_count
            };
            return titleItem;
        }).filter((item: Title) => item.imgUrl);
        setTitles(titles);
    }

    return (
        <div className="boxes">
            {
                titles.map((box, i) => (
                    <div className="box" key={i}>
                        <h2>{box.title}</h2>
                        <img src={imgUrl + box.imgUrl} className="logo" alt={box.title} />
                        <h3>{box.voteAverage}</h3>
                        <h3>{box.voteCount}</h3>
                    </div>
                ))
            }
        </div>
    );
};

