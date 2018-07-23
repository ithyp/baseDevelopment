class VisionTools {
     //是否是元素节点
     static isElemnet(dom){
        return typeof  dom === "object" &&  dom.nodeType === 1
     }
    //是否是字符串
     static isString(dom){
        return typeof  dom === "string"
     }   
}

export default VisionTools