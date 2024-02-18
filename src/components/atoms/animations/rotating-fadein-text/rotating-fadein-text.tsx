import { motion, cubicBezier } from "framer-motion";

const easing = cubicBezier(.35, .17, .3, .86);

function RotatingFadeInText(props: { text: string }) {
    return (
        <motion.span
            initial={{ opacity: 0, rotateX: 60, rotateY: 10, rotateZ: -10, transformOrigin: "top" }}
            whileInView={{ opacity: 1, rotateX: 0, rotateY: 0, rotateZ: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5, ease: easing }}
        >
            {props.text}
        </motion.span>
    )
}

export { RotatingFadeInText }