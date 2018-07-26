import VisionTools from './visionTools'
class visionRender extends VisionTools {
     render(el,container){
        let vessel = this.getContainer(container);
            vessel.innerHTML = '';
            vessel.appendChild(el);
     }
    

     getContainer(container){
          if(this.isElemnet(container))
             return container
          if(this.isStirng(container))
             return document.getElementById(container)
     }
}
export default new visionRender