import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import errImg from "../img/404Error.gif";
export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <>
      <motion.div
        className="profile_container "
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{
          duration: 0.2,
          ease: "easeInOut",
        }}
      >
        <div className="error_box text-center">
          <div className=" ">
            <img
              src={errImg}
              style={{ width: "400px" }}
              alt=""
              className="img-fluid"
            />
            <div className="mt-3 d-flex align-items-center justify-content-center">
              <div>
                <p className="fs-3">
                  <span className="text-danger">Opps!</span> Page not found.
                </p>

                <div className="d-flex justify-content-center flex-wrap">
                  <button
                    className="form-btn btn  m-2"
                    onClick={() => {
                      navigate("/");
                    }}
                  >
                    <span>
                      Home
                      <i
                        className="fa fa-long-arrow-right"
                        aria-hidden="true"
                      ></i>
                    </span>
                  </button>
                  <button
                    className="form-btn btn btn-secondary m-2"
                    onClick={() => {
                      navigate(-1);
                    }}
                  >
                    <span>
                      Back
                      <i
                        className="fa fa-long-arrow-right"
                        aria-hidden="true"
                      ></i>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
