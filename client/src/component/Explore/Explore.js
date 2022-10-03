import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Explore() {
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
          <button
            className="form-btn btn  m-2"
            onClick={() => {
              navigate("/blog_post");
            }}
          >
            <span>
              Post Blog
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </span>
          </button>
        </div>
      </motion.div>
    </>
  );
}
