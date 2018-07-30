import  VisionKit from './visionKit'
class VisionBase  extends VisionKit {
    decoratorComponent(cp,attrs){
             let self = this

             function decorator(attr){
                cp.call(this,attr)
                if(self.isFunctionComponent(cp))
                    cp.prototype.view = cp;
                
                else{
                        let options =  this.options()
                        self.cloneObject(this,this,options.props,options.methods,options.data)
                        self.setComponentProps(this,options.props,attrs)
                }
                this.rander(attr);

             }
             decorator.prototype = cp.prototype
             decorator.prototype.constructor  = cp;
             decorator.prototype.rander = function(attr){
                      this.__realView__ =   self.getRealDom(null, this.view(attr))
             }
        //      console.log(decorator,'===============================')

               return decorator
        
    }
    setComponentProps(target,props,attr){
            for(let item in attr){
                    if(item in  props)
                    target[item] =  attr[item]
            }
    }
    createComponent(cp,attrs){
       let decoratorComponent =  new  (this.decoratorComponent(cp,attrs))(attrs)

           return    decoratorComponent.__realView__   

    }
}

export default  VisionBase