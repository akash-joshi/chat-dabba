import "./styles.css";
import { BsFillChatDotsFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function App() {
  const [boxOpen, setBoxOpen] = useState(false);
  const [body, setBody] = useState("");

  return (
    <div className="App">
      <h1>Welcome to my ChatDabba Animation Demo</h1>
      <h2>
        Created by{" "}
        <a href="https://thewriting.dev" target="_blank" rel="noreferrer">
          @thewritingdev
        </a>
      </h2>

      <AnimatePresence>
        {boxOpen && (
          <motion.div
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            onClick={() => setBoxOpen(!boxOpen)}
            style={{
              position: "fixed",
              bottom: 25,
              left: 25,
              border: "1px solid #ff0c8b",
              background: "#ff0c8b",
              height: 50,
              width: 50,
              borderRadius: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer"
            }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            >
              <AiOutlineClose color="white" size={25} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence initial={false}>
        {!boxOpen && (
          <motion.div
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            onClick={() => setBoxOpen(!boxOpen)}
            style={{
              position: "fixed",
              bottom: 25,
              left: 25,
              border: "1px solid #ff0c8b",
              background: "#ff0c8b",
              height: 50,
              width: 50,
              borderRadius: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer"
            }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            >
              <BsFillChatDotsFill color="white" size={25} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {boxOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: 100
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            exit={{
              opacity: 0,
              y: 10,
              transition: {
                duration: 0.25
              }
            }}
            style={{
              position: "fixed",
              bottom: 85,
              left: 25,
              border: "1px solid #ff0c8b",
              background: "#ff0c8b",
              width: 200,
              height: 300,
              paddingTop: "1em",
              borderRadius: 4,
              color: "white",
              overflowY: "auto"
            }}
          >
            <div style={{ fontSize: 18 }}>Chat Dabba</div>
            <br />
            <div style={{ textAlign: "left", padding: "0 0.5em" }}>
              <div>Your Message</div>

              <textarea
                style={{
                  borderRadius: 4,
                  marginTop: "0.5em",
                  height: 200,
                  padding: "0.1em"
                }}
                value={body}
                onChange={(e) => setBody(e.target.value)}
              />

              <button
                onClick={() => {
                  location.href = `mailto:akash.joshi@viit.ac.in?subject=Hey%20There!%20Cool%20App!&body=${body}`;
                }}
                style={{ marginTop: "0.5em" }}
              >
                Submit
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
