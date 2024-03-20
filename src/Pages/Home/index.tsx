import './styles.scss'
import {useNavigate} from "react-router-dom";
import Main from "../../Layouts/Main";
import './styles.scss'

function Index() {
  const navigate = useNavigate()

  return (
    <Main>
      <section className='routes'>
        <div className="route" onClick={() => navigate('/fast-test')}>
          <h3>Fast Tests</h3>
        </div>
      </section>
    </Main>
  )
}

export default Index
