import SheetView from './Views/SheetView'
import HomeView from  './Views/HomeView'

const routes = [
    {
        path: '/:sheetID',
        component: SheetView,
        exact: true
    },
    {
        path: '/',
        component: HomeView,
        exact: true
    }
]
export default routes;
