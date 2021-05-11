import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Movies } from "../components";

const resultVariant = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
      duration: 0.5,
      delay: i * 0.125 + 0.5,
    },
  }),
  exit: {
    opacity: 0,
    y: -10,
  },
};

const Nominations = ({ nominations, unNominate, isNominated }) => {
  return (
    <div>
      <AnimatePresence>
        {nominations.length !== 0 &&
          nominations.map((result, i) => {
            return (
              <motion.div
                key={"search_result_" + result.imdbID}
                custom={i}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={resultVariant}
                layout
              >
                <Movies
                  search={false}
                  movie={result}
                  key={"search_" + result.imdbID}
                  unNominate={(movie) => {
                    unNominate(movie);
                  }}
                  isNominated={isNominated(result.imdbID)}
                />
              </motion.div>
            );
          })}
      </AnimatePresence>
    </div>
  );
};

export default Nominations;
