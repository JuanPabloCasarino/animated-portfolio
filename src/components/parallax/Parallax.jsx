import './parallax.scss'

const Parallax = ({type}) => {
return (
<div className='parallax' style={{
        background:type==='skills'
        ? 'linear-gradient(180deg, #F2E8DF,#e6c8af )'
        :'linear-gradient(180deg, #F2E8DF,#b99b83 )',}}>
    <h1>{type==='skills'? 'What we Do':"What We Did?"}</h1>
    <div className="sunset"></div>
</div>
)
}

export default Parallax