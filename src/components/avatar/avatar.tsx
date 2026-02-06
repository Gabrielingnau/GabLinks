import { getSettings } from "@/lib/prismic.data";
import Image from "next/image";

export async function Avatar() {
    const data = await getSettings()
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div className="rounded-full relative w-28 h-28 border-0.5 border-stroke">
        <Image
          src={data.image.url ?? ""}
          alt="Foto de perfil"
          fill
          className="dark:block hidden"
        />
        <Image
          src={data.image.url ?? ""}
          alt="Foto de perfil"
          fill
          className="dark:hidden"
        />
      </div>
      <span className="text-md">{data.nome}</span>
    </div>
  );
}
