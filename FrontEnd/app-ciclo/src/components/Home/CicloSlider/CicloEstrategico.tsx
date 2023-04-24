import { MaxContainer, Button, Text, Link } from "@/components/mixins";
import useDeviceType from "@/hooks/useDeviceType";
import { BiChevronDown } from "react-icons/bi";
import styles from "./cicloslider.module.scss";
import Image from "next/image";

type option_ciclo_list = {
  key: number;
  text: string;
};
type ciclo_list = {
  title?: string;
  options: Array<option_ciclo_list>;
};

type second_column = {
  alt?: string;
  href?: string;
  src?: string;
  height?: string;
  width?: string;
};
type props = {
  title?: string;
  subtitle?: string;
  description?: string;
  className?: string;
  first_list?: ciclo_list;
  second_list?: ciclo_list;
  second_column?: second_column;
};
function CicloEstrategico({
  title,
  subtitle,
  description,
  first_list,
  second_list,
  second_column,
}: props) {
  const { isDesktop } = useDeviceType();

  return (
    <div className={`${styles.container} ${styles.estrategico}`}>
      <div className={styles.first_column}>
        <div className={styles.title}>
          <Text
            variant="h1"
            className={styles.title__text}
            textSize="xxxl"
            weight="bold"
          >
            {title}
          </Text>
          <Text variant="h2" textSize="s" left>
            {subtitle}
          </Text>
          <br />
          <Text variant="p" textSize="s" left>
            {description}
          </Text>
          <br />
        </div>
        <div className={styles.first_list}>
          <div className={styles.list_title_with_icon}>
            <Text className={styles.list_title} left textCase="uppercase">
              {first_list?.title}
            </Text>
            <BiChevronDown color={"#ffb71b"} fontSize={20} />
          </div>
          <ul>
            {first_list?.options.map((option) => {
              return (
                <li key={option.key} className={styles.estrategic_list}>
                  <Text variant="h3" textSize="s" weight="bold">
                    {option.title}
                  </Text>
                  <br />
                  <Text variant="p" textSize="s">
                    {option.text}
                  </Text>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className={styles.second_column_with_images}>
        <div>
          <Image
            src="/aliados/grupo_ltn.png"
            alt="Grupo LTN"
            width={170}
            height={100}
          />
          <Image
            src="/aliados/extra_brut.png"
            alt="Extra Brut Construir Mejor"
            width={170}
            height={100}
          />
          <Image
            src="/aliados/extra_brut.png"
            alt=""
            width={170}
            height={100}
          />
        </div>
        <div>
          <Image
            src="/aliados/extra_brut.png"
            alt=""
            width={170}
            height={100}
          />
          <Image
            src="/aliados/extra_brut.png"
            alt=""
            width={170}
            height={100}
          />
          <Image
            src="/aliados/colegio_tecnicos_mdz.png"
            alt="Colegios Tecnicos Mendoza"
            width={170}
            height={100}
          />
        </div>
      </div>
    </div>
  );
}

export default CicloEstrategico;