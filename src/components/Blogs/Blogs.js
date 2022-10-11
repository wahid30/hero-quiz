import React from "react";

const Blogs = () => {
  return (
    <div className="mx-auto w-9/12 mt-12">
      {/* question 01 */}
      <div className="card bg-base-100 shadow-xl w-full my-5">
        <div className="card-body">
          <p className="font-bold">What is the purpose of react router?</p>
        </div>
        <div className="px-5 pb-4">
          <p>
            Routing is a process in which a user is directed to different pages
            based on their action or request. ReactJS Router is mainly used for
            developing Single Page Web Applications. React Router is used to
            define multiple routes in the application. When a user types a
            specific URL into the browser, and if this URL path matches any
            'route' inside the router file, the user will be redirected to that
            particular route. React Router is a standard library system built on
            top of the React and used to create routing in the React application
            using React Router Package. It provides the synchronous URL on the
            browser with data that will be displayed on the web page. It
            maintains the standard structure and behavior of the application and
            mainly used for developing single page web applications.
          </p>
        </div>
      </div>
      {/* Question 02 */}
      <div className="card bg-base-100 shadow-xl w-full my-5">
        <div className="card-body">
          <p className="font-bold">How does Context API work?</p>
        </div>
        <div className="px-5 pb-4">
          <p>
            The React Context API is a way for a React app to effectively
            produce global variables that can be passed around. This is the
            alternative to "prop drilling" or moving props from grandparent to
            child to parent, and so on. Context is also touted as an easier,
            lighter approach to state management using Redux.
            React.createContext() is all you need. It returns a consumer and a
            provider. Provider is a component that as it's names suggests
            provides the state to its children. It will hold the "store" and be
            the parent of all the components that might need that store.
            Consumer as it so happens is a component that consumes and uses the
            state.
          </p>
        </div>
      </div>
      {/* Question 03 */}
      <div className="card bg-base-100 shadow-xl w-full my-5">
        <div className="card-body">
          <p className="font-bold">What is useRef in react?</p>
        </div>
        <div className="px-5 pb-4">
          <p>
            useRef() is a built-in React hook. This hook accepts one argument as
            the initial value and returns a reference (known as ref). The
            reference is the object having a special property current. When we
            update the reference of useRef, the component does not re-render The
            value of the reference remains the same between component
            re-rendering
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
