import { Github, Instagram, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-6 items-center w-full">
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="rounded-full relative w-28 h-28 border-0.5 border-stroke">
          <Image
            src="/profile.png"
            alt="Foto de perfil"
            fill
            className="dark:block hidden"
          />
          <Image
            src="/profile-light.png"
            alt="Foto de perfil"
            fill
            className="dark:hidden"
          />
        </div>
        <span className="text-md">@juliasilva</span>
      </div>
      <ModeToggle />
      <div className="min-[540px]:w-lg w-full flex flex-col gap-4">
        <Button asChild>
          <Link href="#">Inscreva-se no NLW</Link>
        </Button>
        <Button asChild>
          <Link href="#">Inscreva-se no NLW</Link>
        </Button>
        <Button asChild>
          <Link href="#">Inscreva-se no NLW</Link>
        </Button>
        <Button asChild>
          <Link href="#">Inscreva-se no NLW</Link>
        </Button>
      </div>
      <div className="flex items-center gap-6">
        <Link href="#">
          <Github className="text-text h-6 w-6" />
        </Link>
        <Link href="#">
          <Instagram className="text-text h-6 w-6" />
        </Link>
        <Link href="#">
          <Youtube className="text-text h-6 w-6" />
        </Link>
        <Link href="#">
          <Linkedin className="text-text h-6 w-6" />
        </Link>
      </div>
      <span className="text-text text-sm">Feito com ❤️ pela <Link href="">Rocketseat</Link></span>
    </div>
  );
}
