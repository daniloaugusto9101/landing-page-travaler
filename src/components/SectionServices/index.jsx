import Line from "../Line";
import ServicosItem from "./ServicosItem";

const SectionServices = () => {
  const SERVICES = [
    {
      url: "../../src/assets/img/SectionServicos/word.png",
      title: "Vários Destinos",
      text: "Mais de 500 lugares disponíveis;",
    },
    {
      url: "../../src/assets/img/SectionServicos/wallet.png",
      title: "Valores Incríveis",
      text: "Pacotes que cabem em qualquer orçamento;",
    },
    {
      url: "../../src/assets/img/SectionServicos/travelling.png",
      title: "Voos Especiais",
      text: "Parceria com várias empresas;",
    },
  ];

  return (
    <section className=" w-full">
      <div className=" max-w-6xl m-auto px-2 py-24 xl:px-10 md:flex md:items-center gap-10">
        <div className="text-center md:text-left md:flex-1 md:flex md:flex-col gap-3">
          <h2 className="text-xl text-orange-600 font-bold">Nós oferecemos</h2>
          <p className="text-3xl uppercase font-bold">Os melhores serviços para você</p>
          <p className="md:text-lg">
            Experimente agora nossa variedade de beneficios.
          </p>
        </div>
        {SERVICES.map((obj, index) => (
          <ServicosItem key={index} {...obj} />
        ))}
      </div>
      <Line />
    </section>
  );
};

export default SectionServices;
