import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(minutos: number): any {
    const leyenda = (numero: any, palabra: any, plural: any) => numero === 0 || numero > 1 ? `${numero} ${palabra}${plural || "s"}` : `${numero} ${palabra}`;
    const MINUTOS_POR_HORA = 60,
        HORAS_POR_DIA = 24,
        DIAS_POR_SEMANA = 7,
        DIAS_POR_MES = 30,
        MESES_POR_ANIO = 12;
    if (minutos < MINUTOS_POR_HORA) return leyenda(minutos, "minuto", "s");
    let horas = Math.floor(minutos / MINUTOS_POR_HORA),
        minutosSobrantes = minutos % MINUTOS_POR_HORA;
    if (horas < HORAS_POR_DIA) return leyenda(horas, "hora", "s") + (minutosSobrantes > 0 ? ", " + this.transform(minutosSobrantes) : "");
    let dias = Math.floor(horas / HORAS_POR_DIA);
    minutosSobrantes = minutos % (MINUTOS_POR_HORA * HORAS_POR_DIA);
    if (dias < DIAS_POR_SEMANA) return leyenda(dias, "día", "s") + (minutosSobrantes > 0 ? ", " + this.transform(minutosSobrantes) : "");
    let semanas = Math.floor(horas / (HORAS_POR_DIA * DIAS_POR_SEMANA));
    minutosSobrantes = minutos % (MINUTOS_POR_HORA * HORAS_POR_DIA * DIAS_POR_SEMANA);
    if (dias < DIAS_POR_MES) return leyenda(semanas, "semana", "s") + (minutosSobrantes > 0 ? ", " + this.transform(minutosSobrantes) : "");
    let meses = Math.floor(horas / (HORAS_POR_DIA * DIAS_POR_MES));
    minutosSobrantes = minutos % (MINUTOS_POR_HORA * HORAS_POR_DIA * DIAS_POR_MES);
    if (meses < MESES_POR_ANIO) return leyenda(meses, "mes", "es") + (minutosSobrantes > 0 ? ", " + this.transform(minutosSobrantes) : "");
    let anios = Math.floor(horas / (HORAS_POR_DIA * DIAS_POR_MES * MESES_POR_ANIO));
    minutosSobrantes = minutos % (MINUTOS_POR_HORA * HORAS_POR_DIA * DIAS_POR_MES * MESES_POR_ANIO);
    return leyenda(anios, "año", "s") + (minutosSobrantes > 0 ? ", " + this.transform(minutosSobrantes) : "");
  }

}
