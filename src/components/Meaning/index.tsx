type MeaningType = {
  children: React.ReactNode
}

function Meaning({children}: MeaningType) {
  return (
    <div>
      <h2>Meaning</h2>
      <ul>
        {children}
      </ul>
    </div>
  )
}

export default Meaning