import React from 'react';
import portfolio from '../../img/portfolio.jpeg'
import education from '../../img/icon/education.png'
import github from '../../img/icon/github.png'
import linkdin from '../../img/icon/linkedin.png'
import furnitureimg from '../../img/portfolio/furnituresite.png';
import foodsiteimg from '../../img/portfolio/foodsite.png';
import hotelsiteimg from '../../img/portfolio/hotel.png';


const MyPortfolio = () => {
    return (
        <div className='container mx-auto ' style={{ fontFamily: " 'Cinzel', serif" }}>
            <div className='grid my-20 grid-cols-1  md:grid-cols-3 items-center'>
                <div className='col-span-1 h-scree'>
                    <img className='w-[350px] sm:w-[400px] p-10 sm:p-5' style={{ borderRadius: '50%', }} src={portfolio} alt="" />

                </div>
                <div className='col-span-2'>
                    <div className='mb-5'>
                        <h2 className='uppercase font-bold text-3xl '>I'm <span className='text-blue-500'>Salikur Islam</span>
                            <br />

                        </h2>
                        <p className='font-semibold'>MERN stack developer</p>
                    </div>

                    <p className='font-bold p-5' style={{ lineHeight: '28px', fontSize: '17px' }}>I am working hard with a strong desire to become a junior web developer in the next few months. My goal is to see myself as a Frontend, MERN Stack Developer! in 2022. After finish this web-development learning i will focus on getting a job on Software industry, where I will be able to perform in any kind of situation with full effort to utilize my knowledge, skill, and experience for professional career development..

                    </p>

                    <div className='flex items-center'>
                        <h3 className='text-xl font-bold w-[180px]'>Contact Me</h3>
                        <div className='w-full h-[2px] bg-base-300'></div>
                    </div>

                    <p className='my-5 text-lg'><span className=''>Shoot me an Email: </span> <a className='font-bold' href="mailto:salikur6@gmail.com"> salikur6@gmail.com</a>
                    </p>

                    <div className='flex'>
                        <a href="https://bd.linkedin.com/" target='blank'><img className='w-[85px] mr-1' src={linkdin} alt="" /></a>

                        <a href="https://github.com/Salikur6" target='blank'><img className='w-[85px]' src={github} alt="" /></a>
                    </div>
                </div>
            </div>



            <h2 className='text-orange-500 text-3xl font-bold my-5'>Skills and languages</h2>
            <div className="card  card-side bg-base-100 mb-5 shadow-xl p-4">
                <div className='table'>
                    <p style={{ verticalAlign: 'middle' }} className='table-cell font-bold text-blue-500 p-3 text-lg'>Skills: </p>
                </div>
                <div className="card-body">
                    <div className='p-8'>
                        <div className='flex flex-wrap gap-5'>

                            <span style={{ background: '#61dbfb' }} className='p-3  text-black font-bold rounded-lg border-sky-400 border-2'>ReactJS</span>


                            <span style={{ background: '#3c873a' }} className='p-3  text-black font-bold rounded-lg border-sky-400 border-2'>NODE</span>

                            <span style={{ background: '#000' }} className='p-3  text-white font-bold rounded-lg border-sky-400 border-2'>Express</span>

                            <span style={{ background: 'yellow' }} className='p-3  text-black font-bold rounded-lg border-sky-400 border-2'>JavaScript</span>

                            <span style={{ background: '#4DB33D' }} className='p-3  text-black font-bold rounded-lg border-sky-400 border-2'>MongoDB</span>

                            <span style={{ background: '#264de4 ' }} className='p-3  text-white font-bold rounded-lg border-sky-400 border-2'>CSS</span>

                            <span style={{ background: '#f06529' }} className='p-3  text-black font-bold rounded-lg border-sky-400 border-2'>HTML</span>

                        </div>
                    </div>
                </div>
            </div>




            {/* Education section */}
            <div className='mt-20'>
                <h2 className='text-orange-500 text-4xl font-bold my-5'>Education</h2>
            </div>

            <div className="card hover:bg-orange-400 transition-all card-side bg-base-200 mb-5 shadow-xl p-4">
                <figure><img style={{ width: '75px' }} src={education} alt="Movie" /></figure>
                <div className="card-body text-secondary">
                    <p className='font-semibold'>2017-2019</p>
                    <h2 className="card-title font-bold">Secondary School Certificate (S.S.C)</h2>
                    <p className='font-bold'>Gotatikor Bi-lateral High School</p>

                </div>
            </div>
            <div className="card hover:bg-orange-400 transition-all  card-side mb-5 bg-base-200 shadow-xl  p-4">
                <figure><img style={{ width: '75px' }} src={education} alt="Movie" /></figure>
                <div className="card-body text-secondary">
                    <p className='font-semibold'>2019-2021</p>
                    <h2 className="card-title font-bold">Higher Secondary Certificate (H.S.C)</h2>
                    <p className='font-bold'>Dakshin Surma Govt. College
                    </p>

                </div>
            </div>





            <div className='mt-20'>
                <h2 className='text-orange-500 text-4xl font-bold my-5'>Projects</h2>
            </div>

            {/* portfolio card section */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-20 gap-16 justify-items-center'>
                <div className='cardShadow w-[320px] sm:w-full' style={{
                    marginBottom: '35px',
                    transition: '0.4s all ease',
                    borderRadius: '6px',
                    backdropFilter: 'blur(15px)',
                    borderTop: '1px solid rgba(255, 255, 255, 0.2)',
                    borderLeft: ' 1px solid rgba(255, 255, 255, 0.2)',
                    boxShadow: '5px 5px 30px rgb(0 0 0 / 20%)'
                }}>


                    <div>
                        <a href="https://furniture-werehouse.web.app/" target='blank' ><img className='w-full sm:w-[400px] lg:w-full mx-auto h-[250px]' src={furnitureimg} alt="Furniture Werehouse img" /></a>
                    </div>

                    <div className='p-4'>
                        <div className="badge mr-3 mb-2 font-bold badge-secondary">MongoDB</div>
                        <div className="badge mr-3 mb-2 font-bold badge-primary">Express</div>
                        <div className="badge mr-3 mb-2 font-bold">React</div>
                        <div className="badge mr-3 mb-2 font-bold badge-primary">Node</div>
                        <div className="badge mr-3 mb-2 font-bold badge-warning">JavaScript</div>
                        <div className="badge mr-3 mb-2 font-bold badge-error">Firebase</div>
                        <div className="badge mr-3 mb-2 font-bold badge-primary">Bootstrap</div>
                        <div className="badge mr-3 mb-2 font-bold badge-secondary">CSS</div>
                        <div className="badge mr-3 mb-2 font-bold badge-ghost">HTML</div>

                        <div className='text-center my-4'> <a href='https://furniture-werehouse.web.app/' target='blank' className=' btn btn-success'>Preview</a></div>
                    </div>

                </div>


                <div className='cardShadow  w-[320px] sm:w-full ' style={{
                    marginBottom: '35px',
                    transition: '0.4s all ease',
                    borderRadius: '6px',
                    backdropFilter: 'blur(15px)',
                    borderTop: '1px solid rgba(255, 255, 255, 0.2)',
                    borderLeft: ' 1px solid rgba(255, 255, 255, 0.2)',
                    boxShadow: '5px 5px 30px rgb(0 0 0 / 20%)'
                }}>

                    {/* portfolio img */}

                    <div>
                        <a href="https://fatobook-food-catering.web.app/" target='blank'> <img className='w-full sm:w-[400px] lg:w-full mx-auto h-[250px]' src={foodsiteimg} alt="Home Food site img" /></a>

                    </div>

                    <div className='p-4'>
                        <div className="badge mr-3 mb-2 font-bold badge-secondary">MongoDB</div>
                        <div className="badge mr-3 mb-2 font-bold badge-primary">Express</div>
                        <div className="badge mr-3 mb-2 font-bold">React</div>
                        <div className="badge mr-3 mb-2 font-bold badge-primary">Node</div>
                        <div className="badge mr-3 mb-2 font-bold badge-warning">JavaScript</div>
                        <div className="badge mr-3 mb-2 font-bold badge-error">Firebase</div>
                        <div className="badge mr-3 mb-2 font-bold badge-primary">Bootstrap</div>
                        <div className="badge mr-3 mb-2 font-bold badge-secondary">CSS</div>
                        <div className="badge mr-3 mb-2 font-bold badge-ghost">HTML</div>

                        <div className='text-center my-4'> <a href='https://fatobook-food-catering.web.app/' target='blank' className=' btn btn-success'>Preview</a></div>
                    </div>

                </div>



                <div className='cardShadow  w-[320px] sm:w-full' style={{
                    marginBottom: '35px',
                    transition: '0.4s all ease',
                    borderRadius: '6px',
                    backdropFilter: 'blur(15px)',
                    borderTop: '1px solid rgba(255, 255, 255, 0.2)',
                    borderLeft: ' 1px solid rgba(255, 255, 255, 0.2)',
                    boxShadow: '5px 5px 30px rgb(0 0 0 / 20%)'
                }}>


                    <div>
                        <a href="https://salik-hotel-practic.web.app/" target='blank'>  <img className='w-full sm:w-[400px] lg:w-full mx-auto h-[250px]' src={hotelsiteimg} alt="hotel site img" /></a>

                    </div>

                    <div className='p-4'>
                        {/* <div className="badge mr-3 mb-2 font-bold badge-secondary">MongoDB</div>
                        <div className="badge mr-3 mb-2 font-bold badge-primary">Express</div> */}
                        <div className="badge mr-3 mb-2 font-bold">React</div>
                        <div className="badge mr-3 mb-2 font-bold badge-primary">Node</div>
                        <div className="badge mr-3 mb-2 font-bold badge-warning">JavaScript</div>
                        <div className="badge mr-3 mb-2 font-bold badge-error">Firebase</div>
                        <div className="badge mr-3 mb-2 font-bold badge-primary">Bootstrap</div>
                        <div className="badge mr-3 mb-2 font-bold badge-secondary">CSS</div>
                        <div className="badge mr-3 mb-2 font-bold badge-ghost">HTML</div>

                        <div className='text-center my-4'> <a href='https://salik-hotel-practic.web.app/' target='blank' className=' btn btn-success'>Preview</a></div>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default MyPortfolio;