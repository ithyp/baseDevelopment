class VisionKit  {
     //是否是元素节点
      isElemnet(dom){
        return this.isObject(dom) &&  dom.nodeType === 1
     }
     //是否是一个对象
     isObject(dom){
        return typeof  dom === "object"
     }
    //是否是一个对象
    isFunction(dom){
      return typeof  dom === "function"
    }
     //是否是字符串
     isString(dom){
        return typeof  dom === "string"
     }
     //是否是dom的事件属性
     isDomEvent(dom,attrName){
           let eventName =  'on' + attrName.toLocaleLowerCase();
               if(eventName in   dom)
                return eventName
               else 
                return false 
     }
     //是否是类组件
     isClassComponent(component){
        return component.prototype.view != void 0
     }
     isFunctionComponent(component){
       return !this.isClassComponent(component)
     }   


     cloneObject(target,...obj){
       for( let  item of obj){
            for(let key   in  item){
              target[key] = item[key]
            }
       }
     }
}

export default VisionKit