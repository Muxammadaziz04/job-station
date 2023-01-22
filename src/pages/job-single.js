import JobItem from 'components/JobItem';
import Image from 'next/image';

const JobSingle = () => {
    return (
        <>
            <>
                <section
                    className="section-hero overlay inner-page bg-image"
                    style={{ backgroundImage: 'url("images/hero_1.jpg")' }}
                    id="home-section"
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7">
                                <h1 className="text-white font-weight-bold">Product Designer</h1>
                                <div className="custom-breadcrumbs">
                                    <a href="#">Home</a> <span className="mx-2 slash">/</span>
                                    <a href="#">Job</a> <span className="mx-2 slash">/</span>
                                    <span className="text-white">
                                        <strong>Product Designer</strong>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="site-section">
                    <div className="container">
                        <div className="row align-items-center mb-5">
                            <div className="col-lg-8 mb-4 mb-lg-0">
                                <div className="d-flex align-items-center">
                                    <div className="border p-2 d-inline-block mr-3 rounded position-relative">
                                        <img src="/images/job_logo_5.jpg" layout='fill' objectFit='cover' alt="Image" />
                                    </div>
                                    <div>
                                        <h2>Product Designer</h2>
                                        <div>
                                            <span className="ml-0 mr-2 mb-2">
                                                <span className="icon-briefcase mr-2" />
                                                Puma
                                            </span>
                                            <span className="m-2">
                                                <span className="icon-room mr-2" />
                                                New York City
                                            </span>
                                            <span className="m-2">
                                                <span className="icon-clock-o mr-2" />
                                                <span className="text-primary">Full Time</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="row">
                                    <div className=" ml-auto col-6">
                                        <a href="#" className="btn btn-block btn-primary btn-md">
                                            Apply Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="mb-5">
                                    <figure className="mb-5">
                                        <img
                                            src="images/job_single_img_1.jpg"
                                            alt="Image"
                                            className="img-fluid rounded"
                                        />
                                    </figure>
                                    <h3 className="h5 d-flex align-items-center mb-4 text-primary">
                                        <span className="icon-align-left mr-3" />
                                        Job Description
                                    </h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
                                        illum fuga eveniet. Deleniti asperiores, commodi quae ipsum quas
                                        est itaque, ipsa, dolore beatae voluptates nemo blanditiis iste
                                        eius officia minus.
                                    </p>
                                    <p>
                                        Velit unde aliquam et voluptas reiciendis non sapiente labore,
                                        deleniti asperiores blanditiis nihil quia officiis dolor vero iste
                                        dolore vel molestiae saepe. Id nisi, consequuntur sunt impedit
                                        quidem, vitae mollitia!
                                    </p>
                                </div>
                                <div className="row mb-5">
                                    <div className="ml-auto col-6">
                                        <a href="#" className="btn btn-block btn-primary btn-md">
                                            Apply Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="bg-light p-3 border rounded mb-4">
                                    <h3 className="text-primary  mt-3 h5 pl-3 mb-3 ">Job Summary</h3>
                                    <ul className="list-unstyled pl-3 mb-0">
                                        <li className="mb-2">
                                            <strong className="text-black">Published on:</strong> April 14,
                                            2019
                                        </li>
                                        <li className="mb-2">
                                            <strong className="text-black">Vacancy:</strong> 20
                                        </li>
                                        <li className="mb-2">
                                            <strong className="text-black">Employment Status:</strong>{" "}
                                            Full-time
                                        </li>
                                        <li className="mb-2">
                                            <strong className="text-black">Experience:</strong> 2 to 3
                                            year(s)
                                        </li>
                                        <li className="mb-2">
                                            <strong className="text-black">Job Location:</strong> New ork
                                            City
                                        </li>
                                        <li className="mb-2">
                                            <strong className="text-black">Salary:</strong> $60k - $100k
                                        </li>
                                        <li className="mb-2">
                                            <strong className="text-black">Gender:</strong> Any
                                        </li>
                                        <li className="mb-2">
                                            <strong className="text-black">Application Deadline:</strong>{" "}
                                            April 28, 2019
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="site-section" id="next">
                    <div className="container">
                        <div className="row mb-5 justify-content-center">
                            <div className="col-md-7 text-center">
                                <h2 className="section-title mb-2">22,392 Related Jobs</h2>
                            </div>
                        </div>
                        <ul className="job-listings mb-5">
                            <JobItem />
                            <JobItem />
                            <JobItem />
                            <JobItem />
                            <JobItem />
                            <JobItem />
                            <JobItem />
                        </ul>
                        <div className="row pagination-wrap">
                            <div className="col-md-6 text-center text-md-left mb-4 mb-md-0">
                                <span>Showing 1-7 Of 22,392 Jobs</span>
                            </div>
                            <div className="col-md-6 text-center text-md-right">
                                <div className="custom-pagination ml-auto">
                                    <a href="#" className="prev">
                                        Prev
                                    </a>
                                    <div className="d-inline-block">
                                        <a href="#" className="active">
                                            1
                                        </a>
                                        <a href="#">2</a>
                                        <a href="#">3</a>
                                        <a href="#">4</a>
                                    </div>
                                    <a href="#" className="next">
                                        Next
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-light pt-5 testimony-full">
                    <div className="owl-carousel single-carousel">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 align-self-center text-center text-lg-left">
                                    <blockquote>
                                        <p>
                                            “Soluta quasi cum delectus eum facilis recusandae nesciunt
                                            molestias accusantium libero dolores repellat id in dolorem
                                            laborum ad modi qui at quas dolorum voluptatem voluptatum
                                            repudiandae.”
                                        </p>
                                        <p>
                                            <cite> — Corey Woods, @Dribbble</cite>
                                        </p>
                                    </blockquote>
                                </div>
                                <div className="col-lg-6 align-self-end text-center text-lg-right">
                                    <img
                                        src="images/person_transparent_2.png"
                                        alt="Image"
                                        className="img-fluid mb-0"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 align-self-center text-center text-lg-left">
                                    <blockquote>
                                        <p>
                                            “Soluta quasi cum delectus eum facilis recusandae nesciunt
                                            molestias accusantium libero dolores repellat id in dolorem
                                            laborum ad modi qui at quas dolorum voluptatem voluptatum
                                            repudiandae.”
                                        </p>
                                        <p>
                                            <cite> — Chris Peters, @Google</cite>
                                        </p>
                                    </blockquote>
                                </div>
                                <div className="col-lg-6 align-self-end text-center text-lg-right">
                                    <img
                                        src="images/person_transparent.png"
                                        alt="Image"
                                        className="img-fluid mb-0"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section
                    className="pt-5 bg-image overlay-primary fixed overlay"
                    style={{ backgroundImage: 'url("images/hero_1.jpg")' }}
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 align-self-center text-center text-md-left mb-5 mb-md-0">
                                <h2 className="text-white">Get The Mobile Apps</h2>
                                <p className="mb-5 lead text-white">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit tempora
                                    adipisci impedit.
                                </p>
                                <p className="mb-0">
                                    <a href="#" className="btn btn-dark btn-md px-4 border-width-2">
                                        <span className="icon-apple mr-3" />
                                        App Store
                                    </a>
                                    <a href="#" className="btn btn-dark btn-md px-4 border-width-2">
                                        <span className="icon-android mr-3" />
                                        Play Store
                                    </a>
                                </p>
                            </div>
                            <div className="col-md-6 ml-auto align-self-end">
                                <img src="images/apps.png" alt="Image" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </section>
            </>

        </>
    );
}

export default JobSingle;
