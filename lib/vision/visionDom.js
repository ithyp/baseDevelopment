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
        console.log()
        if(out && out.tagName.toLocaleLowerCase() === vo.nodeName){
            out =  this.createEle(vo.tag);
            this.appendChildren(out, oldView.childNodes);
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
            this.setElementAttr(out,vo);       

            let nChild = vo.children, nChildLen = nChild.length, min= 0;
            if(nChildLen){
                  for(let nChildItem  in nChild){
                      let child = null,nChildDom = nChild[nChildItem]
                      if(child = oChildKey[nChildDom.attrs.key]){
                         oChildKeyLen--
                      }
                      if(!child){
                             
                          for(let i = min;  i < oChildLen; ++i){
                               let oc =   oChild[i]
                                if( this.isSameNodeType( oc ,nChildDom )){
                                    child = oc
                                    oChild[i] = null;
                                    if (j===oChildLen-1) oChildLen--;
                                    if (j===min+1) min++;
                                    break;
                                }
                          }
                      }
                      child = this.getRealDom(null, vchild,child);

                      if (out.childNodes[i]!==child) {
                            next = out.childNodes[i+1];
                        if (next) {
                            out.insertBefore(child, next);
                        }
                        else {
                            out.appendChild(child);
                        }
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



    setElementAttr(dom,{attrs}){
           let oAttr = dom.__beforeAttr  || {}
           let nAttrs = Object.assign(JSON.parse(JSON.stringify(oAttr)), attrs);
           for(let attrName  in oAttr){
                  if(!(attrName in attrs)){
                    nAttrs[attrName] = "";
                  }
           }
           attrs =  nAttrs
            for(let item in attrs){
                 let attrName = item.toLocaleLowerCase();
                 let attrValue = attrs[item];
                 let eventName = this.isDomEvent(dom,attrName);
                 if( eventName ){
                     if(oAttr[item] !=  attrValue)
                        dom[eventName] =  attrValue
                 }else{
                    if(oAttr[item] !=  attrValue)
                    dom.setAttribute(attrName,attrValue)
                 }

            }
            dom["__beforeAttr"] =  attrs
            
    }



}


export default VisionDom