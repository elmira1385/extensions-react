import ExtentionList from "./components/ExtentionList"
import Header from "./components/Header"
import Items from "./components/Items"



function App() {
  

  return (
    <div className="flex flex-col gap-10">
    <Header/>
    <ExtentionList/>
    <Items/>
    </div>
  )
}

export default App
