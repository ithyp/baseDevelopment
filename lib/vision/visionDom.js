import VisionTools from './visionTools'

class  VisionDom extends VisionTools  {
    static createElement(tag,attrs,...children){

        return {
            tag,
            attrs,
            children
        }      

    }

    static setElementAttr(dom,attr){
            for(let key in attr){
                 dom[key]  =   attr[key];
            }
    }



}


export default VisionDom