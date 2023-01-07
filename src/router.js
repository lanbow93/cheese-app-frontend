import {createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'
import App from './App.js'
import Index from './pages/Index.js';
import Show from './pages/Show.js';
import { cheeseLoader, cheesesLoader } from './loaders.js';
import { createAction, updateAction } from './actions.js';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App />}>
            <Route path='' element={<Index/>} loader={cheesesLoader} />
            <Route path=':id' element={<Show/>} loader={cheeseLoader} />
            <Route path='create' action={createAction}/>
            <Route path='update/:id' action={updateAction} />
            <Route path='delete/:id' />

        </Route>    
    )
)

export default router;