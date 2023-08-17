
const Card = ({className , children}) => {
  return (
    <section className={`card ${className}  px-4 pt-5 mt-[5rem] `}>
      {children}
    </section>
  )
}

export default Card