import React, { useState } from "react";

const Techscreen=()=>{


    const[tab, setTab]=useState(1);

   return(
    <div>
    <div>
        <h2><span>Our Technology</span> Stack</h2>
        <p>When you hire developers from Technoloader, you can install the latest technological advancements in your business. Our skilled professionals know how to work with the best available technologies in market to reward your venture with the competitive advantage. We are offering the reliable and innovative network solution built with unique features and diverse technologies.</p>
    </div>
    <div>
    <ul class="nav nav-tabs">
        <li class="nav-item">
              <a href="#" onClick={(()=>setTab(1))}> <img  id='tab1' class="nav-link active" src="../images/Blockchain/blockchain.png" onClick={(()=>setTab(1))}/> </a> 
        </li>
        <li class="nav-item">
      <a href="#" onClick={(()=>setTab(2))}>  <img id='tab2' class="nav-link" src="../images/tab2.png" /> </a>
        </li>
        <li class="nav-item">
        <a href="#" onClick={(()=>setTab(3))}><img id="tab3" class="nav-link " src="../images/tab3.png" /></a>
        </li>
        <li class="nav-item">
       <a href="#" onClick={(()=>setTab(4))} ><img id="tab4" class="nav-link" src="../images/tab4.png" /></a>
        </li>
    </ul>

    

    </div>
</div>
   )
}
export default Techscreen;
