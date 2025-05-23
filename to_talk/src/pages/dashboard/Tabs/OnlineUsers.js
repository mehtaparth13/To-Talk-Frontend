import React from 'react';
import { Link } from "react-router-dom";

//carousel
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

//Import Images
import avatar2 from "../../../assets/images/dp.png";
import avatar4 from "../../../assets/images/dp.png";
import avatar5 from "../../../assets/images/dp.png";
import avatar6 from "../../../assets/images/dp.png";

const OnlineUsers = () => {
    const responsive = {
        0: { items: 4 },
        1024: { items: 4 },
    }
    return (
        <React.Fragment>
            {/* Start user status */}
            <div className="px-4 pb-4 dot_remove" dir="ltr" >
                <AliceCarousel
                    responsive={responsive}
                    disableDotsControls={false}
                    disableButtonsControls={false}
                    mouseTracking

                >
                    <div className="item">
                        <Link to="#" className="user-status-box">
                            <div className="avatar-xs mx-auto d-block chat-user-img online">
                                <img src={avatar2} alt="user-img" className="img-fluid rounded-circle" />
                                <span className="user-status"></span>
                            </div>

                            <h5 className="font-size-13 text-truncate mt-3 mb-1">Mihsnak</h5>
                        </Link>
                    </div>
                    <div className="item">
                        <Link to="#" className="user-status-box">
                            <div className="avatar-xs mx-auto d-block chat-user-img online">
                                <img src={avatar4} alt="user-img" className="img-fluid rounded-circle" />
                                <span className="user-status"></span>
                            </div>

                            <h5 className="font-size-13 text-truncate mt-3 mb-1">Parth</h5>
                        </Link>
                    </div>

                    <div className="item">
                        <Link to="#" className="user-status-box">
                            <div className="avatar-xs mx-auto d-block chat-user-img online">
                                <img src={avatar5} alt="user-img" className="img-fluid rounded-circle" />
                                <span className="user-status"></span>
                            </div>

                            <h5 className="font-size-13 text-truncate mt-3 mb-1">Vishw</h5>
                            
                        </Link>
                    </div>

                    <div className="item">
                        <Link to="#" className="user-status-box">
                            <div className="avatar-xs mx-auto d-block chat-user-img online">
                                <img src={avatar6} alt="user-img" className="img-fluid rounded-circle" />
                                <span className="user-status"></span>
                            </div>

                            <h5 className="font-size-13 text-truncate mt-3 mb-1">Somil</h5>
                        </Link>
                    </div>

                    <div className="item">
                        <Link to="#" className="user-status-box">
                            <div className="avatar-xs mx-auto d-block chat-user-img online">
                                <span className="avatar-title rounded-circle bg-primary-subtle text-primary">
                                    T
                                </span>
                                <span className="user-status"></span>
                            </div>

                            <h5 className="font-size-13 text-truncate mt-3 mb-1">Teresa</h5>
                        </Link>
                    </div>
                </AliceCarousel>
                {/* end user status carousel */}
            </div>
            {/* end user status  */}
        </React.Fragment>
    );
}

export default OnlineUsers;