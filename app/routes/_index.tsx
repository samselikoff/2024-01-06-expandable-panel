import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { useState } from "react";
import useMeasure from "react-use-measure";

const transition = { type: "ease", ease: "easeInOut", duration: 0.5 };

export default function Index() {
  const [isShowingMore, setIsShowingMore] = useState(false);
  const [ref, bounds] = useMeasure();

  return (
    <MotionConfig transition={transition}>
      <div className="max-w-md mx-auto mt-20 space-y-8">
        <p>Content above</p>

        <div>
          <button
            className="px-3 py-1.5 bg-blue-500 text-white font-medium rounded"
            onClick={() => setIsShowingMore(!isShowingMore)}
          >
            Toggle
          </button>

          <motion.div
            animate={{ height: bounds.height > 0 ? bounds.height : undefined }}
            className="mt-8"
          >
            <div ref={ref} className="relative">
              <AnimatePresence initial={false} mode="popLayout">
                {isShowingMore ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: {
                        ...transition,
                        duration: transition.duration / 2,
                        delay: transition.duration * (1 / 2),
                      },
                    }}
                    exit={{
                      opacity: 0,
                      transition: {
                        ...transition,
                        duration: transition.duration / 2,
                      },
                    }}
                    key="short"
                  >
                    Long description. Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit. Aspernatur harum ipsam necessitatibus
                    delectus fugit at, porro neque tempore exercitationem
                    aliquam nulla totam est similique dicta recusandae natus
                    minus optio quis!
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,

                      transition: {
                        ...transition,
                        duration: transition.duration / 2,
                        delay: transition.duration * (1 / 2),
                      },
                    }}
                    exit={{
                      opacity: 0,
                      transition: {
                        ...transition,
                        duration: transition.duration / 2,
                      },
                    }}
                    key="long"
                  >
                    Short summary.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
        <p>Content below</p>
      </div>
    </MotionConfig>
  );
}
