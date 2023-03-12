
import { InputForm } from '../InputForm';
import { Header, Footer, Card } from '../../components'
import useDrawBinaryTree from './useDrawBinaryTree';
import './App.css'
function App() {

  const { handleInputOnChange, inputValue } = useDrawBinaryTree()

  return (
    <div className="container">
      <Header />
      <Card>
        <InputForm placeholder="Enter the input... (ex. Ali Taghi Naghi Gholi)" inputValue={inputValue} handleInputOnChange={handleInputOnChange} />
        <canvas id="treeCanvas" width="1000" height="900" className='tree-canvas' >
        </canvas>
      </Card>
      <Footer />
    </div>
  );
}

export { App }