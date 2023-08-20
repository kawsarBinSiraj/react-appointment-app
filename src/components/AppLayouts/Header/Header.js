import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AuthLibrary from "../../../libraries/AuthLibrary";
import { toast } from "react-toastify";

const Header = () => {
    /**
     * dispatch & navigate
     * created_at:- 30/07/2022 18:07:43
     */
    const dispatch = useDispatch();

    /**
     * get members & task form redux store
     * created_at:- 30/07/2022 07:15:21
     */
    const user = useSelector((store) => store?.userReducer?.user);

    /**
     * logOut
     * created_at:- 30/07/2022 18:07:26
     */
    const logOut = () => {
        AuthLibrary.logout(() => {
            toast.success(`Successfully logout`, {
                position: "bottom-right",
                theme: "colored",
            });
            setTimeout(() => {
                dispatch({ type: "DELETE_All_MEMBER" });
                dispatch({ type: "DELETE_ALL_TASK" });
                dispatch({ type: "USER_LOGOUT" });
                window.location.reload();
            }, 1000);
        });
    };

    return (
        <>
            <header id="header" style={{ backgroundColor: "var(--bs-purple)" }} className="py-2 bg-gradient">
                <div className="container-fluid px-4">
                    <div className="row align-items-center">
                        <div className="col-xl-3 col-xxl-2">
                            <div className="text-center">
                                <Link className="text-decoration-none text-light fs-1" to={"/"}>
                                    LOGO
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-9 col-xxl-9">
                            <div className="d-flex align-items-center gap-3 justify-content-end">
                                <div className="nav-links d-flex align-items-center gap-3 justify-content-end border-end pe-3">
                                    <button type="button" className="btn text-white border-0 p-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16">
                                            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="logged-user text-light d-flex align-items-center gap-2">
                                    <h5 className="mb-0 text-uppercase">{user?.user_name}</h5>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            logOut();
                                        }}
                                        className="btn btn-light btn-sm"
                                    >
                                        Logout
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
