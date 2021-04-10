import React from 'react';
import "../index.css";
import"../css/home.css";
import "../css/login.css";
import Navbar_student from './navbar_student';
import { FaFacebookF,FaTwitter,FaInstagram,FaLinkedin,FaPlus,FaRegTrashAlt} from "react-icons/fa";
function Cards(props) {
    console.log(props.certification)
    return (
                <>
                   <div className="card2 magin-top" >
                        <div className="card-body profile_width pop">
                          <div ><img src={props.image} className="profile_img"></img></div>
                          <div className="cb"><strong><h4 className="card-title marginb centers fsize2">{props.name}</h4></strong>
                            <div className="details"><p className=" card-body card-text  fsize"><strong>Email : <br/> </strong> {props.email}</p>
                            <p className="card-body card-text boder fsize" ><strong>Phone no: </strong> <br/>{props.phone}</p>
                            <p className="card-body card-text  fsize"><strong>College : </strong> <br/>{props.college}</p>
                            <p className="card-body card-text  fsize"><strong>Description : </strong> <br/> {props.description}</p>
                            <p className="card-body card-text  fsize"><strong>Education : </strong><br/>
                            {props.education.map((user,i) => {
                            return (<>
                            <div className="card2" key={i}>
                                <strong>Course: </strong>{props.education[i].course}<br/>
                                <strong>Institute: </strong>{props.education[i].institute}<br/>
                                <strong>Marks: </strong>{props.education[i].marks}<br/>
                            </div>
                            <br/>
                                </>
                            );
                            })}
                           <p ><a href="\addedu"><FaPlus></FaPlus></a>   <a href="#"><FaRegTrashAlt></FaRegTrashAlt></a> </p>
                            </p>
                            <p className="card-body card-text  fsize"><strong>Work experience :</strong> <br/>
                            {props.work.map((user,i) => {
                            return (<>
                                <div className="card2" key={i}>
                                <strong>Job Title: </strong>{props.work[i].names}<br/>
                                <strong>Company: </strong>{props.work[i].companys}<br/>
                                <strong>Duration:</strong>{props.work[i].duration}<br/>
                                <strong>Description: </strong>{props.work[i].description}<br/>
                                <strong>Link:</strong> <a href={props.work[i].link}>{props.work[i].link}</a>
                                </div>
                                <br/>
                                </>      
                            );
                            })}
                            <p ><a href="\addexp"><FaPlus></FaPlus></a>   <a href="\delexp"><FaRegTrashAlt></FaRegTrashAlt></a> </p>
                            </p>           
                            <p className="card-body card-text  fsize"><strong>Certification :</strong><br/> {props.certification.map((user,i) => {
                            return (<>
                                <div className="card2" key={i}>
                                <strong>Course: </strong>{props.certification[i].courses}<br/>
                                <strong>Institutes: </strong>{props.certification[i].institutes}<br/>
                                <strong>Valid_till: </strong>{props.certification[i].valid_till}<br/>
                                <strong>Link: </strong> <a href={props.certification[i].links}>{props.certification[i].links}</a>
                                </div>
                                <br/>
                                </>
                            );
                            })}
                            <p ><a href="\addcer"><FaPlus></FaPlus></a>   <a href="#"><FaRegTrashAlt></FaRegTrashAlt></a> </p>
                            </p>
                            <p className="card-text  fsize"> <a href={props.facebook}><FaFacebookF></FaFacebookF></a>  <a href={props.twitter}><FaTwitter></FaTwitter></a> <a href={props.LinkedIn}> <FaLinkedin></FaLinkedin></a> <a href={props.Insta}> <FaInstagram></FaInstagram></a></p>
                            </div>
                            </div> 
                        </div>
                    </div>
                    </>
    )
                    }
const Studenthome =() => {
    window.history.pushState(null, document.title, window.location.href);
    window.addEventListener('popstate', function (event) {
      window.history.pushState(null, document.title, window.location.href);
    });
    var arr = JSON.parse(localStorage.getItem("student"))
    return (
        <>
        <Navbar_student/>
        <section className="pop image width"> 
        <div>
            <Cards name={arr.name} work={arr.experience} email={arr.email} certification ={arr.certification} phone={arr.contactno} education={arr.education} description={arr.about} image="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" college={arr.college} facebook={arr.social_media.facebook} twitter={arr.social_media.twitter} LinkedIn={arr.social_media.linkedin} Insta={arr.social_media.instagram}/>
        </div> 
        </section>
        </>
    );
};

export default Studenthome;

