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
        let vo = this.isObject(virtualObject.tag) ?  virtualObject.tag :  virtualObject; 
        let current = null;
        
        if(this.isObject(vo)){
            if(this.isString(vo.tag))
            current = this.diff(realView,vo);
            else if(this.isFunction(vo.tag))
            current =  this.createComponent(vo.tag,vo.attrs)      
        }
        else{
            // console.log(virtualObject,realView)
            if (realView) {
                let type = realView.nodeType;
                if (type===3) {
                    realView.textContent =  virtualObject
                    return realView;
                }
                else if (type===1) {
                    realView.parentNode.removeChild(realView);
                }
            }
            current =  this.createText(vo);


        }
        return  current
     }

         //新旧dom对比
    diff(oldView,vo){
        let out =  oldView
        if(out && out.tagName.toLocaleLowerCase() !== vo.tag){
            out =  this.createEle(vo.tag);
            this.appendChildren(out, oldView.childNodes);
        }else if(!out)
            out =  this.createEle(vo.tag);
        
        let oChild,
            oChildKey,

            oChildCountLen =  out.childNodes.length ,
            oChildLen =  0,
            oChildKeyLen = 0,
            i = 0
            if (oChildCountLen) {
                oChild = [];
                for ( ; i<oChildCountLen; i++) {
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
                  for(let k  in nChild){
                      let child = null,nChildDom = nChild[k]
                      if( nChildDom.attrs && nChildDom.attrs.key && (child = oChildKey[nChildDom.attrs.key] )){
                         delete oChildKey[nChildDom.attrs.key];
                         oChildKeyLen--
                      }
                    //   console.log(child,oChildLen);
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

                      child = this.getRealDom(null, nChildDom,child);
                       
                      if (out.childNodes[k]!==child) {
                        let    next = out.childNodes[k+1];
                        if (next) {
                            out.insertBefore(child, next);
                        }
                        else {
                            out.appendChild(child);
                        }
                    }
                  }
            }
            
               
            for(let key  in oChildKey){
                oChild[oChildLen++] = oChildKey[key];
            }

            for(let i=min;i<oChildLen;++i){
                 let oc =  oChild[i];
                 if(oc){
                      oc.parentNode.removeChild(oc)
                 }
            }


            
            return out


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