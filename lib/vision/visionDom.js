import VisionBase  from './visionBase'

class  VisionDom extends VisionBase  {
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

                // console.log(this.isClassComponent(vo.tag),vo.attrs,'======================================')
                current =  this.createComponent(vo.tag,vo.attrs)
                    // console.log(vo.tag,'======================')
             }
         }else {
            current = document.createTextNode(vo)
         }

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