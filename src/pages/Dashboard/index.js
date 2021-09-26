import { Redirect } from "react-router-dom";
import { Container, InputContainer } from "./styles";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import Card from "../../components/Card";
import { TasksContainer } from "../../components/Button/styles";
import api from "../../services/api";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const Dashboard = ({ authenticated }) => {
  const [tech, setTech] = useState([]);
  const [token] = useState(
    JSON.parse(localStorage.getItem("@kenzieHub:token")) || ""
  );
  const { register, handleSubmit } = useForm();

  // const user = JSON.parse(localStorage.getItem("@kenzieHub:user"));

  const showTechs = ({ techs: id, title, status }) => {
    api
      .get("./users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setTech(response.data))
      .catch((err) => console.log(err));
  };


  useEffect(() => {
    //showTechs()
  }, []);

  const onSubmit = ({ tech }) => {
      if(!tech){
          return toast.error('Complete o campo para adicionar tecnologia')
      }
      api.post("/users/techs", {
          title: tech,
          status: tech,
      }, {
        headers: {
            Authorization: `Bearer ${token}`,
          },
      }).then(response => showTechs())
  }

//   const deleteTech = ({ techs: { id } }) => {
//     api.delete(`/users/techs/${id}`, {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//   };

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
      <TasksContainer>
        {[1,2,3].map((tech) => (
          <Card key={tech.id} onClick={() => {}} tech={tech.title} level={tech.status} />
        ))}
      </TasksContainer>
    </Container>
  );
};

export default Dashboard;
