/* eslint-disable @typescript-eslint/ban-types */

/** Dispatch event on click outside of a HTMLElement */
export function clickOutside(element: HTMLElement, callbackFunction: Function) {
    function onClick(event: Event) {
      if (element && !element.contains(event.target as HTMLElement) && !event.defaultPrevented)
        callbackFunction();
    }
    
    document.body.addEventListener('click', onClick);
    
    return {
      update(newCallbackFunction: Function) {
        callbackFunction = newCallbackFunction;
      },
      destroy() {
        document.body.removeEventListener('click', onClick);
      }
    }
}