import React from 'react';
import portfolio from '../../img/portfolio.jpeg'
import education from '../../img/icon/education.png'


const MyPortfolio = () => {
    return (
        <div className='container mx-auto ' style={{ fontFamily: " 'Cinzel', serif" }}>
            <div className='grid mt-20 mb-10 grid-cols-1  md:grid-cols-3 items-center'>
                <div className='col-span-1 h-scree'>
                    <img className='w-[350px] sm:w-[400px] p-10 sm:p-5' style={{ borderRadius: '50%', }} src={portfolio} alt="" />

                </div>
                <div className='col-span-2'>
                    <h2 className='uppercase font-bold text-3xl mb-5'>I'm <span className='text-blue-500'>Salikur Islam</span>
                    </h2>
                    <p className='font-bold p-5' style={{ lineHeight: '28px', fontSize: '17px' }}>I am working hard with a strong desire to become a junior web developer in the next few months. My goal is to see myself as a Frontend, MERN Stack Developer! in 2022. After finish this web-development learning i will focus on getting a job on Software industry, where I will be able to perform in any kind of situation with full effort to utilize my knowledge, skill, and experience for professional career development..

                    </p>
                </div>
            </div>

            <div className='h-[20vh]'></div>

            {/* Education section */}
            <div>
                <h2 className='text-orange-500 text-4xl font-bold my-5'>Education</h2>
            </div>

            <div class="card card-side bg-base-200 mb-5 shadow-xl p-4">
                <figure><img style={{ width: '75px' }} src={education} alt="Movie" /></figure>
                <div class="card-body">
                    <p>2017-2019</p>
                    <h2 class="card-title">Secondary School Certificate (S.S.C)</h2>
                    <p className='font-bold'>Gotatikor Bi-lateral High School</p>

                </div>
            </div>
            <div class="card card-side mb-5 bg-base-200 shadow-xl  p-4">
                <figure><img style={{ width: '75px' }} src={education} alt="Movie" /></figure>
                <div class="card-body">
                    <p>2019-2021</p>
                    <h2 class="card-title">Higher Secondary Certificate (H.S.C)</h2>
                    <p className='font-bold'>Dakshin Surma Govt. College
                    </p>

                </div>
            </div>







            {/* portfolio card section */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                <div className='cardShadow' style={{
                    marginBottom: '35px',
                    marginRight: ' 15px',
                    transition: '0.4s all ease',
                    borderRadius: '6px',
                    backdropFilter: 'blur(15px)',
                    borderTop: '1px solid rgba(255, 255, 255, 0.2)',
                    borderLeft: ' 1px solid rgba(255, 255, 255, 0.2)',
                    boxShadow: '5px 5px 30px rgb(0 0 0 / 20%)'
                }}>


                    <div>
                        <img className='w-[400px], h-[250px]' src="" alt="" />
                    </div>

                    <div>
                        <div class="badge">neutral</div>
                        <div class="badge badge-primary">primary</div>
                        <div class="badge badge-secondary">secondary</div>
                        <div class="badge badge-accent">accent</div>
                        <div class="badge badge-ghost">ghost</div>



                        <h3>kdk</h3>
                        <div className='text-center mb-4'> <button className=' btn btn-success'>Preview</button></div>
                    </div>

                </div>


                <div className='cardShadow' style={{
                    marginBottom: '35px',
                    marginRight: ' 15px',
                    transition: '0.4s all ease',
                    borderRadius: '6px',
                    backdropFilter: 'blur(15px)',
                    borderTop: '1px solid rgba(255, 255, 255, 0.2)',
                    borderLeft: ' 1px solid rgba(255, 255, 255, 0.2)',
                    boxShadow: '5px 5px 30px rgb(0 0 0 / 20%)'
                }}>


                    <div>
                        <img className='w-[400px], h-[250px]' src="" alt="" />
                    </div>

                    <div>
                        <div class="badge">neutral</div>
                        <div class="badge badge-primary">primary</div>
                        <div class="badge badge-secondary">secondary</div>
                        <div class="badge badge-accent">accent</div>
                        <div class="badge badge-ghost">ghost</div>



                        <h3>kdk</h3>
                        <div className='text-center mb-4'> <button className=' btn btn-success'>Preview</button></div>
                    </div>

                </div>



                <div className='cardShadow' style={{
                    marginBottom: '35px',
                    marginRight: ' 15px',
                    transition: '0.4s all ease',
                    borderRadius: '6px',
                    backdropFilter: 'blur(15px)',
                    borderTop: '1px solid rgba(255, 255, 255, 0.2)',
                    borderLeft: ' 1px solid rgba(255, 255, 255, 0.2)',
                    boxShadow: '5px 5px 30px rgb(0 0 0 / 20%)'
                }}>


                    <div>
                        <img className='w-[400px], h-[250px]' src="" alt="" />
                    </div>

                    <div>
                        <div class="badge">neutral</div>
                        <div class="badge badge-primary">primary</div>
                        <div class="badge badge-secondary">secondary</div>
                        <div class="badge badge-accent">accent</div>
                        <div class="badge badge-ghost">ghost</div>



                        <h3>kdk</h3>
                        <div className='text-center mb-4'> <button className=' btn btn-success'>Preview</button></div>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default MyPortfolio;