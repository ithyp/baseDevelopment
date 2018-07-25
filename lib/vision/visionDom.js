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
            current = document.createElement(vo.tag);
            this.setElementAttr(current,vo.attrs);

         }else if(this.isString(vo)){
            current = vo
         }
         
         if(virtualObject.children.length){

         }
         return  current
         console.dir(current,'是一个对象')

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