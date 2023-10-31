import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
  CardActions,
} from "@mui/material";

import { Link } from "react-router-dom";

function HomePage() {
  return (
    <Container
      maxWidth="md"
      sx={{
        marginY: "20px",
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        spacing={2}
      >
        <Grid item lg={12}>
          <Card>
            <Typography
              variant="h1"
              fontSize={30}
              padding={3}
            >
              Introdução ao Desenvolvimento
              Front-end com React
            </Typography>
          </Card>
        </Grid>
        <Grid item lg={4}>
          <Card>
            <CardMedia
              sx={{ height: 140 }}
              image="https://picsum.photos/id/1/200/300"
              title="Bem-vindo"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Nosso curso
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Este curso convida diferentes públicos a experimentarem o React,
                uma das bibliotecas JavaScript mais utilizadas na atualidade.
                Durante as aulas, vamos explorar o potencial da criação de
                componentes dinâmicos e construir uma aplicação do zero a partir
                das boas práticas de desenvolvimento front-end e do consumo de
                APIs.
              </Typography>
            </CardContent>
            <CardActions
              sx={{
                display: 'flex',
                justifyContent: 'center',
                paddingBottom: 4
              }}
            >
              <Link
                to='https://github.com/andersonstudioa/sesc-react-app'
                className="btn-close"
              >
                Repositório
              </Link>
            </CardActions>
          </Card>
        </Grid>
        <Grid item lg={4}>
          <Card>
            <CardMedia
              sx={{ height: 140 }}
              image="https://picsum.photos/id/3/200/300"
              title="Bem-vindo"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Projetos
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Um projeto em negócio e ciência é normalmente definido como um
                empreendimento, frequentemente envolvendo pesquisa ou desenho,
                que tem como objetivo alcançar um resultado exclusivo. Em geral
                um projeto possui três características fundamentais: tempo
                (início e fim), recursos (pessoas, ferramentas etc) e trata de
                algo que não existia anteriormente.
              </Typography>
            </CardContent>
            <CardActions
              sx={{
                display: 'flex',
                justifyContent: 'center',
                paddingBottom: 4
              }}
            >
              <Link
                to='/projects'
                className="btn-close"
              >
                Gerenciar Projetos
              </Link>
            </CardActions>
          </Card>
        </Grid>
        <Grid item lg={4}>
          <Card>
            <CardMedia
              sx={{ height: 140 }}
              image="https://picsum.photos/id/4/200/300"
              title="Bem-vindo"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Tarefas
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Em gerenciamento de projetos, uma tarefa é uma atividade que
                precisa ser realizada dentro de um período de tempo definido ou
                por um prazo. Uma tarefa pode ser dividida em atribuições que
                também devem ter uma data de início e fim definidas ou um prazo
                para a conclusão.
              </Typography>
            </CardContent>
            <CardActions
              sx={{
                display: 'flex',
                justifyContent: 'center',
                paddingBottom: 4
              }}
            >
              <Link
                to='/tasks'
                className="btn-close"
              >
                Gerenciar Tarefas
              </Link>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default HomePage;
