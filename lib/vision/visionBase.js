import  VisionKit from './visionKit'
class VisionBase  extends VisionKit {
    decoratorComponent(cp,attrs){
             let self = this

  
          var proxy =   this.extend(cp,function(attr){
                cp.call(this,attr)
                if(self.isFunctionComponent(cp))
                    cp.prototype.view = cp;
                
                else{
                        let options =  this.options()
                        self.cloneObject(this,this,options.props,options.methods,options.data)
                        self.setComponentProps(this,options.props,attrs)
                }
             }) 
             proxy.prototype = cp.prototype
             proxy.prototype.constructor  = cp;
             proxy.prototype.rander = function(attr){
                      if(this.__realView__ ){
                         let oldRealView =  this.__realView__
                         let parentNode =   oldRealView.parentNode;
                      console.log('==========================',this.view(attr)) 

                        this.__realView__ =    self.getRealDom(null, this.view(attr))

                        self.diff(oldRealView,this.view(attr));
                        // parentNode.replaceChild(this.__realView__,oldRealView)

                      
                        return void 0 ;
                      }

                      this.__realView__ =   self.getRealDom(null, this.view(attr))

             }
 
               return proxy;
        
    }
    //新旧dom对比
    diff(_old_,_new_){
        //     if( !this.isText(_old_)){
        //         console.log(_old_);
                
        //     }else if(_old_.tagName.toLocaleLowerCase() == _new_.tag){

        
        //     }
        //     for(let  item in  _old_.children){
        //         this.diff( _old_.children[item], _new_.children || _new_.children[item])
        //     }

    }
    setComponentProps(target,props,attr){
            for(let item in attr){
                    if(item in  props)
                    target[item] =  attr[item]
            }
    }
    createComponent(cp,attrs){
                
       let decoratorComponent =    new Proxy(  new  (this.decoratorComponent(cp,attrs))(attrs), {
        set: function(obj, prop, value) {
                let oldPropValue =  obj[prop]
                obj[prop] = value

                // clearTimeout(this.timeoutQuote)
               if(oldPropValue!= value && prop!= '__realView__'){
                // this.timeoutQuote =  setTimeout(()=>{
                     
                        decoratorComponent.rander(attrs)
                  
                // },200)
               }
      
           return true;
        }
      } ) 
      decoratorComponent.rander(attrs)
      

           return    decoratorComponent.__realView__   

    }
}

export default  VisionBase