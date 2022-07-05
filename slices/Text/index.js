import * as prismicH from "@prismicio/helpers";
import { PrismicRichText, PrismicLink } from "@prismicio/react";

import { Bounded } from "../../components/Bounded";

const Text = ({ slice }) => {
  return (
    <Bounded >
      {prismicH.isFilled.richText(slice.primary.text) && (
        <div className="font-serif leading-relaxed md:text-xl md:leading-relaxed">
          <PrismicLink  field={slice.primary.link}><PrismicRichText field={slice.primary.text} /></PrismicLink>
        </div>
      )}
    </Bounded>
  );
};

export default Text;
