import dataTeams from "../../../data/data-teams.json";
import { useState } from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { ptBR } from "date-fns/locale";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Box, MenuItem, TextField } from "@mui/material";
import { useContext } from "react";
import { ProjectContext } from '../../../context/project-context';

function ProjectForm({ addProject }) {
  const {edit } = useContext(ProjectContext);

  const [teams] = useState(dataTeams);
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentDescription, setCurrentDescription] = useState("");
  const [currentStartDate, setCurrentStartDate] = useState(null);
  const [currentDeadline, setCurrentDeadline] = useState(null);
  const [currentEndDate, setCurrentEndDate] = useState(null);
  const [currentClient, setCurrentClient] = useState("");
  const [currentStatus, setCurrentStatus] = useState("todo");
  const [currentTeam, setCurrentTeam] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); //Impede o navegador de recarregar a página
    //Validação dos campos
    if (
      !currentTitle ||
      !currentDescription ||
      !currentDeadline ||
      !currentClient ||
      !currentTeam
    ) {
      alert("Todos os campos são obrigatórios!");
      return;
    }
    //Adicionar uma nova tarefa à lista de tarefas
    addProject(
      currentTitle,
      currentDescription,
      currentStartDate,
      currentDeadline,
      currentEndDate,
      currentClient,
      currentStatus,
      currentTeam
    );
    setCurrentTitle("");
    setCurrentDescription("");
    setCurrentStartDate(null);
    setCurrentDeadline(null);
    setCurrentEndDate(null);
    setCurrentClient("");
    setCurrentTitle("");
    setCurrentStatus("");
    setCurrentTeam("");

    alert("Projeto cadastrado com sucesso!");
  };

  return (
    <section className="section-main">
      <div className="container-card">
        <Box
          sx={{
            "& .MuiTextField-root": { marginY: 1 },
          }}
        >
          <h1>Cadastrar projeto</h1>
          <hr />
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Título"
              variant="outlined"
              value={ edit ? 'Editar' : currentTitle }
              onChange={(event) => setCurrentTitle(event.target.value)}
            />
            <TextField
              fullWidth
              name="description"
              id="description"
              placeholder="Digite a descrição do projeto"
              value={currentDescription}
              label="Descrição"
              multiline
              rows={6}
              onChange={(event) => setCurrentDescription(event.target.value)}
            />
            <TextField
              fullWidth
              id="outlined-basic"
              label="Cliente"
              variant="outlined"
              value={currentClient}
              onChange={(event) => setCurrentClient(event.target.value)}
            />
            <TextField
              select
              fullWidth
              label="Equipe"
              name="team"
              id="team"
              value={currentTeam}
              onChange={(event) => setCurrentTeam(event.target.value)}
            >
              <MenuItem value="">Selecione uma equipe</MenuItem>
              {teams &&
                teams.map((team) => {
                  return (
                    <MenuItem key={team.id} value={team.id}>
                      {team.name}
                    </MenuItem>
                  );
                })}
            </TextField>
            <Box sx={{
              display: 'flex',
              gap: {
                xs: '0',
                sm: '0',
                md: '1em',
                lg: '1em',
                xl: '1em',
              },
              flexDirection: {
                xs: 'column',
                sm: 'column',
                md: 'row',
                lg: 'row',
                xl: 'row',
              }
              }}>
              <LocalizationProvider
                adapterLocale={ptBR}
                dateAdapter={AdapterDateFns}
              >
                <DatePicker
                  id="startDate"
                  label="Data de início"
                  value={currentStartDate}
                  onChange={(event) => setCurrentStartDate(event)}
                />
              </LocalizationProvider>
              <LocalizationProvider
                adapterLocale={ptBR}
                dateAdapter={AdapterDateFns}
              >
                <DatePicker
                  id="endDate"
                  label="Data de finalização"
                  value={currentEndDate}
                  onChange={(event) => setCurrentEndDate(event)}
                />
              </LocalizationProvider>
              <LocalizationProvider
                adapterLocale={ptBR}
                dateAdapter={AdapterDateFns}
              >
                <DatePicker
                  id="deadline"
                  label="Previsão de entrega"
                  value={currentDeadline}
                  onChange={(event) => setCurrentDeadline(event)}
                />
              </LocalizationProvider>
            </Box>
            <hr />
            <button className="btn-register" type="submit">
              Cadastrar
            </button>
          </form>
        </Box>
      </div>
    </section>
  );
}

export default ProjectForm;
