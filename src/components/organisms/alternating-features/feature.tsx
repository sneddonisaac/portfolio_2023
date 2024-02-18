import { DelayedTextReveal } from "@/components/atoms/animations/delayed-text-reveal";
import clsx from "clsx";
import { motion } from "framer-motion"
import "./feature.scss"
import { FeaturesType } from "./alternating-features";
import Link from "next/link";
import Image from "next/image";

function isEven(n: number) {
  return (n % 2 == 0)
}

type FeaturesProps = { index: number; feature: FeaturesType }

function Feature({ index, feature }: FeaturesProps) {
  return (
    <div className={clsx("feature")}>
      <div
        className={clsx("feature__content",
          isEven(index) ? "feature__content-even" : "feature__content-odd")
        }
      >
        <h4 className="feature__content-title">
          <DelayedTextReveal text={feature.title} />
        </h4>
        {feature.description &&
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
            className="feature__content-description"
          >
            {feature.description}
          </motion.p>
        }
      </div>
      <Link href={feature.link} className={clsx("feature__image interactable", isEven(index) ? "feature__image-even" : "feature__image-odd")}>
        <Image
          alt={feature.image.alt}
          src={feature.image.url}
          width={feature.image.width}
          height={feature.image.height}
        />
      </Link>
    </div>
  )
}

export { Feature }
