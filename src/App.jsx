import './App.css'

import React from 'react'

import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

class Imc extends React.Component {

  constructor(props) {
    super(props);
    this.setPeso = this.setPeso.bind(this);
    this.setAltura = this.setAltura.bind(this);
    this.resultado = this.resultado.bind(this);
    this.state = {
      peso: null,
      altura: null
        masculino: true or false
        maior: true or false
    };
  }

  setPeso(event) {
    this.setState({ peso: event.target.value });
  }

  setAltura(event) {
    this.setState({ altura: event.target.value });
  }

setMasculino(event) {
    this.setState({ masculino: event.target.value });
  }

setMaior(event) {
    this.setState({ maior: event.target.value });
  }

  calcular() {
    let peso = this.state.peso;
    let altura = this.state.altura;
    if (peso && altura) {
      return peso / Math.pow(altura, 2);
    }
  }

  resultado() {
    let resultado = new String();
    let imc = this.calcular();
    if (imc) {
      resultado += imc.toFixed(2) + " - ";
      let masculino = this.state.masculino;
      let maior = this.state.maior;
      if (maior) {
        resultado += this.tipo(imc, 18.5, 24.9, 29.9, 34.9, 39.9);
      }
      else if (masculino) {
      resultado += this.tipo(imc, 17.8, 26.4, 30.6, 34.9, 39.9);
      } else {
        resultado += this.tipo(imc, 16.9, 25.9, 30.7, 34.9, 39.9);
      }
    return resultado;
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h5">
              Calculadora de IMC
            </Typography>
            <Typography
              onChange={this.setPeso}
              margin="normal"
              required
              fullWidth
              id="peso"
              label="Peso"
              name="peso"
              type="number"
              InputProps={{
                startAdornment:
                  <InputAdornment position="start">kg</InputAdornment>,
              }}
            />
            <TextField
              onChange={this.setAltura}
              margin="normal"
              required
              fullWidth
              id="altura"
              label="Altura"
              name="altura"
              type="number"
              InputProps={{
                startAdornment:
                  <InputAdornment position="start">m</InputAdornment>,
              }}
            />
            <Typography component="h1" variant="h6">
              {this.resultado()}
            </Typography>
          </Box>
        </Container>
      </ThemeProvider>
    );
  }
}

export default function App() {
  return (
    <Imc />
  );
}