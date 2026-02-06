import Link from "next/link";

import { getSettings } from "@/lib/prismic.data";
import { asLink } from "@prismicio/client";

export async function Footer() {
  const data = await getSettings();
  return (
    <span className="text-text text-sm">
      {data.footer[0]?.text}{" "}
      <Link className="underline" href={asLink(data.footer[0]?.link) ?? ""}>
        {data.footer[0]?.link.text}
      </Link>
    </span>
  );
}
