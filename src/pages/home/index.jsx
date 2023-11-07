import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Footer } from "../../components";

function HomePage() {
  return (
    <>
    <Container
      maxWidth="md"
      sx={{
        marginY: "20px",
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={2}
      >
        <Grid item lg={12}>
          <Card>
            <Typography variant="h1" fontSize={30} padding={3}>
              Introdução ao Desenvolvimento Front-end com React
            </Typography>
          </Card>
        </Grid>
        <Grid item lg={4}>
          <Card>
            <CardMedia
              sx={{ height: 140 }}
              image="https://picsum.photos/id/1/600/600"
              title="O Curso"
            />
            <CardContent>
              <Typography variant="h5">Nosso curso</Typography>
              <Typography variant="body2">
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
                display: "flex",
                justifyContent: "center",
                paddingBottom: 4,
              }}
            >
              <Link
                className="btn-close"
                to="https://github.com/andersonstudioa/sesc-react-app"
                target="_blank"
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
              image="https://picsum.photos/id/2/600/600"
              title="O Curso"
            />
            <CardContent>
              <Typography variant="h5">Projetos</Typography>
              <Typography variant="body2">
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
                display: "flex",
                justifyContent: "center",
                paddingBottom: 4,
              }}
            >
              <Link
                className="btn-close"
                to="/projects"
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
              image="https://picsum.photos/id/3/600/600"
              title="O Curso"
            />
            <CardContent>
              <Typography variant="h5">Tarefas</Typography>
              <Typography variant="body2">
                Em gerenciamento de projetos, uma tarefa é uma atividade que
                precisa ser realizada dentro de um período de tempo definido ou
                por um prazo. Uma tarefa pode ser dividida em atribuições que
                também devem ter uma data de início e fim definidas ou um prazo
                para a conclusão.
              </Typography>
            </CardContent>
            <CardActions
              sx={{
                display: "flex",
                justifyContent: "center",
                paddingBottom: 4,
              }}
            >
              <Link
                className="btn-close"
                to="/tasks"
              >
                Gerenciar Tarefas
              </Link>
            </CardActions>
          </Card>
        </Grid>
        
      </Grid>
    </Container>
    <Footer />
    </>
  );
}

export default HomePage;
