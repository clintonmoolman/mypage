import React from "react";

function HomePage() {
  return (
    <div className="container col-xl-10 col-xxl-8 px-4 py-5">
      <div className="row align-items-center g-lg-5 py-5">
        <div className="col-lg-7 text-center text-lg-start">
          <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">
            Thank You for visiting my test website.
          </h1>
          <p className="col-lg-10 fs-4">
            In this project I practiced deploying a React front-end with Node
            back-end to an Ubuntu server. Kindly complete the details form below
            and you should receive an automated mail thanking you for visiting
            my site.
          </p>
        </div>
        <div className="col-md-10 mx-auto col-lg-5">
          <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="Name"
              />
              <label for="floatingInput">Name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="Message"
              />
              <label for="floatingInput">Message (optional)</label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">
              Submit
            </button>
            <hr className="my-4" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
