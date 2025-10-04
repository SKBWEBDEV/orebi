import Container from "../Layouts/Container"
import Light from '../../assets/light.png'
import Watch from '../../assets/watch.png'
import Glass from '../../assets/glass.png'

const Picture = () => {
  return (
    <div>
      <div className="bg-[rgb(229,231,235)] hidden md:block w-full h-0.5"></div>
      <Container>
         <div className="md:flex gap-9 mt-10">
          <div className="md:w-40%"><img src={Light} alt="" /></div>
          <div className="md:w-30% mt-9 md:mt-0">
            <img src={Watch} alt="" />
            <img className="mt-8 " src={Glass} alt="" />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Picture