import Link from "next/link";

const JobItem = () => {
    return (
        <Link href='/job-single'>
            <li className="job-listing d-block d-sm-flex pb-3 pb-sm-0 align-items-center">
                <div className="job-listing-logo">
                    <img
                        src="images/job_logo_1.jpg"
                        alt="Free Website Template by Free-Template.co"
                        className="img-fluid"
                    />
                </div>
                <div className="job-listing-about d-sm-flex custom-width w-100 justify-content-between mx-4">
                    <div className="job-listing-position custom-width w-50 mb-3 mb-sm-0">
                        <h2>Product Designer</h2>
                        <strong>Adidas</strong>
                    </div>
                    <div className="job-listing-location mb-3 mb-sm-0 custom-width w-25">
                        <span className="icon-room" /> New York, New York
                    </div>
                    <div className="job-listing-meta">
                        <span className="badge badge-danger">Part Time</span>
                    </div>
                </div>
            </li>
        </Link>
    );
}

export default JobItem;
