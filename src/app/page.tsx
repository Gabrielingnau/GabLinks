import Link from "next/link";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/prismicio";
import { asLink } from "@prismicio/client";
import { CMSIcon } from "@/components/icons";
import { Avatar } from "@/components/avatar";
import { Footer } from "@/components/footer";

export default async function HomePage() {
  const client = createClient();
  const page = await client.getSingle("index");
  console.log(JSON.stringify(page.data.footer, null, 2));
  return (
    <div className="flex flex-col gap-6 items-center w-full">
      <Avatar />
      <ModeToggle />
      <div className="min-[540px]:w-lg w-full flex flex-col gap-4">
        {page.data.botaos.map((botao, index) => (
          <Button key={index} asChild>
            <Link href={asLink(botao.link) ?? ""}>{botao.text}</Link>
          </Button>
        ))}
      </div>
      <div className="flex items-center gap-6">
        {page.data.redesociais.map((redesocial, index) => (
          <Link href={asLink(redesocial.link) ?? ""} key={index}>
            <CMSIcon name={redesocial.text} className="text-text" />
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
}
