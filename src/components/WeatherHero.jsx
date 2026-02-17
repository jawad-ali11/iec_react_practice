
import React, { useState } from "react";
import { TextField, Button, Typography, Card, CardContent, Container, CircularProgress, Box, Paper } from "@mui/material";
import { useWeather } from '../hooks/useWeather';


const WeatherHero = () => {
  const [city, setCity] = useState("");
  const { weather, fetchWeather, loading, error } = useWeather();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: { xs: 2, md: 6 },
      }}
    >
      <Paper
        elevation={8}
        sx={{
          p: { xs: 3, md: 6 },
          borderRadius: 5,
          minWidth: { xs: 340, md: 500 },
          maxWidth: { xs: 420, md: 600 },
          width: '100%',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)',
        }}
      >
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 800,
            color: '#1976d2',
            letterSpacing: 1,
            fontSize: { xs: '2rem', md: '2.8rem' },
          }}
        >
          Weather App
        </Typography>

        <TextField
          label="Enter city name"
          variant="outlined"
          fullWidth
          value={city}
          onChange={(e) => setCity(e.target.value)}
          sx={{ mb: 3, background: '#f5faff', borderRadius: 1, fontSize: { xs: 16, md: 20 } }}
          InputProps={{ style: { fontSize: 18, padding: 10 } }}
        />

        <Button
          variant="contained"
          color="primary"
          fullWidth
          size="large"
          sx={{ mb: 2, fontWeight: 700, letterSpacing: 1, fontSize: { xs: 16, md: 20 }, py: 1.5 }}
          onClick={() => fetchWeather(city)}
        >
          Get Weather
        </Button>

        {loading && (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <CircularProgress size={36} />
          </Box>
        )}

        {error && (
          <Typography color="error" align="center" sx={{ mt: 2, fontWeight: 600, fontSize: { xs: 15, md: 18 } }}>
            {error}
          </Typography>
        )}

        {weather && (
          <Card
            sx={{
              mt: 4,
              background: 'linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)',
              boxShadow: 4,
              borderRadius: 3,
              px: { xs: 1, md: 3 },
            }}
          >
            <CardContent>
              <Typography variant="h4" align="center" sx={{ fontWeight: 800, color: '#1976d2', fontSize: { xs: '1.3rem', md: '2rem' } }}>
                {weather.name}
              </Typography>
              <Typography variant="h2" align="center" sx={{ fontWeight: 800, color: '#333', mt: 1, fontSize: { xs: '2.2rem', md: '3.2rem' } }}>
                {weather.main.temp}°C
              </Typography>
              <Typography variant="subtitle1" align="center" sx={{ color: '#555', textTransform: 'capitalize', mt: 1, fontSize: { xs: 16, md: 20 } }}>
                {weather.weather[0].description}
              </Typography>
            </CardContent>
          </Card>
        )}
      </Paper>
    </Box>
  );
};

export default WeatherHero;
