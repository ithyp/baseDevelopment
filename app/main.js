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

    view(){
        return <table border="1">
                    <tr>
                        <th>Month</th>
                        <th>Savings</th>
                    </tr>
                    <tr>
                        <td>January</td>
                        <td>$100</td>
                    </tr>
                </table>
    }
    options(){
        return {
            props:{

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
           <EleClass></EleClass>
     </section>

     , document.getElementById("app")
    ); 