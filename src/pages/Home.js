import { Box, Button, Heading, Stack } from "@chakra-ui/react"
import { Link } from "react-router-dom"

export const Home = () => {
    return (
        <>
            <header className="header">
                <div className="header__info">
                    <h1 className="title">Bhromaon</h1>
                    <h3 className="subtitle">Safe Travel Anywhere</h3>
                    <div className="search-container">
                        <input type="text" className="search-input" placeholder="Search Your Travel Destination" />
                        <button className="search-button">
                            <img src="/images/search_mini.svg" alt="search" />
                            SEARCH
                        </button>
                    </div>
                    <div className="scroll">
                        <h5 className="mini_text">Scroll Down</h5>
                        <img src="/images/chevron-down .svg" alt="chevron" />
                    </div>
                </div>
            </header>
            <main>
                <section className="navigation">
                    <div className="logo">
                        <a href="#">
                            <img src="/images/logo.png" className="logo__img" alt="Main Logo Company" />
                        </a>
                    </div>
                    <nav className="nav">
                        <input type="checkbox" className="burger" id="nav-burger" />
                        <label for="nav-burger" className="burger__img"></label>
                        <ul className="menu">
                            <li className="menu__item">
                                <a href="" className="menu__link">Who We Are</a>
                            </li>
                            <li className="menu__item">
                                <a href="" className="menu__link">What We Do</a>
                            </li>
                            <li className="menu__item">
                                <a href="" className="menu__link">Travel With Us</a>
                            </li>
                            <li className="menu__item">
                                <a href="" className="menu__link">Contact Us</a>
                            </li>
                        </ul>
                </nav>
            </section>
            <section className="choose">
                <div className="text-bloс">
                    <h2 className="title_aleo">Why Choose Us</h2>
                    <p className="text">
                        Tion and dislike men who are so beguiled and demoralized by desire
            by the charms of pleasure of the moment, so blinded by desire, that
            they cannot foresee
                        <br/>
                        <br/>
                        Ddislike men who are so beguiled and
            demoralized by the charms of pleasure of the moment, so blinded by
            desire, that.
                    </p>
                    <button className="btn">Explore Places</button>
                </div>
                <div className="img-bloc">
                    <div className="img-bloc__house">
                        <img src="/images/house.png" className="img_top" alt="house on the river" />
                        <img src="/images/mountains.png" className="img_bottom" alt="mountains" />
                    </div>
                </div>
            </section>
            <section className="box">
                <div className="box__model">
                    <div className="line">
                        <img src="/images/Line.png" alt="line" />
                    </div>
                    <div className="icon">
                        <div className="box__icon">
                            <img src="/images/search_blue.svg" alt="search" />
                            <span className="title_aleo">Search Places</span>
                        </div>
                        <div className="box__icon">
                            <img src="/images/check_red.svg" alt="check" />
                            <span className="title_aleo">Select Places</span>
                        </div>
                        <div className="box__icon">
                            <img src="/images/like_blue.svg" alt="like" />
                            <span className="title_aleo">Book & Enjoy</span>
                        </div>
                    </div>
                </div>
            </section>
            <Box bg='#5373fd' display='flex' justifyContent='center' alignItems='center' height='114px'>
                <Link to='/forecast'>
                    <Heading as='h2' size='lg' color='white' textDecoration='underline'>See forecast for different places</Heading>
                </Link>
            </Box>
            <section className="book_now book_now1">
                <div className="book_section">
                    <h4 className="text_title">Spain</h4>
                    <h4 className="text_uppercase">Grand Spain Madrid</h4>
                    <p>
                        But I must explain to you how all this mistaken idea of account to
            denouncing pleasure and praising pain was account born and I account
            will give you a complete account of the system
                    </p>
                    <div>
                        <button className="btn">book now</button>
                    </div>
                </div>
            </section>
            <section className="book_now book_now2">
                <div className="book_section">
                    <h4 className="text_title">Spain</h4>
                        <h4 className="text_uppercase">Grand Spain Madrid</h4>
                    <p>
                        But I must explain to you how all this mistaken idea of account to
            denouncing pleasure and praising pain was account born and I account
            will give you a complete account of the system
                    </p>
                    <div>
                        <button className="btn">book now</button>
                    </div>
                </div>
            </section>
            <section className="quote">
                <h2 className="title quote__title">What Our Tourists Say</h2>
                <div className="content">
                    <div className="img">
                        <img src="/images/man.png" alt="man" />
                    </div>
                    <div className="description">
                        <h4 className="title title_4">Sam Sumon</h4>
                        <p className="text description__text">
                            <img src="/images/quote-blue.svg" alt="quote" />
                            But I must explain to
                            you how all this mistaken idea of account to denouncinpleasure and
                            praising pain But I must explain to you how all this mistaken idea
                            of account to nai denouncing pleasure and praising pain was
                            account born and I account will give you a complete account of the
                            system was account born and I account will give you a nai the
                            complete account of the system
                        </p>
                    </div>
                </div>
            </section>
        </main>
            <footer className="footer">
                <img src="/images/logo_end.png" alt="logo" />
                <h5>Safe Travel Anywhere</h5>
                <div className="social_icons">
                    <img src="/images/facebook-w.svg" alt="facebook"/>
                    <img src="/images/twitter-w.svg" alt="twitter"/>
                    <img src="/images/linkedin-b.svg" alt="linkedin" />
                    <img src="/images/youtube-w.svg" alt="youtube"/>
                    <img src="/images/pinterest-w.svg" alt="pinterest"/>
                </div>
            </footer>
        </>
    )
}