import Vision from '../lib/vision/vision'
 
 let Ele = <div>你好，世界!</div>;
let a = "11"


class EleClass{
    constructor(props){
            this.a = 1;
    }
    view(){
        return <div>
            <h1>
             hello world!{this.num}
            </h1>
            <button Click={this.setName.bind(this)}>增加</button>
        </div>
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

   
            <EleClass name="123456"  age="15" ></EleClass> 

     , document.getElementById("app")
    ); 