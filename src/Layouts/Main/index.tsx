import './'
import Header from "../../Layouts/Header";
import Footer from "../../Layouts/Footer";

function Index({children}:any) {

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
