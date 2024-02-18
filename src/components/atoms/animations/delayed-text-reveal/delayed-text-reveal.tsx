import clsx from "clsx"
import { motion } from "framer-motion"
import "./delayed-text-reveal.scss"

interface DelayedTextRevealType {
  text: string;
  classes?: string;
}

const DelayedTextReveal = ({ text, classes }: DelayedTextRevealType) => {
  let splitText = text.split("")
  return (
    <div className={clsx("delayed-text-reveal", classes)}>
      {splitText.map((i, index) => (
        i == " " ? (
          <span
            key={index}
          >
            &nbsp;
          </span>
        ) : (
          <motion.span key={index}
            initial={{ opacity: 1, translateY: "100%" }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 + index / 10, ease: "easeInOut" }}
          >
            {i == " " ? (<>&nbsp;</>) : i}
          </motion.span>
        )
      ))
      }
    </div>
  )
}

export { DelayedTextReveal }
