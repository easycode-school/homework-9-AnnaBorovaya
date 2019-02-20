import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getData'
})
export class GetDataPipe implements PipeTransform {
  /**
   * transform - метод применяемый в качестве pipe к переменной dataComment- вычисляет разницу между моментом времени 'сейчас'
   * и моментом когда был оставлен комментарий
   * если комментарий был меньше минуты назад - на экран будет выводиться 'только что'
   * если комментарий был оставлен больше минуты назад и меньше часа назад - на экран будет выводиться колличество прошедших минут
   * если комментарий был оставлен больше часа назад и меньше 1 суток назад - на экран будет выводиться колличество прошедших часов
   * если комментарий был оставлен больше  1 суток назад - на экран будет выводиться колличество прошедших суток
   * @param value Date
   */
  transform(dataComment: Date): string {
    const options = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    };
    const dateNow = new Date();
    const res = +dateNow - (+dataComment);
    if(res < 60000) return 'Комментарий был оставлен только что';
    if(res >= 60000 && res < 3.6e+6) return 'Комментарий был оставлен ' + Math.round(res / 60000) + ' минут назад';
    if(res >= 3.6e+6 && res < 8.64e+7) return 'Комментарий был оставлен ' + Math.round(res / (3.6e+6)) + ' часа назад';
    if(res >= 8.64e+7) return 'Комментарий был оставлен ' + new Date(dataComment).toLocaleString("ru", options);
  }
}
