import React from "react";
import { Link } from "react-router-dom";
import AppHelmet from "../components/AppHelmet/AppHelmet";
import { useSelector } from "react-redux";

const Dashboard = () => {
    return (
        <>
            <AppHelmet title="Dashboard" />
            <div className="dashboard text-center">
                <p className="mb-2">Wednesday, 24 July</p>
                <h2 className="display-6">
                    Welcome Back, <strong>John Doe!</strong>
                </h2>
                <div className="row justify-content-center mt-4">
                    <div className="col-lg-5 col-xxl-4">
                        <div className="card bg-warning bg-gradient bg p-5 shadow-sm">
							<img className="img-fluid mb-3" src="https://assets.website-files.com/6364b6fd26e298b11fb9391f/6364b6fd26e298d1f9b93c15_62dfbbe01c2d011b4e3cac6f_DrawKit_Vector_Illustration_Education_%2526_E-Learning_Blue_(5).png" alt="" />
                            <button type="button" className="btn btn-dark bg-gradient d-block w-100 py-2">
                                Enter Lead
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-5 col-xxl-4">
                        <div className="card bg-info bg-gradient bg p-5 shadow-sm">
                            <img className="img-fluid mb-3" src="https://assets.website-files.com/626f5d0ae6c15cea8c2dd5dd/63184c5867aa7b2b84a1e2ca_DrawKit0035_Startups_%26_Tech_Thumbnail.png" alt="" />
                            <button type="button" className="btn btn-dark bg-gradient d-block w-100 py-2">
                                Enter Appoinment
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
