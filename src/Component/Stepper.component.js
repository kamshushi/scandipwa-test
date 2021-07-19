import {PureComponent} from 'react'
import '../styles/stepper.css'
class Stepper extends PureComponent{
    constructor(props){
        super(props) 
      
        this.firstBullet= React.createRef()
        this.secBullet= React.createRef()
        this.thirdBullet= React.createRef()
        this.fourthBullet= React.createRef()

    }

    static defaultProps= {
        current: 1
    }
    renderStepper= ()=>{
        const {current} = this.props
        return (
            <section className='stepper-bar'>
            <div className='step'>
                <div ref={this.firstBullet} className='bullet active'>
                    <span>1</span>
                    <div className='check'>✓</div>
                </div>
            </div>
            <div class='step'>
                <div ref={this.secBullet} className={`bullet ${current === 2 ? 'active': current === 3 ? 'active':''}`}>
                    <span>2</span>
                    <div className='check'>✓</div>
                </div>
                <p>Shipping</p>
            </div>
            <div class='step'>
                <div ref={this.thirdBullet} className={`bullet ${current === 3&& 'active'}`}>
                    <span>3</span>
                    <div className='check'>✓</div>
                </div>
                <p>Review & payment</p>
            </div>
            <div>
            </div>
    </section>
        )
    }
    render(){
        const {current}= this.props
        return this.renderStepper()
    }
}

export default Stepper