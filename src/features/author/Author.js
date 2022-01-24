import React from "react";
import Container from "../../common/Container";
import Section from "../../common/Section";
import Header from "../../common/Header";

export default () => (
  <Container>
      <Header title="A propos de l'auteur" />
      <Section 
        title="Nikita Rysiev" 
        body={
          <p contentEditable>
            <p>vous pouvez modifier le texte ci-dessous</p>
            <p>Hé ! Je m'appelle Nick et je suis un développeur junior front-end (React) débutant et 👶 testeur de logiciels manuel junior avec introduction à l'automatisation.
             Ma langue maternelle est le russe, mais j'apprends et pratique plus l'anglais, le polonais et un peu l'allemand.</p> 
            <p>Maintenant, j'essaie d'étudier les tests de logiciels et le codage d'applications Web simples.</p>
            <p>Je veux savoir très bien coder et parler anglais pour être utile sur le marché du travail. 
            </p>
          </p>
          } 
        />
  </Container>
);