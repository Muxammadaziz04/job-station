import JobItem from 'components/JobItem';
import { getVacancyById } from 'services/search';

const VacancySingle = ({data}) => {
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
                                <h1 className="text-white font-weight-bold">{data?.data?.attributes?.job_name}</h1>
                                <div className="custom-breadcrumbs">
                                    <a href="#">Home</a> <span className="mx-2 slash">/</span>
                                    <a href="#">Job</a> <span className="mx-2 slash">/</span>
                                    <span className="text-white">
                                        <strong>{data?.data?.attributes?.job_name}</strong>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="site-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="mb-5">
                                    {/* <figure className="mb-5">
                                        <img
                                            src="images/job_single_img_1.jpg"
                                            alt="Image"
                                            className="img-fluid rounded"
                                        />
                                    </figure> */}
                                    <h3 className="h5 d-flex align-items-center mb-4 text-primary">
                                        <span className="icon-align-left mr-3" />
                                        Job Description
                                    </h3>
                                    <p>
                                        {data?.data?.attributes?.text}
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
                                            <strong className="text-black">Published on:</strong> {data?.data?.attributes?.publishedAt}
                                        </li>
                                        <li className="mb-2">
                                            <strong className="text-black">Vacancy id:</strong> {data?.data?.id}
                                        </li>
                                        <li className="mb-2">
                                            <strong className="text-black">Working days:</strong>{data?.data?.attributes?.working_days}
                                        </li>
                                        <li className="mb-2">
                                            <strong className="text-black">Working hours:</strong> {data?.data?.attributes?.wokring_hours}
                                        </li>
                                        <li className="mb-2">
                                            <strong className="text-black">Salary:</strong> {data?.data?.attributes?.salary}
                                        </li>
                                        <li className="mb-2">
                                            <strong className="text-black">Organization name:</strong> {data?.data?.attributes?.organization_name}
                                        </li>
                                        <li className="mb-2">
                                            <strong className="text-black">Contact:</strong> {data?.data?.attributes?.contact}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>

        </>
    );
}

export default VacancySingle;

export async function getServerSideProps(ctx) {
    try {
        const res = await getVacancyById(ctx.params.id)
    return {
        props: {
            data: res
        }
    }
    } catch (error) {
        return {
            props: {}
          }
    }
}