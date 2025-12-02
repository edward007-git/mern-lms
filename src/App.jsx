import React from 'react'

const App = () => {
  return (
    <div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />   


      </Routes>

    </div>
  )
}

export default App