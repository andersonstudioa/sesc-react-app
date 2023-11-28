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
          <Typography variant='h5'>
            {title || ''}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='body2'>
            {description || ''}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant='body2'>
            Cliente: {client || ''}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant='body2'>
            Equipe: {idTeam || ''}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant='body2'>
            Previsão: {deadline || ''}
          </Typography>
          <Typography variant='body2'>
            Início: {startDate || ''}
          </Typography>
          <Typography variant='body2'>
            Término: {endDate || ''}
          </Typography>
          <Typography variant='body2'>
            {status || ''}
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <div className='task-actions'>
            <button className='btn-delete' onClick={() => deleteProject(id)}>x</button>
          </div>
        </Grid>
      </Grid>
      <hr />
    </>
  )
}

export default Project;