import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function BlogPost() {
  const navigate = useNavigate();

  return (
    <>
      <motion.div
        className="container-fluid "
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{
          duration: 0.2,
          ease: "easeInOut",
        }}
      >
        <div className="d-flex justify-content-center flex-wrap">
          {/*<button
            className="form-btn btn  m-2"
            onClick={() => {
              navigate("/");
            }}
          >
            <span>
              Post
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </span>
          </button>*/}
          <h1 className="title">Working on it</h1>
        </div>
      </motion.div>
    </>
  );
}
