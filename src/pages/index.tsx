import { FormularioDeLaHome } from "@/components/FormularioDeLaHome";
import { HeroDeLaHome } from "@/components/HeroDeLaHome";
import { Sarasa } from "@/components/Sarasa";
export default function Page() {
  return (
    <>
      <HeroDeLaHome />
      <FormularioDeLaHome />
      <Sarasa t1="no entiendo un choto" t2="apretá el botón" />
      <Sarasa t1="saracatunga" t2="apretá el botón" />
      <Sarasa t1="había una vez un circo, lará lará" t2="Button" />
    </>
  );
}
