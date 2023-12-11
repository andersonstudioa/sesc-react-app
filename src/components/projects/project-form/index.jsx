import dataTeams from "../../../data/data-teams.json";
import { useState, useEffect } from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { ptBR } from "date-fns/locale";
import { format } from "date-fns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Box, Button, MenuItem, TextField, Typography } from "@mui/material";

function ProjectForm({ addProject, projectToBeEdited, setProjectToBeEdited }) {
  const [teams] = useState(dataTeams);
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentDescription, setCurrentDescription] = useState("");
  const [currentStartDate, setCurrentStartDate] = useState(null);
  const [currentDeadline, setCurrentDeadline] = useState(null);
  const [currentEndDate, setCurrentEndDate] = useState(null);
  const [currentClient, setCurrentClient] = useState("");
  const [currentStatus, setCurrentStatus] = useState("todo");
  const [currentTeam, setCurrentTeam] = useState("");

  function clearFields() {
    setCurrentTitle("");
    setCurrentDescription("");
    setCurrentStartDate(null);
    setCurrentDeadline(null);
    setCurrentEndDate(null);
    setCurrentClient("");
    setCurrentStatus("");
    setCurrentTeam("");
  }

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
      currentTeam,
    );

    clearFields();

    if (projectToBeEdited) {
      alert("Projeto alterado com sucesso!");
    } else {
      alert("Projeto cadastrado com sucesso!");
    }
  };

  useEffect(() => {
    if (projectToBeEdited) {
      setCurrentTitle(projectToBeEdited.title);
      setCurrentDescription(projectToBeEdited.description);
      setCurrentClient(projectToBeEdited.client);
      setCurrentStatus(projectToBeEdited.status);
      setCurrentTeam(projectToBeEdited.idTeam);
      setCurrentStartDate(projectToBeEdited.startDate ? new Date(projectToBeEdited.startDate) : null,);
      setCurrentEndDate(projectToBeEdited.endDate ? new Date(projectToBeEdited.endDate) : null,);
      setCurrentDeadline(new Date(projectToBeEdited.deadline));
    }
  }, [projectToBeEdited]);

  let titleRegister, buttonCancel;
  let buttonRegion;

  buttonCancel = (
    <Button
      sx={{ borderRadius: 20, marginX: 2 }}
      color="error"
      variant="contained"
      onClick={() => {
        clearFields("");
        setProjectToBeEdited(null);
      }}
    >
      Cancelar
    </Button>
  );
  const buttonRegister = (text) => (
    <Button
      sx={{ borderRadius: 20 }}
      color="success"
      variant="contained"
      type="submit"
    >
    {text}
    </Button>
  );

  if (projectToBeEdited) {
    buttonRegion = (
      <Box>
        {buttonRegister("Confirmar")}
        {buttonCancel}
      </Box>
    );
    titleRegister = (
      <h1>
        Alterar Projeto
      </h1>
    );
  } else {
    buttonRegion = <Box>{buttonRegister("Cadastrar")}</Box>;
    titleRegister = (
      <h1>
        Cadastrar Projeto
      </h1>
    );
  }

  return (
    <section className="section-main">
      <div className="container-card">
        <Box
          sx={{
            "& .MuiTextField-root": { marginY: 1 },
          }}
        >
          {titleRegister}
          <hr />
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Título"
              variant="outlined"
              value={currentTitle}
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
            <Box
              sx={{
                display: "flex",
                gap: {
                  xs: "0",
                  sm: "0",
                  md: "1em",
                  lg: "1em",
                  xl: "1em",
                },
                flexDirection: {
                  xs: "column",
                  sm: "column",
                  md: "row",
                  lg: "row",
                  xl: "row",
                },
              }}
            >
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
            {buttonRegion}
          </form>
        </Box>
      </div>
    </section>
  );
}

export default ProjectForm;
