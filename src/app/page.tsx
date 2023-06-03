'use client';
import Image from "next/image";
import {VisitorChart, ProfileVisitChart, ChartEurope, ChartAmerica, ChartIndonesia} from "./charts";
const page = () => {
    return (
        <>
            <div className="page-heading">
                <h3>Profile Statistics</h3>
            </div>
            <div className="page-content">
                <section className="row">
                    <div className="col-12 col-lg-9">
                        <div className="row">
                            <div className="col-6 col-lg-3 col-md-6">
                                <div className="card">
                                    <div className="card-body px-4 py-4-5">
                                        <div className="row">
                                            <div className="col-md-4 col-lg-12 col-xl-12 col-xxl-5 d-flex justify-content-start ">
                                                <div className="stats-icon purple mb-2">
                                                    <i className="iconly-boldShow"></i>
                                                </div>
                                            </div>
                                            <div className="col-md-8 col-lg-12 col-xl-12 col-xxl-7">
                                                <h6 className="text-muted font-semibold">Profile Views</h6>
                                                <h6 className="font-extrabold mb-0">112.000</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-lg-3 col-md-6">
                                <div className="card">
                                    <div className="card-body px-4 py-4-5">
                                        <div className="row">
                                            <div className="col-md-4 col-lg-12 col-xl-12 col-xxl-5 d-flex justify-content-start ">
                                                <div className="stats-icon blue mb-2">
                                                    <i className="iconly-boldProfile"></i>
                                                </div>
                                            </div>
                                            <div className="col-md-8 col-lg-12 col-xl-12 col-xxl-7">
                                                <h6 className="text-muted font-semibold">Followers</h6>
                                                <h6 className="font-extrabold mb-0">183.000</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-lg-3 col-md-6">
                                <div className="card">
                                    <div className="card-body px-4 py-4-5">
                                        <div className="row">
                                            <div className="col-md-4 col-lg-12 col-xl-12 col-xxl-5 d-flex justify-content-start ">
                                                <div className="stats-icon green mb-2">
                                                    <i className="iconly-boldAdd-User"></i>
                                                </div>
                                            </div>
                                            <div className="col-md-8 col-lg-12 col-xl-12 col-xxl-7">
                                                <h6 className="text-muted font-semibold">Following</h6>
                                                <h6 className="font-extrabold mb-0">80.000</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-lg-3 col-md-6">
                                <div className="card">
                                    <div className="card-body px-4 py-4-5">
                                        <div className="row">
                                            <div className="col-md-4 col-lg-12 col-xl-12 col-xxl-5 d-flex justify-content-start ">
                                                <div className="stats-icon red mb-2">
                                                    <i className="iconly-boldBookmark"></i>
                                                </div>
                                            </div>
                                            <div className="col-md-8 col-lg-12 col-xl-12 col-xxl-7">
                                                <h6 className="text-muted font-semibold">Saved Post</h6>
                                                <h6 className="font-extrabold mb-0">112</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h4>Profile Visit</h4>
                                    </div>
                                    <div className="card-body">
                                        <VisitorChart />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-xl-4">
                                <div className="card">
                                    <div className="card-header">
                                        <h4>Profile Visit</h4>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-7">
                                                <div className="d-flex align-items-center">
                                                    <i className="bi bi-circle-fill" style={{ color: "blue", fontSize: "10px" }}></i>
                                                    <h5 className="mb-0 ms-3">Europe</h5>
                                                </div>
                                            </div>
                                            <div className="col-5">
                                                <h5 className="mb-0 text-end">862</h5>
                                            </div>
                                            <div className="col-12">
                                                <ChartEurope />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-7">
                                                <div className="d-flex align-items-center">
                                                    <i className="bi bi-circle-fill" style={{ color: "blue", fontSize: "10px" }}></i>
                                                    <h5 className="mb-0 ms-3">America</h5>
                                                </div>
                                            </div>
                                            <div className="col-5">
                                                <h5 className="mb-0 text-end">375</h5>
                                            </div>
                                            <div className="col-12">
                                                <ChartAmerica />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-7">
                                                <div className="d-flex align-items-center">
                                                    <i className="bi bi-circle-fill" style={{ color: "blue", fontSize: "10px" }}></i>
                                                    <h5 className="mb-0 ms-3">Indonesia</h5>
                                                </div>
                                            </div>
                                            <div className="col-5">
                                                <h5 className="mb-0 text-end">1025</h5>
                                            </div>
                                            <div className="col-12">
                                                <ChartIndonesia />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-xl-8">
                                <div className="card">
                                    <div className="card-header">
                                        <h4>Latest Comments</h4>
                                    </div>
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table className="table table-hover table-lg">
                                                <thead>
                                                    <tr>
                                                        <th>Name</th>
                                                        <th>Comment</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="col-3">
                                                            <div className="d-flex align-items-center">
                                                                <div className="avatar avatar-md">
                                                                    <Image src="/assets/images/faces/5.jpg" alt="Face 5" width={100} height={100} />
                                                                </div>
                                                                <p className="font-bold ms-3 mb-0">Si Cantik</p>
                                                            </div>
                                                        </td>
                                                        <td className="col-auto">
                                                            <p className=" mb-0">Congratulations on your graduation!</p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="col-3">
                                                            <div className="d-flex align-items-center">
                                                                <div className="avatar avatar-md">
                                                                    <Image src="/assets/images/faces/2.jpg" alt="Face 2" width={100} height={100} />
                                                                </div>
                                                                <p className="font-bold ms-3 mb-0">Si Ganteng</p>
                                                            </div>
                                                        </td>
                                                        <td className="col-auto">
                                                            <p className=" mb-0">Wow amazing design! Can you make another tutorial for
                                                                this design?</p>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3">
                        <div className="card">
                            <div className="card-body py-4 px-4">
                                <div className="d-flex align-items-center">
                                    <div className="avatar avatar-xl">
                                        <Image src="/assets/images/faces/1.jpg" alt="Face 1" width={100} height={100} />
                                    </div>
                                    <div className="ms-3 name">
                                        <h5 className="font-bold">John Duck</h5>
                                        <h6 className="text-muted mb-0">@johnducky</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <h4>Recent Messages</h4>
                            </div>
                            <div className="card-content pb-4">
                                <div className="recent-message d-flex px-4 py-3">
                                    <div className="avatar avatar-lg">
                                        <Image src="/assets/images/faces/4.jpg" alt="Face 4" width={100} height={100} />
                                    </div>
                                    <div className="name ms-4">
                                        <h5 className="mb-1">Hank Schrader</h5>
                                        <h6 className="text-muted mb-0">@johnducky</h6>
                                    </div>
                                </div>
                                <div className="recent-message d-flex px-4 py-3">
                                    <div className="avatar avatar-lg">
                                        <Image src="/assets/images/faces/4.jpg" alt="Face 4" width={100} height={100} />
                                    </div>
                                    <div className="name ms-4">
                                        <h5 className="mb-1">Dean Winchester</h5>
                                        <h6 className="text-muted mb-0">@imdean</h6>
                                    </div>
                                </div>
                                <div className="recent-message d-flex px-4 py-3">
                                    <div className="avatar avatar-lg">
                                        <Image src="/assets/images/faces/3.jpg" alt="Face 3" width={100} height={100} />
                                    </div>
                                    <div className="name ms-4">
                                        <h5 className="mb-1">John Dodol</h5>
                                        <h6 className="text-muted mb-0">@dodoljohn</h6>
                                    </div>
                                </div>
                                <div className="px-4">
                                    <button className='btn btn-block btn-xl btn-outline-primary font-bold mt-3'>Start Conversation</button>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <h4>Visitors Profile</h4>
                            </div>
                            <div className="card-body">
                                <ProfileVisitChart />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default page;