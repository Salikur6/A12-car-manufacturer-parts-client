import React from 'react';

const Blogs = () => {
    return (
        <div className='container mx-auto mt-20'>
            <div className="mb-20  font-bold glass card" style={{ backgroundColor: '#fffff0', padding: '50px 35px', border: '3px solid #888', borderRadiuus: '15px', }}>
                <p className='card-title font-bold mb-4 text-secondary'>*How will you improve the performance of a React Application?</p>
                <p className='text-black'>Optimizing performance is an important technique to consider before shipping a React application. Use React.Fragment to Avoid Adding Extra Nodes to the DOM. Use Production Build. Another way of optimizing a React app is by making sure you bundle your app for production before deploying. By default, your app is in development mode, which means React will include helpful warnings. Use React.Suspense and React.Lazy for Lazy Loading Components. Use React.memo for Component Memoization
                </p>


            </div>


            <div className="mb-10 font-bold glass card" style={{ backgroundColor: '#fffff0', padding: '50px 35px', border: '3px solid #888', borderRadiuus: '15px', }}>
                <p className='card-title font-bold mb-4 text-secondary'>* What are the different ways to manage a state in a React application?</p>
                <p className='text-black'>React components have a built-in state object. The state is encapsulated data where you store assets that are persistent between component renderings.

                    The state is just a fancy term for a JavaScript data structure. If a user changes state by interacting with your application, the UI may look completely different afterwards, because it's represented by this new state rather than the old state.</p>
            </div>

            <div className="mb-10 bg-base-300 font-bold glass card" style={{ backgroundColor: '#fffff0', padding: '50px 35px', border: '3px solid #888', borderRadiuus: '15px', }}>
                <p className='card-title font-bold mb-4 text-secondary'>*How does prototypical inheritance work?</p>
                <p className='text-black'>There are four main types of state you need to properly manage in your React apps:

                    Local state
                    Global state
                    Server state
                    URL state
                    Let's cover each of these in detail:

                    Local (UI) state – Local state is data we manage in one or another component.

                    Local state is most often managed in React using the useState hook.

                    For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs.</p>
            </div>

            <div className="mb-10 bg-base-300 font-bold glass card" style={{ backgroundColor: '#fffff0', padding: '50px 35px', border: '3px solid #888', borderRadiuus: '15px', }}>
                <p className='card-title font-bold mb-4 text-secondary'>*Why you do not set the state directly in React?</p>
                <p className='text-black'>As you may already know, a common way to tune a React component for performance is to make it “pure,” which causes it to only re-render when its props change (instead of every time its parent re-renders). This can be done automatically by extending React.PureComponent instead of React.Component, or manually by implementing the shouldComponentUpdate lifecycle method to compare nextProps with current props. If the props look the same, it skips the render, and saves some time. that’s why you shouldn’t mutate state, even if you immediately call setState. Optimized components might not re-render if you do, and the rendering bugs will be tricky to track down.</p>
            </div>

            <div className="mb-10 bg-base-300 font-bold glass card" style={{ backgroundColor: '#fffff0', padding: '50px 35px', border: '3px solid #888', borderRadiuus: '15px', }}>
                <p className='card-title font-bold mb-4 text-secondary'>*What is a unit test? Why should write unit tests?</p>
                <p className='text-black'>Unit testing is a type of software testing where individual units or software components are tested. Its purpose is to validate that each unit of code performs as expected. A unit can be anything you want it to be — a line of code, a method, or a class. <br /><br />
                    Unit tests save time and money. Usually, we tend to test the happy path more than the unhappy path. If you release such an app without thorough testing, you would have to keep fixing issues raised by your potential users. The time to fix these issues could’ve been used to build new features or optimize the existing system. Bear in mind that fixing bugs without running tests could also introduce new bugs into the system.
                    Well-written unit tests act as documentation for your code. Any developer can quickly look at your tests and know the purpose of your functions.
                </p>


            </div>
        </div>
    );
};

export default Blogs;