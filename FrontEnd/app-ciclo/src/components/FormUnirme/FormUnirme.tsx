import { Input, Button, Text } from "@/components/mixins";
import noOnlyNumbers from "@/../services/formValidators/noOnlyNumbers";
import styles from "./formunirme.module.scss";

const FormUnirme = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    return console.log("submiting");
  };
  return (
    <div>
      <form className={styles.form} noValidate onSubmit={handleSubmit}>
        <Input
          id="1"
          name="fullname"
          placeholder="Ciclo Soluciones Constructivas"
          required
          title="Nombre y Apellido"
          className="fullWidth"
          br="hard"
          textColor="black"
          filled
          titleColor="#ffffff"
        />

        <Input
          id="2"
          name="telefono"
          placeholder="+54 9 261 3871088"
          title="Teléfono"
          className="halfWidth"
          br="hard"
          filled
          required
          titleColor="#ffffff"
        />

        <Input
          id="3"
          name="email"
          placeholder="info@ciclosoluciones.com"
          title="Email"
          type="email"
          className="halfWidth"
          br="hard"
          filled
          required
          titleColor="#ffffff"
        />

        <Input
          id="4"
          name="provincia"
          placeholder="Mendoza"
          required
          title="Elija una Provincia"
          className="halfWidth"
          br="hard"
          filled
          titleColor="#ffffff"
        />

        <Input
          id="5"
          name="localidad"
          required
          placeholder="Godoy Cruz"
          title="Elija una Localidad"
          className="halfWidth"
          br="hard"
          filled
          titleColor="#ffffff"
        />

        <Input
          id="6"
          name="ocupacion"
          placeholder="Tecnico"
          required
          title="Ocupación/Actividad"
          className="fullWidth"
          br="hard"
          filled
          titleColor="#ffffff"
        />

        <div className={styles.legend}>
          <Text variant="span" textColor="#ffffff" center textSize="s">
            Para formar parte de la <strong>Comunidad Ciclo</strong> debés
            contar con: título y/o certificación de actividad principal,
            experiencia laboral y residir en Mendoza.
          </Text>
        </div>
        <Input
          id="7"
          name="requirments"
          required
          label="Sí, cumplo con los requisitos requeridos."
          className="fullWidth"
          type="checkbox"
          filled
          labelColor="#ffffff"
          textSize="s"
        />
        <div className={styles.buttonWrapper}>
          <Button
            id="button-subscribe"
            onClick={() => {}}
            textWeight="bold"
            label="Quiero Unirme"
            width="fullWidth"
            variant="primary"
            br="hard"
            style={{ height: "40px", width: "200px" }}
            className={styles.subscribe}
            justify="center"
            submit
            // textStyle={{ fontSize: '10px' }}
          />
        </div>
      </form>
    </div>
  );
};

FormUnirme.displayName = "FormUnirme";
export default FormUnirme;
