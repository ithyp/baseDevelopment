import tools from './visionTools'
let visionRender = {
    render:(el,container)=>{
        let vessel = visionRender.getContainer(container);
        console.log(vessel)
     },

     getContainer(container){
          if(tools.isElemnet(container))
             return container
          if(tools.isStirng(container))
             return document.getElementById(container)
     }
}
export default visionRender