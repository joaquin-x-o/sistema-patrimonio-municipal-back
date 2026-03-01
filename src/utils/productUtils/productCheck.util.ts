import { todayAR } from "../formattersUtils/localTimeFormat.util";

export function shouldBeChecked(lastCheckDate: string | null): boolean {

  const dayDifference = 180; // aproximadamente 6 meses

  if (!lastCheckDate) return true;

  const todayDate = new Date(`${todayAR()}T00:00:00`);
  const lastDate = new Date(`${lastCheckDate}T00:00:00`);

  const diffDays = (todayDate.getTime() - lastDate.getTime()) / 86400000;

  const result = diffDays >= dayDifference
  
  return result;
}