import Vision from '../lib/vision/vision'
 
 let Ele = <div>你好，世界!</div>;
let a = "11"


 function EleFn(props){
    this.num = 123456;
    return  (<ul>
                <li>{this.num}</li>
   
          </ul>)
  }

class EleClass{
    constructor(props){
            this.a = 1;
    }
    view(){
        return <table border="1">
                   321321321
                    <tr>
                        <th Click={ ()=>{this.setName()}}>{this.name}</th>
                        <th>{this.co}</th>
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
                name:1,
                age:1
            },
            data:{
                co:1
            },
            methods:{
                setName(){
                   
                   console.log( this.co++ ,this.age++);
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
           {/* <h1>Hello,World!</h1>
           <Ele></Ele>
           <EleFn a="小白"></EleFn> 
           <EleClass name="yoopig"  age="15" ></EleClass> */}
            <EleClass name="yoopig"  age="15" ></EleClass> 
     </section>

     , document.getElementById("app")
    ); 