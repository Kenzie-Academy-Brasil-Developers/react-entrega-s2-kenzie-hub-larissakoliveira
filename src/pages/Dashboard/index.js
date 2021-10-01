import { Redirect } from "react-router-dom";
import { Container, InputContainer } from "./styles";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import Card from "../../components/Card";
import { TechsContainer } from "../../components/Card/styles";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router";
import axios from "axios";

const Dashboard = ({ authenticated, setAuthenticated }) => {

  const history = useHistory();

  const [tech, setTech] = useState([]);

  const [token] = useState(
    JSON.parse(localStorage.getItem("@kenzieHub:token")) || ""
  );
  const [userID] = useState(
    JSON.parse(localStorage.getItem("@kenzieHub:user"))
  );
  const [name] = useState(
    JSON.parse(localStorage.getItem("@kenzieHub:name"))
  );

  const { register, handleSubmit } = useForm();

  const showTechs = () => {
    axios
      .get(`https://kenziehub.herokuapp.com/users/${userID}`)
      .then((response) => {
        setTech(response.data.techs);
      
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    showTechs();
  }, []);

  const onSubmit = (data) => {
    if (!data.title) {
      return toast.error("Complete os campos para adicionar tecnologia");
    }
    axios
      .post(
        "https://kenziehub.herokuapp.com/users/techs",
        {
          title: data.title,
          status: data.status,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => console.log(data.message) );
  };

  const removeTech = (id) => {
    const filteredTechs = tech.filter((tech) => tech.id !== id);
    axios
      .delete(`https://kenziehub.herokuapp.com/users/techs/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => setTech(filteredTechs));
  };

  if (!authenticated) {
    return <Redirect to="/" />;
  }

  const logout = () => {
    localStorage.clear()
    setAuthenticated(false);
    return history.push("/");
  }

  return (
    <Container>
      <h1>Seja bem-vindx <span> {name} </span>ao KenzieHub!!!</h1>
      <div className="containerDiv">
      <h2>Adicione a nova tecnologia e seu nível</h2>
      <Button onClick={logout} className='logout'>SAIR</Button>
      </div>
      <InputContainer onSubmit={handleSubmit(onSubmit)}>
        <section>
          <Input
            error=""
            name="title"
            placeholder="Adicione nova tecnologia"
            register={register}
          />
          <Input
            id="iniciante" 
            value="Iniciante"
            type='radio'
            name="status"
            error=""
            placeholder="Adicione seu nível"
            register={register}
          />
          <label for="iniciante">Iniciante</label>
           <Input
            id="intermediário" 
            value="Intermediário"
            type='radio'
            name="status"
            error=""
            placeholder="Adicione seu nível"
            register={register}
          />
          <label for="intermediário">Intermediário</label>
           <Input
            id="avançado" 
            value="Avançado"
            type='radio'
            name="status"
            error=""
            placeholder="Adicione seu nível"
            register={register}
          /><label for="avançado">Avançado</label>
          <Button className='add' type="submit">Adicionar</Button>
        </section>
      </InputContainer>
      <TechsContainer>
        {tech.map((item) => (
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
