/** Information on the screen size and position in the view port.

All units are in pixels.

*/
export namespace lucy {
  export interface Screen {
    width: number
    height: number
    top: number
    bottom: number
    left: number
    right: number
  }
}