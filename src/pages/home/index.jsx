import { Card, Container, Grid } from "@mui/material";

function HomePage() {
  return (
    <Container
      maxWidth="md"
      sx={{
        marginY: '20px'
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        spacing={2}
      >
        <Grid
          item
          lg={12}
        >
          <Card>
            <h1>Página Inicial</h1>
          </Card>
        </Grid>
        <Grid
          item
          lg={4}
        >
          <Card>
            Seja bem vindo
          </Card>
        </Grid>
        <Grid
          item
          lg={4}
        >
          <Card>
            Tarefa
          </Card>
        </Grid>
        <Grid
          item
          lg={4}
        >
          <Card>
            Projetos
          </Card>
        </Grid>
      </Grid> 
    </Container>
  )
}
  
export default HomePage;