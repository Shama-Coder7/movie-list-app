// import react from "react";

const MovieCard=(movie)=>{
   
    let img_path="https://image.tmdb.org/t/p/w500";
    return(
        <>
            <div className="movie">
                <img src={img_path+movie.info.poster_path} className="poster"></img>
                <div className="movie-details">
                    <div className="box">
                        <h4 className="title">{movie.info.title}</h4>
                        <p className="rating">{movie.info.vote_average}</p>
                        <h5 className="rating">{movie.info.vote_count}</h5>
                    </div>
                    <div className="overview">
                        <h1>Overview</h1>
                     <p><span>Watched:-</span>{movie.info.popularity}</p>   
                     <h5><span>Release Date:-</span>{movie.info.release_date}</h5>


                        {movie.info.overview}
                    </div>
                </div>
            </div>
        </>
    )
}
export default MovieCard;