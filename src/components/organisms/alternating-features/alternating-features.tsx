import { RotatingFadeInText } from "@/components/atoms/animations/rotating-fadein-text";
import "./alternating-features.scss";
import { Feature } from "./feature";

export type ImageType = {
  id: string;
  alt: string;
  url: string;
  width: number;
  height: number;
}

export interface FeaturesType {
  id: string;
  title: string;
  description?: string;
  link: string;
  image: ImageType;
}

export interface AlternatingFeaturesType {
  title: string;
  subtitle?: string;
  features: FeaturesType[];
}

function AlternatingFeatures(props: AlternatingFeaturesType) {
  return (
    <section className="alternating-features">
      <div className="alternating-features__header">
        <h2 className="alternating-features__header-title">
          {props.title.split(" ").map((i, index) => (
            <RotatingFadeInText key={index} text={i} />
          ))}
        </h2>
        {props.subtitle && <h4>{props.subtitle}</h4>}
      </div>
      <div className="alternating-features__features">
        {props.features.map((i, index) => (
          <Feature feature={i} index={index} key={index} />
        ))}
      </div>
    </section>
  )
}

export { AlternatingFeatures }
