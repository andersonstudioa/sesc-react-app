import { Grid, Typography } from '@mui/material';

function Project( {
  id,
  title,
  description,
  client,
  idTeam,
  deadline,
  startDate,
  endDate,
  status,
  deleteProject
  } ) {
  return (
    <>
      <Grid
        container
      >
        <Grid item xs={12}>
          <Typography variant='body1'>
            {title}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='body1'>
            {description}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant='body1'>
            {client}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant='body1'>
            Equipe {idTeam}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant='body1'>
            Previsão {deadline}
          </Typography>
          <Typography variant='body1'>
            Início {startDate}
          </Typography>
          <Typography variant='body1'>
            Término {endDate}
          </Typography>
          <Typography variant='body1'>
            {status}
          </Typography>
        </Grid>
        <div className='task-actions'>
          <button className='btn-delete' onClick={() => deleteProject(id)}>x</button>
        </div>
      </Grid>
      <hr />
    </>
  )
}

export default Project;