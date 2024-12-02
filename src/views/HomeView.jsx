import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import heroBackground from "../assets/PFSBackground.jpg";
import logo from "../assets/PossumLogo2.png";
import footerBackground from "../assets/PossumFSFooterBackground.png";
import "./HomeView.css";

function HomeView() {
    const [movieArray, setMovieArray] = useState([]);
    const [movie1, setMovie1] = useState({});
    const [movie2, setMovie2] = useState({});
    const [movie3, setMovie3] = useState({});
    const [done, setDone] = useState(false);

    async function data() {
        const options = await axios.get("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=2504360aa5c1db5862cf6d7813be21b2")
        setMovieArray(options.data.results);
        setMovie1(movieArray[Math.floor(Math.random() * movieArray.length)]);
        setMovie2(movieArray[Math.floor(Math.random() * movieArray.length)]);
        setMovie3(movieArray[Math.floor(Math.random() * movieArray.length)]);
        setDone(true);
        return options;
    };

    useEffect(() => {
        data();
    }, [done]);

    return (
        <div>
            <div class="opaque-top-rectangle">
                <img class="possum-logo" src={logo} alt="Possum Logo" />
                <p class="title">Possum</p>
                <Link to={`/register`} className="sign-in-button">Register</Link>
                <Link to={`/login`} className="sign-up-button">Login</Link>
            </div>
            <div class="hero-container">
                <img class="hero-background" src={heroBackground}></img>
                <div class="hero-content-container">
                    <p class="hero-main-text">Unlimited POSSUM Movies, Shows, and More</p>
                    <p class="price-text">
                        Starts at the low price of $0.01! Satisfaction Guaranteed.
                    </p>
                    <form action="">
                        <div class="search-bar">
                            <input type="text" placeholder="Search a movie..."></input>
                        </div>
                    </form>
                </div>
            </div>
            <div class="feature-container">
                <p class="featured-title">Featured</p>
                <img class="movie-one" src={`https://image.tmdb.org/t/p/w500${movie1?.poster_path}`}></img>
                <img class="movie-two" src={`https://image.tmdb.org/t/p/w500${movie2?.poster_path}`}></img>
                <img class="movie-three" src={`https://image.tmdb.org/t/p/w500${movie3?.poster_path}`}></img>
            </div>
            <div class="footer-container">
                <img class="footer-background" src={footerBackground}></img>
                <div class="footer-container">
                    <p class="footer-questions"> Questions? call 647-999-999</p>
                    <p class="footer-faq"> FAQ</p>
                    <p class="footer-contact-us">Contact Us</p>
                    <p class="footer-help-center">Help Center</p>
                    <p class="footer-legal-notices">Legal Notices</p>
                    <p class="footer-cookie-preferences">Cookie Preferences</p>
                    <p class="footer-only-on-possum">Only on Possum</p>
                    <p class="footer-possum-shop">Possum Shop</p>
                    <p class="footer-account">Account</p>
                    <p class="footer-possum-gift-cards">Possum Gift Cards</p>
                </div>
            </div>
        </div>
    )
}

export default HomeView;