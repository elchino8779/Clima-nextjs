import { NextResponse } from 'next/server';

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const lat = searchParams.get('lat');
  const lon = searchParams.get('lon');

  try {
    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}&units=metric&lang=es`
    );
    const json = await data.json();

    const dataForecasts = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}&units=metric&lang=es`
    );
    const jsonForecasts = await dataForecasts.json();

    return NextResponse.json({ actualyDay: json, forecasts: jsonForecasts });
  } catch (error) {
    return NextResponse.error(error);
  }
};
