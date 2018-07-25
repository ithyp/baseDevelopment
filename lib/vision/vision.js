import VisionDom from './visionDom'
import visionRender  from './visionRender'

class Vision extends VisionDom{
        constructor(el,container){
                super()
                let  realDom = this.getRealDom(null,el)
                //渲染
                visionRender.render(realDom,container)
        }   
        
}

export default Vision