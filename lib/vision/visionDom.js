import VisionTools  from './visionTools'

class  VisionDom extends VisionTools  {
    static createElement(tag,attrs,...children){

        return {
            tag,
            attrs,
            children
        }      

    }
     getRealDom(parent,virtualObject){
        let vo =  virtualObject;
        let current = null;
        
         if(this.isObject(vo)){
             console.log(vo,'==========================')
             if(this.isString(vo.tag)){
                current = document.createElement(vo.tag);
                this.setElementAttr(current,vo.attrs);       
             }else if(this.isObject(vo.tag)){
                 current = document.createElement(vo.tag.tag);
                 this.setElementAttr(current,vo.tag.attrs);  
                 vo = vo.tag;
                 //组件
             }else if(this.isFunction(vo.tag)){
                //isFunctionComponent
                //isClassComponent 判断操作

                
                current = this.getRealDom(null ,vo.tag(vo.attrs))
                    // console.log(vo.tag,'======================')
             }
         }else if(this.isString(vo)){
            current = document.createTextNode(vo)
         }

         console.log(parent);
         if(parent){
            parent.appendChild(current)
         }
         if(vo.children && vo.children.length){
            for(let child  of vo.children){
                this.getRealDom(current,child)
            }
         }
         return  current
     }



    setElementAttr(dom,attr){
            for(let item in attr){
                 let attrName = item.toLocaleLowerCase();
                 let attrValue = attr[item];
                 let eventName = this.isDomEvent(dom,attrName);
                 if( eventName ){
                    dom[eventName] =  attrValue
                 }else{
                    dom.setAttribute(attrName,attrValue)
                 }

            }
    }



}


export default VisionDom