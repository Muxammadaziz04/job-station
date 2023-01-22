import Link from "next/link";

const Navbar = () => {
    return (
        <header className="site-navbar mt-3">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="site-logo col-6">
                        <Link href='/'>
                            <a>JobStation</a>
                        </Link>
                    </div>
                    <nav className="mx-auto site-navigation">
                        <ul className="site-menu js-clone-nav d-none d-xl-block ml-0 pl-0">
                            <li>
                                <Link href='/'>
                                    <a className="nav-link">
                                        Home
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href='/about'>
                                    <a>About</a>
                                </Link>
                            </li>
                            <li>
                                <Link href='/contacts'>
                                    <a>Contact</a>
                                </Link>
                            </li>
                            <Link href='/post-job' className="d-lg-none">
                                <a className="d-lg-none">
                                    <span className="mr-2">+</span> Post a Job
                                </a>
                            </Link>
                            <Link href='/login' className="d-lg-none">
                                <a className="d-lg-none">Log In</a>
                            </Link>
                        </ul>
                    </nav>
                    <div className="right-cta-menu text-right d-flex aligin-items-center col-6">
                        <div className="ml-auto">
                            <Link href='/post-job'>
                                <a
                                    className="btn btn-outline-white border-width-2 d-none d-lg-inline-block"
                                >
                                    <span className="mr-2 icon-add" />
                                    Post a Job
                                </a>
                            </Link>
                            <Link href='/login'>
                                <a
                                    className="btn btn-primary border-width-2 d-none d-lg-inline-block"
                                >
                                    <span className="mr-2 icon-lock_outline" />
                                    Log In
                                </a>
                            </Link>
                        </div>
                        <a
                            className="site-menu-toggle js-menu-toggle d-inline-block d-xl-none mt-lg-2 ml-3"
                        >
                            <span className="icon-menu h3 m-0 p-0 mt-2" />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
