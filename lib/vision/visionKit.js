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
      //是否是文本
      isText(dom){
        return  this.isString(dom) || typeof dom == "number"
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
     createEle(eleName){
         return document.createElement(eleName);
     }
     createText(text){
         return   document.createTextNode(text)
     }
     appendChildren(parent, children) {
      let len = children.length;
      if (len<=2) {
        parent.appendChild(children[0]);
        if (len===2) parent.appendChild(children[1]);
        return;
      }
    
      let frag = document.createDocumentFragment();
      for (let i=0; i<len; i++) frag.appendChild(children[i]);
      parent.appendChild(frag);
    }


     extend(sup,base) {
      var descriptor = Object.getOwnPropertyDescriptor(
        base.prototype,"constructor"
      );
      base.prototype = Object.create(sup.prototype);
      var handler = {
        construct: function(target, args) {
          var obj = Object.create(base.prototype);
          this.apply(target,obj,args);
          return obj;
        },
        apply: function(target, that, args) {
          sup.apply(that,args);
          base.apply(that,args);
        }
      };
      var proxy = new Proxy(base,handler);
      descriptor.value = proxy;
      Object.defineProperty(base.prototype, "constructor", descriptor);
      return proxy;
    }
}

export default VisionKit