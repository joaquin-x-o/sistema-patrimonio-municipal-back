
// el sistema está hecho para la región de Argentina, por lo que las fechas se crearán en dicha región
export function todayAR(): string {
  const currentArgTime = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'America/Argentina/Buenos_Aires',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).format(new Date());

  return currentArgTime
}