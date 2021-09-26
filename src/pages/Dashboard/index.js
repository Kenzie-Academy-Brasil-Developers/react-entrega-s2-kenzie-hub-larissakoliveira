import { Redirect } from "react-router-dom";
import { Container, InputContainer } from "./styles";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import Card from "../../components/Card";
import { TechsContainer } from "../../components/Card/styles";
import api from "../../services/api";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const Dashboard = ({ authenticated }) => {
  const [tech, setTech] = useState([]);

  const [token] = useState(
    JSON.parse(localStorage.getItem("@kenzieHub:token")) || ""
  );
  const [user] = useState(
    JSON.parse(localStorage.getItem("@kenzieHub:user")) || ""
  );

  const { register, handleSubmit } = useForm();

  const showTechs = () => {
    api
      .get(`/users/${user}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setTech(response.data.techs))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    showTechs();
  }, []);

  const onSubmit = (data) => {
    if (!data) {
      return toast.error("Complete os campos para adicionar tecnologia");
    }
    api
      .post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => showTechs());
  };

  const removeTech = (id) => {
    const filteredTechs = tech.filter((tech) => tech.id !== id);
    api
      .delete(`/users/techs/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => setTech(filteredTechs));
  };

  if (!authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <Container>
      <h1>Bem vindx, nomeUsuario!</h1>
      <h2>Adicione a nova tecnologia</h2>
      <InputContainer onSubmit={handleSubmit(onSubmit)}>
        <section>
          <Input
            error=""
            name="tech"
            placeholder="Adicione nova tecnologia"
            register={register}
          />
          <Input
            name="level"
            error=""
            placeholder="Adicione seu nível"
            register={register}
          />
          <Button type="submit">Adicionar</Button>
        </section>
      </InputContainer>
      <TechsContainer>
        {[1.2].map((item) => (
          <Card
            key={item.id}
            onClick={() => {
              removeTech(item.id);
            }}
            title={item.title}
            status={item.status}
          />
        ))}
      </TechsContainer>
    </Container>
  );
};

export default Dashboard;
