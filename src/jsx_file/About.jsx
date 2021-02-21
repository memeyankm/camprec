import React from 'react';
import web from "../images/about.png";
import "../index.css";
import"../css/home.css";
import "../css/login.css";

const About =() => {
    return (
        <>
        <section className="image width">
            <div className = "contianer-fluid ">
                <div className = "row ">
                    <div className = "col-10 mx-auto home">
                        <div className = "col-md-4 pt-5 pt-lg-0 order-2 order-lg-1 get_started">
                            <h2 className='text_center'>
                             <strong className = "brand-name">About Us</strong>
                            </h2>
                            <p className = "mt-3 textjustify about">
                            This is a college campus recruitment system which provides options like student login, company login and an admin login. This software system provides an option to the students to create their profiles and upload all their details including their marks onto the system. The admin can check each student details and can remove faulty accounts. The system also consists of a company login where various companies visiting the college can view a list of students in that college and their respective resumes. The software system allows students to view a list of companies who have posted for vacancy. The admin has overall rights over the system and can moderate and delete any details not pertaining to college placement rules. The project is beneficial for college students, various companies visiting the campus for recruitment and even the college placement officer. The system handles student as well as company data and efficiently displays all this data to respective sides.
                            </p>
                        </div>
                        <div className="col-lg-4 order-1 order-lg-2 header-img animated leftmargin">
                            <img src={web} className = "image-fluid animated aboutimg" alt = "about img"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default About;