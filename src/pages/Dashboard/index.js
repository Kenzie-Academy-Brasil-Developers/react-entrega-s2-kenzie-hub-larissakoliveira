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
      .catch((err) => console.log(err))
  };

  useEffect(() => {
    showTechs();
  }, []);

  const onSubmit = (data) => {
    if (!data.title || !data.status) {
      return toast.error("Complete os campos");
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
      .then((response) => setTech([...tech, {title: response.data.title, status: response.data.status}]))
      .catch((err)=> console.log(err));
      toast.success("Tech adicionada com sucesso!");
  };


  const removeTech = (id) => {
    const filteredTechs = tech.filter((tech) => tech.id !== id);
    axios
      .delete(`https://kenziehub.herokuapp.com/users/techs/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => setTech(filteredTechs));
      toast.error("Tech removida com sucesso!");
  };

  if (!authenticated) {
    return <Redirect to="/"/>;
  }

  const logout = () => {
    localStorage.clear()
    setAuthenticated(false);
    toast.success("Deslogado! Volte sempre!");
    return history.push("/");
  }

  return (
    <Container>
      <h1>Seja bem-vinda(o) <span> {name} </span>ao KenzieHub!!!</h1>
      <div className="containerDiv">
      <h2>Adicione a nova tecnologia e seu n??vel</h2>
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
            id="Iniciante" 
            value="Iniciante"
            type='radio' start
            name="status"
            error=""
            placeholder="Adicione seu n??vel"
            register={register}
          />
          <label for="Iniciante">Iniciante</label>
           <Input
            id="Intermedi??rio" 
            value="Intermedi??rio"
            type='radio'
            name="status"
            error=""
            placeholder="Adicione seu n??vel"
            register={register}
          />
          <label for="Intermedi??rio">Intermedi??rio</label>
           <Input
            id="Avan??ado" 
            value="Avan??ado"
            type='radio'
            name="status"
            error=""
            placeholder="Adicione seu n??vel"
            register={register}
          /><label for="Avan??ado">Avan??ado</label>
          <Button className='add' type="submit">Adicionar</Button>
        </section>
      </InputContainer>
      <TechsContainer>
      
        {tech ? 
        tech.map((item) => (
          <Card
            key={item.id}
            onClick={() => {
              removeTech(item.id);
            }}
            title={item.title}
            status={item.status}
          />
        ))
      :
      ""}
      </TechsContainer>
    </Container>
  );
};

export default Dashboard;
