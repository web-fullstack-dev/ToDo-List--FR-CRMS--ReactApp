import React from 'react';
import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Projects from "../../../common/Projects";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import Search from "./Search";

function TasksPage() {

  return (
    <Container>
      <Projects />
      <Header title="Liste de choses à faire" />
      <Section 
        title="Ajouter une nouvelle tâche" 
        body={<Form />} 
        />
        <Section 
        title="Moteur de recherche" 
        body={<Search />} 
        />
      <Section 
        title="Liste de choses à faire"
        body={<TaskList />}
        extraHeaderContent={<Buttons />}
        />
  </Container>
  );
};


export default TasksPage;
