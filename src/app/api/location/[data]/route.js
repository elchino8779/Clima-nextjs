import { NextResponse } from 'next/server';

export const GET = async (req, { params }) => {
  const location = params.data;
  try {
    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.API_KEY}&units=metric&lang=es`
    );
    const json = await data.json();
    const lat = json.coord.lat;
    const lon = json.coord.lon;

    const dataForecasts = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}&units=metric&lang=es`
    );
    const jsonForecasts = await dataForecasts.json();

    return NextResponse.json({ actualyDay: json, forecasts: jsonForecasts });
  } catch (error) {
    return NextResponse.error(error);
  }
};
