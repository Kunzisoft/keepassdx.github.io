import { Pipe, PipeTransform } from '@angular/core';
import { SimpleIcon } from 'simple-icons';

@Pipe({ name: 'searchIconFilter' })
export class FilterPipe implements PipeTransform {
  /**
   * Transform
   *
   * @param {SimpleIcon[]} items
   * @param {string} searchText
   * @returns {SimpleIcon[]}
   */
  transform(items: SimpleIcon[], searchText: string): SimpleIcon[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      return it.title.toLocaleLowerCase().includes(searchText);
    });
  }
}