import Footer from '@/components/Footer'
import 'semantic-ui-css/semantic.min.css'
import { List , Button, Icon} from 'semantic-ui-react'


export default function Home() {
  return (
    <main className="home-main">
      <header className="home-header">
        <h1>  Salt Alumni Board </h1>
      </header>
      <div className="home-body-container">
        <div className="home-content-wrap">
          <div className="home-department-container">
            <div className="home-department-box">
              <Button className="home-department-btn" href="/reviews" size="massive" color="orange"> <Icon name='code'/> Go to Board </Button>
            </div>
          </div>
        </div>
       <Footer />
      </div>
    </main>
  )
}
