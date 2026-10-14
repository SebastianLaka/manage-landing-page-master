export interface ImageProps{
    src: string
    alt: string
}
export interface SliderItem {
  id: number
  reviewerName: string
  content: string
  reviewerImage: ImageProps
}