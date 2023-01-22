import CHead from 'components/Head';
import React from 'react';
import { Form } from 'react-bootstrap';

const PostJob = () => {
    return (
        <>
            <div className="site-wrap">
                <div className="site-mobile-menu site-navbar-target">
                    <div className="site-mobile-menu-header">
                        <div className="site-mobile-menu-close mt-3">
                            <span className="icon-close2 js-menu-toggle" />
                        </div>
                    </div>
                    <div className="site-mobile-menu-body" />
                </div>{" "}
                {/* .site-mobile-menu */}
                {/* HOME */}
                <section
                    className="section-hero overlay inner-page bg-image"
                    style={{ backgroundImage: 'url("images/hero_1.jpg")' }}
                    id="home-section"
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7">
                                <h1 className="text-white font-weight-bold">Post A Job</h1>
                                <div className="custom-breadcrumbs">
                                    <a href="#">Home</a> <span className="mx-2 slash">/</span>
                                    <a href="#">Job</a> <span className="mx-2 slash">/</span>
                                    <span className="text-white">
                                        <strong>Post a Job</strong>
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
                                    <div>
                                        <h2>Post A Job</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="row">
                                    <div className=" ml-auto col-6">
                                        <a href="#" className="btn btn-block btn-primary btn-md">
                                            Save Job
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col-lg-12">
                                <form className="p-4 p-md-5 border rounded" method="post">
                                    <h3 className="text-black mb-5 border-bottom pb-2">Job Details</h3>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="email"
                                            placeholder="you@yourdomain.com"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="job-title">Job Title</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="job-title"
                                            placeholder="Product Designer"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="job-location">Location</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="job-location"
                                            placeholder="e.g. New York"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="job-region">Job Region</label>
                                        <Form.Control
                                        as='select'
                                        custom="true"
                                        >
                                            <option>Anywhere</option>
                                            <option>San Francisco</option>
                                            <option>Palo Alto</option>
                                            <option>New York</option>
                                            <option>Manhattan</option>
                                            <option>Ontario</option>
                                            <option>Toronto</option>
                                            <option>Kansas</option>
                                            <option>Mountain View</option>
                                        </Form.Control>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="job-type">Job Type</label>
                                        <Form.Control
                                            as='select'
                                            custom="true"
                                        >
                                            <option>Part Time</option>
                                            <option>Full Time</option>
                                        </Form.Control>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="job-description">Job Description</label>
                                        <div className="editor" id="editor-1">
                                            <p>Write Job Description!</p>
                                            <textarea class="form-control" id="exampleFormControlTextarea3" rows="7"></textarea>
                                        </div>
                                    </div>
                                    <h3 className="text-black my-5 border-bottom pb-2">
                                        Company Details
                                    </h3>
                                    <div className="form-group">
                                        <label htmlFor="company-name">Company Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="company-name"
                                            placeholder="e.g. New York"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="company-tagline">Tagline (Optional)</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="company-tagline"
                                            placeholder="e.g. New York"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <div className="editor" id="editor-2">
                                            <p>Description</p>
                                            <textarea class="form-control" id="exampleFormControlTextarea3" rows="7"></textarea>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="row align-items-center mb-5">
                            <div className="col-lg-4 ml-auto">
                                <div className="row">
                                    <div className="ml-auto col-6">
                                        <a href="#" className="btn btn-block btn-primary btn-md">
                                            Save Job
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    );
}

export default PostJob;
