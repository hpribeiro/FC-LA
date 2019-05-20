import { Component, OnInit, Input } from '@angular/core'
import { trigger, state, style, animate, transition } from '@angular/animations'

@Component({
  selector: 'app-image-slider',
  animations: [
    trigger('thumbState', [
      state(
        'inactive',
        style({
          opacity: 0,
          transform: 'scale(0.5)',
        })
      ),
      state(
        'active',
        style({
          opacity: 1,
          transform: 'scale(1)',
        })
      ),
      transition(
        'inactive => active',
        animate('500ms cubic-bezier(0.785, 0.135, 0.15, 0.86)')
      ),
      transition(
        'active => inactive',
        animate('500ms cubic-bezier(0.785, 0.135, 0.15, 0.86)')
      ),
    ]),
  ],
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss'],
})
export class ImageSliderComponent implements OnInit {
  // imagesInitial: any[] = [
  //   'https://img.honest.com/uploads/managed_assets/file/14957/Product-266-slide_with_zoom-d86487de-217a-4394-b5a2-756e3c42a075.jpg',
  //   'https://img.honest.com/uploads/managed_assets/file/14957/Product-266-slide_with_zoom-d86487de-217a-4394-b5a2-756e3c42a075.jpg',
  //   'https://img.honest.com/uploads/managed_assets/file/14957/Product-266-slide_with_zoom-d86487de-217a-4394-b5a2-756e3c42a075.jpg',
  //   'https://img.honest.com/uploads/managed_assets/file/14957/Product-266-slide_with_zoom-d86487de-217a-4394-b5a2-756e3c42a075.jpg',
  //   'https://img.honest.com/uploads/managed_assets/file/14957/Product-266-slide_with_zoom-d86487de-217a-4394-b5a2-756e3c42a075.jpg',
  //   'https://img.honest.com/uploads/managed_assets/file/14957/Product-266-slide_with_zoom-d86487de-217a-4394-b5a2-756e3c42a075.jpg',
  //   'https://img.honest.com/uploads/managed_assets/file/14957/Product-266-slide_with_zoom-d86487de-217a-4394-b5a2-756e3c42a075.jpg',
  //   'https://img.honest.com/uploads/managed_assets/file/14957/Product-266-slide_with_zoom-d86487de-217a-4394-b5a2-756e3c42a075.jpg',
  // ]
  @Input() imagesInitial: any[]
  @Input() itemsPerPage = 4
  @Input() rollDefaultInterval = 2000
  imagesChunked: any[]
  sliderControls: any
  FISRT_PAGE: any
  LAST_PAGE: any
  rollInterval: any
  constructor() {}

  ngOnInit() {
    this.startRoll()
    this.imagesChunked = this.chunk(this.imagesInitial, this.itemsPerPage)
    this.FISRT_PAGE = {
      previousPage: this.imagesChunked.length - 1,
      currentPage: 0,
      nextPage: 1,
    }

    this.LAST_PAGE = {
      previousPage: this.imagesChunked.length - 2,
      currentPage: this.imagesChunked.length - 1,
      nextPage: 0,
    }
    this.sliderControls = { ...this.FISRT_PAGE }
  }

  chunk(arr: any[], chunkSize = 1, cache = []): any[] {
    const tmp = [...arr]
    if (chunkSize <= 0) {
      return cache
    }
    while (tmp.length) {
      cache.push(tmp.splice(0, chunkSize))
    }
    return cache
  }

  goToNextPage() {
    const isLastPage =
      this.sliderControls.currentPage === this.imagesChunked.length - 1

    if (isLastPage) {
      this.sliderControls = { ...this.FISRT_PAGE }
    } else {
      ++this.sliderControls.currentPage
      ++this.sliderControls.previousPage
      ++this.sliderControls.nextPage
    }
  }

  goToPreviousPage() {
    const isFirstPage = this.sliderControls.currentPage === 0

    if (isFirstPage) {
      this.sliderControls = { ...this.LAST_PAGE }
    } else {
      --this.sliderControls.currentPage
      --this.sliderControls.previousPage
      --this.sliderControls.nextPage
    }
  }

  goToPage(newPage: number) {
    const isFirstPage = newPage === 0
    const isLastPage = newPage === this.imagesChunked.length - 1

    if (isLastPage) {
      this.sliderControls = { ...this.LAST_PAGE }
    } else if (isFirstPage) {
      this.sliderControls = { ...this.FISRT_PAGE }
    } else {
      this.sliderControls.currentPage = newPage
      this.sliderControls.previousPage = newPage - 1
      this.sliderControls.nextPage = newPage + 1
    }
  }

  previousPage(arr, index) {
    const lastIndex = arr.length - 1
    const newIndex = index === 0 ? lastIndex : --index
    const item = arr[newIndex]
    return [item, newIndex]
  }

  startRoll() {
    this.rollInterval = setInterval(() => {
      this.goToNextPage()
    }, this.rollDefaultInterval)
  }
  stopRoll() {
    window.clearInterval(this.rollInterval)
  }
}
