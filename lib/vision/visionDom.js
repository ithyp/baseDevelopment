import VisionBase  from './visionBase'

class  VisionDom extends VisionBase  {
    static createElement(tag,attrs,...children){

        return {
            tag,
            attrs,
            children
        }      

    }
     getRealDom(parent,virtualObject,realView){
        // console.log(virtualObject,realView)
        let vo = this.isObject(virtualObject.tag) ?  virtualObject.tag :  virtualObject; 
        let current = null;
        
         if(this.isObject(vo)){
             if(this.isString(vo.tag)){
                // current =  document.createElement(vo.tag);
                current = this.diff(realView,vo);
                this.setElementAttr(current,vo.attrs);       
             }else if(this.isFunction(vo.tag)){
                //isFunctionComponent
                //isClassComponent 判断操作

                // console.log(this.isClassComponent(vo.tag),vo.attrs,'======================================')
                current =  this.createComponent(vo.tag,vo.attrs)
                    // console.log(vo.tag,'======================')
             }
         }else {
            current =  this.createText(vo)
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

         //新旧dom对比
    diff(oldView,vo){
        let out =  oldView
        console.log(vo)
        if(out && out.toLocaleLowerCase() === vo.nodeName){
            out =  this.createEle(vo.tag);
            appendChildren(out, oldView.childNodes);
        }else 
            out =  this.createEle(vo.tag);
        
        let oChild,
            oChildKey,

            oChildCountLen =  out.childNodes.len ,
            oChildLen =  0,
            oChildKeyLen = 0,
            i = 0
        
            if (oChildCountLen) {
                oChild = [];
                for ( ; i<len; i++) {
                    let child = out.childNodes[i],
                        key =  child._component && child._component.props && child._component.props.key;
                    if (key) {
                        if (!oChildKey) oChildKey = {};
                        oChildKey[key] = child;
                        oChildKeyLen++;
                    }
                    else {
                        oChild[oChildLen++] = child;
                    }
                }
            }

            return out
            
    //     }else if(_old_.tagName.toLocaleLowerCase() == _new_.tag){

    
    //     }
    //     for(let  item in  _old_.children){
    //         this.diff( _old_.children[item], _new_.children || _new_.children[item])
    //     }

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