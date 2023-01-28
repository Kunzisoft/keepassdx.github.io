import { Component, HostListener, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SimpleIcon } from 'simple-icons';
import * as icons from 'simple-icons';

@Component({
  selector: 'app-select-icons',
  templateUrl: './select-icons.component.html',
  styleUrls: ['./select-icons.component.sass']
})
export class SelectIconsComponent implements OnInit {

  innerWidth: number = 0
  images: SimpleIcon[] = []
  page: number = 1
  pageSize: number = 6
  maxPagination: number = 6
  searchText = ''
  pngIconSize = 128

  constructor(private sanitizer: DomSanitizer) { 
  }

  ngOnInit() {
    this.setPageSize()
    this.page = Math.random() * (this.images.length / this.pageSize)
      Object.values(icons).map((value) => {
        this.images.push(value)
      })
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.setPageSize()
  }

  private setPageSize() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth < 576) {
      this.pageSize = 1
      this.maxPagination = 2
    }
    else if (this.innerWidth < 768) {
      this.pageSize = 2
      this.maxPagination = 3
    }
    else if (this.innerWidth < 992) {
      this.pageSize = 3
      this.maxPagination = 4
    }
    else {
      this.pageSize = 4
      this.maxPagination = 5
    }
  }

  private addColorToSVG(item: SimpleIcon) {
    if (!item.svg.includes('path fill')) {
      item.svg = item.svg.replace('path', 'path fill="#'+item.hex+'"')
    }
  }

  private addWidthToSVG(item: SimpleIcon, width: number) {
    if (!item.svg.includes('width')) {
      item.svg = item.svg.replace('xmlns=', 'width="'+width+'" height="'+width+'" xmlns=')
    }
  }

  showIcon(item: SimpleIcon): SafeResourceUrl {
    var newItem: SimpleIcon = Object.assign({}, item);
    this.addColorToSVG(newItem)
    return this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/svg+xml, ${encodeURIComponent(newItem.svg)}`)
  }

  downloadPNGIcon(item: SimpleIcon, size: number) {
    var newItem: SimpleIcon = Object.assign({}, item);
    this.addColorToSVG(newItem)
    this.addWidthToSVG(newItem, size)
    let canvas = document.createElement('canvas')
    let context = canvas.getContext('2d')
    canvas.width = size
    canvas.height = size
    let win = window.URL || window.webkitURL || window;
    let img = new Image();
    let blob = new Blob([newItem.svg], { type: 'image/svg+xml' });
    let url = win.createObjectURL(blob);
    img.onload = function () {
      context?.drawImage(img, 0, 0);
      win.revokeObjectURL(url);
      let uri = canvas.toDataURL('image/png').replace('image/png', 'octet/stream');
      let a = document.createElement('a');
      document.body.appendChild(a);
      a.href = uri
      a.download = newItem.title + '.png';
      a.click();
      window.URL.revokeObjectURL(uri);
      document.body.removeChild(a);
    };
    img.src = url;
  }

}
