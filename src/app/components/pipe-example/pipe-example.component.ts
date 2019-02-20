import { Component, OnInit } from '@angular/core';
import { isDate } from 'util';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-pipe-example',
  templateUrl: './pipe-example.component.html',
  styleUrls: ['./pipe-example.component.css']
})
export class PipeExampleComponent implements OnInit {
  private dataComment: number;
  /* Задача № 1 */
  private toggleCategory = false;
  private toggleDirection = false;
  private category;
  private direction = 'up';
  private users = [
    {
      name: 'Irina',
      age: 25
    },
    {
      name: 'Valentina',
      age: 35
    },
    {
      name: 'Elena',
      age: 18
    },
    {
      name: 'Alyona',
      age: 30
    }
  ];

  constructor() { }

  ngOnInit() {
  }
  /**
   * onclickHandlerCategory - метод хендлер срабатывающий при нажатии на кнопку выбора категории сортировки
   * меняет значение тоглера и при его значении равном true переменнная category равна 'age'
   * при его значении равном false переменнная category равна undefined
   */
  onclickHandlerCategory() {
    this.toggleCategory = !this.toggleCategory;
    this.category = this.toggleCategory ? 'age' : undefined;
  }
  /**
   * onclickHandlerDirection - метод хендлер срабатывающий при нажатии на кнопку выбора направления сортировки
   * меняет значение тоглера и при его значении равном true переменнная direction равна 'down'- от большего к меньшему
   * при его значении равном false переменнная direction равна 'up' - от меньшего к большему
   * Данная кнопка не будет срабатывать пока не будет нажата кнопка 'Sort'
   */
  onclickHandlerDirection() {
    this.toggleDirection = !this.toggleDirection;
    this.direction = this.toggleDirection ? 'down' : 'up';
  }

  /*Задача № 2*/
  /**
   * handlerClick_1 - задание параметра Даты комментария в этот момент
   */
  handlerClick_1() {
    this.dataComment = Date.now();
  }
  /**
   * handlerClick_2 - задание параметра Даты комментария - 5 минут назад
   */
  handlerClick_2() {
    this.dataComment = +new Date() - 300000;
  }
  /**
   * handlerClick_2 - задание параметра Даты комментария - 2 часа назад
   */
  handlerClick_3() {
    this.dataComment = +new Date() - (7.2e+6);
  }
  /**
   * handlerClick_2 - задание параметра Даты более комментария - 1 суток назад
   */
  handlerClick_4() {
    this.dataComment = +new Date() - (8.64e+7);
  }
}
