import { PrismicLink, PrismicRichText, PrismicText } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { Bounded } from "./Bounded";
import { Heading } from "./Heading";
import { HorizontalDivider } from "./HorizontalDivider";

const SignUpForm = ({ settings }) => {
  return (
    <div className="px-4">
    </div>
  );
};

export const Footer = ({ withSignUpForm = true, settings }) => {
  return (
    <Bounded as="footer">
      <div className="grid grid-cols-1 justify-items-center gap-2">
        <HorizontalDivider />
        {withSignUpForm && <SignUpForm settings={settings} />}
        <div className="mx-auto w-full max-w-3xl text-center text-xs font-semibold tracking-tight text-slate-500">
          Proudly published using{" "}
          <PrismicLink href="https://prismic.io" className="text-slate-700">
            Prismic
          </PrismicLink>
        </div>
      </div>
    </Bounded>
  );
};
