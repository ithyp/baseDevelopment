import VisionDom from './visionDom'
import visionRender  from './visionRender'

class Vision extends VisionDom{
        constructor(el,container){
                super()
                //渲染
                visionRender.render(el,container)
        }   
        
}

export default Vision