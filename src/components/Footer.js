import React from 'react';
import './footer.css'

const Footer = () => {
    const handleinsta=()=>{
        window.open('https://www.instagram.com/dharani_velkur_/','_blank');
    }

    const handlelinkedin=()=>{
        window.open('https://www.linkedin.com/in/velkur-dharani-95a166284','_blank');
    }

    const handlegit =()=>{
        window.open('https://github.com/dharanivelkur',"_blank");
    }

    return (
        <>
            <div className='footer'>
            <hr/>
                <div className='row text-center align-items-center'>
                    <div className='col col-12 col-sm-6 col-lg-3 p-2'>
                        <div className='textstyle'>Email</div>
                        <div>dharanivelkur@gmail.com</div>
                    </div>
                    <div className='col col-12 col-sm-6 col-lg-3'>
                        <div className='textstyle'>Call</div>
                        <div>+91-8500417764</div>
                    </div>
                    <div className='col col-12 col-sm-6 col-lg-3'>
                        <div className='textstyle'>Follow</div>
                        <div>
                        <i class="fa-brands fa-github" style={{cursor:"pointer"}} onClick={handlegit}></i>                           
                         <i className="fa-brands fa-instagram px-1" style={{cursor:"pointer"}} onClick={handleinsta}></i>
                            <i className="fa-brands fa-twitter px-1" style={{cursor:"pointer"}}></i>
                            <i className="fa-brands fa-linkedin px-1" style={{cursor:"pointer"}} onClick={handlelinkedin}></i>
                        </div>
                    </div>
                    <div className='col col-12 col-sm-6 col-lg-3'>
                        <div>www.dharanivelkur.com &#169; 2023  </div>
                    </div>

                </div>
                {/* <div className='d-flex'>
                    <div className='d-flex flex-column '>
                        <div>Email</div>
                        <div>dharanivelkur@gmail.com</div>
                    </div>
                    <div className='d-flex flex-column'>
                        <div>Call</div>
                        <div>+91-8500417764</div>
                    </div>
                    <div className='d-flex flex-column'>
                        <div>Follow</div>
                        <div>
                            <i className="fa-brands fa-facebook"></i>
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-linkedin"></i>
                        </div>
                    </div>
                </div> */}
            </div>

        </>
    )
}

export default Footer
