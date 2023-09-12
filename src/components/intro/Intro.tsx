// import pfp from "../../img/notion avatar.svg";
// import pfp from "../../img/me.jpg";
import pfp from "../../img/Mohanish Shevde.jpg";

import './intro.css';

import { useEffect } from "react";
const AOS = require('aos');

const Intro = () => {
    useEffect(() => {
        AOS.init({
          duration : 2000
        });
      }, []);

    return (
        <div className="intro">
            <div className="circle">
                <span className="circle__btn">
                    <img src={pfp} alt="Manu" />
                </span>
                <span className="circle__back-1"></span>
                <span className="circle__back-2"></span>
            </div>
            <div className="text">
                <p id="name">Mohanish <strong>Shevde</strong></p>
                <p className="title">Your local fun nerd ♡</p>

                <p>  A logical and creative thinker, I love solving problems. <br />   
                    Full Stack Web Developer.
                    <br />
                    I possess a strong foundation in both front-end and back-end JavaScript technologies <br /> and can seamlessly 
                    integrate them to create highly functional and user-friendly applications.
                    <br />
                    <br />
                    <strong className="lang">Languages :</strong> JavaScript C++ SQL
                    <br />
                    <strong>Technologies :</strong> ReactJS  NodeJS  ExpressJS  Redux  PostgreSQL
                    <br />
                    <strong className="plat">Platforms :</strong> Azure  AWS  Firebase  Netlify
                    </p>
                    {/* Machine learning practitioner, <br />web and flutter developer.</p> */}
                    
                
                <div className="socials">
                    <hr></hr>
                    
                    <div data-aos="zoom-in" data-aos-anchor-placement="center-bottom" data-aos-duration="1000">
                        <a href="https://github.com/Mohanish19" rel="noreferrer" target="_blank" title="Github">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path className="fill" d="M17 13.5c0 4.142-2.502 4-6.645 4-4.142 0-8.355.142-8.355-4S7.858 7 12 7s5 2.358 5 6.5z"></path>
                                <path d="M12 16.5v-2.902a2.53 2.53 0 00-.705-1.958c2.355-.263 4.83-1.155 4.83-5.25A4.08 4.08 0 0015 3.578 3.803 3.803 0 0014.932.75S14.047.487 12 1.86a10.035 10.035 0 00-5.25 0C4.702.487 3.817.75 3.817.75a3.803 3.803 0 00-.067 2.827 4.08 4.08 0 00-1.125 2.835c0 4.065 2.475 4.958 4.83 5.25a2.528 2.528 0 00-.705 1.935V16.5m0-2.25C3 15.375 3 12.375 1.5 12l5.25 2.25z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </a>
                    </div>
                    <div data-aos="zoom-in" data-aos-anchor-placement="center-bottom" data-aos-duration="1300">
                        <a href="https://www.linkedin.com/in/mohanish-shevde-008067222/" rel="noreferrer" target="_blank" title="Linkedin">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path className="fill" d="M17 14.5c0 4.142-2.502 4-6.645 4-4.142 0-8.355.142-8.355-4S7.858 8 12 8s5 2.358 5 6.5z"></path>
                                <path d="M12 6a4.5 4.5 0 014.5 4.5v5.25h-3V10.5a1.5 1.5 0 10-3 0v5.25h-3V10.5A4.5 4.5 0 0112 6v0zM4.5 6.75h-3v9h3v-9zM3 4.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </a>
                        </div>
                    <div data-aos="zoom-in" data-aos-anchor-placement="center-bottom" data-aos-duration="1300">
                        <a href="https://leetcode.com/manu19/" target="_blank"rel="noreferrer" title="LeetCode">
                            <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="leetcode">
                                <path d="M20.303 16.047h-9.561c-.936 0-1.697-.803-1.697-1.79s.762-1.79 1.697-1.79h9.561c.936 0 1.697.803 1.697 1.79s-.762 1.79-1.697 1.79zm-9.561-2.58c-.385 0-.697.354-.697.79s.312.79.697.79h9.561c.385 0 .697-.354.697-.79s-.312-.79-.697-.79h-9.561z"></path>
                                <path d="M11.618 24c-1.604 0-2.977-.533-3.97-1.541L3.55 18.278C2.551 17.262 2 15.819 2 14.215c0-1.578.551-3.008 1.552-4.025L13.071.509c.66-.67 1.829-.652 2.506.036.694.706.71 1.839.034 2.524l-1.762 1.816a5.25 5.25 0 0 1 1.739 1.159l2.463 2.53c.672.684.655 1.815-.039 2.521a1.79 1.79 0 0 1-1.284.545c-.464 0-.896-.181-1.219-.509l-2.536-2.492c-.321-.327-.779-.49-1.367-.49-.606 0-1.069.157-1.375.469l-4.067 4.194c-.342.349-.521.831-.521 1.4 0 .577.189 1.101.519 1.436l4.083 4.182c.315.321.774.484 1.362.484s1.045-.163 1.36-.484l2.549-2.505a1.687 1.687 0 0 1 1.209-.503h.002c.483 0 .939.194 1.286.546.693.705.71 1.837.036 2.522l-2.457 2.525C14.586 23.438 13.176 24 11.618 24zM14.29 1a.703.703 0 0 0-.507.21l-9.519 9.681C3.449 11.72 3 12.9 3 14.215c0 1.341.449 2.535 1.265 3.363l.001.001 4.097 4.18C9.162 22.57 10.288 23 11.618 23c1.288 0 2.444-.455 3.258-1.282l2.457-2.525c.295-.301.279-.804-.034-1.122a.801.801 0 0 0-.573-.247h-.001a.703.703 0 0 0-.502.209l-2.549 2.505c-.497.507-1.214.778-2.068.778s-1.572-.271-2.076-.784L5.446 16.35c-.519-.527-.805-1.286-.805-2.136 0-.824.286-1.57.806-2.099l4.067-4.194c.503-.512 1.206-.771 2.091-.771.854 0 1.571.271 2.074.783l2.536 2.492a.705.705 0 0 0 .512.216.798.798 0 0 0 .571-.246c.313-.319.33-.822.037-1.121l-2.461-2.528a4.238 4.238 0 0 0-2.028-1.137c-.175-.041-.331-.176-.382-.349s-.021-.363.104-.492l2.325-2.398c.298-.302.282-.805-.031-1.124A.799.799 0 0 0 14.29 1z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" ></path></svg>
                        </a>
                        </div>
                    <div data-aos="zoom-in" data-aos-anchor-placement="center-bottom" data-aos-duration="1300">
                        <a href="https://www.hackerrank.com/manushevde95" target="_blank" rel="noreferrer" title="HackerRank">
                        <svg width = "18" height = "18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M477.5 128C463 103.05 285.13 0 256.16 0S49.25 102.79 34.84 128s-14.49 230.8 0 256 192.38 128 221.32 128S463 409.08 477.49 384s14.51-231 .01-256zM316.13 414.22c-4 0-40.91-35.77-38-38.69.87-.87 6.26-1.48 17.55-1.83 0-26.23.59-68.59.94-86.32 0-2-.44-3.43-.44-5.85h-79.93c0 7.1-.46 36.2 1.37 72.88.23 4.54-1.58 6-5.74 5.94-10.13 0-20.27-.11-30.41-.08-4.1 0-5.87-1.53-5.74-6.11.92-33.44 3-84-.15-212.67v-3.17c-9.67-.35-16.38-1-17.26-1.84-2.92-2.92 34.54-38.69 38.49-38.69s41.17 35.78 38.27 38.69c-.87.87-7.9 1.49-16.77 1.84v3.16c-2.42 25.75-2 79.59-2.63 105.39h80.26c0-4.55.39-34.74-1.2-83.64-.1-3.39.95-5.17 4.21-5.2 11.07-.08 22.15-.13 33.23-.06 3.46 0 4.57 1.72 4.5 5.38C333 354.64 336 341.29 336 373.69c8.87.35 16.82 1 17.69 1.84 2.88 2.91-33.62 38.69-37.58 38.69z"/></svg>
                        </a>
                        </div>
                    <div data-aos="zoom-in" data-aos-anchor-placement="center-bottom" data-aos-duration="1600">
                        <a href="https://twitter.com/MohanishShevde" target="_blank" rel="noreferrer" title="Twitter">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path className="fill" d="M17 13.5c0 4.142-2.502 4-6.645 4-4.142 0-8.355.142-8.355-4S7.858 7 12 7s5 2.358 5 6.5z"></path>
                                <path d="M17.25 2.25a8.174 8.174 0 01-2.355 1.147A3.36 3.36 0 009 5.647v.75A7.995 7.995 0 012.25 3s-3 6.75 3.75 9.75a8.73 8.73 0 01-5.25 1.5c6.75 3.75 15 0 15-8.625 0-.209-.02-.417-.06-.622a5.79 5.79 0 001.56-2.753v0z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </a>
                    </div>
                    <div data-aos="zoom-in" data-aos-anchor-placement="center-bottom" data-aos-duration="1900">
                        <a href="mailto:manushevde95@gmail.com" target="_blank" rel="noreferrer" title="Email">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path className="fill" d="M17 13.5c0 4.142-2.502 4-6.645 4-4.142 0-8.355.142-8.355-4S7.858 7 12 7s5 2.358 5 6.5z"></path>
                                <path d="M3 3h12c.825 0 1.5.675 1.5 1.5v9c0 .825-.675 1.5-1.5 1.5H3c-.825 0-1.5-.675-1.5-1.5v-9C1.5 3.675 2.175 3 3 3z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M16.5 4.5L9 9.75 1.5 4.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </a>
                    </div>
                    {/* <div>
                        <svg className="socialicon" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                        </svg>
                    </div>
                    <div>
                        <svg className="socialicon" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                        </svg>
                    </div> */}
                    <hr></hr>
                </div>
            </div>  
            
        </div>
    )
}

export default Intro