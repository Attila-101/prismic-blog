import * as prismicH from "@prismicio/helpers";
import { PrismicRichText, PrismicLink } from "@prismicio/react";

import { Bounded } from "../../components/Bounded";

const Text = ({ slice }) => {
  return (
    <Bounded as="section">
      {prismicH.isFilled.link(slice.primary.link) ? (
        <div className="font-serif leading-relaxed md:text-xl md:leading-relaxed">
          <PrismicLink field={slice.primary.link}><PrismicRichText field={slice.primary.text} /></PrismicLink>
        </div>
      ): 
      <div className="font-serif leading-relaxed md:text-xl md:leading-relaxed">
          <PrismicRichText field={slice.primary.text} />
        </div>
      }
    </Bounded>
  );
};

export default Text;