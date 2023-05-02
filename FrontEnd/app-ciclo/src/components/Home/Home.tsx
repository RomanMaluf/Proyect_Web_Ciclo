import Layout from "@/components/Layout/Layout";
import { MaxContainer, Text, Slider } from "@/components/mixins";
import styles from "./home.module.scss";
import CicloSlider from "./CicloSlider/CicloSlider";
import CicloEstrategico from "./CicloSlider/CicloEstrategico";
import CicloActivo from "./CicloSlider/CicloActivo";
import Image from "next/image";

type option_ciclo_list = {
  key: string;
  text: string;
};

type option_ciclo_estrategico_list = {
  key: string;
  text: string;
  title: string;
};

const sliders = [
  {
    key: "1",
    title: "Un Ciclo Integral",
    subtitle:
      "Ciclo es una plataforma digital que brinda soluciones integrales para personas que quieren construir, refaccionar y/o ampliar su vivienda.",
    description:
      "Proponemos un cambio de paradigma en el sector de la construcción al implementar un sistema de gestión que vincula profesionales, tecnología e innivación rientada a optimizar la experencia de los usuarios.",
    first_list: {
      title: "Problemas de invertir en la construcción",
      options: [
        {
          key: "ciclo_integral_1",
          text: "Presupuestos incompletos y/o sobrecostos.",
        },
        {
          key: "ciclo_integral_2",
          text: "Escasa o nula planificación, control y gestión de proyectos.",
        },
        {
          key: "ciclo_integral_3",
          text: "Falta de coordinación y transparencia entre partes interesadas.",
        },
        { key: "ciclo_integral_4", text: "Gran cantidad de retrabajos." },
        {
          key: "ciclo_integral_5",
          text: "Incumplimiento sistemático de los plazos de entrega.",
        },
      ],
    },
    second_list: {
      title: "Propuesta Ciclo",
      options: [
        {
          key: "ciclo_integral_propuesta_1",
          text: "Asesoramiento profesional.",
        },
        {
          key: "ciclo_integral_propuesta_2",
          text: "Presupuestación gratuita.",
        },
        {
          key: "ciclo_integral_propuesta_3",
          text: "Alternativas de proveedores calificados.",
        },
        {
          key: "ciclo_integral_propuesta_4",
          text: "Gestión de proyecto On Time.",
        },
        {
          key: "ciclo_integral_propuesta_5",
          text: "Comunicación directa con técnicos.",
        },
      ],
    },
    second_column: {
      href: "#",
      src: "/ciclos/ciclo_integral.png",
      alt: "Ciclo Integral",
      height: 700,
      width: 860,
    },
  },
  {
    key: "2",
    title: "Un Ciclo Colaborativo",
    subtitle: "",
    description:
      "Diseñado para generar sinergia entre los diversos actores que integran el ecosistema de la construcción local, aportando transparencia, agilidad y respuesta durante todo el proceso de desarrollo del proyecto.",
    first_list: {
      title: "Objetivos de Ciclo",
      options: [
        {
          key: "ciclo_colaborativo_1",
          text: "Ofrecer servicios y soluciones de calidad.",
        },
        {
          key: "ciclo_colaborativo_2",
          text: "Fomentar el trabajo colaborativo de la red de proveedores.",
        },
        {
          key: "ciclo_colaborativo_3",
          text: "Profesionalizar los oficios vinculados a nuevos métodos de construcción.",
        },
        {
          key: "ciclo_colaborativo_4",
          text: "Promover el uso de materiales de construcción en seco y/o prefabricados.",
        },
        {
          key: "ciclo_colaborativo_5",
          text: "Contribuir a la reducción de brechas de género en el sector.",
        },
        ,
        {
          key: "ciclo_colaborativol_5",
          text: "Implementar prácticas de sostenibilidad y economia circular.",
        },
      ] as option_ciclo_list[],
    },
    second_list: {
      title: "Cadena de valor de Ciclo",
      options: [
        {
          key: "ciclo_colaborativo_propuesta_1",
          text: "Fabricantes.",
        },
        {
          key: "ciclo_colaborativo_propuesta_2",
          text: "Distribuidores.",
        },
        {
          key: "ciclo_colaborativo_propuesta_3",
          text: "Constructores.",
        },
        {
          key: "ciclo_colaborativo_propuesta_4",
          text: "Instituciones públicas y educativas.",
        },
        {
          key: "ciclo_colaborativo_propuesta_5",
          text: "Usuarios.",
        },
      ],
    },
    second_column: {
      href: "#",
      src: "/ciclos/ciclo_colaborativo.png",
      alt: "Ciclo Colaborativo",
      height: 700,
      width: 860,
    },
  },
];

const ciclo_estrategico = {
  key: "3",
  title: "Un Ciclo Estrategico",
  subtitle: "",
  description:
    "Red colaborativa de empresas e instituciones referentes de la construcción en Mendoza. Conece nuestros aliados.",
  first_list: {
    title: "Espiritu Ciclo",
    options: [
      {
        key: "ciclo_estrategico_1",
        title: "Visión",
        text: "Ser referentes de la nueva forma de construir en Argentina, siguiendo el camino de la sostentabilidad y sustentabilidad.",
      },
      {
        key: "ciclo_estrategico_2",
        title: "Mision",
        text: "Acompañarte en tu proyecto constructivo para que vivas una experiencia única.",
      },
      {
        key: "ciclo_estrategico_3",
        title: "Valores",
        text: "Transpariencia, Integridad, colaboración, compromiso.",
      },
    ] as option_ciclo_estrategico_list[],
  },
};

const ciclo_activo = {
  key: "4",
  title: "Un Ciclo Activo",
  subtitle: "",
  description:
    "Para lograr una Comunidad de constructores que comparte trabajo, conocimientos y relaciones profesionales con el propósito de hacer crecer su negocio en el mercado residencial.",
  first_list: {
    title: "Beneficios Ciclo",
    options: [
      {
        key: "ciclo_activo_1",
        text: "Bolsa de trabajo con solicitudes validadas.",
      },
      {
        key: "ciclo_activo_2",
        text: "Co-creación de una red de especialistas del sector residencial.",
      },
      {
        key: "ciclo_activo_3",
        text: "Capacitaciones, eventos y cursos con especialistas.",
      },
      {
        key: "ciclo_activo_4",
        text: "Desarrollo de relaciones y contactos claves.",
      },
      {
        key: "ciclo_activo_5",
        text: "Asesoramiento en marketing, tecnología y legales, entre otras.",
      },
      {
        key: "ciclo_activo_6",
        text: "Ciclo App (MVP): herramientas de comunicación, presupuestos y gestión de tareas.",
      },
    ] as option_ciclo_list[],
  },
  second_list: {
    title: "Publico Ciclo",
    options: [
      {
        key: "ciclo_activo_publico_1",
        text: "Profesinales del sector de construcción.",
      },
      {
        key: "ciclo_activo_publico_2",
        text: "Técnicos especialistas.",
      },
      {
        key: "ciclo_activo_publico_3",
        text: "Constructoras residenciales.",
      },
    ] as option_ciclo_list[],
  },
};
function Home() {
  return (
    <Layout
      title="Ciclo"
      description="Somos un equipo joven. interdisciplinario y comprometido con los desafíos que plantea la industria de la construcción"
    >
      <MaxContainer>
        <div className={styles.home}>
          <div className={styles.hero}>
            <div className={styles.title}>
              <Text
                variant="h1"
                left={true}
                weight="bold"
                textColor="#e93a7d"
                textSize={"xxxl"}
                className={styles.title__text}
              >
                Comienza un nuevo ciclo
              </Text>
              <Text
                variant="span"
                left={true}
                weight="bold"
                textColor="#fff"
                textSize={"xxxl"}
                className={styles.title__text}
              >
                para la construcción en Mendoza.
              </Text>
            </div>
            <div className={styles.buttons}>
              <Text className={styles.learn_more__button}>
                <Text variant="span" center={true} weight="bold" colored>
                  Empezá tu proyecto
                </Text>
              </Text>
              <Text className={styles.sign_up__button}>
                <Text variant="span" center={true} weight="bold" colored>
                  Unite a la Comunidad
                </Text>
              </Text>
            </div>
          </div>
          <div className={styles.hero_background}>
            <Image
              src={"/ciclos/ciclo_detail.png"}
              alt="Unite a la comunidad"
              width={400}
              height={700}
              priority
            />
          </div>
        </div>
        <Slider hightlight>
          {sliders.map(
            ({
              key,
              title,
              subtitle,
              description,
              first_list,
              second_list,
              second_column,
            }) => (
              <CicloSlider
                key={key}
                title={title}
                subtitle={subtitle}
                description={description}
                first_list={first_list}
                second_list={second_list}
                second_column={second_column}
              />
            )
          )}
          <CicloEstrategico
            key={ciclo_estrategico.key}
            title={ciclo_estrategico.title}
            subtitle={ciclo_estrategico.subtitle}
            description={ciclo_estrategico.description}
            first_list={ciclo_estrategico.first_list}
          />
          <CicloActivo
            key={ciclo_activo.key}
            title={ciclo_activo.title}
            subtitle={ciclo_activo.subtitle}
            description={ciclo_activo.description}
            first_list={ciclo_activo.first_list}
            second_list={ciclo_activo.second_list}
          />
        </Slider>
      </MaxContainer>
    </Layout>
  );
}

export default Home;
