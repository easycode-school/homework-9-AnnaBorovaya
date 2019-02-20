import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeExample'
})
export class PipeExamplePipe implements PipeTransform {
  /**
   * transform - метод-Pipe который применяется  к переменной users принимает
   * @param value Array<object> - массив users
   * @param category string - значение по которому сортировать. Оно может быть любым, но на примере взято 'age'.
   * Условия if (category === '...') можно добавить. Кроме того это значение может отсутствовать, тогда возвращается исходный массив
   * @param direction string- может принимать значения 'up'-сортировка от меньше к большему и 'down' - сортировка от большего к меньшему
   */
  transform(users: Array<any>, category: string, direction: string): Array<any> {
    if (!category) return users;
    if (direction === 'up') {
      if (category === 'age') return users.slice().sort((a, b) => a.age - b.age);
    } else if (direction === 'down') {
      if (category === 'age') return users.slice().sort((a, b) => b.age - a.age);
    }
  }
}
