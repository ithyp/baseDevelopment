import Vision from '../lib/vision/vision'
 
 let Ele = <div>你好，世界!</div>;
let a = "11"


class EleClass{
    constructor(props){
            this.a = 1;
    }
    view(){
        return <section>
            <div>

            {this.num}321321

            </div>
            <span>21321321</span>
            <button Click={this.setName.bind(this)}>点击事件</button>
        </section>
    }
    style(){
        return {

        }
    }
    options(){
        return {
            props:{
            },
            data:{
                num:1
            },
            methods:{
                setName(){
                   this.num++;
                }
            },
            computed:{

            },
            watch:{

            }
        }
    } 
}


   new Vision(

     <section >
         <div></div>
           {/* <h1>Hello,World!</h1>
           <Ele></Ele>
           <EleFn a="小白"></EleFn> 
           <EleClass name="yoopig"  age="15" ></EleClass> */}
            <EleClass name="123456"  age="15" ></EleClass> 
     </section>

     , document.getElementById("app")
    ); 