import Vision from '../lib/vision/vision'
 
 let Ele = <div>你好，世界!</div>;



 function EleFn(props){
    return (<ul>
                <li>{props.a}</li>
                <li>小红</li>
                <li>小绿</li>
                <li>小蓝</li>
          </ul>)
  }

class EleClass{
    constructor(props){
            console.log(121232,props );
            this.a = 1;
    }
    view(){
        return <table border="1">
                    <tr>
                        <th>{this.name}</th>
                        <th>Savings</th>
                    </tr>
                    <tr>
                        <td>{this.age}</td>
                        <td>$100</td>
                    </tr>
                </table>
    }
    style(){
        return {

        }
    }
    options(){
        return {
            props:{
                name:"默认属性",
                age:1
            },
            data:{
                
            },
            methods:{

            },
            computed:{

            },
            watch:{

            }
        }
    } 
}


   new Vision(

     <section  Click={()=>{ console.log("事件点击")}}>
           {/* <h1>Hello,World!</h1>
           <Ele></Ele>
           <EleFn a="小白"></EleFn> */}
           <EleClass name="yoopig"  age="15" ></EleClass>
     </section>

     , document.getElementById("app")
    ); 