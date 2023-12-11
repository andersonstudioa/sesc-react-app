import { useState } from "react";
import { Grid, Typography } from '@mui/material';
import dataTeams from "../../../data/data-teams.json";
import "./style.css"

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
  deleteProject,
  editProject
  } ) {
  const [teams] = useState(dataTeams);

  const getNameTeamById = (id) => {
    const filteredTeam = teams.find((team) => team.id === id )
    return filteredTeam.name;
  }

  return (
    <>
      <Grid container>
        <Grid item xs={12} paddingBottom={2}>
          <Typography variant='h5' marginRight={2} display="inline">
            {title}
          </Typography>
          <Typography variant='body2' component="span" className={`project-${status}`}>
            {status}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='body2'>
            {description}
          </Typography>
        </Grid>
        <Grid item xs={12} paddingTop={2}>
          <Grid container>
            <Grid item xs={2}>
              <Typography variant='body2' fontStyle="oblique">
                Cliente
              </Typography>
              <Typography variant='body2' fontWeight="bold">
                {client}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant='body2' fontStyle="oblique">
                Equipe
              </Typography>
              <Typography variant='body2' fontWeight="bold">
                {getNameTeamById(idTeam)}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant='body2' fontStyle="oblique">
                Previsão
              </Typography>
              <Typography variant='body2' fontWeight="bold">
                {deadline}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant='body2' fontStyle="oblique">
                Início
              </Typography>
              <Typography variant='body2' fontWeight="bold">
                {startDate}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant='body2' fontStyle="oblique">
                Término
              </Typography>
              <Typography variant='body2' fontWeight="bold">
                {endDate}
              </Typography>
            </Grid>
            <Grid item xs={2} display="flex" justifyContent="flex-end">
              <div className='project-actions'>
                <button className='btn-edit' onClick={() => editProject(id)}>Editar</button>
                <button className='btn-delete' onClick={() => deleteProject(id)}>x</button>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <hr />
    </>
  )
}

export default Project;
