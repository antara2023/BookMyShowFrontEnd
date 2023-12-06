import { useParams } from "react-router-dom";
import Banner from "./Banner";
import { useEffect } from 'react';
import { useState } from 'react';

const MovieDetailPage = () => {
    const [movieDetail, setMovieDetail] = useState({});
    const { movieId } = useParams();
    console.log(movieId);

    useEffect(() => {

        fetch(`https://localhost:5050/api/movie/detail/${movieId}`)
            .then(res => res.json())
            .then(data => {
                console.log(data.results, movieId);
                const result = data.results.find((movie) => movie.id == movieId);
                console.log(result);
                return result;
            })
            .then(movie =>  setMovieDetail(movie));
    }, []);


    return (
        <div>
            <h1>Movie Detail Page</h1>
            <BannerWithPadding>
                <Banner title={movieDetail?.title} description={movieDetail?.overview} imageUrl={movieDetail.thumbnail}/>
            </BannerWithPadding>

        </div>
    )
}

export default MovieDetailPage;

const BannerWithPadding = ({ children }) => {
    return (
        <div style={{padding: '50px', border: '1px solid #ccc'}}>
            { children }
        </div>
    )
}