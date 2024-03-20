import './'
import Header from "../../Layouts/Header";
import Footer from "../../Layouts/Footer";
import {ReactChild, ReactChildren} from "react";

function Index({children}: ReactChild | ReactChildren) {

  return (
    <div className='main'>
      <Header/>

      <main>
        {children}
      </main>


      <Footer/>
    </div>
  )
}

export default Index;
