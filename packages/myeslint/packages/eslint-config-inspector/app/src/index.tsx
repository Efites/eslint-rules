import {ReactFlowProvider} from '@xyflow/react'
import App from './App.tsx'
import {createRoot} from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'


createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <ReactFlowProvider>
            <App />
        </ReactFlowProvider>
    </BrowserRouter>
)
