import Loader from "components/Loader";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { getCvById } from "services/search";
import { editResume, postResume } from "services/vacancy";

const EditCv = ({data}) => {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const { register, handleSubmit } = useForm()

    const saveResume = async (data) => {
        try {
            setLoading(true)
            const res = await editResume({data}, router.query.id)
            alert('Resume successful created')
        } catch (error) {
            console.log(error);
            alert('Somethink went wrong')
        } finally {
            setLoading(false)
        } 
    }

    return (
        <>
        {loading && <Loader />}
            <div className="site-wrap">
                <div className="site-mobile-menu site-navbar-target">
                    <div className="site-mobile-menu-header">
                        <div className="site-mobile-menu-close mt-3">
                            <span className="icon-close2 js-menu-toggle" />
                        </div>
                    </div>
                    <div className="site-mobile-menu-body" />
                </div>
                <section
                    className="section-hero overlay inner-page bg-image"
                    style={{ backgroundImage: 'url("images/hero_1.jpg")' }}
                    id="home-section"
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7">
                                <h1 className="text-white font-weight-bold">Edit A Resume</h1>
                                <div className="custom-breadcrumbs">
                                    <a href="#">Home</a> <span className="mx-2 slash">/</span>
                                    <a href="#">Resume</a> <span className="mx-2 slash">/</span>
                                    <span className="text-white">
                                        <strong>Edit a Resume</strong>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="site-section">
                    <form className="container" onSubmit={handleSubmit(saveResume)}>
                        <div className="row align-items-center mb-5">
                            <div className="col-lg-8 mb-4 mb-lg-0">
                                <div className="d-flex align-items-center">
                                    <div>
                                        <h2>Edit A Resume</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col-lg-12">
                                <div className="p-4 p-md-5 border rounded" >
                                    <h3 className="text-black mb-5 border-bottom pb-2">Resume Details</h3>
                                    <div className="form-group">
                                        <label htmlFor="email">Full name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            required
                                            defaultValue={data?.full_name}
                                            {...register('full_name')}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="job-title">Working_sphere</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            required
                                            defaultValue={data?.working_sphere}
                                            {...register('working_sphere')}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="job-location">Experience</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            required
                                            defaultValue={data?.experience}
                                            {...register('experience')}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="job-location">Contact</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            required
                                            defaultValue={data?.contact}
                                            {...register('contact')}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="job-location">Date of birth</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            required
                                            defaultValue={data?.date_of_birth}
                                            {...register('date_of_brith')}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="job-description">Additional information</label>
                                        <div className="editor" id="editor-1">
                                            <textarea  defaultValue={data?.info} className="form-control" id="exampleFormControlTextarea3" rows="7" {...register('info')}></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center mb-5">
                            <div className="col-lg-4 ml-auto">
                                <div className="row">
                                    <div className="ml-auto col-6">
                                        <button type="submit" className="btn btn-block btn-primary btn-md">
                                            Save Resume
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </section>
            </div>
        </>
    );
}

export default EditCv;

export async function getServerSideProps(ctx) {
    try {
        const res = await getCvById(ctx.params.id)
    return {
        props: {
            data: res?.data?.attributes
        }
    }
    } catch (error) {
        return {
            props: {}
          }
    }
}